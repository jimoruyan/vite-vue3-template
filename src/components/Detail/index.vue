<template>
  <div class="detail">
    <ul v-if="detailList && detailList.length > 0" class="detail-ul">
      <el-row>
        <el-col v-for="(item, index) in detailList" :key="index" :span="item.width">
          <li>
            <div class="label" :style="{width: labelWidth}">{{ item.label }}：</div>
            <div class="content" :style="{width: 'calc(100% - ' + labelWidth + ')'}">{{ detailInfo[item.value] ? detailInfo[item.value]: (detailInfo[item.value]===0? 0:'--') }}</div>
          </li>
        </el-col>
      </el-row>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  detailList: {
    type: Array,
    default: function() {
      return []
    }
  },
  labelWidth: {
    type: String,
    default: function() {
      return '120px'
    }
  },
  detailInfo: {
    type: Object,
    default: function() {
      return {}
    }
  }
})
</script>
<style lang="less" scoped>
.detail-ul{
  .el-row{
    display: flex;
    flex-wrap: wrap;
    li{
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      .label{
        color: #9a9ca0;
        text-align: right;
        margin-right: 6px;
      }
      .content{
        color: #9a9ca0;
        text-decoration: none;
      }
    }
    div:last-child li{
      margin-bottom: 20px;
    }
  }
}
</style>
