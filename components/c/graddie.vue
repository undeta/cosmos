<script setup lang="ts">
type Gradient = {
  posx: number | string
  poxy: number | string
  hue: number | string
  saturation: number | string
  lightness: number | string
}

type Props = {
  id: number | string
}

const props = defineProps<Props>()
</script>

<template>
  <div></div>
</template>
