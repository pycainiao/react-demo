import DistCar from "../view/distCar/distCar";
import Home from "../view/home/home";

export default [
    {path:'/home',isExact:true, name:'home', component: Home, routeTitle:'首页'},
    {path:'/distCar',isExact:true, name:'distCar', component: DistCar, routeTitle:'派车清单'},
]
