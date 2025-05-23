<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { ref } from 'vue'

import oleoEssencial from '@/assets/oleo_essencial.png'
import chasNaturais from '@/assets/chas_naturais.png'
import cremeArnica from '@/assets/creme_arnica.png'
import saboneteVegetal from '@/assets/sabonete_vegetal.png'
import oleoCopaiba from '@/assets/oleo_copaiba.png'
import pomadaCalendula from '@/assets/pomada_calendula.png'
import melPuro from '@/assets/mel_puro.png'
import propolis from '@/assets/propolis.png'
import kitBemEstar from '@/assets/kit_bem_estar.png'
import gengibre from '@/assets/gengibre.png'
import hortela from '@/assets/hortela.png'
import boldo from '@/assets/boldo.png'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  setup() {
    const hoverIndex = ref(null)

    const produtos = [
      { nome: 'Óleo Essencial', preco: 'R$ 49,90', img: oleoEssencial, descricaoCurta: 'Relaxante e terapêutico', descricaoLonga: 'Óleo essencial puro, ideal para relaxamento, aromaterapia e alívio de tensões musculares. Produto 100% natural, extraído de plantas selecionadas.' },
      { nome: 'Chás Naturais', preco: 'R$ 19,90', img: chasNaturais, descricaoCurta: 'Saúde e bem-estar', descricaoLonga: 'Mistura especial de ervas selecionadas para promover saúde, bem-estar e equilíbrio do organismo. Auxilia na digestão e possui ação antioxidante.' },
      { nome: 'Creme de Arnica', preco: 'R$ 29,90', img: cremeArnica, descricaoCurta: 'Alívio de dores musculares', descricaoLonga: 'Creme natural com extrato de arnica, conhecido por sua eficácia no alívio de dores musculares, contusões e inflamações locais.' },
      { nome: 'Sabonete Vegetal', preco: 'R$ 14,90', img: saboneteVegetal, descricaoCurta: 'Natural e hidratante', descricaoLonga: 'Sabonete feito com ingredientes vegetais que limpam suavemente a pele, promovendo hidratação e frescor sem agredir.' },
      { nome: 'Óleo de Copaíba', preco: 'R$ 59,90', img: oleoCopaiba, descricaoCurta: 'Anti-inflamatório natural', descricaoLonga: 'Óleo 100% natural extraído da copaíba, reconhecido por sua potente ação anti-inflamatória e cicatrizante para diversos tratamentos naturais.' },
      { nome: 'Pomada de Calêndula', preco: 'R$ 24,90', img: pomadaCalendula, descricaoCurta: 'Cicatrizante natural', descricaoLonga: 'Pomada feita com extrato de calêndula, que ajuda na cicatrização de feridas, hidratação da pele e redução de irritações.' },
      { nome: 'Mel Puro', preco: 'R$ 39,90', img: melPuro, descricaoCurta: '100% natural e orgânico', descricaoLonga: 'Mel puro e orgânico, colhido de forma sustentável, rico em antioxidantes e propriedades que fortalecem a imunidade.' },
      { nome: 'Extrato de Própolis', preco: 'R$ 34,90', img: propolis, descricaoCurta: 'Imunidade e proteção', descricaoLonga: 'Extrato concentrado de própolis, conhecido por fortalecer o sistema imunológico e proteger contra infecções diversas.' },
      { nome: 'Kit Bem-Estar', preco: 'R$ 89,90', img: kitBemEstar, descricaoCurta: 'Combinação de produtos naturais', descricaoLonga: 'Kit completo que reúne os melhores produtos naturais para promover saúde, equilíbrio e bem-estar no seu dia a dia, incluindo óleos, chás e cremes.' },
      { nome: 'Gengibre', preco: 'R$ 9,90', img: gengibre, descricaoCurta: 'Fortalece a imunidade e é antioxidante natural', descricaoLonga: 'Raiz de gengibre fresca, com propriedades antioxidantes e imunomoduladoras, ótima para melhorar a circulação e combater inflamações.' },
      { nome: 'Hortelã', preco: 'R$ 7,90', img: hortela, descricaoCurta: 'Refrescante, auxilia na digestão e alivia desconfortos', descricaoLonga: 'Folhas frescas de hortelã que promovem frescor, aliviam dores estomacais e melhoram o processo digestivo naturalmente.' },
      { nome: 'Boldo', preco: 'R$ 11,90', img: boldo, descricaoCurta: 'Excelente para o fígado, ajuda na digestão e no alívio de gases.', descricaoLonga: 'Planta medicinal conhecida por proteger o fígado, facilitar a digestão e reduzir gases e desconfortos gastrointestinais.' }
    ]

    return {
      produtos,
      hoverIndex
    }
  }
}
</script>

