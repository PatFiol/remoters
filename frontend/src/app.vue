<script>
import { mapActions } from 'vuex'
import MatchCard from '@/components/match-card'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
  data() {
    return {
      matches: [
        { id: 1, title: 'match 1', description: 'test' },
        { id: 2, title: 'match 2', description: 'test' },
        { id: 3, title: 'match 3', description: 'test' },
        { id: 4, title: 'match 4', description: 'test' },
        { id: 5, title: 'match 5', description: 'test' },
        { id: 6, title: 'match 6', description: 'test' },
        { id: 7, title: 'match 7', description: 'test' },
        { id: 8, title: 'match 8', description: 'test' },
      ],
    }
  },
  components: {
    MatchCard,
  },
}
</script>
<template lang="pug">
  #app
    #nav
      router-link(to="/profile") Profile
      router-link(to="/login") Login
      router-link(to="/register") Register
      a(@click="doLogout" href="#") Logout
    router-view
</template>

<style lang="scss">
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
