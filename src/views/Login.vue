<template>

  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="login">
      <h1 class="h3 mb-3 fw-normal">Por favor, faça o login</h1>

      <div class="form-floating mb-2">
        <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email</label>
        <template v-if="validate.email" class=".text-danger">{{ validate.email[0] }}</template>
      </div>
      <div class="form-floating mb-2">
        <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Senha">
        <label for="floatingPassword">Senha</label>
        <template v-if="validate.password" class=".text-danger">{{ validate.password[0] }}</template>
      </div>
      <template v-if="validate.error">
        {{ validate.error }}
      </template>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
    </form>
  </main>

</template>

<script>
import { axiosInstance } from '../services/http'
import { reactive } from 'vue'
import Cookie from 'js-cookie'

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
      validate: ''
    }
  },

  methods: {
    async login() {
      const payload = {
        email: this.email,
        password: this.password
      }

      this.validate = reactive({})

      try {
        const { data } = await axiosInstance.post('login', payload)
        Cookie.set('_myapp_token', data.access_token)
        this.$router.push('/')
      } catch (error) {
        Object.assign(this.validate, error.response.data);

      }
    }
  }


}

</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>