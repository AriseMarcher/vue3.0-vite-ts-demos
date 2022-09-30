<template>
  <div>
    这是home
    <button @click="gotoUser">
      点我去user页面
    </button>
    <button @click="addCount">
      点我增加
    </button>
    <button @click="addPinaCounter">
      点我增加pina点数
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useStore } from '../../store/index'
import { useCounterStore } from '../../stores/counter'

const store = useStore()
const router = useRouter()
const counterStore = useCounterStore()

const addCount = () => {
  store.commit('increment')
}
const gotoUser = () => {
  router.push('user')
}
const addPinaCounter = () => {
  counterStore.$patch({
    counter: counterStore.counter + 1,
    isAdmin: !counterStore.isAdmin
  })
}
</script>
