<template>
  <div>
    <div class="username">
      {{ username }}
    </div>
    <div class="fullname">
      {{ fullname }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComponentWithVuex',
  data() {
    return {
      username: this.$store.state.username,
    };
  },
  computed: {
    fullname() {
      return this.$store.getters.fullname;
    },
  },
};
</script>
