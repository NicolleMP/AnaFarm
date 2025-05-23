<template>
  <div class="login-container">
    <div class="first-content content">
      <div class="first-column">
        <img src="../../assets/logo.png" alt="Logo AnaFarm" />
        <h2 class="title">Seja bem-vindo à Anafarm</h2>
        <p class="text">Faça seu login</p>
        <form class="form" @submit.prevent="loginUser">
          <input type="email" placeholder="Email" v-model="form.email" />
          <input type="password" placeholder="Senha" v-model="form.password" />
          <button class="btn" type="submit">Entrar</button>
        </form>
        <a href="/">
          <p class="text">Esqueceu sua senha?</p>
        </a>
        <div class="noCount">
          <p class="text">Não possui uma conta?</p>
          <button class="btn" @click="irParaRegister" type="button">
            Criar nova conta
          </button>
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

<script>
import api from "../../services/api.js";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser(event) {
      event.preventDefault();

      const { email, password } = this.form;

      if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      try {
        await api.post("/users/login", {
          email: this.form.email,
          password: this.form.password,
        });

        alert("Login realizado com sucesso!");
        this.form = { email: "", password: "" };
      } catch (error) {
        console.error(
          "Erro ao fazer login:",
          error.response?.data || error.message
        );
        alert("Usuário ou senha inválidos!");
      }
    },
    //  ALTERAÇÃO: metodo para ir para a tela de registro
    irParaRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

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

a {
  text-decoration: none;
}

.noCount {
  display: flex;
  gap: 3.5rem;
  align-items: center;
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
