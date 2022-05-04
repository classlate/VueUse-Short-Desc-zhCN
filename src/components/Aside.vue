<script setup lang="ts">
import type { MenuItem } from '~/types'

const { menuList } = defineProps<{
  menuList: MenuItem[]
}>()
</script>

<template>
  <el-aside
    b="r-1 bdc"
    width="200px"
  >
    <el-scrollbar>
      <el-menu
        :router="true"
        :default-active="'0'"
        :default-openeds="[menuList[0]?.index]"
      >
        <el-sub-menu
          v-for="menu in menuList"
          :key="menu.index"
          :index="menu.index"
        >
          <template #title>
            {{ menu.title }}
          </template>
          <el-menu-item
            v-for="child in menu.children"
            :key="child.index"
            :index="child.index"
          >
            {{ child.title }}
            <span
              b="1 rd gray-300"
              c-gray-400
              ml-2 px-1
              lh-4
            >{{ child.nums }}</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
