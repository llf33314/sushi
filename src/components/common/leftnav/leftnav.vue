<template>
  <div class="left-nav">
    <el-row class="left-nav-head">
      <el-col :span="2" :offset="21">
        <i class='iconfont icon-gengduo2'></i>
      </el-col>
    </el-row>
    <el-row class="left-nav-body">
      <el-col :span="8" class="left-nav-body-panes" v-for="ps in leftdata" :key="ps.id">
        <p class="l-n-b-p-icon">
          <i :class=ps.icon></i>
        </p>
        <p class="l-n-b-p-text">{{ps.name}}</p>
      </el-col>
    </el-row>
    <el-row class="left-nav-foot">
      <span>
        退出
      </span>
    </el-row>
  </div>
</template>

<script>
var leftdata = [
  {
    name: '前台',
    icon: 'iconfont icon-unie63e'
  },
  {
    name: '线上订单',
    icon: 'iconfont icon-dingdan'
  },
  {
    name: '账单',
    icon: 'iconfont icon-billing6'
  },
  {
    name: '会员',
    icon: 'iconfont icon-huiyuan'
  },
  {
    name: '交班',
    icon: 'iconfont icon-yinliao'
  },
  {
    name: '统计',
    icon: 'iconfont icon-tongji1'
  },
  {
    name: '钱箱',
    icon: 'iconfont icon-yy'
  },
  {
    name: '消息管理',
    icon: 'iconfont icon-yikeappshouyetubiao35'
  },
  {
    name: '后台设置',
    icon: 'iconfont icon-shezhi'
  }
]
export default {
  name: 'leftnav',
  data () {
    return {
      leftdata
    }
  }
}
</script>

<style scoped>
.left-nav{
  width: 25rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 1000;
}
  .left-nav-head{
    height: 2.7rem;
    border-bottom: 2px solid rgb(245,245,245);
    display: flex;
    align-items:center;
    justify-content: center;
  }
.left-nav-head i{
  font-size: 1.5rem;
  color:rgb(151, 168, 190);
  cursor: pointer;
}
.left-nav-body-panes{
  height: 7rem;
  padding-top: 1.5rem;
}
.left-nav-body-panes p{
  margin: auto;
  width: 3.25rem;
  text-align: center;
}
.l-n-b-p-icon{
  height: 3.25rem;
  background-color: rgb(255,95,95);
  line-height: 3.25rem;
  border-radius: 50%;
  cursor: pointer;
}
.l-n-b-p-icon i{
  font-size: 1.8rem;
  color: #ffffff;
}
.l-n-b-p-text{
  padding-top: 0.5rem;
  font-size: 0.8rem;
}
  .left-nav-foot{
    position: absolute;
    bottom: 3px;
    height: 4rem;
    width: 100%;
    background-color: rgb(255,95,95);
    text-align: center;
    line-height: 4rem;
    color: #ffffff;
  }
.left-nav-foot span:hover{
  cursor: pointer;
}
</style>
