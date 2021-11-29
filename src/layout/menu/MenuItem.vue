<template>
  <template v-for="menu in menuList" :key="menu.path">
    <el-sub-menu v-if="menu.children && menu.children.length" :index="menu.path">
      <template #title>
        <el-icon>
          <component :is="menu.meta.icon" />
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
      <menu-item :menu-list="menu.children"></menu-item>
    </el-sub-menu>

    <el-menu-item v-else :index="menu.path" style="color: #f4f5f5">
      <el-icon>
        <component :is="menu.meta.icon" />
      </el-icon>
      <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
// import { Interface } from 'readline'
// import { PropType } from 'vue'

// interface menuProps {
//   path: string
//   // component: () =>(),
//   alwaysShow: boolean
//   name: string
//   meta: Record<string, unknown>
//   children: Array<Interface>
//   // children:Array
// }

// defineProps({
//   menuList: {
//     type: Array as PropType<menuProps[]>,
//     required: true,
//     default: () => []
//   }
// })

defineProps(['menuList'])
</script>

<style lang="scss" scoped></style>
