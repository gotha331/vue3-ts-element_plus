<template>
  <el-container class="layout">
    <el-aside class="aside" width="auto">
      <MenuLogo></MenuLogo>
      <MenuBar></MenuBar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <el-icon>
          <edit />
        </el-icon>
        <el-icon><trend-charts /></el-icon>

        <el-icon><Setting /></el-icon>

        <el-icon><BrushFilled /></el-icon>
        <el-icon><AlarmClock /></el-icon>

        <el-icon><chat-dot-square /></el-icon>

        <el-icon><circle-check-filled /></el-icon>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from './header/Header.vue'
import MenuBar from './menu/MenuBar.vue'
import MenuLogo from './menu/MenuLogo.vue'
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  .aside {
    background-color: rgb(48, 65, 86);
  }

  .header {
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>
