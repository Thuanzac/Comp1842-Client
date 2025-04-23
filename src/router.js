import Vue from 'vue';
import Router from 'vue-router';
import EditList from './views/EditList.vue';
import NewList from './views/NewList.vue';
import ShowList from './views/ShowList.vue';
import WordsList from './views/WordsList.vue';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/words' },
    { path: '/words/edit/:id', name: 'EditList', component: EditList },
    { path: '/words/new', name: 'NewList', component: NewList },
    { path: '/words/show/:id', name: 'ShowList', component: ShowList },
    { path: '/words', name: 'WordsList', component: WordsList },
  ],
});

export default router;
