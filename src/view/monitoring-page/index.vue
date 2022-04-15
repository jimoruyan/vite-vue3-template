<template>
  <div class="monitor-screen">
    <div class="monitor-screen_header">
      <div class="header-left">
        <div class="header-time">
          {{nowDate.hms}}
        </div>
        <div class="header-data">
          <span>{{nowDate.ymd}}</span>
          <span>{{nowDate.week}}</span>
        </div>
      </div>
      <div class="header-center">
        <div class="header-page_button" @click="router.push({ path: '/data-preview' })"> 系统总览 </div>
        <div class="header-page_title">物联网监控平台</div>
        <div class="header-page_button" @click="router.push({ path: '/data-preview' })"> 数据监控 </div>
      </div>
      <div class="header-right">
        <span @click="router.push({ path: '/dataPreview' })"> 控制台</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { formatTime } from '@/utils/date'

const router = useRouter()
const nowDate = reactive({
  ymd: formatTime(new Date(), 'YMD'),
  hms: formatTime(new Date(), 'HMS'),
  week: formatTime(new Date(), 'WEEK')
})
setInterval(() => {
  nowDate.ymd = formatTime(new Date(), 'YMD')
  nowDate.hms = formatTime(new Date(), 'HMS')
  nowDate.week = formatTime(new Date(), 'WEEK')
}, 1000)

</script>
<style lang="less" scope>
.monitor-screen {
  height: 100vh;
  background-color: #060931;
  color: #fff;
  font-size: 16px;

  .monitor-screen_header {
    display: flex;
    justify-content: space-between;
    height: 70px;
    background: url(./img/top@3x.0011a1d.png) no-repeat;
    background-size: 100% 100%;

    .header-left {
      flex: 1;
      height: 100%;
      padding: 6px 0 0 40px;

      .header-time {
        line-height: 28px;
        font-size: 20px;
        font-weight: 600;
        color: #2bcaff;
        word-spacing: -6px;
      }
      .header-data{
        span{
          margin-right: 8px;
        }
      }
    }

    .header-center {
      width: 546px;
      height: 100%;
      flex: 0 0 auto;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;

      .header-page_button {
        cursor: pointer;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #0095ff;
        display: inline-block;
        border: 1px solid #0095ff;
        border-radius: 10px;
      }

      .header-page_title {
        font-size: 26px;
        font-weight: 600;
        color: #92BCFF;
      }
    }

    .header-right {
      height: 100%;
      flex: 1;
      padding: 11px 40px 0 0;
      display: flex;
      justify-content: flex-end;
      span{
        cursor: pointer;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #0095ff;
        display: inline-block;
        border: 1px solid #0095ff;
        border-radius: 10px;
      }
    }
  }
}
</style>
