import Welcome from './components/WelcomeScreen.vue'
import Login from './components/LoginScreen.vue'
import Register from './components/RegisterScreen.vue'
import TodoList from './components/TodoList.vue'
import CreateTodo from './components/CreateTodoScreen.vue'
import UpdateTodo from './components/UpdateTodoScreen.vue'

export const routes =[
    {
        path:'/', component: Welcome
    },
    {
        path:'/login', component: Login
    },
    {
        path:'/register', component: Register
    },
    {
        path:'/todolist', component: TodoList
    },
    {
        path:'/createtodo', component: CreateTodo
    },
    {
        path:'/updatetodo', component: UpdateTodo
    }
];
