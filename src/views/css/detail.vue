<template>
  <router-link to="/css" custom v-slot="{ navigate }">
    <h3 @click="navigate">&lt; To css</h3>
  </router-link>
  <div style="margin-top: 20px;">
    <component :is="compName"></component>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const compName = route.params.compName as string
</script>

<style scoped lang="scss">

</style>