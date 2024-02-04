<template>
	<section class="p-0">
		<div class="container">
			<div class="pt-6 pb-6">
				<div class="flex items-center justify-between">
					<h2 class="text-lg font-medium leading-7 text-[#18191c]">Find Job</h2>
					<Breadcrumb :menu="menu" />
				</div>
			</div>

			<inputCard class="mb-6" />
		</div>

		<div class="bg-white">
			<div
				class="container pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4"
			>
				<CardsVacancy v-for="(item, idx) in jobsCard" :item="item" :key="idx" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { jobsCard } from '@/constants';

const menu = computed(() => [{ link: '/jobs', title: 'Find job' }]);
</script>

<style scoped>
/* @import url(./index.scss);*/
</style>
