<template >
<div class="container login-body">
  <form id="form" class="form-signin" :model="ruleForm2" :rules="rules2">
    <div class="form-signin-heading text-center">
      <h1 class="sign-title">定军山数字电影拷贝传输服务平台</h1>
      <img src="../images/login-logo.png" alt=""/>
    </div>
    <div class="login-wrap">
      <input type="text" v-model="ruleForm2.account" name="userName" class="form-control" placeholder="用户名" autofocus>
      <input type="password" v-model="ruleForm2.checkPass" name="passwd" class="form-control" placeholder="密码">

      <!--<div class="row">
        <input id="sRand" type="text" class="col-md-8" placeholder="验证码" width="60%">
        <img class="col-md-4" align="middle" id="code" src="image.jsp" onClick="this.src='image.jsp?' + new Date().getTime();"/>
      </div>-->

      <button class="btn btn-lg btn-login btn-block" type="button" @click="submitForm">
        <!--<i class="fa fa-check"></i>-->
        <span>登录</span>
      </button>

    </div>

  </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      ruleForm2: {
        account: 'admin',
        checkPass: 'admin'
      },
      rules2: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    submitForm: function () {
      this.$router.push({ path: '/Hello' })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    margin: 0;
    padding: 0;
    background: #65cea7 url(../images/login-bg.jpg) no-repeat fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }
h1, h2 {
  font-weight: normal;
}

.login-body {

}
.form-signin {
  max-width: 330px;
  margin: 150px auto;
  background: #fff;
  border-radius: 5px;
  -webkit-border-radius: 5px;
}
.form-signin .form-signin-heading {
  margin: 0;
  padding: 10px 15px;
  text-align: center;
  color: #fff;
  position: relative;
}
.sign-title {
  font-size: 24px;
  color: #fff;
  position: absolute;
  top: -80px;
  left: 0;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
}
.login-wrap {
  padding: 20px;
  position: relative;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.form-signin input[type="text"], .form-signin input[type="password"] {
  margin-bottom: 15px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  border: 1px solid #eaeaec;
  background: #eaeaec;
  box-shadow: none;
  font-size: 12px;
}
.form-signin .form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#sRand {
  margin-left: 15px;
  padding: 8px;
  width: 180px;
}
.btn-login{
  font-size: 22px;
  margin-top: 0;
}
.form-signin .btn-login {
  background: #6bc5a4;
  color: #fff;
  text-transform: uppercase;
  font-weight: normal;
  font-family: 'Open Sans', sans-serif;
  margin: 20px 0 5px;
  padding: 5px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}
</style>
