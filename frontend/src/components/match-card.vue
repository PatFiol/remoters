<template lang="pug">
.match-card
  h4 {{match.title}}
  p {{match.description}}
  button.btn.btn-primary Join
</template>

<script>
export default {
  name: 'MatchCard',
  props: ['match'],
}
</script>

<style lang="scss">
.match-card {
  border: 1px solid #0f0f0f;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 12px;
  min-height: 220px;
}
</style>

// Do I have to export Match-card.vue? how?
