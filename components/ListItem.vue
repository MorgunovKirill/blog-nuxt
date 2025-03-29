<script setup></script>
<template>
  <li class="item">
    <img class="img" src="/images/defaultImg.png" alt="item image">
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, repudiandae?</p>
    <NuxtLink to="/articles/1" class="link">Read more</NuxtLink>
  </li>
</template>
<style scoped lang="scss">
  img {
    margin-bottom: 24px;
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  .text {
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    margin: 0 0 12px 0;
  }

  .link {
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    color: #E2BEFF;
  }
</style>