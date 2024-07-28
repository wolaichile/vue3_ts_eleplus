<template>
    <div class="page-container flex flex-row flex-nowrap justify-center items-center">
        <el-form :model="form" label-width="auto" label-position="top"
            class="bg-slate-300/[0.8] px-16 pt-10 pb-6 rounded-md">
            <el-form-item class="">
                <div class="w-full flex flex-row flex-nowrap justify-center items-center pb-3">
                    <svg-icon name="czfz" width="40px" height="40px" />
                </div>
            </el-form-item>
            <el-form-item label="Username">
                <el-input v-model="form.username" maxlength="20">
                    <template #prefix>
                        <svg-icon name="user" />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-input v-model="form.password" show-password maxlength="20">
                    <template #prefix>
                        <svg-icon name="lock" />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <div class="w-full flex flex-row flex-nowrap justify-between items-center pt-4">
                    <el-button type="primary" @click="sureLogin" :loading="btnLoading">确定</el-button>
                    <el-button>取消</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { loginForm } from "@/api/user/type.ts"
import { useUserStore } from "@/store/modules/user"

import { elMessage, elNotification } from "@/utils"

const router = useRouter()
const userStore = useUserStore()


const form = ref<loginForm>({
    username: 'admin',
    password: '123456'
})
const btnLoading = ref<boolean>(false)

const sureLogin = async () => {
    try {
        btnLoading.value = true
        await userStore.userLogin(form.value)
        elMessage({ message: "登录成功", })
        elNotification({ message: "登录成功" })
        router.push({ path: '/' })
    } catch (error) {

    } finally {
        btnLoading.value = false
    }
}

</script>

<style lang="scss" scoped>
.page-container {
    background: url("@/assets/images/login_bg.jpeg") no-repeat fixed left top;
    background-size: cover;
}
</style>