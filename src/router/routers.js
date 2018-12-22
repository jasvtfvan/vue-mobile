const Login = resolve => require(["@/views/login/login"], resolve);
const Home = resolve => require(["@/views/home/home"], resolve);
const Health = resolve => require(["@/views/home/health/health"], resolve);
const Form = resolve => require(["@/views/home/form/index"], resolve);
const Result = resolve => require(["@/views/home/result"], resolve);
const VwLayout = resolve => require(["@/views/vwlayout/vwLayout"], resolve);

export default [
  {
    path: "/",
    name: "home",
    component: Form,
    meta: {
      white: true
    }
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      home: true,
      isback: false
    }
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
    meta: {
      home: true,
      isback: false
    }
  },
  {
    path: "/health",
    name: "Home",
    component: Health,
    meta: {
      home: true,
      isback: false
    }
  },
  {
    path: "/vw",
    name: "VwLayout",
    component: VwLayout,
    meta: {
      white: true,
      isback: true
    }
  }
];
