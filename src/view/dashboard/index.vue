<template>
  <div class="home">
    <div class="wrapper">
      <div class="calendar-meetings">
        <div class="calendar-meetings-head">
          <h2>欢迎使用XX系统!</h2>
          <p>可查看预定会议，无需担心多部门临时会议冲突;可追述历史会议时间及管理会议记录，查询年度会议历史。</p>
        </div>
        <div class="calendar-meetings-search">
          <div class="title-state">
            <h3>会议日历</h3>
            <span class="state">进行中</span>
            <span class="state">未开始</span>
            <span class="state">已结束</span>
          </div>
          <div class="form-search">
            <el-select v-model="selectValue1" placeholder="Select" clearable>
              <el-option
                v-for="item in state.cityOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-select v-model="selectValue2" placeholder="Select" clearable>
              <el-option
                v-for="item in state.departmentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="calendar">
          <el-calendar ref="calendar">
            <template #dateCell="{ data }">
              <div>{{ data.day.split('-').slice(2).join() }}</div>
              <div v-if="meentsData[data.day]">
                <el-popover placement="right" :width="200" trigger="hover" :show-arrow="false" popper-class="popper-meet-info">
                  <template #reference>
                    <div class="meet-info" :style="`background-color:${'rgba(67, 126, 255, 0.2)'}`">
                      <span>{{ meentsData[data.day][0].department }}</span>
                      <span>{{ meentsData[data.day][0].meetName }}</span>
                      <span>{{ meentsData[data.day][0].meetTime }}</span>
                    </div>
                  </template>
                  <div class="now-date">
                    <span>{{ data.day }}</span>
                    <span>{{ weekNumToString(new Date(data.day).getDay()) }}</span>
                  </div>
                  <div v-for="(item,index) in meentsData[data.day]" :key="index" :style="`background-color:${'rgba(67, 126, 255, 0.2)'}`" class="meets-info">
                    <span>{{ item.department }}</span>
                    <span>{{ item.meetName }}</span>
                    <span>{{ item.meetTime }}</span>
                  </div>
                </el-popover>
              </div>
            </template>
          </el-calendar>
        </div>
      </div>
      <div class="week-meetings">
        <div class="week-meetings-title">本周会议</div>
        <div v-for="(item, index) in meentsData" :key="index" class="week-meetings-item">
          <div class="now-date">
            <span>{{ item[0].date }}</span>
            <span>{{ weekNumToString(new Date(item[0].date).getDay()) }}</span>
          </div>
          <el-card v-for="(ele,i) in item" :key="i" :style="`border-left-color:${'red'}`" class="box-card">
            <div class="meets">
              <span>{{ ele.department }}</span>
              <span>{{ ele.meetName }}</span>
              <span>{{ ele.meetTime }}</span>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, watch  } from 'vue'

const selectValue1 = ref('')
const selectValue2 = ref('')

const state = {
  cityOptions: [
    {
      value: '1',
      label: '武汉'
    }
  ],
  departmentOptions: [
    {
      value: '1',
      label: '实施部'
    }
  ]
}

const meentsData = {
  '2022-02-15': [
    {
      department: '实施部',
      meetName: '会议管理系统周例会',
      meetTime: '09:30 - 10:30 AM',
      date: '2022-02-15'
    },
    {
      department: '实施部',
      meetName: '会议管理系统周例会',
      meetTime: '09:30 - 10:30 AM',
      date: '2022-02-15'
    }
  ],
  '2022-02-18': [
    {
      department: '实施部',
      meetName: '会议管理系统周例会',
      meetTime: '09:30 - 10:30 AM',
      date: '2022-02-18'
    },
    {
      department: '实施部',
      meetName: '会议管理系统周例会',
      meetTime: '09:30 - 10:30 AM',
      date: '2022-02-18'
    }
  ]
}

const calendar = ref()
onMounted(() => {
  watch(() => calendar.value.curMonthDatePrefix, (oldVlaue, newValue) => {
    console.log(newValue, calendar.value)
    // to 当月的话可以切换到下个月，下个月只能切换会当月(只能查看当月)
  })
})

const weekNumToString = (num) => {
  let week = {
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
    7: '星期日'
  }
  return week[num]
}
     

</script>

<style scope lang="less">
.home {
  background-color: #fff;
  .wrapper{
    display: flex;
    .calendar-meetings{
      width: 1300px;
      padding: 20px;
      box-sizing: border-box;
      .calendar-meetings-head{
        height: 160px;
        background-image: url('./assets/img/meetheadbg.png');
        padding: 60px 40px 40px;
        box-sizing: border-box;
        h2{
          font-size: 30px;
        }
        p{
          margin-top: 20px;
        }
      }
      .calendar-meetings-search{
        height: 60px;
        display: flex;
        background-color: white;
        justify-content: space-between;
        box-sizing: border-box;
        padding-top: 20px;
        .title-state{
          display: flex;
          height: 40px;
          line-height: 40px;
          h3{
            margin-right: 50px;
            font-size: 20px;
            font-weight: 600;
          }
          span{
            margin-left: 30px;
            &:before{
              content: "";
              display: inline-block;
              position: relative;
              right: 5px;
              top: -2px;
              width: 7px;
              height: 7px;
              border-radius: 50%;
            }
            &:nth-child(2):before{
              background:#437eff;
            }
            &:nth-child(3):before{
              background:#fd6d5a;
            }
            &:nth-child(4):before{
              background:#8ba0b3;
            }
          }
        }
        .form-search{
          display: flex;
          width: 460px;
          justify-content: space-between;
          .el-select{
            width: 220px;
            .el-input__inner{
              height: 40px;
            }
          }
        }
      }
      .calendar{
        .meet-info{
          font-size: 12px;
          display: flex;
          flex-direction: column;
          text-align: center;
          padding: 5px;
          border-radius: 5px;
          span{
            margin:2px;
            color: #2b3541;
            &:nth-child(1){
              color: #888888;
            }
          }
        }
      }
    }
    .week-meetings{
      width: calc(100% - 1300px);
      background-color: #f4f5f5;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
      .week-meetings-item{
        margin-top: 10px;
      }
      .week-meetings-title{
        font-size: 20px;
        font-weight: 600;
        padding: 20px;
      }
      .now-date{
        padding: 10px 20px;
        span{
          margin-right: 10px;
        }
      }
      .box-card{
        margin: 5px 20px;
        border-left: 5px solid;
        .el-card__body{
          padding: 15px;
        }
      }
      .meets{
        font-size: 14px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        span{
          margin:3px;
          color: #2b3541;
          &:nth-child(1){
            color: #888888;
          }
          &:nth-child(2){
            margin-top: 10px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.popper-meet-info{
  .now-date{
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }
  .meets-info{
    font-size: 12px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 5px;
     span{
      margin:2px;
      color: #2b3541;
      &:nth-child(1){
        color: #888888;
      }
    }
  }
}
</style>
