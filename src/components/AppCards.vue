<template>
  <div class="produtos-container">
    <div 
      v-for="(produto, index) in produtos"
      :key="produto.nome"
      class="card-produto"
      tabindex="0"
      role="region"
      :aria-label="'Produto ' + produto.nome"
      @mouseenter="hoverIndex = index"
      @mouseleave="hoverIndex = null"
    >
      <img 
        :src="produto.img" 
        :alt="produto.nome" 
        class="produto-imagem"
      />
      <h3 class="produto-nome">{{ produto.nome }}</h3>
      <p class="descricao-curta">{{ produto.descricaoCurta }}</p>

      <transition name="fade-slide">
        <p 
          v-if="hoverIndex === index" 
          class="descricao-longa" 
          aria-live="polite"
        >
          {{ produto.descricaoLonga }}
        </p>
      </transition>

      <span class="preco">{{ produto.preco }}</span>
      <button class="botao-comprar">Comprar</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    produtos: {
      type: Array,
      required: true
    }
  },
  setup() {
    const hoverIndex = ref(null)
    return { hoverIndex }
  }
}
</script>

<style scoped>

.produtos-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 1rem;
}

.card-produto {
  width: 260px;
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card-produto:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
.card-produto:focus-within {
  outline: 2px solid #0cb7f2;
  outline-offset: 4px;
}


.produto-imagem {
  width: 100%;
  height: 160px;
  object-fit: contain;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.card-produto:hover .produto-imagem {
  transform: scale(1.05);
}

.produto-nome {
  font-size: 1.3rem;
  font-weight: 700;
  color: #222;
  text-align: center;
  margin-bottom: 0.4rem;
}

.descricao-curta {
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 0.6rem;
}

.descricao-longa {
  position: relative;
  background-color: #f1f5f9;
  color: #333;
  font-size: 0.9rem;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.descricao-longa::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 8px 10px 8px;
  border-style: solid;
  border-color: transparent transparent #f1f5f9 transparent;
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.preco {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff69b4;
  margin-bottom: 1rem;
}

.botao-comprar {
  background-color: #0cb7f2;
  color: #fff;
  border: none;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.botao-comprar:hover {
  background-color: #0586b1;
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

</style>
