<script setup lang="ts">
interface MenuItem {
  title: string
  index: string
  children?: MenuItem[]
}
const { list } = defineProps<{
  list: MenuItem[]
}>()

</script>

<template>
  <el-aside width="200px">
    <el-scrollbar>
      <el-menu
        :router="true"
        :default-active="'0'"
        :default-openeds="['1', '3']"
      >
        <el-sub-menu index="1">
          <template #title>
            Navigator One
          </template>
          <el-menu-item index="1-3">
            Option 3
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
