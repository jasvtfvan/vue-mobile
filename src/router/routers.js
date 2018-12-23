
const Home = resolve => require(["@/views/home/home"], resolve);
// const Health = resolve => require(["@/views/home/health/health"], resolve);
const Pay = resolve => require(["@/views/home/pay/index"], resolve);
const Form = resolve => require(["@/views/home/form/index"], resolve);
const Result = resolve => require(["@/views/home/result"], resolve);

export default [
  {
    path: "/",
    name: "home",
    component: Home,
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
  // {
  //   path: "/health",
  //   name: "Home",
  //   component: Health,
  //   meta: {
  //     home: true,
  //     isback: false
  //   }
  // },
  {
    path: "/result",
    name: "Result",
    component: Result,
    meta: {
      home: true,
      isback: false
    }
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
    meta: {
      home: true,
      isback: false
    }
  },
];
