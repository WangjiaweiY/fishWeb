<template>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="demo-ruleForm"
        label-position="top"
    >
        <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="渔夫和鱼籽">
            <el-col :span="11">
                <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                placeholder="选择2022年10月9日"
                style="width: 100%"
                />
            </el-col>
            <el-col :span="2" class="text-center">
                <span class="text-gray-500">————</span>
            </el-col>
            <el-col :span="11">
                <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                placeholder="选择今天"
                style="width: 100%"
                />
            </el-col>
        </el-form-item>
        <el-form-item label="王嘉炜是帅哥吗">
            <el-radio-group v-model="ruleForm.resource">
                <el-radio label="是" />
                <el-radio label="否" />
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"
                >登录</el-button
            >
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'


export default {
    setup() {
        const router = useRouter()
        const ruleFormRef = ref<FormInstance>()

        const checkName = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入用户名'))
        } else {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('name', () => null)
            callback()
        }
        }

        const validatePass = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入密码'))
        } else {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
            callback()
        }
        }

        const ruleForm = reactive({
        name: '',
        pass: '',
        resource: '',
        date1:'',
        date2:''
        })

        const rules = reactive<FormRules<typeof ruleForm>>({
        pass: [{ validator: validatePass, trigger: 'blur' }],
        name: [{ validator: checkName, trigger: 'blur'}],
        })

        const submitForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.validate((valid) => {
            if (valid) {
            console.log('submit!')
            router.push('/home')
            } else {
            console.log('error submit!')
            return false
            }
        })
        }

        const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.resetFields()
        }
        return {
            ruleFormRef,
            ruleForm,
            rules,
            submitForm,
            resetForm
        }
    }
}


</script>