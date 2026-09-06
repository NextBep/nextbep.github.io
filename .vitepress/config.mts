import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NextBep',
  description: 'BepInEx modding framework for Android',
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Projects', link: '/projects/bepinex-android' },
      {
        text: 'Links',
        items: [
          { text: 'GitHub', link: 'https://github.com/NextBep' },
          { text: 'BepInEx.Android', link: 'https://github.com/NextBep/BepInEx.Android' },
          { text: 'Launcher', link: 'https://github.com/NextBep/BepInEx.Android.Launcher' },
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Modpack Management', link: '/guide/modpacks' },
            { text: 'Configuration', link: '/guide/configuration' },
            { text: 'Translations', link: '/guide/translations' },
            { text: 'Troubleshooting', link: '/guide/troubleshooting' },
          ]
        }
      ],
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'BepInEx.Android', link: '/projects/bepinex-android' },
            { text: 'Launcher', link: '/projects/launcher' },
            { text: 'Runtime', link: '/projects/runtime' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NextBep' }
    ],

    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: '© 2026 NextBep'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/NextBep/nextbep.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Last updated',
    },

    outline: {
      label: 'On this page',
      level: [2, 3]
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode',
  },

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    lineNumbers: true
  }
})
