<template>
  <div class="layout-default">
    <el-container>
      <el-header height='100%'>
          <my-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height=''>
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/header/index'
import myFooter from '@/components/footer/footer'

export default {
    components:{
        myHeader,
        myFooter
    }
};
</script>

<style scoped lang = "scss">
  @import '@/assets/css/public/layout.scss';
</style>

