<script setup lang="ts">
import { core } from '~/composables'
const route = useRoute()
</script>

<template>
  <div>
    <DataTable
      :table-data="core[route.params.cate]"
    />
  </div>
</template>
