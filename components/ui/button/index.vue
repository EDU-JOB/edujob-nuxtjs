<template>
  <button
      class="active:scale-95 flex justify-center items-center gap-1 transition-all"
      :class="[sizes[size], variants[variant], wrapperClass, {'px-4 py-2 rounded-[3px] text-sm md:text-base md:px-6 md:py-3 md:rounded': adaptive}]"
  >
    <slot name="prefix"></slot>
    <slot>
      <span :class="[textClass, {'text-sm md:text-base':adaptive}]">{{ text }}</span>
    </slot>
    <slot name="suffix"></slot>
  </button>
</template>
<script setup lang="ts">
interface Props {
  text?: string
  type?: string
  textClass?: string
  disabled?: boolean
  loading?: boolean
  variant?: 'outline' | 'light' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  iconName?: string
  wrapperClass?: string
  adaptive?: boolean
}

withDefaults(defineProps<Props>(), {
  text: 'Button',
  type: 'button',
  textClass: '',
  shadowColor: '',
  disabled: false,
  loading: false,
  adaptive: false,
  variant: 'primary',
  size: 'md',
  iconName: '',
})

const sizes = {
  sm: 'px-4 py-2 rounded-[3px] text-sm ',
  md: 'px-6 py-3 rounded-[3px] ',
  lg: 'px-8 py-4 rounded',
}
const variants = {
  primary: 'bg-primary text-white hover:bg-primary-600 transition-200',
  light: 'bg-primary-50 text-primary hover:bg-primary-100 text-primary-600 transition-200',
  outline: ' text-primary border border-primary-100  hover:bg-primary-100 hover:primary-600 hover:border-primary transition-200',
}
</script>
