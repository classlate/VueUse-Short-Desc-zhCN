<script setup lang="ts">
const menuList = firstMenuList
</script>

<template>
  <el-container style="height: 500px">
    <Aside
      :list="menuList"
    />

    <Main />
  </el-container>
</template>
