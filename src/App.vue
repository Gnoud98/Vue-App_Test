<template>
  <div id="app">
    <span @click="toggleModal()" class="login-btn"> Login </span>
    <mainHeader />

    <router-view />
    <div v-if="modalShow">
      <modal @close="toggleModal" />
    </div>
  
    
  </div>
</template> 

<script>
import mainHeader from "./components/MainHeader.vue";
import modal from "./views/Modal";
export default {
  name: "App",
  components: { mainHeader, modal },
  data() {
    return {
      modalShow: false,
      navLinks: [],
     
    };
  },
  methods: {
    toggleModal() {
      this.modalShow = !this.modalShow;
    },
  },
};
</script>


<style lang="scss">
@import "https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css";

body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.login-btn {
  position: absolute;
  z-index: 9;
  font-size: 17px;
  text-transform: uppercase;
  color: #fff;
  left: 66%;
  top: 14px;
  cursor: pointer;
}
</style>