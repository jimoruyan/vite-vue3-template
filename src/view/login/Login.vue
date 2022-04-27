<template>
  <div class="login-wrapper">
    <el-header>
      <LangChange/>
    </el-header>
    <div class="login">
      <el-card class="login-center">
        <template #header>
          <div class="card_header">
            <span>{{ $t('home.login.form.title') }}</span>
          </div>
        </template>
        <el-form ref="loginFormRef" :model="loginFormState" :rules="rules">
          <el-form-item prop="name">
            <el-input
              v-model.trim="loginFormState.name"
              prefix-icon="el-icon-user-solid"
              maxlength="32"
              :placeholder="$t('home.login.form.accountPlaceholder')"
              clearable/>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input
              v-model.trim="loginFormState.pwd"
              prefix-icon="el-icon-lock"
              maxlength="16"
              show-password
              :placeholder="$t('home.login.form.passwordPlaceholder')"
              clearable
              @keyup.enter.exact="handleLogin"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" :loading="loginFormState.loading" @click="handleLogin">{{$t('home.login.form.loginButtom')}}
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { encode } from 'js-base64'
import { setToken, setAuthed } from '@/utils/auth'
import { useUserStore } from '@/store/modules/user'
import LangChange from '@/components/Tool/LangChange.vue'
import { useI18n } from '@/hooks/web/usei18n'

const router = useRouter()
const userStore = useUserStore()
const loginFormRef = ref()
const { t } = useI18n()
const loginFormState = reactive({
  name: 'admin',
  pwd: '123456',
  loading: false
})
const rules = {
  name: [{ required: true, message: t('home.login.form.accountRequired'), trigger: 'blur' }],
  pwd: [
    { required: true, message: t('home.login.form.passwordRequired'), trigger: 'blur' }
  ]
}
const handleLogin = () => {
  loginFormRef.value.validate(valid => {
    if (!valid) {
      return false
    }
    loginFormState.loading = true
    const params = { name: loginFormState.name, pwd: loginFormState.pwd }
    setTimeout(() => {
      const users = { role: loginFormState.name === 'admin' ? 'admin' : '', username: loginFormState.name }
      Object.assign(params, users)
      sessionStorage.setItem('jwt', encode(JSON.stringify(params)))
      userStore.setUserInfo(params)
      loginFormState.loading = false
      setToken('Bearer')
      setAuthed()
      router.push({ path: '/' })
    }, 1000)
  })
}
</script>

<style lang="less" scoped>
.login-wrapper {
  .el-header{
    display: flex;
    justify-content: end;
    padding: 10px 20px;
    height: 60px;
    line-height: 60px;
    .title{
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      margin-right: 20px;
    }
    .el-dropdown{
      line-height: 60px;
    }
  }
  .login {
    width: 100vw;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .content-text {
      display: flex;
      flex-direction: column;
      margin: 0 200px 200px 0;

      span {
        font-weight: 700;
        margin-bottom: 10px;

        &:nth-child(1) {
          font-size: 40px;
        }

        &:nth-child(2) {
          font-size: 25px;
        }
      }
    }

    .login-center {
      width: 396px;
      height: auto;
      border: none;
      background-color: rgba(255, 255, 255,.1);
    }

    .card_header {
      font-size: 18px;
      font-weight:700;
      text-align: center;
    }
  }

}
</style>
