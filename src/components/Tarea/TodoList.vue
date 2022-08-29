<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="task-list">
      <div class="px-5 py-30 my-150 text-center image-1" margin-top="900">
        <img
          src="../../assets/images/ultimo .png"
          width="190px"
          padding="100px"
        />

        <h3 class="text-black">Estate Tasks</h3>

        <h9 class="text-success">Estate Tasks Guide </h9>
        <span>
          <i class="fas fa-angle-down text-success"></i>
        </span>
        <div class="row">
          <div class="col-lg-8-0ffset-lg-1">
            <div class="card mt-4">
              <div class="card-body">
                <div class="input-group d-flex justify-content">
                  <label class="label" for="task">
                    <h5>1 Inmediate Steps</h5></label
                  >

                  <div class="input-group d-flex justify-content">
                    <h6>These are your immediate steps to complete</h6>
                  </div>
                </div>

                <h3>{{ tasks.length }} Tasks</h3>

                <ul class="list">
                  <li
                    class="task"
                    v-for="(task, i) in tasks"
                    :key="'task' + i"
                    :class="{ completed: task.completed }"
                    @click="completeTask(task.text)"
                  >
                    {{ task.text }}
                  </li>
                </ul>
                <div class="input-group d-flex justify-content-end">
                  <div class="input-group d-flex justify-content-end">
                    <select
                      class="form-select text-success"
                      aria-label="Default select example"
                    >
                      <option selected>show All Tasks</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                    <input
                      width="100px"
                      padding="90"
                      type="text"
                      v-model="tarea"
                      class="form control form control-lg-1"
                      placeholder="Agregar Tarea"
                      id="task"
                    />

                    <div class="input-group-append">
                      <button
                        v-on:click="agregarTarea()"
                        class="btn btn-success btn-lg"
                      >
                        Add a task
                      </button>
                    </div>
                  </div>
                </div>

                <br />

                <h5 v-if="listTareas.length == 0">
                  No hay tareas por realizar
                </h5>

                <ul class="list-group">
                  <li
                    v-for="(tarea, index) of listTareas"
                    :key="index"
                    class="list-group-item d-flex justify-content-between"
                  >
                    <span
                      class="cursor"
                      v-bind:class="{ 'text-success': tarea.estado }"
                      v-on:click="editarTarea(tarea, index)"
                    >
                      <i
                        v-bind:class="[
                          tarea.estado
                            ? 'fas fa-check-circle'
                            : 'far fa-circle',
                        ]"
                      ></i>

                      <!--   <i class="fas fa-check-circle"></i> -->
                    </span>

                    {{ tarea.nombre }}
                    <span
                      class="text-danger cursor"
                      v-on:click="eliminarTarea(index)"
                    >
                      <i class="fas fa-trash-alt"></i>
                    </span>
                    <span>
                      <i class="fas fa-angle-right text-success"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tarea",
  data() {
    return {
      tarea: " ",
      listTareas: [],
      tasks: [],
    };
  },

  methods: {
    agregarTarea() {
      const tarea = {
        nombre: this.tarea,

        estado: false,
      };
      localStorage.setItem("gym-vue", JSON.stringify(this.listTareas));
      (this.Tareas = ""), this.listTareas.push(tarea);
    },

    eliminarTarea(index) {
      this.listTareas.splice(index, 1);
      localStorage.setItem("gym-vue", JSON.stringify(this.listTareas));
    },
    editarTarea(tarea, index) {
      this.listTareas[index].estado = !tarea.estado;
      localStorage.setItem("gym-vue", JSON.stringify(this.listTareas));
    },
    createTask() {
      let task = {
        text: this.newTask,
        completed: false,
      };
      this.tasks.push(task);
      this.newTask = "";
      console.log(this.tasks);
    },
  },
  created: function () {
    let datosDB = JSON.parse(localStorage.getItem("gyn-vue"));

    if (datosDB === null) {
      this.listTareas = [];
    } else {
      this.listTareas = datosDB;
    }
  },
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}

.task-list {
  width: 700px;
  max-width: 100%;
  margin: 10px auto;
}

.label {
  display: block;
  margin-bottom: 10px;
}
.input {
  height: 35px;
}
.button {
  margin-left: 20px;
  height: 35px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: #5bc487;
  color: #ecf0f1;
  cursor: pointer;
}
.list {
  margin-top: 40px;
}
.task {
  cursor: pointer;
  margin: 10px 0;
}
.completed {
  text-decoration: line-through;
  color: lightgrey;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-radius: 80px;
}
.image-1,
body {
  border-radius: 50;

  background-color: #f6f5f5;
  width: 200;
  padding: 90;
}
</style>