<template>
  <div>
    <AppHeader />
    <section class="banner">
      <img src="@/assets/bannerHome.png" alt="Banner Anafarm" />
    </section>

    <section class="chamada-cta">
      <h2>Transforme sua rotina com nossos produtos exclusivos!</h2>
      <p>Descubra ofertas incríveis que só a Anafarm oferece para você cuidar da sua saúde com qualidade e economia.</p>
      <a href="#produtos" aria-label="Ver produtos">
        <button>Quero ver os produtos</button>
      </a>
    </section>

    <section id="produtos">
      <h2 class="titulo-produtos">Nossos Produtos</h2>

      <div class="container-produtos">
                  <div 
              v-for="(produto, index) in produtos"
              :key="produto.nome"
              class="card-produto"
              :class="{ 'hovered': hoverIndex === index }"
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

          <p class="descricao-curta">
            {{ produto.descricaoCurta }}
          </p>

          <transition name="fade-slide">
            <p 
              v-if="hoverIndex === index" 
              class="descricao-longa" 
              aria-live="polite"
            >
              {{ produto.descricaoLonga }}
            </p>
          </transition>

          <span class="preco">
            {{ produto.preco }}
          </span>

          <button class="botao-comprar">
            Comprar
          </button>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.banner {
  width: 100%;
  height: 33rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.chamada-cta {
  width: 100%;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f9f9f9;
}

.chamada-cta h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
}

.chamada-cta p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 700px;
}

.chamada-cta button {
  background-color: #ea0cf2;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.chamada-cta button:hover,
.chamada-cta button:focus {
  background-color: #9b04a8;
  transform: translateY(-2px);
  outline: none;
}

.titulo-produtos {
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 3rem 0 2rem;
  background: linear-gradient(90deg, #00a5f1, #f006dc);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
}

.titulo-produtos::after {
  content: '';
  display: block;
  width: 900px; 
  height: 0.4rem; 
  background: linear-gradient(100deg, #00a5f1, #ee00e2);
  margin: 10px auto 0; 
  border-radius: 8px;
}



.container-produtos {
  max-width: 1240px;
  margin: 0 auto 5rem auto;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.card-produto {
  width: 300px;
  min-height: 420px;
  background: #ffffff;
  border-radius: 20px;
  padding: 1.8rem 1.6rem;
  color: #333333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: box-shadow 0.3s ease, transform 0.25s ease;
  cursor: pointer;
  overflow: hidden;
}

.card-produto:hover,
.card-produto:focus-within {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-8px);
  outline: none;
}
.hovered {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-8px);
}

.produto-imagem {
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.card-produto:hover .produto-imagem,
.card-produto:focus-within .produto-imagem {
  transform: scale(1.05);
}

.produto-nome {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #222222;
}

.descricao-curta {
  font-size: 0.95rem;
  color: #666666;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.descricao-longa {
  font-size: 0.9rem;
  color: #777777;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.preco {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ca0df0;
  margin-bottom: 1.2rem;
}

.botao-comprar {
  background-color: #09addf; 
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.botao-comprar:hover,
.botao-comprar:focus {
  background-color: #275cbe;
  transform: translateY(-2px);
  outline: none;
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 1024px) {
  .container-produtos {
    justify-content: center;
  }

  .card-produto {
    width: 280px;
  }
}

@media (max-width: 720px) {
  .banner {
    height: 20rem;
  }

  .chamada-cta h2 {
    font-size: 1.8rem;
  }

  .chamada-cta p {
    font-size: 1rem;
  }

  .container-produtos {
    flex-direction: column;
    align-items: center;
  }

  .card-produto {
    width: 90%;
    max-width: 320px;
  }
}
.container-produtos {
  max-width: 1240px;
  margin: 0 auto 5rem auto;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  gap: 1rem;
}

.card-produto {
  width: calc(25% - 1rem); 
  min-height: 420px;
  background: #ffffff;
  border-radius: 20px;
  padding: 1.8rem 1.6rem;
  color: #333333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: box-shadow 0.3s ease, transform 0.25s ease;
  cursor: pointer;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .container-produtos {
    justify-content: center;
  }

  .card-produto {
    width: calc(33.33% - 1rem);
  }
}

@media (max-width: 720px) {
  .container-produtos {
    flex-direction: column;
    align-items: center;
  }

  .card-produto {
    width: 90%; 
    max-width: 320px;
  }
}
.card-produto {
  width: calc(25% - 1rem); 
  min-height: 420px;
  background: #ffffff;
  border-radius: 20px;
  padding: 1.8rem 1.6rem;
  color: #333333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: box-shadow 0.3s ease, transform 0.25s ease;
  cursor: pointer;
  overflow: hidden;
}

.card-produto:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(10px); 
}
.card-produto:not(:hover) {
  transform: translateY(0); 
  transition: transform 0.3s ease; 
}

.card-produto:hover .produto-imagem {
  transform: scale(1.05); 
}

</style>

