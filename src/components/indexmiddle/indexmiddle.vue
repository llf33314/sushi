<template>
  <div class="index-m-content">
    <el-row class="middletop">
      <el-row class="huodonglist">
        <el-col :span="1" class="huodonglistl">
          <i class="iconfont icon-fanhui"></i>
        </el-col>
        <el-col :span="22"  class="huodonglistm">
          <el-col :span="4"><div class="huodonglistml">全部</div></el-col>
          <el-col :span="4"><div class="huodonglistml">奶茶</div></el-col>
          <el-col :span="4"><div class="huodonglistml">水果茶</div></el-col>
          <el-col :span="4"><div class="huodonglistml">咖啡</div></el-col>
          <el-col :span="4"><div class="huodonglistml">甜品</div></el-col>
          <el-col :span="4"><div class="huodonglistml">小吃</div></el-col>
        </el-col>
        <el-col :span="1" class="huodonglistl rotate180">
          <i class="iconfont icon-fanhui"></i>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="middlebody" :gutter="10">
      <el-col :span="6">
        <div  class="grid-content">
          <div class="goodslistup">
            好喝的拿铁
          </div>
          <div class="goodslistdown">
            <span>0.0.2</span>
            <span>选规格</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div  class="grid-content">
          <div class="goodslistup">
            好喝的拿铁
          </div>
          <div class="goodslistdown">
            <span>0.0.2</span>
            <span>选规格</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="middlefoot">
      <el-col :span="11">
        <el-input></el-input>
      </el-col>
      <el-col :span="13" style="text-align: right">
        <el-button>临时菜</el-button>
        <el-button>沽清</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'indexmiddle'
}
</script>

<style scoped>
  .index-m-content{
    height: 100%;
  }
  .middletop{
    display: flex;
    align-items: center;
    height: 8%;
    padding: 0 0.5rem;
    border-bottom:  1px solid rgb(246,246,246);
  }
  .huodonglist{
    height: 80%;
    width: 100%;
  }
  .huodonglist .el-col{
    height: 100%;
  }
  .huodonglistl{
    background-color: rgb(238,241,246);
    border-radius: 0.3rem 0 0 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .huodonglistm{
    padding-left: 0.5rem
  }
  .huodonglistm .el-col{
    padding-right: 0.5rem;
  }
  .huodonglistml{
    border: 1px solid rgb(216,220,229);
    height: 96%;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .middlebody{
    height: 85%;
    width: 100%;
    overflow: auto;
    padding-left: 0.5rem;
  }
  .middlebody>.el-col{
    margin-top: 0.5rem;
    height: 13.5%;
  }
  .middlebody .grid-content{
    background-color:  rgb(255,235,235);
    height: 100%;
    border-radius: 0.3rem;
    border: 1px solid rgb(255,133,133);
  }
  .goodslistup{
    padding: 0 0.8rem;
    height: 60%;
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    align-items: center;
    border-bottom: 1px solid rgb(255,133,133);
  }
  .goodslistdown{
    height: 39%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 0 0 0.3rem 0.3rem;
  }
  .middlefoot{
    height: 7%;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
  }
</style>
