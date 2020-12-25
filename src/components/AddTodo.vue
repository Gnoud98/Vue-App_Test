<template>
  <form @submit="addItem">
    <input type="text" placeholder="Add new todo..." v-model="title" />
    <button type="submit" class="btn btn-primary add-btn">{{addTitle}}</button>
   
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  props: {},
  name: "AddTodo",
  data() {
    return {
      addTitle:'Add New'
    }
  },
  setup(props,context) {
    const title = ref('')
    const addItem = event => {
      event.preventDefault();
      const newItem = {
        
        title: title.value,
        completed: false,
      }
     context.emit('add-todo',newItem)
     title.value=''
    };
    return {
      title,
      addItem,
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  margin-top: 30px;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
input[type="text"]:focus{
  outline: none;
}
input[type="submit"] {
  flex: 2;
}
</style>
