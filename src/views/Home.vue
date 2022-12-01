<template>
  <div class="home">
    <img src="../assets/IMAGENPRINCIPAL-HOYSIHAYAGUA.png" class="center-fit"/>


    <div class="row">
      <button @click="goToDaybook" class="btn btn-primary">Comenzar</button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>

