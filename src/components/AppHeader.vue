<script>
export default {
  name: "AppHeader"
}
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
      </div>

      <nav class="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#produtos">Produtos</a></li>
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

.logo img {
  height: 3.75rem;
  transition: transform 0.3s ease;
  margin-left: 6.25rem;
}

.logo img:hover {
  transform: scale(1.1);
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.6875rem;
  margin-right: 10rem;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 2.1875rem;
}

.nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: color 0.3s ease;
}

.nav a:hover {
  color: #ffd700; 
}

.user-icon {
  color: #fff;
  font-size: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.user-icon:hover {
  color: #ffd700; 
}
</style>
