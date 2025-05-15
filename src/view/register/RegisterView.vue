<script>

</script>

<template>
  <div class="register-container">
    <div class="register-wrapper">
      <div class="form-register">
        <div class="logo">
          <img src="../../assets/logo.png" alt="Logo">
          <h2>Nós somos a Anafarm</h2>
        </div>
        <form>
          <p>Por favor, crie sua conta</p>

          <input type="text" placeholder="Nome completo">
          <input type="email" placeholder="seumail@email.com">
          <input type="password" placeholder="Crie uma senha segura">
          <input type="password" placeholder="Repita sua senha">

          <button type="submit">Registrar-se</button>

          <div class="login">
            <span>Já possui conta?</span>
            <button type="button">Login</button>
          </div>
        </form>
      </div>


      <div class="info-register">
        <h3>Somos mais do que apenas uma empresa</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.register-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}

.register-wrapper {
  display: flex;
  width: 100%;
  max-width: 62.5rem; 
  height: 80vh;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1); 
  border-radius: 0.5rem; 
  overflow: hidden;
  background-color: #424242;
}

.form-register {
  flex: 1;
  padding: 2.5rem; 
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo {
  text-align: center;
  margin-bottom: 1.875rem; 
}

.logo img {
  width: 12.5rem; 
}

.logo h2 {
  margin-top: 0.625rem; 
  font-size: 1.5625rem; 
  color: #ffffff;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.375rem; 
  color: #ffffff;
}

input {
  padding: 0.75rem; 
  font-size: 1rem; 
  background-color: #424242;
  border: 1px solid #ccc; 
  color: #ccc;
  border-radius: 0.3125rem; 
}

button[type="submit"] {
  padding: 0.75rem; 
  font-size: 1rem; 
  background: linear-gradient(to right, #0cb7f2, #ff69b4);
  color: #ffffff;
  border: none;
  border-radius: 0.3125rem; 
  cursor: pointer;
}


</style>
