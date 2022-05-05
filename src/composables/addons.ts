import type { MenuItemDataInfo } from '~/types'

export const addons: Record<string, MenuItemDataInfo[]> = {
  electron: [
    {
      name: 'useIpcRenderer',
      desc: 'Provides ipcRenderer and it\'s all APIs. available in add-on @vueuse/electron',
      demo: false,
    },
    {
      name: 'useIpcRendererInvoke',
      desc: 'Reactive ipcRenderer.invoke API result. Make asynchronous operations look like synchronous. available in add-on @vueuse/electron',
      demo: false,
    },
    {
      name: 'useIpcRendererOn',
      desc: 'Use ipcRenderer.on with ease and ipcRenderer.removeListener automatically on unmounted. available in add-on @vueuse/electron',
      demo: false,
    },
    {
      name: 'useZoomFactor',
      desc: 'Reactive WebFrame zoom factor. available in add-on @vueuse/electron',
      demo: false,
    },
    {
      name: 'useZoomLevel',
      desc: 'Reactive WebFrame zoom level. available in add-on @vueuse/electron',
      demo: false,
    },
  ],
  firebase: [
    {
      name: 'useAuth',
      desc: 'Reactive Firebase Auth binding. It provides a reactive user and isAuthenticated so you can easily react to changes in the users\' authentication status. available in add-on @vueuse/firebase',
      demo: false,
    },
    {
      name: 'useFirestore',
      desc: 'Reactive Firestore binding. Making it straightforward to always keep your local data in sync with remotes databases. available in add-on @vueuse/firebase',
      demo: false,
    },
    {
      name: 'useRTDB',
      desc: 'Reactive Firebase Realtime Database binding. Making it straightforward to always keep your local data in sync with remotes databases. available in add-on @vueuse/firebase',
      demo: false,
    },
  ],
  head: [
    {
      name: 'createHead',
      desc: 'Create the head manager instance.',
      demo: false,
      url: 'https://github.com/vueuse/head#api',
    },
    {
      name: 'useHead',
      desc: 'update head meta tags reactively.',
      demo: false,
      url: 'https://github.com/vueuse/head#api',
    },
  ],
  integrations: [
    {
      name: 'useAxios',
      desc: '网络请求，axios 封装',
      demo: false,
    },
    {
      name: 'useChangeCase',
      desc: '改变书写形式，大驼峰、小驼峰、中横线等，change-case 封装',
      demo: false,
    },
    {
      name: 'useCookies',
      desc: '操作cookie，universal-cookie 封装',
      demo: false,
    },
    {
      name: 'useDrauu',
      desc: '基于svg 的绘图工具，drauu 封装',
      demo: false,
    },
    {
      name: 'useFocusTrap',
      desc: '焦点捕捉，focus-trap 封装',
      demo: false,
    },
    {
      name: 'useFuse',
      desc: '模糊搜索，Fuse.js 封装',
      demo: false,
    },
    {
      name: 'useJwt',
      desc: 'JWT（JSON Web Tokens）解码，jwt-decode 封装',
      demo: false,
    },
    {
      name: 'useNProgress',
      desc: '轻量进度条，nprogress 封装',
      demo: false,
    },
    {
      name: 'useQRCode',
      desc: '二维码，qrcode 封装',
      demo: false,
    },
  ],
  motion: [
    {
      name: 'useElementStyle',
      desc: 'sync a reactive object to a target element CSS styling',
      demo: false,
      url: 'https://motion.vueuse.org/api/use-element-style.html',
    },
    {
      name: 'useElementTransform',
      desc: ' sync a reactive object to a target element CSS transform.',
      demo: false,
      url: 'https://motion.vueuse.org/api/use-element-transform.html',
    },
    {
      name: 'useMotion',
      desc: 'putting your components in motion.',
      demo: false,
      url: 'https://motion.vueuse.org/api/use-motion.html',
    },
    {
      name: 'useMotionProperties',
      desc: 'access Motion Properties for a target element.',
      demo: false,
      url: 'https://motion.vueuse.org/api/use-motion-properties.html',
    },
    {
      name: 'useMotionVariants',
      desc: 'handle the Variants state and selection.',
      demo: false,
      url: 'https://motion.vueuse.org/api/use-motion-variants.html',
    },
    {
      name: 'useSpring',
      desc: 'spring animations.',
      demo: false,
      url: 'https://motion.vueuse.org/api/use-spring.html',
    },
  ],
  router: [
    {
      name: 'useRouteHash',
      desc: 'Shorthand for reactive route.hash available in add-on @vueuse/router',
      demo: false,
    },
    {
      name: 'useRouteQuery',
      desc: 'Shorthand for reactive route.query available in add-on @vueuse/router',
      demo: false,
    },
  ],
  rxjs: [
    {
      name: 'from',
      desc: 'Two wrappers around of the original functions to allow use ref objects available in add-on @vueuse/rxjs',
      demo: false,
    },
    {
      name: 'toObserver',
      desc: 'Sugar function to convert a ref in an observer available in add-on @vueuse/rxjs',
      demo: false,
    },
    {
      name: 'useObservable',
      desc: 'Use an Observable, return a ref and automatically unsubscribe from it when the component is unmounted. available in add-on @vueuse/rxjs',
      demo: false,
    },
    {
      name: 'useSubject',
      desc: 'Bind Subject to ref and propagate value changes both ways.',
      demo: false,
    },
    {
      name: 'useSubscription',
      desc: 'Uses subscriptions without worry about unsubscribing to it or memory leaks. available in add-on @vueuse/rxjs',
      demo: false,
    },
  ],
  sound: [
    {
      name: 'useSound',
      desc: 'play sound effects reactively.',
      demo: false,
      url: 'https://github.com/vueuse/sound#examples',
    },
  ],
}
