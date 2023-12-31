<script setup lang="ts">
type Size = 'default' | 'small' | 'large'
type Type = 'default' | 'primary' | 'ghost' | 'text'

type Props = {
  type?: Type
  size?: Size
  disabled?: boolean
  noScale?: boolean
  noSaturate?: boolean
  danger?: boolean
  square?: boolean
  rounded?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
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
  default: ['h-12'],
  small: ['h-8'],
  large: ['h-16 text-xl'],
}

const SHAPES: Record<'default' | 'square', Record<Size, string[]>> = {
  default: { default: ['px-4'], small: ['px-2'], large: ['px-6'] },
  square: { default: ['w-12'], small: ['w-8'], large: ['w-16'] },
}

const ROUNDNESS: Record<'default' | 'rounded', Record<Size, string[]>> = {
  default: { default: ['rounded-xl'], small: ['rounded-lg'], large: ['rounded-xl'] },
  rounded: { default: ['rounded-full'], small: ['rounded-full'], large: ['rounded-full'] },
}

const props = defineProps<Props>()
</script>

<template>
  <button
    :class="[
      'transition-all duratio-200 border-4 select-none',
      noScale ? '' : 'active:(scale-95)',
      noSaturate ? '' : 'hover:(saturate-130)',
      ...(danger ? DANGER_TYPES : TYPES)[type || 'default'],
      ...SIZES[size || 'default'],
      ...SHAPES[square ? 'square' : 'default'][size || 'default'],
      ...ROUNDNESS[rounded ? 'rounded' : 'default'][size || 'default'],
    ]"
    :type="htmlType || 'button'"
  >
    <div :class="['flex items-center pointer-events-none h-full w-full', square ? 'justify-center' : '']">
      <slot />
    </div>
  </button>
</template>
