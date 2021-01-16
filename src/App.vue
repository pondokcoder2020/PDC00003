<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        this.$store.dispatch('logout')
        throw err;
      });
    });
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/login')
          })
    }
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
