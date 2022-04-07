import AllEmployee from './components/employee.vue';
import CreateEmployee from './components/CreateEmployee.vue';
import EditEmployee from './components/EditEmployee.vue';

export const routes = [{
        name: 'home',
        path: '/',
        component: AllEmployee
    },
    {
        name: 'create',
        path: '/create',
        component: CreateEmployee
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditEmployee
    }
];