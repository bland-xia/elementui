<template>
  <div class="loginStyle">
    <div class="left"></div>
    <div class="right">
      <div class="right_top"></div>
      <div class="right_bottom">
        <Item :list="list" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./components/item.vue";
export default {
  data() {
    return {
      list: [
        {
          server: 1,
          title1: "客服1能源部咖喱啊ლ(´ڡ`ლ)好吃的.Thanks♪(･ω･)ﾉ๑Ő௰Ő๑)曾经瘦过，你也是厉害！∑(っ°Д°;)っ卧槽，不见了Σσ(・Д・；)我我我什么都没做!!!Fight!!(ｏ^-^)尸~''☆ミ☆ミ 我草卡瓦斯弹3",
          title2: "能源部",
          title3: "已完成",
          children: [
            {
              server: 2,
              title1: "客服",
              title2: "能源部1-1",
              title3: "已完成1-1",
            },
            {
              server: 2,
              title1: "客服",
              title2: "能源部1-2",
              title3: "已完成1-2",
            },
            {
              server: 2,
              title1: "客服1-3",
              title2: "能源部1-3",
              title3: "已完成1-3",
            },
          ],
        },
        {
          server: 1,
          title1: "客服2-1wakl;kl;k;lgass娃娃发生活动",
          title2: "能源部",
          title3: "已完成",
          children: [
            {
              server: 2,
              title1: "客服2-2",
              title2: "能源部2-2",
              title3: "已完成2-2",
              children: [
                {
                  server: 3,
                  title1: "客服3-1",
                  title2: "能源部3-1",
                  title3: "已完成3-1",
                },
              ],
            },
            {
              server: 2,
              title1: "客服2-2",
              title2: "能源部2-2",
              title3: "已完成2-2",
            },
          ],
        },
      ],
    };
  },
  components: {
    Item,
  },
};
</script>

<style scoped lang='less'>
.loginStyle {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 25%;
    background-color: gold;
  }
  .right {
    width: 75%;
    .right_top {
      height: 200px;
      background-color: seagreen;
    }
    .right_bottom {
      height: calc(100% - 200px);
      background-color: skyblue;
      overflow: auto;
    }
  }
}
</style>
