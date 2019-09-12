import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestMovie from '../components/LatestMovie'
import Vuetify from 'vuetify'
import Movie from '../components/Movie'
import SearchMovie from '../components/SearchMovie'

Vue.use(VueRouter)
Vue.use(Vuetify)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'LatestMovie',
            component: LatestMovie
        },
        {
            path:'/movie/:id',
            name:'Movie',
            props: true,
            component: Movie
        },
        {
            path:'/search/:name',
            name: 'Search',
            component: SearchMovie
        }
    ]
})