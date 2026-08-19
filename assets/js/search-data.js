// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-principles",
          title: "principles",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/principles/";
          },
        },{id: "nav-updates",
          title: "updates",
          description: "Lab news and photos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/updates/";
          },
        },{id: "nav-join",
          title: "join",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-rapid-adaptation-to-herbicide-in-ragweed",
          title: 'Rapid adaptation to herbicide in ragweed',
          description: "Tracking the origin and spread of herbicide resistance in Ambrosia artemisiifolia",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aa-herbicide/";
            },},{id: "projects-congener-community-network-genomics",
          title: 'CONGENER — community network genomics',
          description: "A multi-institution effort linking within-species genomic variation to ecosystem resilience",
          section: "Projects",handler: () => {
              window.location.href = "/projects/congener/";
            },},{id: "projects-biotic-interactions-and-range-limits",
          title: 'Biotic interactions and range limits',
          description: "How herbivory, mutualism, and soil microbes shape where a plant can persist",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cx-bioticlimits/";
            },},{id: "projects-gene-flow-at-a-range-edge",
          title: 'Gene flow at a range edge',
          description: "A field experiment testing whether gene flow rescues or swamps marginal populations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cx-crosstypes/";
            },},{id: "projects-long-term-clarkia-demography",
          title: 'Long-term Clarkia demography',
          description: "Two decades of population dynamics across the Clarkia xantiana range",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cx-demography/";
            },},{id: "projects-the-genetic-architecture-of-adaptation-in-clarkia",
          title: 'The genetic architecture of adaptation in Clarkia',
          description: "Line-cross experiments to dissect the architecture of fitness differences across populations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cx-linecross/";
            },},{id: "projects-clarkia-reference-genomes",
          title: 'Clarkia reference genomes',
          description: "Trio-binned reference assemblies for two Clarkia xantiana subspecies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cx-ref/";
            },},{id: "projects-clarkia-in-space-and-time",
          title: 'Clarkia in space and time',
          description: "Population genomics of contemporary adaptation across a species&#39; range",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cx-spacetime/";
            },},{id: "projects-microbial-range-expansions",
          title: 'Microbial range expansions',
          description: "Experimental evolution of E. coli across spatially and temporally varying environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ecoli-evo/";
            },},{id: "projects-demography-and-genomics-of-fringed-gentian",
          title: 'Demography and genomics of fringed gentian',
          description: "Why is a once-common wildflower disappearing across the northeastern US?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gc-demogenetics/";
            },},{id: "projects-theory-and-simulation",
          title: 'Theory and simulation',
          description: "Lorem ipsum",
          section: "Projects",handler: () => {
              window.location.href = "/projects/modeling/";
            },},{id: "projects-evolution-during-invasion-in-common-tansy",
          title: 'Evolution during invasion in common tansy',
          description: "Phenotypic and genomic divergence between native and invasive Tanacetum vulgare",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tancom/";
            },},{id: "projects-experimental-range-expansions-in-tribolium",
          title: 'Experimental range expansions in Tribolium',
          description: "Testing range-limit theory with replicate evolving flour-beetle landscapes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tc-rangelimits/";
            },},{id: "updates-benning-lab-is-starting-at-cornell-eeb-sparkles-smile",
          title: 'Benning Lab is starting at Cornell EEB! :sparkles: :smile:',
          description: "",
          section: "Updates",},{id: "updates-new-paper-out-in-proc-roy-soc-b-confounding-fuels-misinterpretation-in-human-genetics-with-jedidiah-carlson-olivia-smith-ruth-shaw-and-arbel-harpak",
          title: 'New paper out in Proc. Roy. Soc. B: Confounding fuels misinterpretation in human...',
          description: "",
          section: "Updates",},{id: "updates-our-team-was-invited-to-submit-a-full-proposal-to-the-simons-collaborations-in-ecology-and-evolution-program-congener-community-network-genomics-of-ecosystem-resilience-with-13-pis-across-cornell-ucsc-uci-and-berkeley",
          title: 'Our team was invited to submit a full proposal to the Simons Collaborations...',
          description: "",
          section: "Updates",},{id: "updates-anna-cohen-joins-the-lab-as-our-first-lab-manager",
          title: 'Anna Cohen joins the lab as our first lab manager',
          description: "",
          section: "Updates",},{id: "updates-welcome-to-maddie-ore-postdoc-and-ella-mancino-research-specialist-60-40-split-with-the-agrawal-lab-both-joining-the-lab-today",
          title: 'Welcome to Maddie Ore (postdoc) and Ella Mancino (research specialist, 60/40 split with...',
          description: "",
          section: "Updates",},{id: "updates-june-in-california-for-the-clarkia-field-season-and-sean-s-find-at-the-ranch",
          title: 'June in California for the Clarkia field season — and Sean’s find at...',
          description: "",
          section: "Updates",},{id: "updates-john-is-co-hosting-with-erik-enbody-a-5-day-slim-evolutionary-modeling-workshop-at-cornell-oct-5-9-2026-taught-by-slim-s-architect-ben-haller-free-30-seats-registration-is-open-and-one-fully-funded-travel-scholarship-is-available",
          title: 'John is co-hosting (with Erik Enbody) a 5-day SLiM Evolutionary Modeling Workshop at...',
          description: "",
          section: "Updates",},{id: "updates-joanie-cha-the-lab-s-first-phd-student-joins-the-lab-they-re-working-with-us-for-a-month-before-grad-school-starts",
          title: 'Joanie Cha, the lab’s first PhD student, joins the lab — they’re working...',
          description: "",
          section: "Updates",},{id: "updates-farewell-and-thank-you-to-anna-cohen-our-first-lab-manager-whose-last-day-is-today-anna-built-this-lab-from-an-empty-room-we-ll-miss-her",
          title: 'Farewell and thank you to Anna Cohen, our first lab manager, whose last...',
          description: "",
          section: "Updates",},{id: "updates-lab-dinner-sending-off-anna-cohen",
          title: 'Lab dinner, sending off Anna Cohen.',
          description: "",
          section: "Updates",},{id: "updates-checking-out-the-darling-carnivorous-aquatic-local-utricularia-bladderwort",
          title: 'Checking out the darling carnivorous aquatic local, Utricularia (bladderwort).',
          description: "",
          section: "Updates",},{id: "updates-new-preprint-expansion-load-reduces-fitness-at-the-range-margin-of-an-invasive-plant-with-ryan-briscoe-runquist-and-dave-moeller-across-a-150-year-invasion-chronosequence-in-common-tansy-drift-not-adaptation-dominates-range-edge-populations-carry-expansion-load-and-show-reduced-fitness",
          title: 'New preprint: Expansion load reduces fitness at the range margin of an invasive...',
          description: "",
          section: "Updates",},{id: "updates-todd-bittner-gave-john-a-tour-of-the-native-lawn-test-plots-at-cornell-botanic-gardens",
          title: 'Todd Bittner gave John a tour of the native lawn test plots at...',
          description: "",
          section: "Updates",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
