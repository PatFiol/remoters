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
  h2 jobTitle
  h2 Skills ({{ user.skills }})
  p Bio: {{ user.bio || defaultBio}}


</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #c80;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
