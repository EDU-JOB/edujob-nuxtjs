<template>
  <section class="single">
    <div class="single__tab">
      <div class="container mx-auto flex justify-between">
        <h2 class="single__title">Job Details {{ route }}</h2>
        <div class="single__navi">
          <span class="single__navi-link">home /</span>
          <span class="single__navi-link">Job /</span>
          <span class="single__navi-link">Graphics & Design /</span>
          <span class="single__navi-link active">Job Details</span>
        </div>
      </div>
    </div>

		<div class="bg-white p-8">
			<div
				class="container mb-8 flex items-center flex-col md:flex-row justify-between lg:justify-berween"
			>
				<div class="flex items-center flex-col md:flex-row">
					<img
						src="/icons/fecebook.png"
						alt=""
						class="single__logo w-[30px] h-[30px] mb-3"
					/>

        <div class="single__wrapper">
          <h2 class="single__title">Senior UX Designer</h2>
          <span class="single__company-name">at Facebook</span>
          <span class="single__category">FULL-TIME</span>
          <span class="single__featured">Featured</span>
        </div>
      </div>

						<span class="single__category">FULL-TIME</span>
						<span class="single__featured">Featured</span>
					</div>
				</div>

				<div class="single__btns">
					<button class="single__bookmark">
						<img
							class="single__bookmark-icon"
							src="/icons/BookmarkSimple.svg"
							alt=""
						/>
					</button>
					<button class="single__apply">
						Apply now
						<img class="single__apply-icon" src="/icons/strelka.svg" alt="" />
					</button>
				</div>
			</div>

			<div
				class="container flex flex-col md:justify-center lg:flex-row justify-between"
			>
				<div class="single__left mb-5">
					<h3 class="single__job-title">Job Description</h3>
					<p class="w-[370px] md:w-[500px] lg:w-[643px] text-left">
						Velstar is a Shopify Plus agency, and we partner with brands to help
						them grow, we also do the same with our people!
						<br />
						<br />
						Here at Velstar, we don't just make websites, we create exceptional
						digital experiences that consumers love. Our team of designers,
						developers, strategists, and creators work together to push brands
						to the next level. From Platform Migration, User Experience & User
						Interface Design, to Digital Marketing, we have a proven track
						record in delivering outstanding eCommerce solutions and driving
						sales for our clients.
						<br />
						<br />
						The role will involve translating project specifications into clean,
						test-driven, easily maintainable code. You will work with the
						Project and Development teams as well as with the Technical
						Director, adhering closely to project plans and delivering work that
						meets functional & non-functional requirements. You will have the
						opportunity to create new, innovative, secure and scalable features
						for our clients on the Shopify platform
						<br />
						<br />
						Want to work with us? You're in good company!
					</p>

					<h2 class="single__requirements">Requirements</h2>
					<ul class="w-[370px] md:w-[500px] lg:w-[634px ]">
						<li class="single__item md:w-[500px] lg:w-[634px ]">
							Great troubleshooting and analytical skills combined with the
							desire to tackle challenges head-on
						</li>
						<li class="single__item md:w-[500px] lg:w-[634px ]">
							3+ years of experience in back-end development working either with
							multiple smaller projects simultaneously or large-scale
							applications
						</li>
						<li class="single__item md:w-[500px] lg:w-[634px ]">
							Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
							Laravel
						</li>
						<li class="single__item md:w-[500px] lg:w-[634px ]">
							Working regularly with APIs and Web Services (REST, GrapthQL,
							SOAP, etc)
						</li>
						<li class="single__item md:w-[500px] lg:w-[634px]">
							Have experience/awareness in Agile application development,
							commercial off-the-shelf software, middleware, servers and
							storage, and database management.
						</li>
						<li class="single__item md:w-[500px] lg:w-[634px]">
							Familiarity with version control and project management systems
							(e.g., Github, Jira)
						</li>
						<li class="single__item md:w-[500px] lg:w-[634px]">
							Great troubleshooting and analytical skills combined with the
							desire to tackle challenges head-on
						</li>
						<li class="single__item md:w-[500px] lg:w-[634px]">
							Ambitious and hungry to grow your career in a fast-growing agency
						</li>
					</ul>

					<h2 class="single__desirable">Desirable:</h2>
					<ul class="single__list">
						<li class="single__item">
							Working knowledge of eCommerce platforms, ideally Shopify but also
							others e.g. Magento, WooCommerce, Visualsoft to enable seamless
							migrations.
						</li>
						<li class="single__item md:w-[500px] lg:w-[634px]">
							Working knowledge of payment gateways
						</li>
						<li class="single__item md:w-[500px] lg:w-[634px]">
							API platform experience / Building restful APIs
						</li>
					</ul>

      <div class="single__right">
        <div class="single__top">
          <div class="single__box1">
            <h3 class="single__salary">Salary (USD)</h3>
            <span class="single__salary-year">$100,000 - $120,000</span>
            <span class="single__yearly">Yearly salary</span>
          </div>
          <div class="single__box1">
            <img
                src="/icons/location.svg"
                alt=""
                class="single__location-icon"
            />
            <h3 class="single__location-title">Job Location</h3>
            <span class="single__location">Dhaka, Bangladesh</span>
          </div>
        </div>

				<div class="single__right">
					<div
						class="flex items-center p-8 bg-white rounded-8 border-[1px] boeder-solid flex-col md:flex-row md:justify-center lg:justify-center gap-4"
					>
						<div
							class="flex items-center border-[0px] flex-col md:px-4 lg:border-r-[1px] border-solid"
						>
							<h3 class="single__salary">Salary (USD)</h3>
							<span class="single__salary-year"
								>${{ currentItem?.min }}-${{ currentItem?.max }}</span
							>
							<span class="single__yearly">Yearly salary</span>
						</div>

						<div class="flex items-center justify-center flex-col">
							<img
								src="/icons/location.svg"
								alt=""
								class="single__location-icon"
							/>
							<h3 class="single__location-title">Job Location</h3>
							<span class="single__location">Dhaka, Bangladesh</span>
						</div>
					</div>

					<div class="single__bottom">
						<div class="single__overview">
							<h2 class="single__overview-tit">Job Overview</h2>

					</div>
				</div>
			</div>		

        <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <CardsVacancy v-for="(item, idx) in obj" :item="item" :key="idx"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {obj} from "@/constants";

const route = useRoute()
const currentItem = computed(jobsCard.find(item => item.title == route.params.slug))
</script>

<style scoped>
@import url(./slug.scss);
</style>
