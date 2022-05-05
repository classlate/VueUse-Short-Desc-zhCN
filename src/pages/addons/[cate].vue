<script setup lang="ts">
import { addons } from '~/composables'
</script>

<template>
  <div>
    <DataTable
      :table-data="addons[$route.params.cate]"
      :target="($route.params.cate as string)"
    />
  </div>
</template>
