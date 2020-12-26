<template>
  <div id="app">
    <Header
      :nav-links="navLinks"
      background="#fff"
      link-color="#35495e"
      hoverBackground="#ddd"
    />
    <router-view />
  </div>
</template> 

<script>
import Header from "./components/header.vue";

export default {
  name: "App",
  components: { Header },
  data() {
    return {
      navLinks: [
        {
          text: "Home",
          path: "/Home",
          icon: "ion-ios-home",
        },
        {
          text: "About",
          path: "/about",
          icon: "ion-ios-business",
        },
        {
          text: "Todo",
          path: "/todo",
          icon: "ion-ios-bonfire",
        },
        {
          text: "Login",
          path: "/login",
          icon: "ion-ios-people",
        },
         {
          text: "Register",
          path: "/register",
          icon: "ion-ios-people",
        },
        {
          text:"Slider",
          path:"slider",
        }
      ],
    };
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
  padding-top: 30px;
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
</style>