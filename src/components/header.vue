<template>
    <div aria-label="A complete example of page header" class="elheader">
      <el-page-header @back="onBack">
        <template #content>
          <div class="flex items-center">
            <el-avatar
              class="mr-3"
              :size="36"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <el-tag class="tag">鱼籽</el-tag>
          </div>
        </template>
        <template #extra>
          <div class="flex items-center">
            <el-button>新增事项</el-button>
            <el-button type="primary" class="ml-2">修改个人信息</el-button>
          </div>
        </template>
        <el-descriptions :column="3" size="small" class="mt-4">
        </el-descriptions>
        
      </el-page-header>
    </div>
</template>
  
<script lang="ts">
import { ElNotification as notify } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'elheader',
  setup() {
    const router = useRouter()
    const onBack = () => {
      notify({
        title: 'Back',
        message: '您已成功返回登陆页面',
        type: 'success',
      }),
      router.push('/')
    }

    return {
      onBack,
    }
  },
}
</script>

<style scoped>
.elheader {
    margin-top: 10px;
}
.tag {
    margin-left: 20px;
    margin-bottom: 10px;
}

</style>
