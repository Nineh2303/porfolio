<template lang="">
    <footer class="footer">
        <div class="footer__bg">
            <div class="footer__container container grid">
                <div>
                    <h1 class="footer__title">Nineh</h1>
                    <span class="footer__subtitle">BackEnd Developer</span>
                </div>
                <ul class="footer__links">
                    <li>
                        <router-link to="#services" class="footer__link" @click="this.scrollLink('service')"> Services</router-link>
                        <router-link to="#services" class="footer__link" @click="this.scrollLink('porfolio')"> Porfolio</router-link>
                        <router-link to="#services" class="footer__link" @click="this.scrollLink('contact')"> Contact Me</router-link>                    
                    </li>
                </ul>
                <div class="footer__socials">
                    <a href="https://www.facebook.com" class="footer__social" target="_blank">
                        <unicon name="facebook"/>
                    </a><a href="https://www.instagram.com" class="footer__social" target="_blank">
                        <unicon name="instagram"/>
                    </a>
                </div>
            </div>
            <p class="footer__copy">&#169; From Nineh</p>
        </div>
    </footer>
</template>
<script>
export default {
    methods:{
        scrollLink(name){
            this.$emit("scroll", name)
       }
    }

}
</script>
<style lang="css">
    @import url("./Footer.css");
</style>