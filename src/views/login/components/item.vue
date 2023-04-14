<template>
  <div class="itemStyle">
    <div class="contentStyle">
      <div v-for="(item, i) in list" :key="i">
        <div class="one">
          <div>{{ item.title1 }}</div>
          <div>{{ item.title2 }}</div>
          <div>{{ item.title3 }}</div>
        </div>
        <Tree :list="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tree",
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style scoped lang='less'>
.itemStyle {
    width: 100%;
    height: 100%;
  .contentStyle {
    width: 100%;
    height: 100%;
    display: flex;
    .one{
        width: 600px;
    }
  }
}
</style>
