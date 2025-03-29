<script setup lang="ts">
</script>
<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__right">
        <p class="text">Is there a project?</p>
        <h2 class="title">Let’s work together</h2>
      </div>
      <div class="footer__left">
        <p>For all questions</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
  .footer {
    padding-top: 140px;
    background-color: #E2BEFF;
    min-height: 900px;
  }
  .footer__container{
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-weight: 400;
    font-size: 112px;
    line-height: 1;
  }
  .text {
    font-weight: 400;
    font-size: 16px;
    margin: 0 0 56px 0;
  }
  .footer__right {
    flex: 0 0 464px;
  }
</style>
