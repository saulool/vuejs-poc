<template>
  <div id="app">
    <menu-bar></menu-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import menuBar from '@/components/MenuBar';

export default {
  components: {
    menuBar,
  },
};
</script>

<style>
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url(./assets/fonts/Roboto-Bold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(./assets/fonts/Roboto-Medium.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(./assets/fonts/Roboto-Regular.woff2) format('woff2');
  }

  body {
    background-image: linear-gradient(45deg,#a0b952,#4fa46d,#008f88);
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    height: 100%;
  }
</style>