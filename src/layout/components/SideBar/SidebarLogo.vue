<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="logo" />
    <span class="title">Vue3+TypeScript实战</span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo {
  background-color: #2b2f3a;
  height: 50px;
  line-height: 50px;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 15px;
  color: #fff;

  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }

  span {
    font-weight: 600;
    line-height: 50px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    vertical-align: middle;
  }
}
</style>
