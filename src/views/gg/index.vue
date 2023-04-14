<template>
  <div class="container">
    <div class="box1">1</div>
    <div class="box2">
      <div class="box3">3</div>
      <div class="box4">
        <DiGui class="dragBox" :list="list" />
      </div>
    </div>
  </div>
</template>

<script>
import DiGui from "./digui.vue";
export default {
  // Vue 实例的数据对象
  data() {
    return {
      list: [],
    };
  },
  components: { DiGui },
  created() {
    new Promise((resolve, reject) => {
      let data = [
        {
          title: "部门",
          title1: "电力交易事业部",
          peson: "老子",
          children: [
            {
              title: "部门",
              title1: "能源交易事业部",
              peson: "在此",
            },
            {
              title: "部门",
              title1: "钱财交易事业部",
              peson: "天下",
            },
            {
              title: "部门",
              title1: "渣渣辉交易事业部",
              peson: "无敌",
              children: [
                {
                  title: "部门",
                  title1: "尜尜交易事业部",
                  peson: "尜尜",
                },
                {
                  title: "部门",
                  title1: "尕尕交易事业部",
                  peson: "尕尕",
                },
              ],
            },
          ],
        },
        {
          title: "部门",
          title1: "嘎嘎交易事业部",
          peson: "嘎嘎",
          children: [
            {
              title: "部门",
              title1: "尜尜交易事业部",
              peson: "尜尜",
            },
            {
              title: "部门",
              title1: "尕尕交易事业部",
              peson: "尕尕",
            },
          ],
        },
      ];
      resolve(data);
    }).then((data) => {
      data.forEach((ele, index) => {
        ele.level = index + 1 + "";
        this.diguiWay(ele, index);
      });
      // console.log(data);
      this.list = data;
    });
  },
  mounted() {},
  methods: {
    diguiWay(ele, index) {
      ele.level = index + 1 + "-"
      if (ele.children) {
        ele.children.forEach((e, i) => {
          console.log(e);
          this.diguiWay(e, index);
        });
        
      }
    },
  },
};
</script>

<style lang='less' scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;

  .box1 {
    width: 20%;
  }
  .box2 {
    width: 80%;
    .box3 {
      height: 200px;
    }
    .box4 {
      height: calc(100% - 200px);
      background-color: #f4faff;
      overflow: auto;
      width: 100%;
      position: relative;
      cursor: pointer;
      .dragBox {
        // position: absolute;
        // left: 50%;
        // transform: translate(-50%, 0%);
        position: absolute;
        left: 0;
      }
    }
  }
}
</style>
