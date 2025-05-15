<template>
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


