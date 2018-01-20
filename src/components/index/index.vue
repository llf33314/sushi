<template>

  <div class="sushi-index">
    <headnav></headnav>
    <!--
      <leftnav></leftnav>
    -->
    <el-row class="index-content">
      <el-col :span="6">
        <indexleft></indexleft>
      </el-col>
      <el-col :span="12" style="border-top:0.5rem solid rgb(246,246,246);border-bottom:0.5rem solid rgb(246,246,246);">
        <indexmiddle></indexmiddle>
      </el-col>
      <el-col :span="6">
        <indexright></indexright>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import headnav from '@/components/common/headnav/headnav'
import leftnav from '@/components/common/leftnav/leftnav'
import indexleft from '@/components/indexleft/indexleft'
import indexright from '@/components/indexright/indexright'
import indexmiddle from '@/components/indexmiddle/indexmiddle'

export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    headnav,
    leftnav,
    indexleft,
    indexright,
    indexmiddle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sushi-index{
  height: 100%;
}
.index-content{
  height: 96%;
}
.index-content .el-col{
  height: 100%;
}
.index-content .el-col:first-child{
  border: 0.5rem solid rgb(246,246,246);
}
.index-content .el-col:last-child{
  border: 0.5rem solid rgb(246,246,246);
}
</style>
