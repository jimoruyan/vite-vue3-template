<template>
  <div class="home">
    <el-header>
      <div class="left">
        <img src="./img/logo_white.png" alt="">
        <span>{{$t('home.IOT')}}</span>
      </div>
      <div class="menu">
        <el-menu
          mode="horizontal"
          background-color="transparent"
          @select="handleSelect"
        >
          <el-menu-item index="/agriculture">{{$t('home.menu.agriculture')}}</el-menu-item>
          <el-menu-item index="/environment">{{$t('home.menu.environment')}}</el-menu-item>
          <el-menu-item index="/hydrology">{{$t('home.menu.hydrology')}}</el-menu-item>
          <el-sub-menu index="4">
            <template #title>{{$t('home.menu.serviceSupport.serviceSupport')}}</template>
            <el-menu-item index="4-1">{{$t('home.menu.serviceSupport.guide')}}</el-menu-item>
            <el-menu-item index="4-2">{{$t('home.menu.serviceSupport.interfaceDebugging')}}</el-menu-item>
            <el-menu-item index="4-3">{{$t('home.menu.serviceSupport.AppDownload')}}</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>{{$t('home.menu.cooperationMode.cooperationMode')}}</template>
            <el-menu-item index="5-1">{{$t('home.menu.cooperationMode.privateDeployment')}}</el-menu-item>
            <el-menu-item index="5-2">{{$t('home.menu.cooperationMode.neutralRun')}}</el-menu-item>
            <el-menu-item index="5-3">{{$t('home.menu.cooperationMode.projectCustom')}}</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="6">{{$t('home.menu.business')}}</el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <div class="lang-change">
          <LangChange/>
        </div>
      </div>
    </el-header>
    <el-main>
      <el-carousel autoplay trigger="click">
        <el-carousel-item>
          <div class="bg agriculture">
            <div class="content-text">
              <span>物联网·农业灌溉</span>
              <span>综合管理大数据平台</span>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
            <div class="bg environment">
             <div class="content-text">
              <span>物联网·农业灌溉</span>
              <span>综合管理大数据平台</span>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="bg hydrology">
             <div class="content-text">
              <span>物联网·农业灌溉</span>
              <span>综合管理大数据平台</span>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <el-footer>
      Copyright© 2019 物联网平台
    </el-footer>
  </div>
</template>
<script  setup>
import LangChange from '@/components/Tool/LangChange.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleSelect = (key, keyPath) => {
  if (key.indexOf('/') > -1) {
    router.push({ path: key })
  }
}
</script>
<style lang="less" scoped>
@homeFontSize: 20px;
.home {
  background-image: url('./img/home-background.png');
  background-size: cover;
  height: 100vh;
  .el-header {
    display: flex;
    background: transparent;
    height: 70px;
    .left{
      width: 30%;
      height: 70px;
      line-height:70px;
      text-align: center;
      display: flex;
      justify-content:end;
      img{
        margin-top: 5px;
        width: 60px;
        height: 60px;
      }
      span{
        color: #fff;
        margin-left: 10px;
        font-size: 24px;
        min-width: 90px;
      }
    }
    .menu{
      width: 100%;
      .el-menu{
        border-bottom: none;
        display: flex;
        justify-content: center;
        :deep(.el-menu-item) {
          color: #fff;
          font-size: @homeFontSize;
          height: 70px;
          line-height: 70px;
          padding: 0 35px;
          background-color: transparent;
          .el-sub-menu__title{
            font-size: @homeFontSize;
          }
          &.is-active{
            color: #fff !important;
            border-bottom: none;
          }
          &:hover{
            background-color:black;
          }
        }
        :deep(.el-sub-menu__title) {
          color: #fff;
          font-size: @homeFontSize;
          height: 70px;
          line-height: 70px;
           &.is-active{
            color: #fff !important;
            border-bottom: none;
          }
        }
      }
    }
    .right{
      width: 30%;
      .lang-change{
        height: 70px;
        line-height: 70px;
      }
    }
  }
  .el-main{
    padding: 0;
    .el-carousel {
      :deep(.el-carousel__container){
        height: calc(100vh - 130px) ;
        .agriculture{
          background-image: url('./img/agriculture.jpg');
        }
        .environment{
          background-image: url('./img/environment.jpg');
        }
        .hydrology{
          background-image: url('./img/hydrology.jpg');
        }
        .bg {
          width: 100%;
          height: 100%;
          background-size: 100% 100%;
          .content-text{
            display: flex;
            flex-direction: column;
            padding: 200px 0 0 200px;
            span{
              font-weight: 700;
              margin-bottom: 10px;
              &:nth-child(1){
                font-size:40px;
              }
              &:nth-child(2){
                font-size:25px;
              }
            }
          }
        }
      }
    
    }
  }
  .el-footer{
    color: #333;
    text-align: center;
    line-height: 60px;
    min-height: 60px;
  }
}
</style>
