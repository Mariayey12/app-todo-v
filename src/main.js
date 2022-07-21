import Vue from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import VueRouter from 'vue-router';
import Register from "./components/Register/Register.vue";
import Login from "./components/Login/Login.vue";

import  Tarea from "./components/Tarea/TodoList.vue";
import Home from "./components/Home/Home.vue";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);


const firebaseConfig = {
  apiKey: "AIzaSyAnz1Y_avIfS1Mt-TgmduU4JYaYJmmW-hA",
  authDomain: "app-todo-vue-4372f.firebaseapp.com",
  projectId: "app-todo-vue-4372f",
  storageBucket: "app-todo-vue-4372f.appspot.com",
  messagingSenderId: "126056204928",
  appId: "1:126056204928:web:08a270dbd79d32f870f465",
  measurementId: "G-GJE3FNS0NN"
};

// Initialize Firebase
initializeApp(firebaseConfig);






const routes = [
  {path:"/", component: Home}, 
   {path:"/tarea", component: Tarea},
  {path:"/register", component: Register},
  {path:"/login", component: Login},
 

  {path:"/home", component :Home},
  {path:"/forgot", component: ForgotPassword}
];

const router = new VueRouter({
  routes,
  mode:"history"
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
