<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
</script>
<template>
  <div class="container articles">
    <h1 class="title">Articles</h1>
    <ul class="list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </ul>
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