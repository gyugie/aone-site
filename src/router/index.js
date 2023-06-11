import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AboutView from '../views/AboutView.vue'
import UsersView from '../views/UsersView.vue'
import UsersDetailView from '../views/UserDetailView.vue'
import UserEditView from '../views/UserEditView.vue'
import store from '../store'; 

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },{
    path: '/register',
    name: 'register',
    component: RegisterView
  },{
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },{
    path: '/users',
    name: 'users',
    component: UsersView,
    meta: { requiresAuth: true },
  },{
    path: '/user/:id',
    name: 'userDetail',
    params: true,
    component: UsersDetailView,
    meta: { requiresAuth: true },
  },{
    path: '/user/edit/:id',
    name: 'userEdit',
    params: true,
    component: UserEditView,
    meta: { requiresAuth: true },
  },{
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { requiresAuth: true },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters['isAuthenticated']) {
    // If the route requires authentication and the user is not authenticated, redirect to the login page
    next('/login');
  } else {
    // Proceed to the requested route
    next();
  }
});

export default router
