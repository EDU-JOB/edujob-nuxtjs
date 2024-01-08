<template>
  <button
    class="active:scale-95 flex justify-center items-center gap-1 transition-all"
    :class="[sizes[size], variants[variant], wrapperClass]"
  >
    <slot name="prefix"></slot>
    <span :class="textClass">{{ text }}</span>
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
  variant?: 'red' | 'light' | 'gray'
  size?: 'sm' | 'md' | 'lg'
  iconName?: string
  wrapperClass?: string
}
withDefaults(defineProps<Props>(), {
  text: 'Button',
  type: 'button',
  textClass: '',
  shadowColor: '',
  disabled: false,
  loading: false,
  variant: 'red',
  size: 'md',
  iconName: '',
})
const sizes = {
  sm: 'px-4 py-2 rounded-md text-xs',
  md: 'px-5 py-[10px] rounded-lg text-sm',
  lg: 'px-6 py-3 rounded-lg text-base',
}
const variants = {
  red: 'bg-red text-white hover:bg-red-extra red-shadow',
  light: 'bg-light text-red hover:bg-light-extra',
  gray: 'bg-gray-400 text-dark hover:opacity-70',
}
</script>
<style>
.red-shadow {
  box-shadow: 0px 3px 20px 0px rgba(255, 13, 73, 0.2);
}
</style>
