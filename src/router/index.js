// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '../view/register/RegisterView.vue';

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  { path: '/', redirect: '/register' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;