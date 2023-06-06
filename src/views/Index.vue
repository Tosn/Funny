<template>
  <div>
    <ul>
      <router-link v-for="r in routes" :to="r.path" custom v-slot="{ navigate }">
        <li :key="r.name" @click="navigate">{{ r?.meta?.name }}</li>
      </router-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const routes = router.options.routes.filter(r => r.meta?.showIndex)
</script>

<style scoped lang="scss">

</style>