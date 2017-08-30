<template>
  <div id="app">
    <demo></demo>
  </div>
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'app',
  components: {
    Demo
  }
}
</script>

<style>
#app {
  font-family: Full-Width-Quoration-Marks,".SFNSText",".SFUIText","Helvetica Neue",Helvetica,"Segoe UI",Roboto,"Open Sans","Lucida Grande",Arial,Verdana,"Hiragino Sans GB","PingFang SC","Source Han Sans CN","Source Han Sans SC","Microsoft YaHei","Wenquanyi Micro Hei","WenQuanYi Zen Hei","ST Heiti",SimHei,"WenQuanYi Zen Hei Sharp",FontAwesome,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
