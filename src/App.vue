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
    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper" :total="400" />
  </div>
</template>


<script setup lang="ts">
defineOptions({ name: "App" })

import { ref } from 'vue'

const currentPage = ref(4)
const pageSize = ref(100)
const pageSizes = [100, 200, 300, 400]

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
