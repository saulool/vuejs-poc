import Vue from 'vue';
import Router from 'vue-router';
import RepositoriesList from '@/components/RepositoriesList';
import RepositoryDetail from '@/components/RepositoryDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Github Repositories List',
      component: RepositoriesList,
    },
    {
      path: '/detail/:repositoryName',
      name: 'Repository Detail',
      component: RepositoryDetail,
    },
  ],
});
