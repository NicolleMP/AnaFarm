<script>
  export default {
    name: "AppHeader"

 }
 </script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo">
      </div>
      
      <nav class="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Posts</a></li>
        </ul>
        <div class="user-icon">
          <i class="fa-solid fa-user"></i>
        </div>
      </nav>
      
    </div>
  </header>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.header {
  width: 100%;
  background-color: #0cb7f2;
  padding: 20px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.6875rem; 
  margin-right: 10rem; 
}

.logo img {
  height: 3.75rem; 
  transition: transform 0.3s ease;
  margin-left: 6.25rem; 
}

.logo img:hover {
  transform: scale(1.1);
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 2.1875rem; 
  margin: 0;
  padding: 0;
}

.nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: color 0.3s ease;
}

.nav a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 0.125rem; 
  bottom: -0.3125rem; 
  left: 0;
  background-color: #fff;
  transition: width 0.3s ease;
}

.nav a:hover::after {
  width: 100%;
}

.user-icon {
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

</style>
