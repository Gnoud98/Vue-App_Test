<template>
  <ul class="menu">
    <div class="menu-edicator">
      <li class="menu-item" v-for="link in links" :key="link.id">
        <router-link :to="link.path">
          <i :class="link.icon"></i>
          {{ link.text }}
        </router-link>
       
      </li>
    
    </div>
  </ul>
</template>
<script>

export default {
  name: "mainHeader",
components:{
   
},
  data() {
    return {
      modalShow:false,
      sliderPosition: 0,
      selectedElementwidth: 0,
      selectedIndex: 0,
      links: [
         {
          id: 1,
          text: "HomePage",
          path: "/homepage",
          icon: "fas fa-pen-alt",
        },
        {
          id: 2,
          text: "Slider",
          path: "/Slider",
          icon: "fas fa-home",
        },
        {
          id: 3,
          text: "About",
          path: "/about",
          icon: "fas fa-info",
        },
        {
          id: 4,
          text: "Todos",
          path: "/todo",
          icon: "fas fa-pen-alt",
        },
     
       
      ],
    };
  },
  methods: {
    
  },
};
</script>

<style lang="scss">
$active-color: #ffee93;
$link-text-color: #f1faee;
$menu-background-color: #183153;
$active-background-color: #13223b;
.menu {
  margin: 0;
  padding: 0;
  position: relative;
  background: $menu-background-color;
  display: inline-flex;
  border: 5px;
  width: 100%;
  justify-content: center;
   &:after {
        position: absolute;
        height: 4px;
        background: $active-color;
        bottom: 0;
        left: 0;
        width: 50px;
        margin: auto; 
        transition: all ease 0.5s;
      }
  .menu-edicator {
    li {
      display: inline-flex;
      
      a {
        display: inline-flex;
        padding: 15px;
        text-decoration: none;
        color: $link-text-color;
        font-size: 17px;
        text-transform: uppercase;
       
      }
      
    }
  }
}
</style>