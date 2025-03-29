<script setup lang="ts">
import type {Article} from "~/types";

definePageMeta({
  layout: 'default'
})

const perPage = 8;
const currentPage = ref(1);

const {
  data,
  error,
  status
} = await useFetch<Article[]>('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
const paginatedArticles = computed(() => {
  if (!data.value) return [];

  const start = (currentPage.value - 1) * perPage;
  return data.value.slice(start, start + perPage);
});

const totalPages = computed(() => data.value ? Math.ceil(data.value.length / perPage) : 1);
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

console.log('totalPages', totalPages.value)
</script>
<template>
  <div class="container articles">
    <p v-if="status === 'pending'">Загрузка...</p>
    <div v-if="status !== 'pending' && !error">
      <h1 class="title">Articles</h1>
      <ul class="list">
        <ListItem v-for="article in paginatedArticles" :key="article.id" v-bind="article" />
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.articles {
  padding-top: 120px;
  padding-bottom: 140px;
}

.title {
  font-weight: 400;
  font-size: 84px;
  line-height: 100%;
  margin: 0 0 40px 0;
}

.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 44px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1068px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>