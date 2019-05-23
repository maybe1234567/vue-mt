<template>
  <div
    :class="['choose-wrap', disabled ? 'disabled' : '']"
    @click="showWrapper"
    v-document-click="documentClick"
  >
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true, 'active':showWrapperActive }">
        <p>{{title}}</p>
        <div :class="['wrapper', active]">
          <div class="col">
            <span
              :class="{'mt-item':true ,'active': item.name==value}"
              v-for="(item,index) in list"
              :key="index"
              @click="change(item)"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "value", "title", "showWrapperActive", "disabled", "active"],
  data() {
    return {};
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      if (!this.disabled) {
        this.$emit("change_active", true);
      }
    },

    change(item) {
      this.$emit("change", item);
    }
  },
  computed: {
    documentClick() {
      this.showWrapperActive = false;
      this.$emit("change_active", false);
    }
  }
};
</script>

<style scoped lang='scss'>
@import "@/assets/css/changeCity/select.scss";
</style>