import Home from './components/Home.vue';
import Header from './components/Header.vue';

//syntax just for webpack to load lazily (not all components on the begining) for bigger application works good
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  }, 'user');  //group argument to group objects together
};

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  }, 'user');
};
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  }, 'user');
};
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  }, 'user');
};

export const routes = [
  //{ path: '', component: Home },
  //if we need to change place of a header
  { path: '', name: 'home', components: {
    default: Home,
    'header-top': Header
  }},
  { path: '/user', component: User, children: [
    { path: '', component: UserStart },
    { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
      console.log('inside route setup'); 
      next();
    } },
    { path: ':id/edit', component: UserEdit, name: 'userEdit' }
  ] },
  { path: '/redirect-me', redirect: '/user' },
  { path: '*', redirect: '/' }
];

// to add dynamic behaviour to path "/user" add "/:id (parameter)"