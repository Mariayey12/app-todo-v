<template>
  <body class="text-center">
    <main class="form-signin">
      <form @submit.prevent="register()">
       
        <h1 class="h3 mb-3 fw-normal">Register</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="email"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-light" type="submit">
           <router-link to="/register" class="btn btn-outline-success btn-lg px-4"
          > Register</router-link> 
          
           <router-link to="/login" class="btn btn-outline-success btn-lg px-4"
          >Login</router-link >
        
        </button>
        
      </form>
    </main>
  </body>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          const user = res.user;
          console.log(user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:
              "Usuario <b>" + this.email + "</b> Registrado correctamente",
            showConfirmButton: false,
            timer: 3000,
          });
        })
        .catch((err) => {
          //console.log(err.message);
          Swal.fire({
            icon: "error",
            title: "Error.",
            text: err.message,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        });
    },
  },
};
</script>

<style scoped>
@import url("./Register.css");

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>