/**
 * Route file
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

Vue.use(VueRouter);

// mode history => hide #/ in the URL
const Routes = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Home,
        }, 
        {
            path: '/connexion',
            name: 'connexion',
            component: Login,
        },
    ]
});

export default Routes;