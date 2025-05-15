import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '../view/register/RegisterView.vue'; 
import LoginView from '../view/login/LoginVue.vue';

const routes = [
  {
    path: '/register', 
    name: 'Register', 
    component: RegisterView 
  },
  
  { path: '/login',
    name: 'Login', 
    component: LoginView },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;