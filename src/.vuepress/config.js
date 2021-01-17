const { description } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'NSLauncher Docs',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: 'team-ns/launcher',
        repoLabel: 'Github',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        logo: '/nslogo.png',
        lastUpdated: false,
        nav: [{
                text: 'Версии',
                items: [{
                    text: '0.0.1',
                    link: '/0.0.1/'
                }],
            },
            {
                text: 'Ресурсы',
                items: [{
                    text: 'Changelog',
                    link: 'https://github.com/team-ns/launcher/blob/master/CHANGELOG.md'
                }]
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/Jb4ZdeJhAn'
            }
        ],
        sidebar: {
            '/guide/': [{
                title: 'Guide',
                collapsable: false,
                children: [
                    '',
                    'using-vue',
                ]
            }],
            '/0.0.1/': [{
                title: 'v0.0.1',
                collapsable: false,
                children: [
                    '',
                    'auth',
                    'profiles',
                    'authlib',
                    'runtime',
                    'faq',
                ]
            }],

        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}