<template>
  <div class="home">
    <span class="text-home">
      {{ textHome }}
    </span>
    <span class="text-big-home">
      {{ textBigHome }}
    </span>
    <span>
      <button class="text-uppercase">
        {{ btnShowMore }}
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      textHome: " Welcome To My Page !",
      textBigHome: "NICE TO MEET YOU",
      btnShowMore: "Show More",
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #fff;
  background-image: url(../assets/header-bg.jpg);
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  position: relative;
  .text-home {
    width: 100%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3rem;
    font-style: italic;
    line-height: 1.5rem;
    margin-bottom: 25px;
    font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  .text-big-home {
    font-size: 4.5rem;
    font-weight: 700;
    width: 100%;
    position: absolute;
    top: 36%;
    left: 50%;
    transform: translateX(-50%);
  }
  button {
    padding: 15px;
    background: #fed136;
    color: #fff;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    &:focus {
      outline: none;
    }
    &:hover {
      background: #f5c414;
    }
  }
}
</style>