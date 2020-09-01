<template>
  <div>
    <div class="user-register__input">
      <input class="user__email" type="text" v-model="email" data-user-email />
      <input
        class="user__nickname"
        type="text"
        v-model="email"
        data-user-nickname
      />
      <input
        class="user__password"
        type="text"
        v-model="email"
        data-user-password
      />
      <input
        class="user__favoriteLanguage"
        type="text"
        v-model="email"
        data-user-favoriteLanguage
      />
      <button class="user-register__click" @click="register()"></button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserRegister',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    register() {
      console.log('send');
    },
  },
};
</script>
