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
  name: "Home",
  data() {
    return {
      parallaxSwiperWidth: 0,
      images: [
        {
          id: 1,
          imageUrl: require("../assets/slider-banner1.png"),
        },
        {
          id: 2,
          imageUrl: require("../assets/slider-banner2.png"),
        },
        
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    FontAwesomeIcon,
    
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
width:100%;
height:100vh;
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
    .nav-indicator{
       height: 40px;
       width: 40px;
       background: cornflowerblue;
       border-radius: 50%;
       display: inline-flex;
       justify-content: center;
       align-items: center;
      color: #ffffff;
    }

}
</style>