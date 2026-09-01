# Stamps each page with the date its own source file last changed in git.
#
# Why not the jekyll-last-modified-at gem: it hooks every Document the sitemap
# touches, including al-folio's synthetic "external posts", which have no file
# on disk — the build dies with Errno::ENOENT. This only walks site.pages and
# skips anything without a real file.
#
# Why not site.time / the built-in `last_updated` config flag: that renders the
# BUILD time into every page, so a page untouched for a year would still claim
# to be current. The point of the stamp is to be honest about staleness.
#
# Requires full git history — see fetch-depth: 0 in .github/workflows/deploy.yml.
module BenningLab
  class GitLastUpdated < Jekyll::Generator
    priority :low

    def generate(site)
      return unless git_repo?(site.source)

      site.pages.each do |page|
        next if page.path.nil?
        full = File.join(site.source, page.path)
        next unless File.exist?(full)

        date = git_date(site.source, full)
        page.data['git_updated'] = date unless date.nil? || date.empty?
      end
    end

    private

    def git_repo?(dir)
      Dir.chdir(dir) { system('git rev-parse --is-inside-work-tree', out: File::NULL, err: File::NULL) }
    rescue StandardError
      false
    end

    # ISO-8601 committer date of the most recent commit touching this file.
    def git_date(source, file)
      Dir.chdir(source) do
        out = IO.popen(['git', 'log', '-1', '--format=%cI', '--', file], err: File::NULL, &:read)
        out.to_s.strip
      end
    rescue StandardError
      nil
    end
  end
end
