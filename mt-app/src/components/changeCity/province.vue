<template>
  <div class>
    <span class="name">按省份选择：</span>
    <Mselect
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      active="province"
    />
    <Mselect
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      active="city"
    />
    <span>直接搜索</span>
    <template>
      <el-select
        v-model="serachWord"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </template>
  </div>
</template>
  </div>
</template>

<script>
import Mselect from "./select.vue";
import api from "@/api/index";
export default {
  data() {
    return {
      provinceList: ["山东", "甘肃", "黑龙江", "陕西", "浙江"],
      province: "省份",
      cityList: ["西安", "渭南", "汉中"],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: ["山东", "甘肃", "黑龙江", "陕西", "浙江"],
      serachWord: "",
      loading: false,
      cityDisabled: true
    };
  },
  components: {
    Mselect
  },
  created() {
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    });
  },
  methods: {
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    remoteMethod(e) {
      // 请求后端接口;
      console.log(e);
    },
    changeProvince(val) {
      this.province = val.name;
      this.cityDisabled = false;
      this.cityList = val.cityInfoList;
    },
    changeCity(val) {
      this.city = val.name;
      this.$store.dispatch("setPosition", val.name);
      this.$router.push({ name: "index" });
    }
  }
};
</script>

