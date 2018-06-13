import Vue from 'vue';
import Router from 'vue-router';
import Users from '@/components/Users';
import App from '@/App';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component:  Users,
    },
  ],
});
