<template>
  <section class="Portfolio section" id="Portfolio">
    <h2 class="section__title">Portfolio</h2>
    <span class="section__subtitle">Most Recent work</span>
    <div class="pofolio__container container">
      <Swiper
        :effect="'cube'"
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
        class="mySwiper"
      >
        <!-- ===============Portfolio 1======================= -->
        <SwiperSlide class="Portfolio__content grid">
          <img
            src="https://res.cloudinary.com/nineh2000/image/upload/v1634909225/sample.jpg"
            alt=""
            class="Portfolio__img"
          />
          <div class="Portfolio__data">
            <h3 class="Portfolio__title">Modern Website</h3>
            <p class="Portfolio__description">Something</p>
            <router-link
              to=""
              class="button button--flex button--small Portfolio__button"
            >
              Demo
              <unicon name="arrow-right" class="button__icon" />
            </router-link>
          </div>
        </SwiperSlide>
        <!-- ===============Portfolio 2======================= -->
        <SwiperSlide class="Portfolio__content grid">
          <img
            src="https://res.cloudinary.com/nineh2000/image/upload/v1634909225/sample.jpg"
            alt=""
            class="Portfolio__img"
          />
          <div class="Portfolio__data">
            <h3 class="Portfolio__title">Modern Website</h3>
            <p class="Portfolio__description">Something</p>
            <router-link
              to=""
              class="button button--flex button--small Portfolio__button"
            >
              Demo
              <unicon name="arrow-right" class="button__icon" />
            </router-link>
          </div>
        </SwiperSlide>
        <!-- ===============Portfolio 3======================= -->
        <SwiperSlide class="Portfolio__content grid">
          <img
            src="https://res.cloudinary.com/nineh2000/image/upload/v1634909225/sample.jpg"
            alt=""
            class="Portfolio__img"
          />
          <div class="Portfolio__data">
            <h3 class="Portfolio__title">Modern Website</h3>
            <p class="Portfolio__description">Something</p>
            <router-link
              to=""
              class="button button--flex button--small Portfolio__button"
            >
              Demo
              <unicon name="arrow-right" class="button__icon" />
            </router-link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCube, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [EffectCube, Pagination, Navigation];
</script>
<style lang="css">
@import url("./Portfolio.css");
</style>
