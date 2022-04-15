<template>
  <div>
    <div @click="clickData">side-menu1-item-menu2</div>
    <div>{{ env }}</div>
  </div>
</template>

<script setup>
import {  computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const env = computed(() => store.getters.env)

let num = 0
const clickData = () => {
  store.dispatch('setEnv', num++)
}
</script>
