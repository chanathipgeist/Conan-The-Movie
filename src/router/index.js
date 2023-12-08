import { createRouter, createWebHistory } from 'vue-router'
import MovieDetailView from '../views/MovieDetailView.vue'
import CategoryView from '../views/CategoryView.vue'
import CharacterView from '../views/CharacterView.vue'
import MovieList from '../views/MovieList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/movies/:id`,
      name: 'MovieDetailView',
      component: MovieDetailView
    },
    {
        path: `/movies`,
        name: 'MovieList',
        component: MovieList
      },
    {
        path: `/categories`,
        name: 'CategoryView',
        component: CategoryView
      },
      {
        path: `/characters`,
        name: 'CharacterView',
        component: CharacterView
      }
  ]
})

export default router

