<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>AnaFarm</h3>
        <p>Produtos naturais para sua saúde e bem-estar.</p>
      </div>
      <div class="footer-links">
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
        <a href="#privacidade">Política de Privacidade</a>
      </div>
      <div class="footer-social">
        <a href="#" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 AnaFarm. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f9f9f9;
  padding: 2rem;
  margin-top: 4rem;
  border-top: 1px solid #e0e0e0;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.footer-brand h3 {
  font-size: 1.8rem;
  color: #0cb7f2;
  margin-bottom: 0.5rem;
}

.footer-brand p {
  color: #555;
  max-width: 250px;
}

.footer-links a {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #e9098c;
}

.footer-social a {
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #555;
  transition: color 0.3s;
}

.footer-social a:hover {
  color: #ff00bf;
}

.footer-bottom {
  margin-top: 1.5rem;
  text-align: center;
  color: #aaa;
  font-size: 0.9rem;
}
</style>
