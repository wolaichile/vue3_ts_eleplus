<template>
  <div>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" circle icon="Edit"></el-button>
    <el-button icon="Male">111</el-button>
  </div>
  <div>
    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper" :total="400" />
  </div>
  <svg-icon name="fapiao" color="pink" />
</template>


<script setup lang="ts">
defineOptions({ name: "App" })

import { ref, onMounted } from 'vue'

import { login, getUserInfo } from "@/api/user.ts"

const currentPage = ref(1)
const pageSize = ref(100)
const pageSizes = [100, 200, 300, 400]

onMounted(() => {
  login()
  getUserInfo()
})

</script>

<style scoped lang="scss">
.el-button {
  color: $color;
}
</style>