<script setup lang="ts">
import { menuList } from '~/composables'
</script>

<template>
  <el-container id="container" style="height: 100vh; max-height: 100vh;">
    <Aside
      :menu-list="menuList"
    />

    <div flex-1 self-center>
      <RouterView />
    </div>
  </el-container>
</template>

<style lang="postcss">
#container {
  .el-menu {
    border: none;
  }
}
</style>
