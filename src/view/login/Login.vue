<template>
  <div class="login">
    <el-card class="login_center">
      <template #header>
        <div class="card_header">
          <span>用户登录</span>
        </div>
      </template>
      <el-form ref="loginFormRef" :model="loginFormState" :rules="rules">
        <el-form-item prop="name">
          <el-input
            v-model.trim="loginFormState.name"
            prefix-icon="el-icon-user-solid"
            maxlength="32"
            placeholder="请输入账号"
            clearable
          />
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            v-model.trim="loginFormState.pwd"
            prefix-icon="el-icon-lock"
            maxlength="16"
            show-password
            placeholder="请输入密码"
            clearable
            @keyup.enter.exact="handleLogin"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="width: 100%"
            :loading="loginFormState.loading"
            @click="handleLogin"
          >登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { encode } from 'js-base64'
import { setToken, setAuthed } from '@/utils/auth'
import { useUserStore } from '@/store/modules/user'
const router = useRouter()
const userStore = useUserStore()
const loginFormRef = ref()

const loginFormState = reactive({
  name: 'admin',
  pwd: '123456',
  loading: false
})

const rules = {
  name: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
  pwd: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 5, max: 16, message: '密码长度为5-16位', trigger: 'blur' }
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
      router.push({ path: '/agriculture' })
    }, 1000)
  })
}

</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    // background-image: url("../../assets/img/login.png");
    // background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .login_center {
        width: 396px;
        height: auto;
    }
    .card_header {
        font-size: 18px;
        text-align: center;
    }
}
</style>
