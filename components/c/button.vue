<script setup lang="ts">
type Size = 'default' | 'small' | 'large'
type Type = 'default' | 'primary' | 'ghost' | 'text'
type Shape = 'default' | 'square'
type Roundness = 'default' | 'circle'
type Props = {
  type?: Type
  size?: Size
  disabled?: boolean
  noScale?: boolean
  noSaturate?: boolean
  danger?: boolean
  shape?: Shape
  roundness?: Roundness
}

const TYPES: Record<Type, string[]> = {
  default: ['border-light-500 hover:(border-light-900 bg-light-300)'],
  ghost: ['border-transparent hover:(bg-light-700)'],
  primary: ['border-c-pink-400 bg-c-pink-500 text-white', 'dark:(border-c-pink-600)'],
  text: ['border-transparent bg-transparent'],
}

const DANGER_TYPES: Record<Type, string[]> = {
  default: ['bg-white text-c-danger-500 border-c-danger-500/30 hover:(border-c-danger-500/60 bg-c-danger-500/10)'],
  ghost: ['border-transparent text-c-danger-500 hover:(bg-c-danger-500/20)'],
  primary: ['border-c-danger-400 bg-c-danger-500 text-white', 'dark:(border-c-danger-500/60)'],
  text: ['border-transparent bg-transparent text-c-danger-500'],
}

const SIZES: Record<Size, string[]> = {
  default: ['h-12 rounded-xl'],
  small: ['h-8 rounded-lg'],
  large: ['h-16 rounded-xl text-xl'],
}
const SHAPES: Record<Shape, Record<Size, string[]>> = {
  default: { default: ['px-4'], small: ['px-2'], large: ['px-6'] },
  sqaure: { default: ['w-12'], small: ['w-8'], large: ['w-16'] },
}

const props = defineProps<Props>()
</script>

<template>
  <button
    :class="[
      'transition-all duratio-200 border-4',
      props.noScale ? '' : 'active:(scale-95)',
      props.noSaturate ? '' : 'hover:(saturate-130)',
      ...(props.danger ? DANGER_TYPES : TYPES)[props.type || 'default'],
      ...SIZES[props.size || 'default'],
      ...SHAPES[props.shape || 'default'][props.size || 'default'],
    ]"
    type="button"
  >
    <slot />
  </button>
</template>
