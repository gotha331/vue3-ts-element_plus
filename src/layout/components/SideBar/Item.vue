<template>
  <el-icon v-if="icon">
    <component :is="icon" />
  </el-icon>
  <span v-if="title">{{ title }}</span>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped></style>
