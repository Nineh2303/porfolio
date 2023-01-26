<template lang="">
    <section class="porfolio section" id="porfolio">
        <h2 class="section__title">Porfolio</h2>
        <span class="section__subtitle">Most Recent work</span>
        <div class="pofolio__container container">
            <Swiper :effect="'cube'"
                    :navigation="true"
                    :grabCursor="true"
                    :cubeEffect="{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                    }"
                    :pagination="true"
                    :modules="modules"
                    class="mySwiper">
                <!-- ===============PORFOLIO 1======================= -->
                <SwiperSlide class="porfolio__content grid">
                    <img src="https://res.cloudinary.com/nineh2000/image/upload/v1634909225/sample.jpg" alt="" class="porfolio__img">
                    <div class="porfolio__data">
                        <h3 class="porfolio__title">Modern Website</h3>
                        <p class="porfolio__description">Something</p>
                        <router-link to="" class="button button--flex button--small porfolio__button">
                            Demo
                            <unicon name="arrow-right" class="button__icon"/>
                        </router-link>
                    </div>
                </SwiperSlide>
                 <!-- ===============PORFOLIO 2======================= -->
                 <SwiperSlide class="porfolio__content grid">
                    <img src="https://res.cloudinary.com/nineh2000/image/upload/v1634909225/sample.jpg" alt="" class="porfolio__img">
                    <div class="porfolio__data">
                        <h3 class="porfolio__title">Modern Website</h3>
                        <p class="porfolio__description">Something</p>
                        <router-link to="" class="button button--flex button--small porfolio__button">
                            Demo
                            <unicon name="arrow-right" class="button__icon"/>
                        </router-link>
                    </div>
                </SwiperSlide>
                 <!-- ===============PORFOLIO 3======================= -->
                 <SwiperSlide class="porfolio__content grid">
                    <img src="https://res.cloudinary.com/nineh2000/image/upload/v1634909225/sample.jpg" alt="" class="porfolio__img">
                    <div class="porfolio__data">
                        <h3 class="porfolio__title">Modern Website</h3>
                        <p class="porfolio__description">Something</p>
                        <router-link to="" class="button button--flex button--small porfolio__button">
                            Demo
                            <unicon name="arrow-right" class="button__icon"/>
                        </router-link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCube, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCube, Pagination, Navigation],
    };
  },
};
</script>
<style lang="css">
@import url("./Porfolio.css");
</style>