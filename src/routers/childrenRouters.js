import DistCar from "../view/distCar/distCar";
import Home from "../view/home/home";
import AddArticle from "../view/article/addArticle";
import ArticlesList from "../view/article/ArticlesList";

export default [
    {path:'/home',isExact:true, name:'home', component: Home, routeTitle:'首页'},
    {path:'/distCar',isExact:true, name:'distCar', component: DistCar, routeTitle:'派车清单'},
    {path:'/addArticle',isExact:true, name:'addArticle', component: AddArticle, routeTitle:'新增文章'},
    {path:'/articles',isExact:true, name:'articles', component: ArticlesList, routeTitle:'文章列表'},
]
