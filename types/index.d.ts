import type { App } from 'vue'

export const version: string
export const install: (app: App) => void

export * from './basicComponent'
export * from './button'
export * from './locale'
export * from './styleVars'

declare module 'vue' {
  export interface GlobalComponents {
    HsBasicComponent: typeof import('@varlet/ui')['_BasicComponentComponent']
    HsButton: typeof import('@varlet/ui')['_ButtonComponent']
    HsLocale: typeof import('@varlet/ui')['_LocaleComponent']
    HsStyleVars: typeof import('@varlet/ui')['_StyleVarsComponent']
  }

  export interface ComponentCustomProperties {
    
  }
}
