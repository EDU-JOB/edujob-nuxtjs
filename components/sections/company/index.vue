<template>
  <section class="company">
    <div class="container">
      <div class="company-title">
        <h2>Top companies</h2>
        <i class="icon-buildings"></i>
      </div>
      <div class="company-car grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div v-for="el in 6" class="company-cards__item">
          <div class="company-cards__item-content">
            <div class="img-wrapper">
              <img src="/icons/Employers Logo (2).svg" alt=""/>
            </div>
            <div>
              <div class="card-title">
                <h3>Dribbble</h3>
                <span>Featured</span>
              </div>
              <p class="card-location">
                <i class="icon-fi_map-pin"></i> Dhaka, Bangladesh
              </p>
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
.company {
  padding: 50px 0;
}

.company-title {
  font-size: 40px;
  font-weight: 600;
}

.company-cards {
  margin-top: 20px;
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

  &__item-content {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    .card-title {
      display: flex;
      gap: 8px;

      h3 {
        font-size: 18px;
        font-weight: 600;
      }

      span {
        border-radius: 52px;
        background: var(--Danger-50, #fceeee);
        padding: 3px 12px;
        color: var(--Danger-500, #e05151);
        font-size: 14px;

        line-height: 20px; /* 142.857% */
      }
    }

    .card-location {
      font-size: 14px;
      color: #767f8c;
    }

    .img-wrapper {
      width: 56px;
      height: 56px;
      border-radius: 4px;
      background: #ea4c89;
      padding: 16px;
    }
  }
}
</style>
