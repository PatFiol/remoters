<script>
export default {
  name: 'UserCard',
  props: ['user'],
}
</script>

<template lang="pug">
.box
  h1 {{ user.name }}
  p Bio: {{ user.bio }}
  h2 Skills ({{ user.skills.length }})

.portfolio(v-for="work in user.portfolio")
  h3 {{ work.filename }}
    p(v-if="!work.likedBy.length")
      | no likes yet
    p(v-else)
      | {{ work.likedBy.map(user.name).join(', ') }}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #c80;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
