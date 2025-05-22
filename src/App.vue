<template>
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

