<template>
      <el-row class="head-nav">
        <el-col :span="12"   class="head-nav-left">
          &nbsp;<i :class=leftnav.lefticon></i>&nbsp;&nbsp;{{leftnav.leftname}}
        </el-col>
        <el-col :span="12"  class="head-nav-right">
          <ul class="head-nav-right-ul2">
            <li v-for="li in rightnav.ul2" :key="li.id" :style="{color:li.color}">
              <i :class=li.icon></i>
              <span v-if="li.showK">&nbsp;&nbsp;</span>{{li.name}}
            </li>
          </ul>
          <ul class="head-nav-right-ul1">
            <li v-for="li in rightnav.ul1" :key="li.id" >
              <i :class=li.icon :style="{color:li.color}"></i>&nbsp;&nbsp;({{li.num}})
            </li>
          </ul>
        </el-col>
      </el-row>
</template>

<script>
export default {
  name: 'headnav',
  data () {
    return {
      leftnav: {
        lefticon: 'iconfont icon-gengduo',
        leftname: '康小厨智慧餐饮管理系统'
      },
      rightnav: {
        ul1: [{
          icon: 'iconfont icon-canyin2',
          num: 5,
          color: 'rgb(62,214,112)'
        }, {
          icon: 'iconfont icon-waimai',
          num: 5,
          color: 'rgb(255,95,95)'
        }, {
          icon: 'iconfont icon-mianfeipaidui',
          num: 5,
          color: 'rgb(255,182,67)'
        }],
        ul2: [{
          name: '|',
          color: 'rgb(216,220,229)'
        }, {
          icon: 'iconfont icon-erweima1'
        }, {
          name: '|',
          color: 'rgb(216,220,229)'
        }, {
          icon: 'iconfont icon-mendian',
          showK: true,
          name: '谷通科技'
        }, {
          name: '|',
          color: 'rgb(216,220,229)'
        }, {
          icon: 'iconfont icon-ren',
          showK: true,
          name: 'gt123'
        }]
      }
    }
  }
}
</script>

<style scoped>
  .head-nav{
    height: 4%;
    background-color: rgb(255,255,255);
    color: rgba(33,33,33,0.9);
    font-weight: 500;
  }
  .el-col{
    height: 100%;
  }
  .iconfont:hover{
    cursor: pointer;
  }
  .head-nav-left{
    height: 100%;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
  .head-nav-left i{
    font-size: 1rem;
    color: rgb(152,152,152);
  }
  .head-nav-right{
    height: 100%;
  }
  .head-nav-right .iconfont{
    padding-top: 0.1rem;
  }
  .head-nav-right ul{
    float: right;
  }
  .head-nav-right li{
    height: 100%;
    font-size: 0.8rem;
    float: left;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .head-nav-right-ul1 i{
    font-size: 0.9rem;
  }
  .head-nav-right-ul1 li{
    padding-right:0.8rem;
  }
  .head-nav-right-ul2 i{
    font-size: 1rem;
    color: rgb(113,113,113);
  }
  .head-nav-right-ul2 li{
    padding-right: 0.7rem;
  }
</style>
