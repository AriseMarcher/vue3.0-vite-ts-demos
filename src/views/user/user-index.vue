<template>
  <div>
    这是User
    <button @click="addCounter">
      点我增加pina点数
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../../stores/counter'

const counterStore = useCounterStore()

const addCounter = () => {
  // counterStore.counter++
  counterStore.$patch({
    counter: counterStore.counter + 1,
    isAdmin: !counterStore.isAdmin
  })
}
</script>
