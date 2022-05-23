<script>
// @ is an alias to /src
import axios from 'axios'
import UserCard from '@/components/user-card.vue'

export default {
  name: 'Home-view',
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
    }
  },
  async created() {
    const usersRequest = await axios.get('/api/users')

    this.users = usersRequest.data
  },
}
</script>
<template lang="pug">
  .home
    h1 Remoters
    user-card(v-for="user in users" :user="user")
    // <button type="button" class="btn btn-primary"></button>
    button.btn.btn-primary Click me
</template>
