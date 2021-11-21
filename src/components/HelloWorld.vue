<template>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <h2>我是store的state的count值：{{ showCount }}</h2>
  <button @click="addBtn">count增加</button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/store'

const count = ref(6)
const store = useStore()
// const showCount = computed(() => store.state.count)
const showCount = computed(() => {
  return store.getters['getCount']
})

const addBtn = () => {
  store.commit('setCount', ++count.value)
}

</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
