<script setup lang="ts">
import type {Article} from "~/types";
import Spinner from "~/components/Spinner.vue";

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
</script>
<template>
  <div class="container articles">
    <Spinner v-if="status === 'pending'" />
    <div v-if="status !== 'pending' && !error">
      <h1 class="title">Articles</h1>
      <ul class="list">
        <ListItem v-for="article in paginatedArticles" :key="article.id" v-bind="article" />
      </ul>
      <UPagination
          v-model:page="currentPage"
          :items-per-page="perPage"
          :total="data?.length"
          active-color="neutral"
          class="pagination"
          :ui="{
              item: 'w-[44px] h-[44px] rounded-[12px] grid place-items-center cursor-pointer data-[selected=true]:bg-[#000000] bg-[#F3F3F3] border-none',
              first: 'hidden',
              last: 'hidden',
              prev: currentPage === 1 ? 'hidden w-[44px] h-[44px] rounded-[12px]' : 'w-[44px] h-[44px] rounded-[12px] grid place-items-center cursor-pointer',
              next: 'w-[44px] h-[44px] rounded-[12px] grid place-items-center cursor-pointer'
          }"
      ></UPagination>
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

.nextBtn {
  width: 44px;
  height: 44px;
}

.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 44px;
  margin: 0 0 50px 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1068px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.pagination .button {
  width: 44px;
  height: 44px;
}
</style>