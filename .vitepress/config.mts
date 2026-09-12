import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NextBep',
  description: 'BepInEx modding framework for Android',
  
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/getting-started' },
          { text: 'Projects', link: '/projects/bepinex-android' },
          { text: 'Privacy', link: '/privacy' },
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
                { text: 'Installation', link: '/guide/installation' },
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'Settings', link: '/guide/settings' },
                { text: 'Modpack Management', link: '/guide/modpacks' },
                { text: 'Configuration', link: '/guide/configuration' },
                { text: 'Crash Detection', link: '/guide/crash-detection' },
                { text: 'Log Viewer', link: '/guide/log-viewer' },
                { text: 'Translations', link: '/guide/translations' },
                { text: 'Troubleshooting', link: '/guide/troubleshooting' },
                { text: 'FAQ', link: '/guide/faq' },
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
        footer: {
          message: 'Released under the GPL-3.0 License.',
          copyright: '© 2026 NextBep'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/getting-started' },
          { text: '项目', link: '/zh/projects/bepinex-android' },
          { text: '隐私政策', link: '/zh/privacy' },
          {
            text: '链接',
            items: [
              { text: 'GitHub', link: 'https://github.com/NextBep' },
              { text: 'BepInEx.Android', link: 'https://github.com/NextBep/BepInEx.Android' },
              { text: '启动器', link: 'https://github.com/NextBep/BepInEx.Android.Launcher' },
            ]
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '指南',
              items: [
                { text: '安装', link: '/zh/guide/installation' },
                { text: '快速开始', link: '/zh/guide/getting-started' },
                { text: '设置', link: '/zh/guide/settings' },
                { text: '整合包管理', link: '/zh/guide/modpacks' },
                { text: '配置', link: '/zh/guide/configuration' },
                { text: '崩溃检测', link: '/zh/guide/crash-detection' },
                { text: '日志查看器', link: '/zh/guide/log-viewer' },
                { text: '翻译指南', link: '/zh/guide/translations' },
                { text: '故障排查', link: '/zh/guide/troubleshooting' },
                { text: '常见问题', link: '/zh/guide/faq' },
              ]
            }
          ],
          '/zh/projects/': [
            {
              text: '项目',
              items: [
                { text: 'BepInEx.Android', link: '/zh/projects/bepinex-android' },
                { text: '启动器', link: '/zh/projects/launcher' },
                { text: '运行时', link: '/zh/projects/runtime' },
              ]
            }
          ]
        },
        footer: {
          message: '基于 GPL-3.0 许可证发布',
          copyright: '© 2026 NextBep'
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NextBep' }
    ],
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
