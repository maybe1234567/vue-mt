<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
          <M-Menu />
      </el-col>
      <el-col :span="19">
        <life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container/>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import MMenu from '@/components/index/menu.vue'
import life from '@/components/index/life.vue'
import container from '@/components/index/container.vue'
export default {
    components:{
        MMenu,
        life,
        container
    }
};
</script>

<style scoped>
</style>