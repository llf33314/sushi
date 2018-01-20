<template>
  <div class="order-index">
    <headnav></headnav>
    <div class="order-content">
      <el-row class="order-tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane style="height: 90%" v-for="item in tabTitles" :key="item.id" :label=item.label :name=item.name>
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row class="order-tabconent">
        <diancan v-if="activeName==='diancan'"></diancan>
        <waimai v-if="activeName==='waimai'"></waimai>
        <paidui v-if="activeName==='paidui'"></paidui>
      </el-row>
    </div>
  </div>
</template>

<script>
import headnav from '@/components/common/headnav/headnav'
import diancan from '@/components/dingdan/diancan/diancan'
import waimai from '@/components/dingdan/waimai/waimai'
import paidui from '@/components/dingdan/paidui/paidui'

var tabTitles = [{
  label: '到店点餐',
  name: 'diancan'
}, {
  label: '外卖',
  name: 'waimai'
}, {
  label: '排队',
  name: 'paidui'
}]
export default {
  name: 'dingdanindex',
  components: {
    headnav,
    diancan,
    waimai,
    paidui
  },
  data () {
    return {
      activeName: 'diancan',
      tabTitles
    }
  },
  methods: {
    handleClick () {
      console.log(this.activeName)
    }
  }
}
</script>

<style scoped>
  .order-index{
    height: 100%;
  }
  .order-content{
    height: 96%;
    box-sizing: border-box;
    border: 0.5rem solid rgb(246,246,246);
  }
  .order-tabs{
    padding: 0 0.5rem;
    height: 5%;
  }
  .order-tabs .el-tabs{
    height: 100%;
  }
  .order-tabconent{
    height: 95%;
  }
</style>
