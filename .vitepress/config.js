import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SOUL.lock',
  description: 'AI-Powered Business Platform',
  base: '/soul-lock/',
  lang: 'ja',
  themeConfig: {
    nav: [
      { text: 'Message', link: '/message' },
      { text: 'Profile', link: '/profile' },
      { text: 'Contact', link: '/contact' },
    ],
    sidebar: {
      '/features/': [
        {
          text: 'Features',
          items: [
            { text: 'Overview', link: '/features/' },
          ]
        }
      ]
    },
    socialLinks: []
  }
})
