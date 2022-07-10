<template>
  <div class="px-4 py-5 my-5 text-center">
    <img class="mb-4" src="../../assets/images/fondo.png"   width="1000" height="200" />
   
    <div class="col-lg-6 mx-auto">
    
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
       
        <router-link to="/register" class="btn btn-outline-secondary btn-lg px-4">Register</router-link>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; Maria Martinez 2022</p>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>

</style>