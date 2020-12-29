<template>
  <div class="about">
    <div class="age">{{ age }}</div>
    <button @click="age++">Click to up age</button>
    <div v-if="showName">
      {{ title }}
    </div>

    <button @click="toggleName()">
      <span v-if="!showName">showname</span>
      <span v-else>hidename</span>
    </button>
    <span v-show="showName">đây là tên</span>
    <li v-for="food in foods" :key="food.title" :class="{ fav: food.isTrue }" @click="changeBg(food)">
      <span>{{ food.title }}</span>
      <span>{{ food.price }}</span>
      <span>{{ food.from }}</span>
      <img :src="food.img" alt="" />
    </li>
  <span ref="test">ok</span>
  <button @click="handleClick()" >click me</button>
 
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      url: "https://facebook.com",
      age: "20",
      title: "duong",
      showName: true,
      foods: [
        {
          title: "rice",
          price: "23k",
          from: "VN",
          isTrue: true,
        },
        {
          title: "rice2",
          price: "25k",
          from: "VN",
          isTrue: false,
        },
        {
          title: "rice3",
          price: "35k",
          from: "VN",
          isTrue: true,
        },
      ],
    };
  },
  methods: {
    toggleName() {
      this.showName = !this.showName;
    },
    handleEvent(e, data) {
      console.log("ok", e);
      if (data) {
        console.log(data);
      }
    },
    changeBg(food){
     food.isTrue= !food.isTrue
    },
    handleClick(){
     this.$refs.test.classList.toggle('active')
    },
    computed: {
      filterFood(){
        return this.food.filter((food)=> food.isTrue)
      }
    },
  },

};
</script>

<style>
.box {
  width: 400px;
  background: #ccc;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  padding: 100px 0;
  margin: 20px;
}
.fav {
  background: chartreuse;
}
.active{
  width: 20px;
  height: 30px;
  background: chocolate;
}
</style>