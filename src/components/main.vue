<script setup lang="ts">
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<template>
  <el-main>
    <el-scrollbar>
      <RouterView />
      <!-- <slot /> -->
    </el-scrollbar>
  </el-main>
</template>
