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
import { mapGetters } from 'vuex';
export default {
  name: 'ComponentWithVuex',
  data() {
    return {
      username: this.$store.state.username,
    };
  },
  computed: {
    ...mapGetters(['fullname']),
    // fullname(){
    //  return this.$store.getters.fullname 과 같음
    // }
  },
};
</script>
