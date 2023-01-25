<template lang="">
    <section class="home section" id="home">
            <div class="home__container container grid">
                <div class="home__content grid">
                    <div class="home__social">
                        <router-link to="/" target="_blank" class="home__social-icon">
                            <!-- <i class="uil uil-linkedin-alt"></i> -->
                            <font-awesome-icon icon="fa-brands fa-linkedin" class="home__icon" />
                        </router-link>
                        <router-link to="/" target="_blank" class="home__social-icon">
                            <font-awesome-icon icon="fa-brands fa-facebook" class="home__icon"/>
                            
                        </router-link>
                        <router-link to="/" target="_blank" class="home__social-icon">
                            <font-awesome-icon icon="fa-brands fa-github" class="home__icon"/>
                        </router-link>
                    </div>
                    <div class="home__img">
                        <ComponentLoader  className="blob__components"/>
                    </div>
                    <div class="home__data">
                        <h1 class="home__title"> Hi, My name's Nguyen Duc Chinh </h1>
                        <h3 class="home__subtitle">Backend Developer</h3>
                        <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos non at unde! Quibusdam porro provident eos vitae illum rerum dignissimos!</p>
                        <router-link to="#contact" class="button button--flex">
                            <unicon name="message"  class="contact__icon"/>
                            Contact me
                        </router-link>
                    </div>
                </div>
                <div class="home__scroll">
                    <router-link to="#home" class="home__scroll-button button--flex">
                        <unicon name="mouse-alt"  class="home__scroll-mouse"/>

                        <span class="home__scroll-name">Scroll Down</span>
                        <unicon name="arrow-down"  class="home__scroll-arrow"/>

                    </router-link>
                </div>
            </div>

        </section>
</template>
<script>
import ComponentLoader from '../ComponentLoader.vue';
export default {
  components :{
    ComponentLoader
  } 
}
</script>
<style>
    @import url(Home.css);
</style>