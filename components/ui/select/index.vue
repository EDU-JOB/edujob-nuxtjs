<template>
  <el-select v-model="value" class="m-2" :default-first-option="true">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <div class="flex items-center">
        <img src="/icons/PhoneCall.svg" alt="" />
        <p class="text-red-600">{{ item.label }}</p>
      </div>
    </el-option>
  </el-select>
</template>

<script lang="ts" setup>
interface Props {
  options: {
    value: string;
    label: string;
  }[];
}

defineProps<Props>();
const value = ref("");
</script>
