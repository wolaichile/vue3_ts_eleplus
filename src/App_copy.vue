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
  <!-- 路由 -->
  <div>
    <router-view></router-view>
  </div>
  <!-- 路由-转场动画 -->
  <!-- <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div> -->
</template>


<script setup lang="ts">
defineOptions({ name: "App" })

import { ref, onMounted } from 'vue'

import { login, getUserInfo } from "@/api/user/index.ts"

const currentPage = ref(1)
const pageSize = ref(100)
const pageSizes = [100, 200, 300, 400]

onMounted(async () => {
  try {
    const res1 = await login({ username: "admin", password: "123456" })
    console.log(res1);
    const res2 = await getUserInfo()
    console.log(res2);
  } catch (error) {

  }
})

</script>

<style scoped lang="scss">
.el-button {
  color: $color;
}
</style>