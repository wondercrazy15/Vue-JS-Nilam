import { createWebHistory,createRouter } from "vue-router";
import Create from './components/CreateUser.vue'
import Edit from './components/EditUser.vue'
import List from './components/ListUser.vue'

const routes=[
    {
        name:'ListUser',
        component:List,
        path:'/'

        
    },
    {
        name:'CreateUser',
        component:Create,
        path:'/createuser'
    },
    {
        name:'EditUser',
        component:Edit,
        path:'/edituser/:id'
    }
   ]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router