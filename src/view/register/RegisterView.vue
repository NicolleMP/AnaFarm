<!-- src/view/register/RegisterView.vue -->
<template>
  <div class="register-container">
    <div class="register-wrapper">
      <div class="form-register">
        <div class="logo">
          <img src="../../assets/logo.png" alt="Logo">
          <h2>Seja bem-vindo ao Anafarm</h2>
        </div>
        <form @submit.prevent="validarFormulario">
          <p>Por favor, crie sua conta</p>
          <input type="text" v-model="form.nome" placeholder="Nome completo" required>
          <input type="email" v-model="form.email" placeholder="seumail@email.com" required>
          <input type="password" v-model="form.senha" placeholder="Crie uma senha segura" required>
          <input type="password" v-model="form.repetirSenha" placeholder="Repita sua senha" required>
          <button type="submit">Registrar-se</button>
        </form>
      </div>
      <div class="info-register">
        <h3>Somos mais do que apenas uma empresa</h3>
        <p>
          Na Anafarm, unimos cuidado, ciência e dedicação para oferecer medicamentos manipulados personalizados para
          cada paciente. Nossa missão é promover saúde e bem-estar com qualidade, responsabilidade e atendimento
          humanizado. Aqui, cada fórmula é feita com carinho, pensando em você.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      form: {
        nome: '',
        email: '',
        senha: '',
        repetirSenha: '',
      },
    };
  },
  methods: {
    async validarFormulario(event) {
      event.preventDefault();

      const { nome, email, senha, repetirSenha } = this.form;

      const validacoes = [
        {
          campo: nome,
          valido: /^[A-Za-zÀ-ÿ\s]+$/.test(nome),
          mensagem: 'O nome deve conter apenas letras e espaços.',
        },
        {
          campo: email,
          valido: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
          mensagem: 'Digite um e-mail válido.',
        },
        {
          campo: senha,
          valido: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(senha),
          mensagem: 'A senha deve ter no mínimo 8 caracteres, com letras maiúsculas, minúsculas, números e símbolos.',
        },
        {
          campo: repetirSenha,
          valido: senha === repetirSenha,
          mensagem: 'As senhas não coincidem.',
        },
      ];

      const erro = validacoes.find((v) => !v.valido);
      if (erro) {
        alert(erro.mensagem);
        return;
      }

      try {
        await api.post('/users/register', {
        username: this.form.nome, // se quiser nome como username
        email: this.form.email,
        password: this.form.senha,
        });
        alert('Cadastro realizado com sucesso!');
        this.form = { nome: '', email: '', senha: '', repetirSenha: '' };
      } catch (error) {
        console.error('Erro no cadastro:', error.response?.status, error.response?.data || error.message);
        alert(`Falha no cadastro: ${error.response?.status === 401 ? 'Acesso não autorizado (401)' : error.response?.data || 'Erro desconhecido'}`);
      }
    },
  },
};
</script>

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
.info-register {
  flex: 1;
  color: white;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to right, #0cb7f2, #ff69b4);
}
.info-register h3 {
  font-size: 1.5rem;
  margin-bottom: 0.9375rem;
}
.info-register p {
  font-size: 1rem;
  line-height: 1.5;
}
</style>