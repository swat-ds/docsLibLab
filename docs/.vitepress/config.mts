import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docsLibLab/',
  srcDir: './src',
  title: "LibLab.Docs",
  description: "LibLab Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/GettingStarted/introduction' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Introduction', link: '/GettingStarted/introduction' },
          { text: 'Apps and Equipment', link: '/GettingStarted/equipment' },
          { text: 'Course Usage', link: '/GettingStarted/course-usage' },
        ]
      },

      {
        text: 'Getting Started',
        items: [
          { text: 'Accessing Equipment', link: '/GettingStarted/getting-started' }
        ]
      },

      {
        text: 'Resources',
        items: [
          { text: 'Adobe Aero', link: '/Resources/AdobeAero/adobe-aero' },
          { text: '3D Printing', link: '/Resources/Makerspace/makerspace' },
          { text: 'Linkedin Learning', link: '/Resources/LinkedinLearning/linkedinLearning' },
          { text: 'SketchFab', link: '/Resources/SketchFab/sketchfab' },
          {
            text: 'Spatial.io',
            link: '/Resources/Spatial-io/spatial-io',
            items: [ { text: 'Quick Start', link: '/Resources/Spatial-io/tutorial' } ]
          }
        ] 
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ahmad-fayyaz/docsLibLab' }
    ]
  },
})

