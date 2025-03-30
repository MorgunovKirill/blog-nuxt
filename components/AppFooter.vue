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
        <div class="footer__block">
          <p>For all questions</p>
          <p>+7 (920) 278—00—68</p>
          <p>qtim@agency.com</p>
        </div>
        <div class="footer__block">
          <p>Office in Russia</p>
          <p>139 Ruben Station Lake Drew, NM 52678</p>
        </div>
        <div class="footer__block">
          <p>Office in Dubai</p>
          <p>139 Ruben Station Lake Drew, NM 52678</p>
        </div>
      </div>
    </div>
    <div class="container footer__bottom">
      <nav class="footer__nav footer__nav--left">
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Telegram</li>
        </ul>
      </nav>
      <nav class="footer__mid">Go</nav>
      <nav class="footer__nav footer__nav--right">
        <ul>
          <li>Behance</li>
          <li>LinkedIn</li>
          <li>Privacy Policy</li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
<style scoped lang="scss">
  .footer {
    padding-top: 140px;
    background-color: #E2BEFF;
    min-height: 900px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
  .footer__block {
    margin: 0 0 36px 0;
    p {
      margin: 0 0 12px 0;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
    }
  }
  .footer__bottom {
    position: relative;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
  .footer__nav {
    padding-bottom: 30px;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      gap: 32px;
    }
  }
  .footer__mid {
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    color: #ffffff;
    background-color: #101010;
    width: 358px;
    height: 358px;
    border-radius: 50%;
    display: flex;
    padding-top: 90px;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: -200px;
  }
</style>
