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
