module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // medium-zoom is loaded from a CDN and adds these classes at runtime, so they
  // appear in no local file and purgecss would otherwise strip the rules for them.
  safelist: {
    standard: [/^medium-zoom/],
  },
};
