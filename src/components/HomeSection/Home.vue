<template lang="">
    <section class="home section" id="home">
            <div class="home__container container grid">
                <div class="home__content grid">
                    <div class="home__social">
                        <router-link to="http://www.facebook.com" target="_blank" class="home__social-icon">
                            <!-- <i class="uil uil-linkedin-alt"></i> -->
                            <unicon name="linkedin-alt"  class="home__icon"/>
                        </router-link>
                        <router-link to="http://www.facebook.com" target="_blank" class="home__social-icon">
                            <unicon name="dribbble"  class="home__icon"/>
                            
                        </router-link>
                        <router-link to="http://www.facebook.com" target="_blank" class="home__social-icon">
                            <unicon name="github-alt"  class="home__icon"/>


                        </router-link>
                    </div>
                    <div class="home__img">
                        <!-- <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            <use v-bind="{'href':'../../assets/about.jpg'}"/>
                            </g>    
                        </svg> -->
                        
                        
                    </div>
                    <div class="home__data">
                        <h1 class="home__title"> Hi, My name's Nguyen Duc Chinh </h1>
                        <h3 class="home__subtitle">Backend Developer</h3>
                        <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos non at unde! Quibusdam porro provident eos vitae illum rerum dignissimos!</p>
                        <router-link to="#contact" class="button button--flex">
                            <i class="uil uil-message nav__icon"></i> Contact me
                        </router-link>
                    </div>
                </div>
                <div class="home__scroll">
                    <router-link to="#home" class="home__scroll-button button--flex">
                        <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span class="home__scroll-name">Scroll Down</span>
                        <i class="uil uil-arrow-down home__scroll-arrow"></i>
                    </router-link>
                </div>
            </div>

        </section>
</template>
<script>
import Blob from "../../assets/blob.svg"
export default {
  
}
</script>
<style>
    @import url(Home.css);
</style>