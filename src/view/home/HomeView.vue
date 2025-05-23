<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppCards from '@/components/AppCards.vue'

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
    AppFooter,
    AppCards
  },
  setup() {
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
      produtos
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
        <AppCards :produtos="produtos" />
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<style scoped>

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
  background-color: #ffffff;
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
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.chamada-cta button:hover,
.chamada-cta button:focus {
  background-color: #bf0acf;
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
  background: linear-gradient(90deg, #59deff, #3944da, #e718a9, #8f029c);
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
  background: linear-gradient(100deg,  #59deff, #3944da, #e718a9, #8f029c);
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
</style>
