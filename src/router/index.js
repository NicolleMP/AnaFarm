import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../view/login/LoginView.vue"

const routes = [
    { path: '/login', name: 'Login', component: LoginView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;