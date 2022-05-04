<script setup lang="ts">
import type { MenuItem } from '~/types'

const { menuList } = defineProps<{
  menuList: MenuItem[]
}>()
</script>

<template>
  <el-aside width="200px">
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
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
