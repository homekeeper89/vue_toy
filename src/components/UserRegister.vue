<template>
  <div>
    <div class="user-register__input">
      <input
        class="user__email"
        type="text"
        v-model="user.email"
        data-user-email
      />
      <input
        class="user__nickname"
        type="text"
        v-model="user.nickname"
        data-user-nickname
      />
      <input
        class="user__password"
        type="text"
        v-model="user.password"
        data-user-password
      />
      <input
        class="user__favoriteLanguage"
        type="text"
        v-model="user.favoriteLanguage"
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
      user: {
        email: '',
        nickname: '',
        password: '',
        favoriteLanguage: '',
      },
      isSent: false,
    };
  },
  methods: {
    register() {
      return this.$http
        .get('/api/v1/register', {
          data: this.user,
        })
        .then(() => {
          this.isSent = true;
        })
        .catch((e) => {
          throw Error('Something went wrong', e);
        });
    },
  },
};
</script>
