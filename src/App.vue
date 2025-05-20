<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <RouterView /> 
</template>

<script>
  import router from "./router";

export default {
   setup(){
    return {
      router,
    };
  },
};
</script>

