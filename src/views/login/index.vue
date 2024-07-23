<template>
    <div class="page-container flex flex-row flex-nowrap justify-center items-center">
        <el-form :model="form" label-width="auto" label-position="top" class="bg-slate-300 px-16 pt-10 pb-6 rounded-md">
            <el-form-item label="" class="w-60">
                <div class="w-full flex flex-row flex-nowrap justify-center items-center pb-3">
                    <svg-icon name="czfz" width="40px" height="40px" />
                </div>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="form.username" :prefix-icon="User" maxlength="20" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" :prefix-icon="Lock" show-password maxlength="20" />
            </el-form-item>
            <el-form-item>
                <div class="w-full flex flex-row flex-nowrap justify-around items-center">
                    <el-button type="primary">确定</el-button>
                    <el-button>取消</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue'

import { loginForm } from "@/api/user/type.ts"

import { ref } from 'vue'

const form = ref<loginForm>({
    username: '',
    password: ''
})

</script>