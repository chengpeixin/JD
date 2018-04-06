<template>
  <div>
    <div class="loginMode">
      <p v-on:click="pwdlogin">
        <span class="pwdlogin" :class="{active:isactive=='pwd'}">帐号密码登录</span>
      </p>
      <p v-on:click="phonelogin" :class="{active:isactive=='phone'}">
        <span>短信验证码登录</span>
      </p>
    </div>
    <div class="Fillarea" v-if="loginType==='pwd'">
      <div>
        <span>帐号</span><input type="text" v-model="accounts" placeholder="用户名/邮箱/已验证手机" key="pwd1"></div>
      <div>
        <span>密码</span><input type="text" v-model="pwd" placeholder="请输入密码" key="pwd2"></div>
    </div>
    <div class="Fillarea phone" v-if="loginType==='phone'">
      <div>
        <span class="country_code">+86 <img src="./../../static/bottomj.png" alt=""></span><input type="text" v-model="accounts" placeholder="请输入手机号" key="phone1"></div>
      <div>
        <input type="text" v-model="pwd" placeholder="请输入收到的验证码" key="phone2"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 控制显示隐藏
      loginType: 'phone',
      accounts: "", //帐号
      pwd: "", //密码
      isactive:'pwd'
    };
  },
  methods: {
    pwdlogin:function(){
      this.loginType='pwd'
      this.isactive='pwd'
    },
    phonelogin:function(){
      this.loginType='phone'
      this.isactive='phone'
    }
  }
};
</script>

<style lang="scss" scoped>
.loginMode {
  height: 80px;
  background: #fff;
  border-bottom: 1px solid #d7d7d7;
  display: flex;
  justify-content: space-between;
  p {
    height: 98%;
    width: 50%;
  }
  span {
    color: #666;
    height: 100%;
    display: flex;
    font-size: 24px;
    align-items: center;
    font-weight: lighter;
    justify-content: center;
  }
  .active {
    border-bottom: 3px solid #f23030;
  }
}
.Fillarea {
  background: #fff;
  padding: 0 40px;
  div {
    height: 86px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #d7d7d7;
    span {
      font-size: 24px;
      margin-right: 80px;
    }
    input::placeholder {
      color: #ccc;
    }
    input {
      height: 100%;
      width: 60%;
      border: none;
      font-size: 24px;
    }
  }
}
.phone{
  .country_code{
    font-size:26px;
    text-align: right;
    width: 100px;
    margin-right: 30px;
    border: none;
    position: relative;
    img{
      width: 30px;
    }
  }
}
</style>