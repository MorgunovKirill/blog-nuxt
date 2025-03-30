<script setup lang="ts">
import type {Article} from "~/types";
import Spinner from "~/components/Spinner.vue";

const route = useRoute()
const {
  data,
  error,
  status
} = await useFetch<Article>(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`)

const article = computed(() => {
  if (!data.value) return null;
  return data.value;
});
</script>
<template>
  <div class="container article">
    <Spinner v-if="status === 'pending'" />
    <div v-if="status !== 'pending' && !error && article">
      <h1 class="title">{{ article.title }}</h1>
      <img class="img" :src="article.image" alt="article image">
      <h2 class="heading">About</h2>
      <p class="text">{{ article.description }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.article {
  padding-top: 110px;
  padding-bottom: 80px;
}

.title {
  font-weight: 400;
  font-size: 84px;
  line-height: 100%;
  margin: 0 0 33px 0;
}

img {
  width: 100%;
  margin-bottom: 80px;
}

.heading {
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  margin: 0 0 32px 0;
}

.text {
  font-weight: 400;
  font-size: 36px;
  line-height: 124%;
}
</style>