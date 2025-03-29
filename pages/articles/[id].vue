<script setup>
const route = useRoute()
</script>
<template>
  <div class="container articles">
    <h1 class="title">At Test & Code, you can learn about software design</h1>
    <img class="img" src="/images/defaultImg.png" alt="article image">
    <h2 class="heading">About</h2>
    <p class="text">The business model of this service is an aggregator that brings together commercial and noncommercial
      organizations and charges a commission for transactions. The percentage that goes to the account of the platform
      owner is discussed individually with each company. The platform also has a subscription system. It allows
      nonprofits to post more than one project for which they collect donations.</p>
  </div>
</template>
<style scoped lang="scss">
.articles {
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