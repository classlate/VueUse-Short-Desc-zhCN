import type { MenuItem } from '~/types'

const findChildren = (parentName: string): any => {
  const pages = import.meta.glob('~/pages/*/*.vue')
  const pathList = Object.keys(pages).map(page => page.split('pages')[1])
  const children = pathList.reduce((acc, val) => {
    if (val.slice(1).startsWith(parentName)) {
      acc.push({
        title: val.split('/')[2].split('.')[0],
        // index: acc.length.toString(),
        index: val.split('.')[0],
        path: val.split('.')[0],
      })
    }

    return acc
  }, [] as MenuItem[])
  return children
}

const firstMenuNameList = [
  'functions',
]

export const menuList: MenuItem[] = firstMenuNameList.map(name => ({
  title: name,
  index: name,
  path: name,
  children: findChildren(name),
}))
