<script setup lang="ts">
const route = useRoute();
const isMainPage = computed(() => route.path === '/');
</script>
<template>
  <header class="header">
    <div class="logo">
      <img v-if="isMainPage" src="/images/Qtim.png" alt="logo">
      <NuxtLink v-else to="/"><img src="/images/Qtim.png" alt="logo"></NuxtLink>
    </div>
    <div class="header__right">
        <nav class="nav">
          <NuxtLink to="/works" class="navigation__item">Works</NuxtLink>
          <NuxtLink to="/about" class="navigation__item">About</NuxtLink>
        </nav>
        <div class="options">
          <UButton class="btn" >Let’s work</UButton>
        </div>
    </div>
  </header>
</template>
<style scoped>
  .header {
    max-width: 1390px;
    margin: 0 auto;
    padding: 47px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 90px;
  }
  .nav {
    display: flex;
    align-items: center;
    gap: 58px;
  }
  .navigation__item {
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
  }
  .btn {
    border-radius: 50px;
    padding: 16px 32px;
    font-weight: 400;
    font-size: 20px;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
  }
</style>
