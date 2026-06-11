import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Grimoire',
  description: 'Self-hosted TTRPG library manager — documentation',
  base: '/grimoire/',
  ignoreDeadLinks: [/^http:\/\/localhost/],

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/grimoire/favicon.png' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Grimoire',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Configuration', link: '/configuration/env-vars' },
      { text: 'Deployment', link: '/deployment/docker-compose' },
      { text: 'Compose Generator', link: '/compose-generator' },
      { text: 'API', link: '/api' },
      { text: 'FAQ', link: '/faq' },
      { text: 'GitHub', link: 'https://github.com/hunter-read/grimoire' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Quick Start', link: '/guide/getting-started' },
            { text: 'Docker Install Guide', link: '/guide/docker-install' },
            { text: 'Library Structure', link: '/guide/library-structure' },
            { text: 'Tags', link: '/guide/tags' },
            { text: 'OPF Metadata', link: '/guide/opf-metadata' },
          ],
        },
        {
          text: 'Features',
          items: [
            { text: 'Reader', link: '/guide/reader' },
            { text: 'Search', link: '/guide/search' },
            { text: 'Campaigns', link: '/guide/campaigns' },
            { text: 'OPDS', link: '/guide/opds' },
            { text: 'User Roles', link: '/guide/user-roles' },
          ],
        },
        {
          text: 'Authentication',
          items: [
            { text: 'OpenID Connect', link: '/guide/oidc' },
            { text: 'Authentik Setup', link: '/guide/oidc-authentik' },
          ],
        },
      ],
      '/configuration/': [
        {
          text: 'Configuration',
          items: [
            { text: 'Environment Variables', link: '/configuration/env-vars' },
            { text: 'Volumes', link: '/configuration/volumes' },
            { text: 'Pre-seeding Users', link: '/configuration/users' },
            { text: 'Performance', link: '/configuration/performance' },
          ],
        },
      ],
      '/deployment/': [
        {
          text: 'Deployment',
          items: [
            { text: 'Docker Compose', link: '/deployment/docker-compose' },
            { text: 'File Management', link: '/deployment/file-management' },
            { text: 'Reverse Proxy', link: '/deployment/reverse-proxy' },
            { text: 'Updating', link: '/deployment/updating' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hunter-read/grimoire' },
      { icon: 'docker', link: 'https://hub.docker.com/r/hunterreadca/grimoire' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Released under the GNU GPL v3.0 License.',
      copyright: 'Grimoire — Self-Hosted TTRPG Library Manager',
    },

    editLink: {
      pattern: 'https://github.com/hunter-read/grimoire/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
