<template>
  <el-container class="layout">
    <el-aside class="aside" width="200px">Aside</el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  .aside {
    background: gray;
  }

  .header {
    background: pink;
  }

  .main {
    background: blue;
  }
}
</style>
