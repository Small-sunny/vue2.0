<template>
  <div id="app">

 <!-- 路由匹配到的组件将渲染在这里 -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    // Hello
  }
}
</script>

<style>

  *{
    margin: 0;
    padding: 0;
  }
  /*body {
    margin: 0;
    padding: 0;
    background: #65cea7 url(images/login-bg.jpg) no-repeat fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }*/
  a {
    background: transparent;
  }
  a:active,
  a:hover {
    outline: 0;
  }
  /*.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
   @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  } */
  img {
    vertical-align: middle;
  }
  .img-responsive,
  .thumbnail > img,
  .thumbnail a > img,
  .carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }
  #app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  .row {
    margin-left: -15px;
    margin-right: -15px;
  }
  @media (min-width: 992px){
    .col-md-8 {
      width: 66.66666667%;
    }

    }
  .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .btn-block {
    display: block;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  .btn-lg, .btn-group-lg>.btn {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
    border-radius: 6px;
  }

</style>
