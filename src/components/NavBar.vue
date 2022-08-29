<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand"
        ><img src="../assets/images/logonuevo1.png" width="100px" padding="90"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link text-success" to="/tarea">
            <span>
              <i class="far fa-check-circle"></i>
              <h9>Estate Tasks</h9>
            </span>
          </router-link>
          <hr />
          <router-link class="nav-link" to="/home">
            <span>
              <i class="far fa-check-circle"></i>
              <h7>Estate Accounting</h7>
            </span>
          </router-link>
          <hr />
          <router-link class="nav-link" to="/home">
            <span>
              <i class="far fa-check-circle"></i>
              <h9>Estate Details</h9>
            </span>
          </router-link>
          <hr />
          <router-link class="nav-link" to="/home">
            <span>
              <i class="far fa-check-circle"></i>
              <h9>Estate Distribution</h9>
            </span>
          </router-link>
          <hr />
          <router-link class="nav-link" to="/home">
            <span>
              <i class="far fa-check-circle"></i>
              <h7>Estate Closure</h7>
            </span>
          </router-link>
          <hr />
        </div>
        <span class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-success"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            @click="mostrarNombre()"
          >
            Perfil
            <img id="icon" class="text-success" />
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item disabled">{{ user }}</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a @click="signOut()" class="dropdown-item" href="#"
                >Close Session</a
              >
            </li>
          </ul>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
import { getAuth } from "firebase/auth";
import Swal from "sweetalert2";
export default {
  name: "NavBar",
  data() {
    return {
      auth: "",
      user: "",
    };
  },
  methods: {
    signOut() {
      Swal.fire({
        title: "Are you sure?",
        text: "You will close your session",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Close Session",
      }).then((result) => {
        if (result.isConfirmed) {
          this.auth = getAuth();
          this.auth.signOut();
          this.$router.push("/home");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Session Closed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    },
    mostrarNombre() {
      const auth = getAuth();
      if (auth.currentUser != null) {
        this.user = auth.currentUser.email;
      } else {
        this.user = "";
      }
    },
  },
};
</script>

<style scoped>
#icon {
  height: 24px;
  float: right;
  margin-left: 4px;
}
</style>
