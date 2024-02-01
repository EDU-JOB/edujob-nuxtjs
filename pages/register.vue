<template>
  <div class="container h-screen flex flex-col justify-center">
    <div class="w-[500px] ">
      <div class="flex-center-between ">
        <div>
          <h2 class="text-2xl md:text-3xl font-medium">Create account.</h2>
          <p class="text-gray-600 mt-4">Already have account? <span class="text-primary">Log In</span></p>
        </div>
        <div class="inline-block">
          <FormSelect
              :list="selectObj"
              label-key="title"
              label="title"
              value-key="id"
              placeholder="Employers"
              class="border border-gray-200 rounded w-32"
          ></FormSelect>
        </div>
      </div>
      <div class="flex flex-col gap-5 my-8">
        <div class="flex-center-between gap-5">
          <FormInput placeholder="Full Name"/>
          <FormInput placeholder="Full Name"/>
        </div>
        <FormInput placeholder="Email address" type="email"/>
        <FormInput placeholder="Password" type="password">
          <template #suffix><i class="icon-eye"></i></template>
        </FormInput>
        <FormInput placeholder="Confirm Password" type="password">
          <template #suffix><i class="icon-eye"></i></template>
        </FormInput>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
const selectObj = ref([
  {title: "andijon", id: 1},
  {title: "fargona", id: 2},
  {title: "namangan", id: 3},
]);

</script>

<style scoped>

</style>