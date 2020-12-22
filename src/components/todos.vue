<template>
<div class="container">
    <AddTodo @add-todo="addTodo" />
  <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :todoProps="todo"
    @item-completed="markComplete"
    @delete-item="delTodo"
  />
</div>

</template>
<script>
import { ref } from "vue"
import axious from 'axios'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
export default {
  name: "Todos",
  components:{TodoItem,AddTodo},
  setup() {
    const todos = ref([
    ]);
    //Gọi API để lấy danh sách todo
     const getAllTodos=  async()=>{
       try {
         const res= await axious.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
         todos.value=res.data
         console.log(res.data);
       } catch (error) {
         console.log(error);
       }
     }
     getAllTodos()

//Khi tích vào cv đã hoàn thành sẽ thay đổi trạng thái
   const markComplete= id=>{
     todos.value=todos.value.map(todo=>{
        if(todo.id===id) todo.completed= !todo.completed ;
         return  todo
     })
   }
//Dùng filter để lọc ra id  

   const delTodo= async id=>{
try {
  await axious.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  todos.value=todos.value.filter(todo=>todo.id !== id)
} catch (error) {
  console.log(error);
}
   }

//thêm cv mới vào mảng
   const addTodo= async newTodo =>{
     try {
       const res= await axious.post('https://jsonplaceholder.typicode.com/todos/',newTodo)
         todos.value.push(res.data)
     } catch (error) {
       console.log(error);
     }
 
   }
    return {
      todos,
      markComplete,
      delTodo,
      addTodo,

    };
  },
};
</script>
<style></style>
