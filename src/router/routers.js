const Login = resolve => require(['@/views/login/login'], resolve);
const VwLayout = resolve => require(['@/views/vwlayout/vwLayout'], resolve);

export default
[
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/vw',
    name: 'VwLayout',
    component: VwLayout
  }
]
