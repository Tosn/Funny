<template>
  <ul>
    <li v-for="item in listStore.cssList" @click="toDetail(item)">{{ item }}</li>
  </ul>
  <!-- <pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre> -->
</template>

<script setup lang="ts">
import { useListStore } from '../../store/modules/list'
import { useRouter } from 'vue-router'
const router = useRouter()
const listStore = useListStore()
const toDetail = (path: string) => {
  router.push(`/css-detail/${path}`)
}

</script>

<style scoped lang="scss">
</style>