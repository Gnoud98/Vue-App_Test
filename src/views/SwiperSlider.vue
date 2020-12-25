<template>
  <swiper
   class="parallax-slider"
    parallax 
    grabCursor 
    :navigation="{
        nextEl:'.nextArrow',
        prevEl:'.preArrow'
    }"
  >
  <div class="parallax-slider-navigation">
      <div class="nav-indicator preArrow">
        <font-awesome-icon :icon="['fas','chevron-left']" />
      </div>

       <div class="nav-indicator nextArrow">
           <font-awesome-icon :icon="['fas','chevron-right']" />
       </div>
  </div>
    <swiper-slide 
    v-for="image in images" 
    :key="image.id" 
    class="parallax-slider-img"
    >

       <img :src="image.imageUrl" alt="">

    </swiper-slide>
    
  </swiper>
</template>

<script>
//Swiper core
import SwiperCore,{Navigation,Parallax} from 'swiper'
//Swipper vue
import { Swiper, SwiperSlide } from "swiper/vue";
//Swipper css
import "swiper/swiper.scss";
// Navigation
import "swiper/components/navigation/navigation.scss";
//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
SwiperCore.use([Navigation,Parallax])
export default {
  name: "slider",
  data() {
    return {
      parallaxSwiperWidth: 0,
      images: [
        {
          id: 1,
          imageUrl: require("../assets/swipper1.jpg"),
        },
        {
          id: 2,
          imageUrl: require("../assets/swiper2.jpg"),
        },
        {
          id: 3,
          imageUrl: require("../assets/swiper3.jpg"),
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    FontAwesomeIcon
  },
};
</script>

<style lang="scss" scoped>
body{
    margin: 0;
    padding: 0;
}
.parallax-slider{
position: relative;
}
.parallax-slider-img{
height: 500px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
}
.parallax-slider-navigation{
    position: absolute;
    top: 50%;
    z-index: 2;
   
    right: 0;
    left: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .preArrow, .nextArrow{
        font-size: 30px;
         border: 1px solid red;
    }

}
</style>