import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Ripple Router Documentation Website",
  description: "The documentation website made for Ripple Router",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Advanced Topics', link: '/advanced-topics' },
          { text: 'Examples', link: '/examples' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'API Reference', link: '/api-reference' },
          { text: 'Internals', link: '/internals' },
          { text: 'FAQ', link: '/faq' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/WebEferen/ripple-router' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
              { text: 'Getting Started', link: '/getting-started' },
              { text: 'Advanced Topics', link: '/advanced-topics' },
              { text: 'Examples', link: '/examples' }
        ]
      },
      {
        text: 'Reference',
        items: [
              { text: 'API Reference', link: '/api-reference' },
              { text: 'Internals', link: '/internals' },
              { text: 'FAQ', link: '/faq' }
        ]
      }
    ],
    search: { 
      provider: 'local'
    }
  }
})
