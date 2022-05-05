<script setup lang="ts">
import { baseURL } from '~/composables'
import type { MenuItemDataInfo } from '~/types'

interface Props {
  tableData: MenuItemDataInfo[]
  target?: string
}
const props = withDefaults(defineProps<Props>(), {
  target: 'core',
})

const getHref = ({ url, name, type }: MenuItemDataInfo) => {
  const target = type ?? props.target
  return url !== undefined
    ? url
    : `${baseURL}/${target}/${name}/`
}

const tableProps = reactive({
  rowKey: 'name',
  // currentRowKey: '',
  // highlightCurrentRow: true,

})
</script>

<template>
  <el-table
    :data="props.tableData"
    height="100vh"
    stripe
    v-bind="tableProps"
  >
    <el-table-column prop="name" label="名称" width="240px">
      <template #default="{ row }: { row: MenuItemDataInfo }">
        <a
          :href="getHref(row)"
          target="_blank"
        >
          <span c-blue-400>{{ row.name }}</span>
        </a>
      </template>
    </el-table-column>

    <el-table-column prop="desc" label="简述" />

    <el-table-column prop="demo" label="示例" width="100px" />
  </el-table>
</template>
