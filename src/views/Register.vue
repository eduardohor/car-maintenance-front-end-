<template>

  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="register">
      <h1 class="h3 mb-3 fw-normal">Por favor, cadastre-se</h1>

      <div class="form-floating mb-2">
        <input v-model="name" type="text" class="form-control" placeholder="Nome">
        <label for="floatingInput">Nome</label>
        <template v-if="validate.name" class=".text-danger">{{ validate.name[0] }}</template>
      </div>
      <div class="form-floating mb-2">
        <input v-model="email" type="email" class="form-control" placeholder="name@example.com">
        <label for="floatingInput">Email</label>
        <template v-if="validate.email" class=".text-danger">{{ validate.email[0] }}</template>

      </div>
      <div class="form-floating mb-2">
        <input v-model="password" type="password" class="form-control" placeholder="Senha">
        <label for="floatingPassword">Senha</label>
        <template v-if="validate.password" class=".text-danger">{{ validate.password[0] }}</template>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
    </form>
  </main>

</template>

<script>
import { axiosInstance } from '../services/http'
import { reactive } from 'vue'

export default {
  name: 'Login',

  data() {
    return {
      name: '',
      email: '',
      password: '',
      validate: ''
    }
  },

  methods: {
    async register() {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password

      }

      this.validate = reactive({})

      try {
        const { data } = await axiosInstance.post('register', payload)
        console.log(data);
      } catch (error) {
        Object.assign(this.validate, error.response.data['errors'])
        console.log(this.validate)
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