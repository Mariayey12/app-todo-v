<template>

  <div>
   
    <div v-if="totalitems != totalLoaded" class="loading">Loading&#8230;</div>
    
      <div class="px-4 py-5 my-5 text-center">
    <img class="mb-4" src="../../assets/images/fondo.png"   width="1000" height="200" />
   

   
   
    <label class="accordion-wrapper">
  <input type="checkbox" class="accordion" hidden />
  <div class="title">
    <strong>Pure CSS Accordion</strong>
    <svg viewBox="0 0 256 512" width="12" title="angle-right" class="side-icon" fill="white">
      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
    </svg>
    <svg viewBox="0 0 320 512" height="24" title="angle-down" class="down-icon" fill="white">
      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
    </svg>
  </div>
  <div class="content">
    <p>Content</p>
  </div>
</label>
<label class="accordion-wrapper">
   
  <input type="radio" id="rd1" name="rd"  class="accordion" hidden />
  <div class="title">
    <strong>Accordion 2</strong>
    <svg viewBox="0 0 256 512" width="12" title="angle-right" class="side-icon" fill="white">
      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
    </svg>
    <svg viewBox="0 0 320 512" height="24" title="angle-down" class="down-icon" fill="white">
      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
    </svg>
  </div>
  <div class="content">
    <p>Content 2</p>
  </div>
</label>
<label class="accordion-wrapper">
  <input type="checkbox" class="accordion" hidden />
  <div class="title">
    <strong>Accordion 3</strong>
    <svg viewBox="0 0 256 512" width="12" title="angle-right" class="side-icon" fill="white">
      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
    </svg>
    <svg viewBox="0 0 320 512" height="24" title="angle-down" class="down-icon" fill="white">
      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
    </svg>
  </div>
  <div class="content">
    <p>Content 3</p>
  </div>
</label>
  </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
      <div
        class="col"
        v-for="(file, index) in userFilesList"
        :key="file + index"
      >
        <div class="card shadow-sm">
          <img :src="file.icono" />

          <div class="card-body">
            <h5 class="card-text">{{ file.name }}</h5>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a :href="file.url" class="btn btn-sm btn-outline-secondary"
                  >Download</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, ref, listAll } from "firebase/storage";
import { logo } from "../../assets/logo.png";
import formats from "../../assets/json/files";

export default {
  name: "Dashboard",
  data() {
    return {
      userData: "",
      userFilesList: [],
      totalLoaded: 0,
      totalitems : 0
    };
  },
  components : {
    
  },
  methods: {
    getUserData() {
      const auth = getAuth();
      console.log(auth.currentUser);
      this.userData = auth.currentUser;
    },
    async listAllm() {
      try {
        const storage = getStorage();
        const archivoLocal = logo;
        const auth = getAuth();

        console.log("el tipos es" + archivoLocal);
        console.log("/" + auth.currentUser.uid + "/");
        const storageRef = ref(storage, auth.currentUser.uid);
        listAll(storageRef).then((res) => {
          console.log(res);
          this.totalitems = res.items.length;

          res.items.forEach((itemRef) => {
            //var urlIcon = "";
            getDownloadURL(itemRef).then((url) => {
              console.log(url);
              var icono = "https://cdn-icons-png.flaticon.com/512/633/633585.png";
              formats.formatos.forEach((formato) => {
                console.log(formato);
                console.log(
                  itemRef.name
                    .substring(
                      itemRef.name.lastIndexOf(".") + 1,
                      itemRef.name.length
                    )
                    .toLowerCase()
                );
                if (
                  itemRef.name
                    .substring(
                      itemRef.name.lastIndexOf(".") + 1,
                      itemRef.name.length
                    )
                    .toLowerCase() == formato.formato
                ) {
                  icono = formato.icono;
                }
              });
              this.userFilesList.push({
                name: itemRef.name,
                // url:url
                url: url,
                icono: icono,
              });
              this.totalLoaded +=1;
            });
          }
         );
        }
        );
        
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getUserData();
    this.listAllm();
    if (getAuth().currentUser == null) {
      this.$router.push("/home");
    }
  },
};
</script>

<style scoped>


@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");

* {
  margin: 0;
  font-family: Roboto, sans-serif;
}

body {
  padding: 24px;
}

.accordion-wrapper {
  display: block;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
  max-width: 500px;
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 12px;
}

.accordion + .title {
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background: #cad7e0;
}

.accordion ~ .title strong {
  line-height: 24px;
  color: white;
}

.accordion ~ .title .side-icon {
  display: block;
}

.accordion:checked ~ .title .side-icon {
  display: none;
}

.accordion ~ .title .down-icon {
  display: none;
}

.accordion:checked ~ .title .down-icon {
  display: block;
}

.accordion ~ .content {
  display: none;
  padding: 8px;
  cursor: pointer;
}

.accordion:checked ~ .content {
  display: block;
}

.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
}

/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 1500ms infinite linear;
  -moz-animation: spinner 1500ms infinite linear;
  -ms-animation: spinner 1500ms infinite linear;
  -o-animation: spinner 1500ms infinite linear;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>