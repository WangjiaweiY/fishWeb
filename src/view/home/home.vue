<template>
  <div class="container">
    <elheader />
    <div class="bodycontainer">
      <elaside />
      <div class="contentcontainer">
        
      </div>
    </div>
  </div>
</template>

<script>
import elaside from '@/components/aside/aside.vue'
import elheader from '@/components/header.vue'
export default {
  name: 'home',
  components: {
    elaside,
    elheader
  }
}


</script>

<style scoped>
@import './home.css';
</style>
  