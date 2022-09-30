<template>
  <div>
    <app-nav-bar />
    <app-side-bar />
    <div class="content-wrapper">
      <router-view />
    </div>
    <app-footer />
    <control-side-bar />
  </div>
</template>

<script>
  export default {
    name: 'DefaultLayout',
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">

</style>