<template>
  <div class="card">
    <div class="card__icon">
      <img :src="options.icon" :alt="options.descr" />
    </div>
    <div class="card__content">
      <h2 :class="titleClass">{{ options.title }}</h2>
      <p :class="descrClass">{{ options.descr }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props{
  options: {
    icon: string
    title: string
    descr:string
  }
  titleClass?: string
  descrClass?:string
}
  defineProps<Props>()
</script>

<style scoped lang="scss">
@import url(../../../assets//scss/index.scss);
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
