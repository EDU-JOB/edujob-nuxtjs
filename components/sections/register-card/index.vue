<template>
  <section>
    <div class="container cards">
      <div class="card">
        <h2>Become a Candidate</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a
          dolor convallis efficitur.
        </p>
        <el-button>Register now</el-button>
      </div>
      <div class="card">
        <h2>Become a Candidate</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a
          dolor convallis efficitur.
        </p>
        <el-button>Register now</el-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
section {
  padding: 50px 0;
  .cards {
    display: flex;
    gap: 24px;
  }
  .card {
    padding: 50px;
    border-radius: 12px;
    background: linear-gradient(90deg, #94dff8 0%, #ccdce4 100%),
      var(--white, #cde3e4);
    h2 {
      font-size: 32px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
      color: #636a80;
      padding: 16px 0;
    }
  }
}
</style>
