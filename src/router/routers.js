const Login = resolve => require(['@/views/login/login'], resolve);
const Home = resolve => require(['@/views/home/home'], resolve);
const VwLayout = resolve => require(['@/views/vwlayout/vwLayout'], resolve);

export default
[
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      white: true,
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/vw',
    name: 'VwLayout',
    component: VwLayout,
    meta: {
      white: true,
    },
  }
]
