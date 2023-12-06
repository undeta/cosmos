<script setup lang="ts">
type Size = 'default' | 'small' | 'large'
type Type = 'default' | 'primary' | 'ghost'
type Props = {
  type?: Type
  size?: Size
  disabled?: boolean
}

const TYPES: Record<Type, string[]> = {
  default: [],
  ghost: [],
  primary: ['bg-ud-pink border-ud-pink/75'],
}

const SIZES: Record<Size, string[]> = {
  default: [],
  small: [],
  large: [],
}

const props = defineProps<Props>()
const classes = computed(() => {
  let result: string[] = []

  result = result.concat(TYPES[props.type || 'default'])
  result = result.concat(SIZES[props.size || 'default'])

  return result
})
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
