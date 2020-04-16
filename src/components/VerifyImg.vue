<template>
  <div id="verify-code-label-input">
      <div class="label">验证码</div>
      <input class="input" type="text" v-model="code" placeholder="请输入验证码">
      <img id="verify-img" :src="imgCode" v-bind:title="title" v-on:click="clickChangeCode()">
  </div>
</template>

<script>
    export default {
        name: "VerifyImg",
        data: function () {
          return {
            code: '',
            title: "点击更换",
            imgCode: 'http://localhost:7071/pmp/verify/getCodeImg?' + Math.random() * 10,
          }
        },
        methods: {
          clickChangeCode: function () {
            console.log('imgCode', this.imgCode);
            this.imgCode = 'http://localhost:7071/pmp/verify/getCodeImg?' + Math.random() * 10;
          }
        }
    }
</script>

<style scoped>
  #verify-code-label-input{
    padding-top: 25px;
    height: 40px;
    line-height: 40px;
    float: left;
  }
  #verify-code-label-input .label{
    width: 300px;
    height: 25px;
    font-family: Avenir;
    text-align: right;
    letter-spacing: 12px;
    font-size: 20px;
    float: left;
  }
  #verify-code-label-input .input{
    height: 35px;
    width: 100px;
    float: left;
    padding-left: 10px;
    margin-left: 10px;
    border: none;
    letter-spacing: 1px;
    border-radius: 3px;
  }
  #verify-img{
    font-size: 15px;
    line-height: 35px;
    height: 33px;
    width: 50px;
    padding-left: 5px;
  }
</style>
