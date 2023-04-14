<template>
  <div class="TreeViewClass">
    <div v-for="(item, index) in list" :key="index" class="TreeItemClass">
      <Icon :item="item" :index="index" @updateHeight="updateHeight" />
      <TreeView :list="item.children" />
    </div>
  </div>
</template>

<script>
import Icon from "./icon.vue";
export default {
  // Vue 实例的数据对象
  name: "TreeView",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    Icon,
  },
  created() {},
  mounted() {
    // this.$nextTick(() => {
    //   console.log(this.$refs.iconRefs);
    //   // console.log( document.querySelectorAll('data-index'));
    // });
  },
  // updated() {

  // },
  methods: {
    updateHeight(dom,attribute) {
      // console.log(dom, dom.getAttribute(attribute));
      // dom.forEach(e => {
      //   console.log(e.getAttribute(attribute));
      // });
    },
  },
};
</script>

<style lang='less' scoped>
.TreeViewClass {
  display: flex;
  background-color: #f5f7fa;
  .TreeItemClass {
    // position: relative;
    // margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    // .ludashi {
    //   display: flex;
    //   width: calc(100% -200px);
    //   height: 30px;
    //   border: 1px dashed red;
    //   border-radius: 10px;
    // }
  }
}

</style>
