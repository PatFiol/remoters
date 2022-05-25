<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      defaultBio: 'This user has no bios.',
    }
  },
}
</script>

<template lang="pug">
.box
  h1 {{ user.name }}
  p Bio: {{ user.bio || defaultBio}}
  h2 Skills ({{ user.skills }})

.portfolio(v-for="works in user.portfolio")
    p(v-if="!work.likedBy.length")
      | no likes yet
    p(v-else)
      | {{ work.likedBy.map(user => user.name).join(', ') }}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #c80;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
