<template>
	<div class="container bg-white p-3 rounded-8">
		<div
			class="grid grid-cols-1 gap-1 md:grid-cols-2 gap-2 lg:grid-cols-5 justify-between"
		>
			<FormInput
				v-model="jobTitle"
				class="lg:border-r-[1px] border-r-solid"
				placeholder="Job tittle, Keyword..."
				type="text"
			>
				<template #prefix>
					<i class="icon-search mr-1 text-primary"></i>
				</template>
			</FormInput>
			<FormInput
				v-model="jobs"
				class="lg:border-r border-r-solid"
				placeholder="Job tittle, Keyword..."
				type="text"
			>
				<template #prefix>
					<i class="icon-search mr-1 text-primary"></i>
				</template>
			</FormInput>
			<div class="flex-shrink-0 flex items-center pl-3">
				<i class="icon-category text-primary"></i>

				<FormSelect
					:list="selectObj"
					label-key="title"
					label="title"
					value-key="id"
					placeholder="Select Category"
					class="lg:border-r border-r-solid"
				></FormSelect>
			</div>
			<FormSelect
            :list="selectObj"
            label-key="title"
            label="title"
            value-key="id"
            placeholder="Advance Filter"
            class="mr-3"
        	></FormSelect>
			<div class="flex-shrink-0">
				<Button class="w-[100%]" text="Find Job" />
			</div>
		</div>
	</div>

	<!-- <FormInput v-model="jobTitle" placeholder="Job tittle, Keyword..." type="text">
        <template #prefix>
          <i class="icon-search"></i>
        </template>
      </FormInput>
      <FormInput v-model="jobs" placeholder="Job tittle, Keyword..." type="text">
        <template #prefix>
          <i class="icon-search"></i>
        </template>
      </FormInput>
      <div class="flex-shrink-0"> -->
</template>

<script setup lang="ts">
const jobTitle = ref('');
const jobs = ref('');
const selectObj = ref([
	{ title: 'andijon', id: 1 },
	{ title: 'fargona', id: 2 },
	{ title: 'namangan', id: 3 },
]);
</script>

<style scoped>
@import url(./input.scss);
</style>
