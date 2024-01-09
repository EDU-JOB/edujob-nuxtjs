<template>
  <section class="company">
    <div class="container">
      <div class="company-title">
        <h2>Top companies</h2>
      </div>
      <div class="company-cards">
        <div class="company-cards__item">
          <div class="company-cards__item-content">
            <img src="/icons/Employers Logo.svg" alt="" />
            <div>
              <div>
                <h3>Dribbble</h3>
                <span>Featured</span>
              </div>
              <p><i class="icon-fi_map-pin"></i> Dhaka, Bangladesh</p>
            </div>
          </div>
          <el-button type="primary" class="w-full">Open Position (3)</el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.company-title {
  font-size: 50px;
  font-weight: 600;
}
.company-cards {
  display: grid;
  grid-template-columns: repeat(3, 32%);
  row-gap: 20px;
  justify-content: space-between;
  align-items: center;
  &__item {
    border-radius: 8px;
    border: 1px solid var(--Gray-100, #e4e5e8);
    background: var(--white, #fff);
    box-shadow: 0px 2px 18px 0px rgba(24, 25, 28, 0.03);
    padding: 24px;
  }
}
</style>
