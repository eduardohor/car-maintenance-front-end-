import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import VehiclesIndex from '../views/VehiclesIndex.vue'
import VehiclesCreate from '../views/VehiclesCreate.vue'
import VehiclesEdit from '../views/VehiclesEdit.vue'
import MaintenanceCreate from '../views/MaintenanceCreate.vue'

import Guard from '../services/middleware'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: Guard.auth
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: VehiclesIndex,
      beforeEnter: Guard.auth

    },
    {
      path: '/vehicles/create',
      name: 'vehicles-create',
      component: VehiclesCreate,
      beforeEnter: Guard.auth

    },
    {
      path: '/vehicles/edit/:id',
      name: 'vehicles-edit',
      component: VehiclesEdit,
      beforeEnter: Guard.auth
    },
    {
      path: '/maintenance/create',
      name: 'maintenance-create',
      component: MaintenanceCreate,
      beforeEnter: Guard.auth

    }
  ]
})

export default router
