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

</script>

<style scoped lang="scss">
.el-button {
  color: $color;
}
</style>