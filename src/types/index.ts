export interface MenuItem {
  title: string
  index: string
  path: string
  nums?: number
  children?: MenuItem[]
}

export interface MenuItemDataInfo {
  index?: number
  name: string
  desc: string
  demo: boolean
}
