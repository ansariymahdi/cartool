
import Home from "./layouts/home/Home";
import Profile from "./layouts/profile/Profile";


var routes = [
  {
    path: "/home",
    component: Home
    // path: "/home",
    // name: "Home",
    // rtlName: "لوحة القيادة",
    // icon: "tim-icons icon-chart-pie-36",
    // component: Home,
    // layout: "/main"
  },

  {
    path: "/profile",
    component: Profile,
    // routes: [
    //   {
    //     path: "/tacos/bus",
    //     component: Bus
    //   },
    //   {
    //     path: "/tacos/cart",
    //     component: Cart
    //   }
    // ]
  }


];
export default routes;
