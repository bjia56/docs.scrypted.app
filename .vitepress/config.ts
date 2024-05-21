import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: 'Scrypted Docs',
  head: [
    ['link', { rel: 'icon', href: '/img/icons/apple-icon-180.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icons/apple-icon-180.png' }],
    ['link', { rel: 'mask-icon', href: '/img/icons/safari-pinned-tab.svg', color: '#3a0839' }],
    ['link', { rel: 'shortcut icon', href: '/img/icons/favicon-196.png' }],
  ],
  description: 'Video Integration Platform',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/koush/docs.scrypted.app/edit/main/:path'
    },
    logo: '/img/logo.png',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Scrypted', link: '/' },
      { text: 'Scrypted NVR', link: '/scrypted-nvr/' },
      { text: 'Installation', link: '/installation' },
      { text: 'Download', link: '/desktop-application' },
      { text: 'Camera Setup', link: '/camera-preparation' },
      { text: 'Buyer\'s Guide', link: '/buyers-guide/' },
      { text: 'Scripts', link: 'https://scripts.scrypted.app' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'What is Scrypted?', link: '/' },
          { text: 'System Requirements', link: '/server-hardware' },
          { text: 'Installation', link: '/installation' },
        ]
      },
      {
        text: 'Camera Setup',
        items: [
          { text: 'Camera Configuration', link: '/camera-preparation' },
          { text: 'Add Camera to Scrypted', link: '/add-camera' },
          { text: 'Camera Verification', link: '/camera-verification' }
        ]
      },
      {
        text: 'Plugins and Platforms',
        items: [
          { text: 'What are Plugins?', link: '/platforms' },
          { text: 'HomeKit', link: '/homekit' },
          { text: 'Google Home', link: '/google-home' },
          { text: 'Alexa', link: '/alexa' },
          { text: 'Home Assistant', link: '/home-assistant' },
        ]
      },
      {
        text: 'Scrypted NVR',
        items: [
          { text: 'What is Scrypted NVR?', link: '/scrypted-nvr/' },
          { text: 'Features', link: '/scrypted-nvr/features' },
          { text: 'Installation', link: '/scrypted-nvr/installation' },
          { text: 'Apps and Remote Access', link: '/scrypted-nvr/apps' },
          { text: 'Troubleshooting', link: '/scrypted-nvr/troubleshooting' },
          { text: 'Onboard Camera AI', link: '/scrypted-nvr/camera-ai' },
        ]
      },
      {
        text: 'Buyer\'s Guide',
        items: [
          { text: 'What Should I Buy?', link: '/buyers-guide/' },
          { text: 'Camera Hardware', link: '/buyers-guide/cameras' },
          { text: 'Server Hardware', link: '/buyers-guide/servers' },
        ]
      },
      {
        text: 'Detection Plugins',
        collapsed: true,
        items: [
          { text: 'Dummy Detection', link: '/detection/dummy-detection' },
          { text: 'Motion Detection', link: '/detection/motion-detection' },
          { text: 'Object Detection', link: '/detection/object-detection' },
          { text: 'Smart Motion Sensor', link: '/detection/smart-motion-sensor' },
        ]
      },
      {
        text: 'Server Maintenance',
        collapsed: true,
        items: [
          { text: 'Users and Remote Access', link: '/maintenance/access' },
          { text: 'Backup and Restore', link: '/maintenance/migration' },
          { text: 'Lost Password', link: '/maintenance/lost-password' },
          { text: 'Uninstallation', link: '/maintenance/uninstallation' },
          { text: 'Service Status', link: 'https://stats.uptimerobot.com/0ajzGx8GSe' },
        ]
      },
      {
        text: "Policies",
        collapsed: true,
        items: [
          { text: 'Purchase Policy', link: '/scrypted-nvr/policies/fulfillment' },
          { text: 'Privacy Policy', link: '/scrypted-nvr/policies/privacy' },
        ]
      }
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/DcFzmBHYGq' },
      { icon: { svg: '<svg viewBox="0 0 800 800"><path d="M460 668c36-19 84 7 74 43h-268c-10-36 38-62 74-43h120z" /><ellipse cx="472" cy="536" rx="72" ry="86" /><ellipse cx="328" cy="536" rx="72" ry="86" /><path d="M425 711c55-30 89-158 67-268h-184c-22 110 12 238 67 268h50z" /><circle cx="578" cy="269" r="44" /><circle cx="222" cy="269" r="44" /><ellipse cx="400" cy="329" rx="197" ry="129" /><circle class="reddit-eyes" cx="331" cy="304" r="32" /><circle class="reddit-eyes" cx="469" cy="304" r="32" /><path class="reddit-line" d="M521 116l-88-20-32 102M468 388s-16 21-68 21-68-21-68-21" /><circle cx="556" cy="123" r="34" /></svg>' }, link: 'https://reddit.com/r/Scrypted' },
      { icon: 'github', link: 'https://github.com/koush/scrypted' },
      // { icon: 'twitter', link: 'https://twitter.com/scryptedapp' },
    ]
  },

  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },

})
