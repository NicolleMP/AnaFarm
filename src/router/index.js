import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../view/login/LoginView.vue"
import RegisterView from '../view/register/RegisterView.vue';
import HomeView from '../view/home/HomeView.vue'; 

const routes = [
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/register', name: 'Register', component: RegisterView},
    { path: '/', redirect: '/register' },
    {path: '/',  name: 'Home',  component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;