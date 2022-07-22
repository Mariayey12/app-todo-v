<pre class="lang:js decode:true">

import { Wrapper, shallowMount, mount } from "@vue/test-utils";
import TodoList from "../../src/components/Tarea/TodoList";
 
describe("TodoList.vue", () => {
  let wrapper: Wrapper;
 
  beforeEach(() => {
    wrapper = mount(TodoList);
  });
 
  // Nos aseguramos de que la imagen del componente es la misma.
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
 
  // Si la entrada de texto está vacía, el botón debe estar deshabilitado.
  it("should disable the button if input text is empty", () => {
    // Cuando el input text esté vacío.
    wrapper.vm.$data.newTodo = "";
 
    // Aseguramos que el botón está deshabilitado.
    expect(wrapper.find("button").attributes("disabled")).toMatch("disabled");
  });
 
  // Clicar el botón añadirá un nuevo TodoItem a la lista, con el título adecuado.
  it("should add a new todo to the array and update the view when the button is clicked and the text input is not empty", () => {
    // Le damos valor al input text.
    wrapper.vm.$data.newTodo = "new todo title test";
    // Simulamos un click del usuario
    wrapper.find("button").trigger("click");
 
    // Aseguramos que el nuevo 'TodoItem' tiene como título el que nosotros le hemos dado.
    expect(wrapper.find(".todo-item").text()).toMatch("new todo title test");
  });
 
  // Clicar el botón vaciará el campo de texto si la entrada de texto no está vacía.
  it("should empty the text input when the button is clicked and the text input is not empty", () => {
    // Le damos valor al input text.
    wrapper.vm.$data.newTodo = "new todo title test";
    // Simulamos un click del usuario
    wrapper.find("button").trigger("click");
 
    // Aseguramos que el campo de texto está vacío.
    expect(wrapper.vm.$data.newTodo).toBe("");
  });
 
  // Clicar en el botón de un 'TodoItem', le dará true al valor 'isCompleted'.
  it("should update 'TodoItem' 'isCompleted' to true when its button is clicked", () => {
    wrapper.vm.$data.todos.push({ title: "title test", isCompleted: false });
    wrapper.find(".todo-item button").trigger("click");
    expect(wrapper.vm.$data.todos[0].isCompleted).toBe(true);
  });
 
  // La propiedad computada 'isButtonEnabled' deberá funcionar como previsto.
  it("should return a valid 'isButtonEnabled' computed property", () => {
    wrapper.vm.$data.newTodo = "";
    expect(wrapper.vm.isButtonEnabled).toBe(false);
    wrapper.vm.$data.newTodo = "test";
    expect(wrapper.vm.isButtonEnabled).toBe(true);
  });
});
 