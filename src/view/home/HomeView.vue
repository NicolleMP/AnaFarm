<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <div>
    <AppHeader/>
    <section class="banner">
      <img src="../../assets/bannerHome.png" alt="Banner Anafarm" /> 
    </section>

    </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
 .banner {
  width: 100%;
  height: 33rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 

}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  
}


</style>