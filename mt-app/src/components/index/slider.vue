<template>
  <div class="slider" >
    <div class="block" >
      <span class="demonstration"></span>
      <el-carousel  height="240px" >
        <el-carousel-item v-for="item in imgList" :key="item">
         <img :src="item" alt="" height="240px">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
        'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
      ]
    };
  }
};
</script>

<style scoped lang = 'scss'>
@import "@/assets/css/index/life.scss";
</style>