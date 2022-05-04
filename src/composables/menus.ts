import { core } from './core'
import type { MenuItem } from '~/types'

// export const functions = Object.keys(functionsInfo)

const menuInfo = {
  core: Object.entries(core),
}

type Key = keyof typeof menuInfo

export const menuList: MenuItem[] = Object.keys(menuInfo).map(key => ({
  title: key,
  index: key,
  path: `/${key}`,
  children: menuInfo[key as Key].map(sub => ({
    title: sub[0],
    index: `/${key}/${sub[0]}`,
    path: `/${key}/${sub[0]}`,
    nums: sub?.[1].length ?? 0,
  })),
}))
