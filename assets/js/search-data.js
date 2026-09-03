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
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
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
          section: "Updates",},{id: "updates-lab-dinner-sending-off-anna-cohen",
          title: 'Lab dinner, sending off Anna Cohen.',
          description: "",
          section: "Updates",},{id: "updates-farewell-and-thank-you-to-anna-cohen-our-first-lab-manager-whose-last-day-is-today-anna-built-this-lab-from-an-empty-room-we-ll-miss-her",
          title: 'Farewell and thank you to Anna Cohen, our first lab manager, whose last...',
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
          section: "Updates",},{id: "updates-the-fall-semester-is-under-way-and-we-re-excited-for-our-undergraduate-researchers-nia-emma-sean-and-ari-to-start-helping-out-on-lab-projects-john-is-co-teaching-two-courses-this-term-bioee-1780-cornell-s-introductory-course-in-evolutionary-biology-and-a-new-graduate-seminar-agentic-ai-in-ecology-amp-amp-evolutionary-biology-with-xiangtao-xu-the-seminar-is-a-hands-on-and-skeptical-look-at-agentic-ai-as-it-relates-to-eeb-where-we-will-discuss-the-possible-futures-of-eeb-in-a-world-with-widespread-capable-ai",
          title: 'The fall semester is under way, and we’re excited for our undergraduate researchers...',
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
