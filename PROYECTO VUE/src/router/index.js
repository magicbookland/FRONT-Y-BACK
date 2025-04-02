import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '@/components/WelcomePage.vue';
import LoginView from '@/views/LoginView.vue';
import SignInView from '@/views/SignInView.vue';
import StartAs from '@/components/StartAs.vue';
import HomePage from '@/views/HomePage.vue';

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/login', component: LoginView },
  { path: '/signup', component: SignInView },
  { path: '/startas', component: StartAs },
  { path: '/home', component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
