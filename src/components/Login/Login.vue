<template>
  <body class="text-center">
    <main class="form-signin">
      <form @submit.prevent="login()">
      
        <h1 class="h3 mb-3 fw-normal">Login</h1>

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
            class="form-control text-success"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3  text-primary">
          <router-link to="/forgot">
            Forgot Password?
          </router-link>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; Maria Martinez  2022</p>
      </form>
    </main>
  </body>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      auth.setPersistence("local");
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          console.log(res);
          this.$router.push("/tarea");
        })
        .catch((err) => {
          console.log(err.message);
          Swal.fire({
            icon: "error",
            title: "Error.",
            text: err.message,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        });

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
        }
      });
    },
  },
};
</script>

<style  scoped>
@import url("./Login.css");

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