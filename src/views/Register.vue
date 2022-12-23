<template>

  <main class="form-signin w-100 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal">Por favor, cadastre-se</h1>

      <div class="form-floating mb-2">
        <input type="text" class="form-control"  placeholder="Nome">
        <label for="floatingInput">Nome</label>
      </div>
      <div class="form-floating mb-2">
        <input type="email" class="form-control" placeholder="name@example.com">
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating mb-2">
        <input type="password" class="form-control"  placeholder="Senha">
        <label for="floatingPassword">Senha</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
    </form>
  </main>

</template>

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