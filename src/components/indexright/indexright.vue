<template>
  <div class="index-r-content">
    <el-row class="huodongtitle">
      活动栏目
    </el-row>
    <el-row class="huodonglist">
      <el-col :span="2" class="huodonglistl">
        <i class="iconfont icon-fanhui"></i>
      </el-col>
      <el-col :span="20"  class="huodonglistm">
        <el-col :span="8"><div class="huodonglistml">免单</div></el-col>
        <el-col :span="8"><div class="huodonglistml">店庆八折</div></el-col>
        <el-col :span="8"><div class="huodonglistml">全场五折</div></el-col>
      </el-col>
      <el-col :span="2" class="huodonglistl rotate180">
        <i class="iconfont icon-fanhui"></i>
      </el-col>
    </el-row>
    <el-row class="huodongquery">
      <el-input size="large" placeholder="查询卡号/手机号/券号">
        <i slot="prefix" class="el-input__icon iconfont icon-saoyisao" style="font-size: 1rem"></i>
      </el-input>
    </el-row>
    <el-row class="huodongtitle">
      订单详情
    </el-row>
    <el-row class="dingdanlist">
      <ul class="dingdanlistul">
        <li>
          <span class="floatl">订单总额</span>
          <span class="floatr">￥120</span>
        </li>
        <li>
          <span class="floatl">会员优惠</span>
          <span class="floatr">-￥20</span>
        </li>
        <li>
          <span class="floatl">商家优惠</span>
          <span class="floatr">-￥10</span>
        </li>
        <li>
          <span class="floatl">应收金额</span>
          <span class="floatr" style="color: red">￥90</span>
        </li>
      </ul>
    </el-row>
    <el-row class="huodongtitle">
      选择支付
    </el-row>
    <el-row class="zhifulist" :gutter="10">
      <div class="zflistcontent">
        <el-col :span="8" v-for="item in zhifulist" :key="item.id">
          <div class="grid-content">
            <div><i :class=item.icon></i></div>
            <div>{{item.name}}</div>
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row class="jiezhang">
      <el-button type="danger" style="font-size: 1rem">确认并结账</el-button>
    </el-row>
  </div>
</template>

<script>
var zhifulist = [{
  name: '扫码支付',
  icon: 'iconfont icon-saoma'
}, {
  name: '现金支付',
  icon: 'iconfont icon-shouyin'
}, {
  name: '银行卡',
  icon: 'iconfont icon-shiminqia'
}, {
  name: '会员卡',
  icon: 'iconfont icon-viphuiyuan'
}, {
  name: 'POS机',
  icon: 'iconfont icon-posjizhinan'
}, {
  name: '魔盒',
  icon: 'iconfont icon-hezixiangzi'
}, {
  name: '个人微信',
  icon: 'iconfont icon-weixin'
}, {
  name: '个人支付宝',
  icon: 'iconfont icon-zhifubao'
}, {
  name: '挂账',
  icon: 'iconfont icon-shouyintai-richangshouzhi-zhichu-gongzijiangjin'
}]
export default {
  name: 'indexright',
  data () {
    return {
      zhifulist
    }
  }
}
</script>

<style scoped>
  .index-r-content{
    height: 100%;
  }
  .huodongtitle{
    height: 5%;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
  .huodongtitle{
    border-bottom: 1px solid rgb(246,246,246);
  }
  .huodonglist{
    padding: 0.5rem 1rem;
    height: 8%;
  }
  .huodonglist .el-col{
    line-height: 2.6rem;
    text-align: center;
    font-size: 0.8rem;
  }
  .huodonglistl{
    background-color: rgb(238,241,246);
    border-radius: 0.2rem 0 0 0.2rem;
  }
  .huodonglistm{
    padding-left: 0.5rem
  }
  .huodonglistm .el-col{
    padding-right: 0.5rem
  }
  .huodonglistml{
    border: 1px solid rgb(216,220,229);
    height: 96%;
    border-radius: 0.2rem;
  }
  .huodongquery{
    height: 7%;
    padding: 0 1rem 0.7rem 1rem;
    border-bottom: 0.5rem solid rgb(246,246,246);
  }
  .dingdanlist{
    padding: 0.7rem 1rem;
    border-bottom: 0.5rem solid rgb(246,246,246);
    height: 24%;
    display: flex;
    align-items: center;
  }
  .dingdanlistul{
    height: 8rem;
    border: 1px solid rgb(216,220,229);
    width: 100%;
  }

  .dingdanlistul li{
    list-style: none;
    padding: 0.5rem 2rem 0 2rem;
    font-size: 0.8rem;
    height: 1.2rem;
  }
  .dingdanlistul li:first-child{
    padding: 0.9rem 2rem 0 2rem;
  }
  .zhifulist{
    padding: 0 1rem;
    height: 38%;
    display: flex;
    align-items: center;
  }
  .zflistcontent{
    height: 95%;
  }
  .zflistcontent .el-col{
    height: 33%;
  }
  .zhifulist .grid-content{
    height: 90%;
    border: 1px solid red;
    margin-top: 10%;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
   }
  .zhifulist .grid-content:hover{
    background-color: rgb(255,235,235);
    cursor: pointer;
  }
  .zhifulist .grid-content div{
    text-align: center;
    color: rgb(51,51,51);
    font-size: 1rem;
  }
  .zhifulist .grid-content div:first-child{
    color: rgb(71,86,105);
  }
  .zhifulist .grid-content div:first-child i{
    font-size: 2rem;
  }
  .jiezhang{
    padding:  0.5rem 1rem;
  }
  .jiezhang .el-button{
    width: 100%;
    height: 2.4rem;
  }
</style>
