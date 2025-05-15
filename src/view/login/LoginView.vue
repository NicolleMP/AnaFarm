<template>
  <div class="login-container">
    <div class="first-content content">
      <div class="first-column">
        <img src="../../assets/logo.png" alt="Logo AnaFarm" />
        <h2 class="title">Seja bem-vindo ao Anafarm</h2>
        <p class="text">Faça seu login</p>
        <form class="form">
          <input type="text" placeholder="Nome" required />
          <input type="password" placeholder="Senha" required />
          <button class="btn" type="submit">Entrar</button>
        </form>
        <a href="/">
          <p class="text">Esqueceu sua senha?</p>
        </a>
        <div class="noCount">
          <p class="text">Não possui uma conta?</p>
          <router-link to="/register" class="btn-count"
            >Criar uma conta</router-link
          >
        </div>
      </div>
      <div class="second-column">
        <div class="content-second">
          <h2 class="title">Somos mais que uma empresa</h2>
          <p class="text">
            Na Anafarm, unimos cuidado, ciência e dedicação para oferecer
            medicamentos manipulados personalizados para cada paciente. Nossa
            missão é promover saúde e bem-estar com qualidade, responsabilidade
            e atendimento humanizado. Aqui, cada fórmula é feita com carinho,
            pensando em você.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-family: "Poppins", sans-serif;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 500px;
  background-color: #424242;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  border-radius: 10px;
  overflow: hidden;
}

.first-content {
  display: flex;
  width: 100%;
  height: 100%;
}

.first-column,
.second-column {
  flex: 1;
  padding: 40px;
}

.first-column img {
  width: 10rem;
  padding: 0 6.5rem;
}

.first-column .title {
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}

.first-column .text {
  font-size: 0.8rem;
  font-weight: 500;
  color: #fff;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

input {
  padding: 12px;
  font-size: 16px;
  background-color: #424242;
  border: 1px solid #ccc;
  color: #ccc;
  border-radius: 5px;
}

.btn {
  cursor: pointer;
  padding: 12px;
  font-size: 16px;
  background: linear-gradient(to right, #0cb7f2, #ff69b4);
  color: #fff;
  border: none;
  border-radius: 5px;
}

.noCount {
  display: flex;
  gap: 3.5rem;
  align-items: center;
}

.btn-count {
  cursor: pointer;
  font-size: 15px;
  font-weight: 100;
  text-decoration: none;
  padding: 10px;
  background-color: transparent;
  color: #fff;
  border: 2px solid #0cb7f2;
  border-radius: 10px;
  font-weight: 700;
}

.btn-count:hover {
  background-color: #0cb7f2;
  color: #424242;
}

.second-column {
  background: linear-gradient(to right, #0cb7f2, #ff69b4);
  color: #fff;
}

.content-second {
  padding: 7rem 0;
}

.content-second .title {
  font-size: 1.3rem;
  font-weight: 500;
}

.content-second .text {
  font-size: 0.8rem;
}
</style>
