import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../pages/PrincipalPokemon.vue"),
    children: [
      {
        path: '',
        name: 'noFound',
        component: () => import( '../views/NofoundView.vue'),
      },
      {
        path: ':id',
        name: 'pokemon',
        component: () => import( '../views/PokemonView.vue'),
        props: (route) => {
            return{
              id: route.params.id
            }
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
