<template>
  <div>
    <component v-for="comp in listStore.cssList" :is="comp"></component>
  </div>
</template>

<script setup lang="ts">
import { useListStore } from '../../store/modules/list'
const listStore = useListStore()


</script>

<style scoped lang="scss">
</style>