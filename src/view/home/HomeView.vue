<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <div>
    <AppHeader/>
    <section class="banner">
      <img src="../../assets/bannerHome.png" alt="Banner Anafarm" /> 
    </section>

     <section class="chamada-cta">
      <h2>Transforme sua rotina com nossos produtos exclusivos!</h2>
      <p>Descubra ofertas incríveis que só a Anafarm oferece para você cuidar da sua saúde com qualidade e economia.</p>
      <button >Quero ver os produtos</button>
    </section>

    </div>
</template>

<style>

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
background-color: #0cb7f2;
color: white;
font-weight: 600;
font-size: 1.2rem;
padding: 1rem 2.5rem;
border: none;
border-radius: 5px;
cursor: pointer;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease;
}

.chamada-cta button:hover {
background-color: #0a9bcf; 
}

</style>