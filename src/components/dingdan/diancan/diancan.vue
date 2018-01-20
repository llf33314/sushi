<template>
      <div class="order-tabconent">
        <el-row class="order-top">
          <div class="order-lists-fup">
            <el-date-picker
              type="datetimerange"
              :picker-options="pickerOptions2"
              range-separator="至"
              start-placeholder="起始时间"
              end-placeholder="结束时间"
              align="right"
              size="medium"
            >
            </el-date-picker>
            <el-input
              placeholder="订单号/电话/姓名" style="width:15%;margin-left: 1rem" size="medium">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
          <div class="order-lists-fdown">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="待处理（1）" name="first"></el-tab-pane>
              <el-tab-pane label="已下单（8）" name="second"></el-tab-pane>
              <el-tab-pane label="已取消（2）" name="third"></el-tab-pane>
              <el-tab-pane label="全部（11）" name="fourth"></el-tab-pane>
            </el-tabs>
          </div>
        </el-row>
        <el-row class="order-lists">
        </el-row>
        <el-row class="order-lists">
          sssss
        </el-row>
        <el-row class="order-lists">
          sssss
        </el-row>
        <el-row class="order-lists">
          sssss
        </el-row>
        <el-row class="order-lists">
          sssss
        </el-row>
        <el-row class="order-footer">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </el-row>
      </div>
</template>

<script>
export default {
  name: 'diancan',
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>
.order-tabconent{
  height: 100%;
}
  .order-top{
    height: 15.8%;
    border-bottom: 0.5rem solid rgb(246,246,246);
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
  }
.order-lists-fdown{
  flex:1;
}
.order-lists-fup{
  flex:2;
  display: flex;
  align-items: center;
}
.order-lists{
  height: 15.8%;
  border-bottom: 0.5rem solid rgb(246,246,246);
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
}
  .order-footer {
    height: 5.2%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1.5rem;
    font-size: 0.8rem;
  }
</style>
