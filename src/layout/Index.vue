<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <div class="sidebar-container has-logo">
      <side-bar />
    </div>

    <!-- 右侧内容区 -->
    <div class="main-container">
      <nav-bar />
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from './components/Sidebar/Index.vue'
import NavBar from './components/NavBar.vue'
import AppMain from './components/AppMain.vue'
</script>

<style lang="scss" scoped>
@import 'styles/mixin.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
