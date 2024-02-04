<template>
  <section class="single p-0">
    <div class="single__tab">
      <div class="container flex items-center justify-between">
        <h2 class="text-lg font-medium leading-7 text-[#18191c]">
          Job Details
        </h2>
        <Breadcrumb :menu="menu"/>
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

          <div
              class="single__wrapper flex flex-col gap-2 items-start mb-5 lg:block"
          >
            <h2 class="single__title">{{ currentItem?.title }}</h2>
            <span class="single__company-name">at Facebook</span>

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
            <img class="single__apply-icon" src="/icons/strelka.svg" alt=""/>
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
            <br/>
            <br/>
            Here at Velstar, we don't just make websites, we create exceptional
            digital experiences that consumers love. Our team of designers,
            developers, strategists, and creators work together to push brands
            to the next level. From Platform Migration, User Experience & User
            Interface Design, to Digital Marketing, we have a proven track
            record in delivering outstanding eCommerce solutions and driving
            sales for our clients.
            <br/>
            <br/>
            The role will involve translating project specifications into clean,
            test-driven, easily maintainable code. You will work with the
            Project and Development teams as well as with the Technical
            Director, adhering closely to project plans and delivering work that
            meets functional & non-functional requirements. You will have the
            opportunity to create new, innovative, secure and scalable features
            for our clients on the Shopify platform
            <br/>
            <br/>
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
          <h2 class="single__benefits">Benefits</h2>
          <ul class="single__list">
            <li class="single__item md:w-[500px] lg:w-[634px]">
              Early finish on Fridays for our end of week catch up (4:30 finish,
              and drink of your choice from the bar)
            </li>
            <li class="single__item md:w-[500px] lg:w-[634px]">
              28 days holiday (including bank holidays) rising by 1 day per year
              PLUS an additional day off on your birthday
            </li>
            <li class="single__item md:w-[500px] lg:w-[634px]">
              Generous annual bonus.
            </li>
            <li class="single__item md:w-[500px] lg:w-[634px]">
              Healthcare package
            </li>
            <li class="single__item md:w-[500px] lg:w-[634px]">
              Paid community days to volunteer for a charity of your choice
            </li>
            <li class="single__item md:w-[500px] lg:w-[634px]">
              £100 contribution for your own personal learning and development
            </li>
            <li class="single__item md:w-[500px] lg:w-[634px]">
              Free Breakfast on Mondays and free snacks in the office
            </li>
            <li class="single__item md:w-[500px] lg:w-[634px]">
              Access to Perkbox with numerous discounts plus free points from
              the company to spend as you wish.
            </li>
            <li class="single__item md:w-[500px] lg:w-[634px]">
              Cycle 2 Work Scheme
            </li>
            <li class="single__item md:w-[500px] lg:w-[634px]">
              Brand new MacBook Pro
            </li>
            <li class="single__item md:w-[500px] lg:w-[634px]">
              Joining an agency on the cusp of exponential growth and being part
              of this exciting story.
            </li>
          </ul>
        </div>

        <div class="single__right">
          <div
              class="flex items-center p-8 bg-white rounded-8 border-[1px] boeder-solid flex-col md:flex-row md:justify-center  lg:justify-center gap-4"
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

              <ul class="single__overview-list">
                <li class="single__items">
                  <img class="single__icon" src="/icons/post.svg" alt=""/>
                  <h3 class="single__overview-title">Job Posted:</h3>
                  <p class="single__overview-data">14 Jun, 2021</p>
                </li>
                <li class="single__items">
                  <img class="single__icon" src="/icons/search.svg" alt=""/>
                  <h3 class="single__overview-title">Job expire in:</h3>
                  <p class="single__overview-data">14 Aug, 2021</p>
                </li>
                <li class="single__items">
                  <img class="single__icon" src="/icons/Stack.svg" alt=""/>
                  <h3 class="single__overview-title">Job Level:</h3>
                  <p class="single__overview-data">Entry Level</p>
                </li>
                <li class="single__items">
                  <img class="single__icon" src="/icons/Stack.svg" alt=""/>
                  <h3 class="single__overview-title">Job Level:</h3>
                  <p class="single__overview-data">Entry Level</p>
                </li>
                <li class="single__items">
                  <img class="single__icon" src="/icons/search.svg" alt=""/>
                  <h3 class="single__overview-title">Experience</h3>
                  <p class="single__overview-data">$50k-80k/month</p>
                </li>
                <li class="single__items">
                  <img
                      class="single__icon"
                      src="/icons/certificate.svg"
                      alt=""
                  />
                  <h3 class="single__overview-title">sertificat</h3>
                  <p class="single__overview-data">Google Certification</p>
                </li>
              </ul>
            </div>
            <div class="single__links">
              <h2 class="single__links-title">Share this job:</h2>
              <div class="flex items-center gap-2 flex-col md:flex-row">
                <button class="single__links-btn">
                  <img
                      src="/icons/LinkSimple.svg"
                      alt=""
                      class="single__links-icon"
                  />
                  Copy Links
                </button>
                <div class="flex items-center">
                  <a href="" class="single__link">
                    <img
                        src="/icons/linkedin.svg"
                        alt=""
                        class="single__social-icon"
                    />
                  </a>
                  <a href="" class="single__link">
                    <img
                        src="/icons/facebookk.svg"
                        alt=""
                        class="single__social-icon"
                    />
                  </a>
                  <a href="" class="single__link">
                    <img
                        src="/icons/twitter.svg"
                        alt=""
                        class="single__social-icon"
                    />
                  </a>
                  <a href="" class="single__link">
                    <img
                        src="/icons/email.svg"
                        alt=""
                        class="single__social-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="single__related bg-white">
      <div class="container mx-auto">
        <UiTitle title="Related jobs"/>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <CardsVacancy v-for="(item, idx) in relatedJobs" :item="item" :key="idx"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {jobsCard} from "@/constants";

const route = useRoute()
const menu = computed(() => [{link: '/jobs', title: 'Find job'}, {link: '', title: route?.params.slug}]);
const currentItem = computed(() => jobsCard.find(item => item.title == route.params.slug))
const relatedJobs = jobsCard.filter((item, idx) => idx <= 5)
</script>

<style scoped>
@import url(./slug.scss);
</style>