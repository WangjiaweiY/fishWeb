<template>
  <ul>
    <li><router-link :to="'/home'"><i class="iconfont icon-zhuye" style="font-size: 24px;"></i><span>首页</span></router-link></li>
    <li><router-link :to="'/home'" @click="open"><i class="iconfont icon-dianhua" style="font-size: 24px;"></i><span>联系我们</span></router-link></li>
    <li><router-link :to="'/home'"><i class="iconfont icon-tupian_huaban" style="font-size: 24px;"></i><span>相册</span></router-link></li>
    <li><router-link :to="'/home'"><i class="iconfont icon-shezhi" style="font-size: 24px;"></i><span>设置</span></router-link></li>
  </ul>
</template>

  
<script>
import { ElNotification } from 'element-plus'
export default {
  setup() {
    const open = () => {
      ElNotification({
        title: '联系方式',
        message: 'QQ：3014639047',
        type: 'info',
        position: 'bottom-right',
      })
    }
    return {
      open
    }
  },
  name:"elaside"
}
</script>

<style scoped>
@import './aside.css';
</style>
  