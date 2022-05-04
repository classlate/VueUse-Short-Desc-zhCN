<script setup lang="ts">
import { core } from '~/composables'
</script>

<template>
  <div>
    <DataTable
      :table-data="core[$route.params.cate]"
    />
  </div>
</template>
