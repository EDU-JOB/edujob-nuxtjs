<template>
  <div class="group flex-y-center gap-4 p-4 hover:shadow-lg transition-200 rounded-lg bg-white cursor-pointer">
    <div class="p-4 flex-center rounded bg-blue-50 group-hover:bg-blue transition-200">
      <i class="icon-pen" :class="[options.icon, ' text-xl text-blue group-hover:text-white transition-200']"></i>
    </div>
    <div class="flex flex-col gap-1">
      <h2 class="text-xl md:text-2xl font-bold" :class="titleClass">{{ options.title }}</h2>
      <p :class="descrClass">{{ options.descr }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  options: {
    icon: string
    title: string
    descr: string
  }
  titleClass?: string
  descrClass?: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">

.card {
  display: flex;
  padding: 20px;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  background-color: #fff;
  transition: 0.3s all;

  &__icon {
    border-radius: 4px;
    background: var(--Primary-50, #e7f0fa);
    display: flex;
    padding: 16px;
    align-items: flex-start;

    img {
      width: 40px;
      height: 40px;
    }
  }

  &__content {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
      color: #767f8c;
    }
  }
}

.card:hover {
  box-shadow: 0px 12px 48px 0px rgba(0, 44, 109, 0.1);
  transition: 0.3s all;

  &__icon {
  }
}

.card:hover .card__icon {
  background-color: var(--el-color-primary);
  transition: 0.3s all;
}
</style>
