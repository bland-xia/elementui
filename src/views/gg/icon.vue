<template>
  <div class="itemClass">
    <!-- :class="item.level.length == 1 ? 'iconLayout' : ''" -->
    <div class="iconClass" >
      <span ref="iconRefs" :data-index="index + 'id'" class="el-icon-caret-bottom"></span>
    </div>

    <div class="contentClass">
      
      <div class="title">{{ item.title + item.level}}</div>
      <h5>{{ item.title1 }}</h5>
      <div>{{ item.peson }}</div>
    </div>
  </div>
</template>

<script>
// import AnNiu from '@/components/anNiu'
export default {
  // Vue 实例的数据对象
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
    index: {
      type: Number,
    },
  },
  // components: {AnNiu},
  created() {},
  mounted() {
    // console.dir(this.$refs.iconRefs);
    // console.log(this.$refs.iconRefs.getBoundingClientRect());
    this.$emit("updateHeight", this.$refs.iconRefs, 'data-index');
  },
  methods: {},
};
</script>

<style lang='less' scoped>
.itemClass {
  position: relative;
  .iconClass {
    text-align: center;
    color: #b8c0cb;
    height: 20px;
    /deep/.el-icon-caret-bottom:before {
      display: inline-block;
      width: 20px;
      height: 20px;
    }
  }
  .contentClass {
    width: 200px;
    background-color: #04a18f;
    text-align: center;
    margin-top: -5px;
  }
}
.iconLayout {
  width: 100%;
  position: absolute;
  bottom: -10px;
  opacity: 0;
}
</style>
