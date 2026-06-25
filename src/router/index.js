import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BeersView from '../views/BeersView.vue'
import BeerDetailView from '../views/BeerDetailView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import GlossaryView from '../views/GlossaryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/beers',
    name: 'beers',
    component: BeersView
  },
  {
    path: '/beers/:id',
    name: 'beer-detail',
    component: BeerDetailView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView
  },
  {
    path: '/academy',
    name: 'academy',
    component: GlossaryView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
