<template>
  <div id="login-page">
    <div id="login-window" class="login-window">
      <div class="welcome">{{ welcome }}</div>
      <div class="label-input">
        <div class="label">用户名</div>
        <input class="input" type="text" v-model="username"  placeholder="请输入用户名">
      </div>
      <div class="label-input">
        <div class="label">密    码</div>
        <input class="input" type="password" v-model="password" placeholder="请输入密码">
      </div>
      <verifyImg ref="verify"></verifyImg>
      <button v-bind:class="{hoverActive: hoverActive, mouseActive: mouseActive, 'login-button': true}"
              type="button" v-on:click="submit" @mouseover="mouseOver()" @mouseleave="mouseLeave()" @mousedown="mouseDown()" @mouseup="mouseUp()">
        登&nbsp;&nbsp;&nbsp;&nbsp;陆
      </button>
    </div>
  </div>
</template>

<script>
    import verifyImg from '../components/VerifyImg.vue';
    export default {
        name: "Login",
        data: function () {
          return {
            username: "",
            password: "",
            marginTop: 50,
            welcome: "欢迎使用照片管理平台",
            hoverActive: false,
            mouseActive: false,
          }
        },
        components: {
          verifyImg
        },
        methods: {
          submit: function () {
            this.$axios.get('http://localhost:7071/pmp/verify/verifyCode', {
              params: {
                code: this.$refs.verify.$data.code
              }
            }).then(res => {
              console.log('res:', res);
              if (res.data) {
                this.$axios.get('http://localhost:7071/pmp/user/loginWithPassword', {
                  params: {
                    username: this.username,
                    password: this.password
                  }
                }).then(res => {
                  if (res.data == "success") {
                    console.log('success', res);
                    return res;
                  } else if (res.data == "fail") {
                    console.log('fail', '用户名或密码错误');
                  }
                }).catch(err => {
                  console.log('fail', err);
                  return '';
                })
              } else {
                console.log('error:', '验证码错误')
              }
            }).catch(err => {
              console.log(err);
              return '';
            })
          },
          mouseOver: function () {
            this.hoverActive = true;
          },
          mouseLeave: function () {
            this.hoverActive = false;
            this.mouseActive = false;
          },
          mouseDown: function () {
            this.mouseActive = true;
          },
          mouseUp: function () {
            this.mouseActive = false;
          }
        }
    };
</script>

<style scoped>
  #login-page{
    margin-top: 130px;
    margin-right: 120px;
    float: right;
  }
  .login-window{
    width: 700px;
    height: 380px;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 255, 0.5));
    border-radius: 15px;
  }
  .label-input{
    padding-top: 25px;
    height: 40px;
    line-height: 40px;
  }
  .label-input .label{
    width: 300px;
    height: 25px;
    font-family: Avenir;
    text-align: right;
    letter-spacing: 12px;
    font-size: 20px;
    float: left;
  }
  .label-input .input{
    height: 35px;
    float: left;
    padding-left: 10px;
    margin-left: 10px;
    border: none;
    letter-spacing: 1px;
    border-radius: 3px;
  }
  .login-button{
    width: 300px;
    height: 40px;
    text-align: center;
    margin-top: 40px;
    font-size: 20px;
    font-family: 微软雅黑;
    border: none;
    background: rgba(0, 0, 255, 0.2);
    border-radius: 5px;
  }
  .welcome{
    height: 70px;
    line-height: 110px;
    font-family: 微软雅黑;
    font-size: 30px;
    letter-spacing: 10px;
    font-weight: bolder;
  }
  .hoverActive{
    background: rgba(0, 0, 255, 0.5);
  }
  .mouseActive{
    font-size: 19px;
  }
</style>
