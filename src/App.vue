<template>
  <!-- 路由 -->
  <router-view></router-view>
  <!-- 路由-转场动画 -->
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view> -->
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