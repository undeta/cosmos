<script setup lang="ts">
type Padding = 'default' | 'small' | 'large'
type Props = { href?: string; target?: string; padding?: Padding; fill?: boolean }

const PADDINGS: Record<Padding, string> = {
  default: 'p-4',
  large: 'p-8',
  small: 'p-2',
}

const props = defineProps<Props>()
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :class="[
      'bg-light-400 border-4 border-light-700 transition-all duration-200 rounded-xl block',
      PADDINGS[padding || 'default'],
      href ? 'hover:(border-dim-50)' : '',
      fill ? '' : 'w-fit',
    ]"
    :href="href"
    :target="target"
  >
    <slot />
  </component>
</template>
