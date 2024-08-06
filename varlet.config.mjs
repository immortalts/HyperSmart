import { defineConfig } from '@varlet/cli'

const description = {
  'zh-CN': 'Varlet UI 是一个基于 Vue3 开发的 Material Design 组件库',
  'en-US': 'Varlet UI is a Material design component library developed based on Vue3.',
};
// 获取当前日期
let currentDate = new Date();
// 获取当前年份
let currentYear = currentDate.getFullYear();

export default defineConfig({
  name: 'HyperSmart',
  namespace: 'hs',
  logo: './logo.svg',
  title: 'HyperSmart',
  useMobile: true,
  pc: {
    indexPage: {
      description,
      started: {
          'zh-CN': '快速开始',
          'en-US': 'Get Started',
      },
      viewOnGithub: {
          'zh-CN': '查看源码',
          'en-US': 'View On Github',
      },
      features: [
          {
              name: {
                  'zh-CN': '组件丰富',
                  'en-US': 'Rich components',
              },
              description: {
                  'zh-CN': '提供 60+ 个高质量通用组件',
                  'en-US': 'Provide 60+ high quality general purpose components',
              },
          },
          {
              name: {
                  'zh-CN': '按需引入',
                  'en-US': 'On-Demand',
              },
              description: {
                  'zh-CN': '每一个组件都可单独引入，并有着良好的 tree-shaking 优化',
                  'en-US': 'Each component can be imported separately and has good tree-shaking optimization',
              },
          },
          {
              name: {
                  'zh-CN': '主题定制',
                  'en-US': 'Theme customization',
              },
              description: {
                  'zh-CN': '内置亮色和暗色两种主题，支持组件的样式自定义',
                  'en-US': 'Built-in light and dark themes, support style customization of components',
              },
          },
          {
              name: {
                  'zh-CN': '国际化',
                  'en-US': 'Locale',
              },
              description: {
                  'zh-CN': '内置国际化 API，内置中文和英文的语言包',
                  'en-US': 'Built-in i18n API, which supports both Chinese and English languages by default',
              },
          },
          {
              name: {
                  'zh-CN': '支持 Typescript',
                  'en-US': 'Support typescript',
              },
              description: {
                  'zh-CN': '使用 Typescript 构建，提供良好的组件类型系统',
                  'en-US': 'Built with typescript, which provides a nice components type system',
              },
          },
          {
              name: {
                  'zh-CN': '服务端渲染',
                  'en-US': 'Server-side rendering',
              },
              description: {
                  'zh-CN': '对服务端渲染支持良好，并对 Nuxt 进行了适配',
                  'en-US': 'Good support for server-side rendering and adaptation to Nuxt',
              },
          },
          {
              name: {
                  'zh-CN': '国人开发',
                  'en-US': 'Developed by Chinese',
              },
              description: {
                  'zh-CN': '由国人开发，完善的中英文文档和后勤保障',
                  'en-US': 'Complete Chinese and English documentation and logistics support',
              },
          },
          {
              name: {
                  'zh-CN': 'IDE 支持',
                  'en-US': 'IDE Code Support',
              },
              description: {
                  'zh-CN': '支持在 webstorm，vscode 中的组件语法高亮, 并提供 vscode 插件为开发提升效率',
                  'en-US': 'Supports to highlight the component syntax for webstorm and vscode, and provides a separate helper plugin for vscode',
              },
          },
          {
              name: {
                  'zh-CN': '组件库快速成型工具',
                  'en-US': 'Component library toolchain',
              },
              description: {
                  'zh-CN': '开源了搭建本组件库的所有工具链，提供快速开发组件库的能力',
                  'en-US': 'Open-sourced the toolchain for building this component library, providing the ability to rapidly develop the component library',
              },
          },
      ],
      teamMembers: {},
      contributors: {},
      sponsors: {},
      license: {
          'zh-CN': '组件库基于 MIT 协议，您可以自由的使用和分享',
          'en-US': 'Released under the MIT License, You can use and share freely.',
      },
      copyright: {
          'zh-CN': `Copyright © ${currentYear} varletjs 组织成员以及 varlet 的贡献者们`,
          'en-US': `Copyright © ${currentYear} varletjs member and varlet contributors.`,
      },
    },
    header: {
      github: 'https://github.com/immortalts/HyperSmart',
      darkMode: null,
      playground: null,
      versions: null
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
          'en-US': 'Developer Guide',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '基本介绍',
          'en-US': 'Basic Introduce',
        },
        doc: 'home',
        type: 3,
      },
      {
        text: {
          'zh-CN': '基础组件',
          'en-US': 'Basic Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
          'en-US': 'Button',
        },
        doc: 'button',
        type: 2,
      },
    ],
  },
  mobile: {
    header: {
      darkMode: null,
    },
  },
})
