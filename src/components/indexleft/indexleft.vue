<template>
  <div class="index-l-content">
    <el-row  class="diancandan">
      <el-col :span="24" class="diancandantitle">
        点餐单
      </el-col>
      <div  style="border-bottom: 1px solid rgb(246,246,246);clear: both">
      </div>
      <el-col :span="24" class="diancandanselect">
        <el-row  :gutter="15">
          <el-col :span="8" v-for="select in diancanselect" :key="select.id">
            <div class="grid-content">
              <el-select v-model="select.value" placeholder="请选择">
                <el-option
                  v-for="item in select.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="diancanlist">
      <el-col :span="24" v-for="item in diancanlist" :key="item.id" class="diancanlistitems">
        <el-row>
          <el-col :span="12">
            {{item.name}}
          </el-col>
          <el-col :span="12" style="text-align: right;color: red;">
            ￥20
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" style="font-size: 0.8rem;color: rgb(153,153,153);">
            好喝的雀巢拿铁
          </el-col>
          <el-col :span="8" :offset="4" style="text-align: right;">
            <el-input placeholder="请输入内容" size="small" value="1">
              <template slot="prepend">-</template><template slot="append">+</template>
            </el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" class="diancanlisttotal">
        <el-col :span="12">
          商品数量：
        </el-col>
        <el-col :span="8" :offset="4">
          总计：
        </el-col>
      </el-col>
    </el-row>
    <el-row class="diancancaozuo" :gutter="12">
      <el-col :span="6" v-for="item in diancancaozuo" :key="item.id">
        <div class="grid-content">
          <i :class=item.icon></i>
        </div>
      </el-col>
    </el-row>
    <el-row class="diancantijiao" :gutter="12">
      <el-col :span="12">
        <div class="grid-content">
          <el-button type="warning">挂单</el-button>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <el-button type="danger">取单(6)</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
var diancanselect = [{
  options: [{
    value: '选项1',
    label: '堂食'
  }, {
    value: '选项2',
    label: '外卖'
  }, {
    value: '选项3',
    label: '打包'
  }],
  value: ''
}, {
  options: [{
    value: '选项1',
    label: '黄金糕'
  }, {
    value: '选项2',
    label: '双皮奶'
  }, {
    value: '选项3',
    label: '蚵仔煎'
  }, {
    value: '选项4',
    label: '龙须面'
  }, {
    value: '选项5',
    label: '北京烤鸭'
  }]
}, {
  options: [{
    value: '选项1',
    label: '黄金糕'
  }, {
    value: '选项2',
    label: '双皮奶'
  }, {
    value: '选项3',
    label: '蚵仔煎'
  }, {
    value: '选项4',
    label: '龙须面'
  }, {
    value: '选项5',
    label: '北京烤鸭'
  }]
}]
var diancanlist = [{
  name: '好喝的菠萝拿铁'
}, {
  name: '菠萝拿铁'
}, {
  name: '菠萝拿铁'
}, {
  name: '菠萝拿铁'
}, {
  name: '菠萝拿铁'
}, {
  name: '菠萝拿铁'
}]
var diancancaozuo = [{
  name: '删除',
  icon: 'iconfont icon-shanchu1'
}, {
  name: '备注',
  icon: 'iconfont icon-beizhu'
}, {
  name: '上滑',
  icon: 'iconfont icon-xiangshangjiantou'
}, {
  name: '下滑',
  icon: 'iconfont icon-xiangxiajiantou'
}]
export default {
  name: 'indexleft',
  data () {
    return {
      diancanselect,
      diancanlist,
      diancancaozuo
    }
  }
}
</script>

<style scoped>
  .index-l-content{
    height: 100%;
  }
  .diancandan{
    border-bottom: 0.5rem solid rgb(246,246,246);
    height: 14%;
  }
  .diancandantitle{
    font-weight: 600;
    height: 35%;
    display: flex;
    align-items: center;
    padding: 0 0.8rem;
  }
  .diancandanselect{
    height: 65%;
    display: flex;
    align-items: center;
  }
  .diancandanselect .el-row{
    padding: 0 0.8rem;
  }
  .diancanlist{
    border-bottom: 1px solid rgb(246,246,246);
    height: 72%;
  }
  .diancanlistitems{
    height: 15.8%;
    padding: 0.8rem 0;
    width: 91%;
    margin-left:1rem;
    border-bottom: 1px dashed rgb(223,230,236);
  }
  .diancanlistitems .el-row:first-child{
    height: 40%;
  }
  .diancanlisttotal{
    height: 5%;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    padding: 0 0.8rem;
  }
  .diancancaozuo{
    padding: 0 0.8rem;
    height: 6%;
    display: flex;
    align-items: flex-end;
  }
  .diancancaozuo .el-col{
    height: 80%;
  }
.grid-content{
  border-radius: 0.2rem;
}
.grid-content i{
  font-size: 1rem;
  color: rgb(152,152,152);
}
  .diancancaozuo .grid-content{
    height: 100%;
    background-color: rgb(245,245,245);
    border: 1px solid rgb(216,220,229);
    display: flex;
    align-items: center;
    justify-content: center;
  }
.diancancaozuo .grid-content:hover{
  cursor: pointer;
  background-color: rgba(245,245,245,0.3);
}
.diancantijiao{
  height: 8%;
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
}

.diancantijiao .grid-content button{
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
}

</style>
