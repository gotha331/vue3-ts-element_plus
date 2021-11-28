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
      <el-main class="main">Main</el-main>
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

  .main {
  }
}
</style>
