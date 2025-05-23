import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../view/login/LoginView.vue"
import RegisterView from '../view/register/RegisterView.vue';

const routes = [
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/', name: 'Register', component: RegisterView},
    { path: '/', redirect: '/register' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;