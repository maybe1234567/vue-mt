<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"/>
      {{$store.state.position}}
      <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>[
      <a href="#" v-for="(item,index) in nearCity" :key="index">{{item}}</a>]
    </div>
    <div class="m-user" v-if="!$store.state.userName">
      <router-link class="login" :to="{name:'login'}">立即登录</router-link>
      <router-link class="register" :to="{name:'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    return {
      nearCity: []
    };
  },
  created() {
    api.getCurPosition().then(res => {
      this.$store.dispatch("setPosition", res.data.data.name);
      res.data.data.nearCity.forEach(item => {
        this.nearCity.push(item.name);
      });
    });

  }
};
</script>

<style scoped>
</style>