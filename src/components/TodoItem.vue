<template>
 <p :class="['list-todo', todoProps.completed ? 'completed': '']">
 <span >
   <input type="checkbox" name="" id="" :checked="todoProps.completed" @change="markItemCompleted()">
         {{todoProps.title}}
</span>
  <button class="btn btn-danger " @click="deleteItem">Delete</button>
 </p>
</template>

<script>
export default {
  methods: {
  },
 name:"TodoItem",
 props:['todoProps'],
setup(props,context) {
  const markItemCompleted= ()=>{
    context.emit('item-completed', props.todoProps.id);
    console.log(context);
    console.log(props);
  }
 const deleteItem =()=>{
   context.emit('delete-item',props.todoProps.id)
 }
 return{
      markItemCompleted,
      deleteItem
    }
}
}
</script> 
<style scoped>
 .list-todo{
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px 10px ;
   margin-top: 20px;
   background: #41b883;
   border-radius: 5px;
 }
.completed{
   color: #ccc;
}
</style>