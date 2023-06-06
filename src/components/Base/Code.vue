<template>
  <pre v-highlightjs><code :class="props.type"><slot></slot></code></pre>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'javascript'
  }
})
</script>

<style scoped lang="scss">

</style>