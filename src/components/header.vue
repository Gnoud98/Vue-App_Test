<template>
  <nav
    :style="{ background: background || '#333' }"
    id="nav"
    :class="{ sticky: active }"
  >
    <div :class="toggleNavClass()">
      <ul :style="{ background: background || '#333' }">
        <li
          v-for="(link, index) in navLinks"
          :key="index"
          @mouseenter="
            $event.currentTarget.style.background = hoverBackground || '#999'
          "
          @mouseleave="
            $event.currentTarget.style.background = background || '#333'
          "
        >
          <router-link
            :to="link.path"
            :style="{ color: linkColor || '#35495e' }"
          >
            {{ link.text }}
            <i :class="link.icon" />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      active: false,
    };
  },
  props: [
    "navLinks",
    "background",
    "linkColor",
    "hoverBackground",
    "imagePath",
  ],
  methods: {
    toggleNavClass() {
      if (this.active == false) {
        return "nav";
      } else {
        return "sticky-nav";
      }
    },
  },
  mounted() {
    window.document.onscroll = () => {
      let navBar = document.getElementById("nav");
      if (window.scrollY > navBar.offsetTop) {
        this.active = true;
      } else {
        this.active = false;
      }
    };
  },
};
</script>

<style scoped lang="scss">
nav {
  height: 60px;
  width: 100%;
  box-shadow: 2px 2px 2px #ccc;
  ul {
    display: flex;
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    box-shadow: 2px 2px 2px #ccc;
    justify-content: center;
    a {
      text-decoration: none;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
    i {
      margin-right: 10px;
      font-size: 22px;
    }
    li {
      list-style-type: none;
      padding: 10px 20px;
    }
  }
}
.nav {
  transition: 100ms;
}
.sticky-nav {
  transition: 100ms;
}
#nav {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #55acee;
  position: fixed;
  top: 0;
  z-index: 999;
}
#nav.sticky {
  transition: 150ms;
  box-shadow: 0px 15px 10px -15px #111;
  background-color: #ccd6dd;
}
</style>