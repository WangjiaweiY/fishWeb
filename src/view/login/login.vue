<template>
    <div class="container">
        <div class="left">
            <img src="@/assets/img/fish.png">
        </div>
        <div class="right">
            <div class="login-form">
                <div class="dengluheadercontainer">
                    <div class="dengluwenzi">鱼籽登录框</div>
                </div>
                <ellogin />
            </div>
        </div>
    </div>
</template>

<script>

import ellogin from '@/components/ellogin.vue'
export default {
  name:'login',
  components: {
    ellogin
  },
}

</script>

<style scoped> 
@import './login.css';
</style>
  