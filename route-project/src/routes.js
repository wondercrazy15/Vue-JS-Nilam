import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import PageNotFound from './components/PageNotFound.vue'

const routes = [{
    name:'Home',
    path:'/',
    component:Home
},
{
    name:'About',
    path:'/about',
    component:About
},
{
    name:'Contact',
    path:'/contact',
    component:Contact
},
{
    name:'PageNotFound',
    path:'/:pathMatch(.*)*',
    component:PageNotFound
}];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;
