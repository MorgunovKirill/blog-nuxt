<script setup lang="ts">
import type {Article} from "~/types/index.ts";
defineProps<Article>()
</script>
<template>
  <li class="item">
    <img class="img" :src="image" alt="item image">
    <p class="text">{{ preview }}</p>
    <NuxtLink :to="`/articles/${id}`" class="link">Read more</NuxtLink>
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