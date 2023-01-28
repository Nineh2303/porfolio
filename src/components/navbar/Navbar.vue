<template lang="">
       <header class="header" id="header">
        <nav class="nav container">
            <router-link to="#" class="nav__logo">Nineh</router-link>
            <div class="nav__menu" id="nav-menu" :class={[showMenu]:isToggle}>
                <ul class="nav__list grid">
                    <li class="nav__item">
                        <router-link to="#home" class="nav__link" @click="this.scrollLink('home')">
                            <!-- <i class="uil uil-estate nav__icon"></i> -->
                        <unicon name="estate"  class="nav__icon"/>  
                            Home
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="#about" class="nav__link" @click="this.scrollLink('about')">
                        <unicon name="user"  class="nav__icon"/>
                        About
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="#skills" class="nav__link" @click="this.scrollLink('skills')">
                        <unicon name="file"  class="nav__icon"/>

                             Skills
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="#services" class="nav__link" @click="this.scrollLink('service')">
                        <unicon name="briefcase-alt"  class="nav__icon"/> Services
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="#" class="nav__link" @click="this.scrollLink('porfolio')">
                            <unicon name="scenery"  class="nav__icon"/> Porfolio
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="#contact" class="nav__link" @click="this.scrollLink('contact')">
                            <unicon name="message"  class="nav__icon"/> Contact Me
                        </router-link>
                    </li>
                </ul>
                <unicon name="times"  class="nav__close" @click="this.isToggle=false"/> 
            </div>

            <div class="nav__btns">


                <div class="nav__toggle" id="nav-toggle" @click="this.isToggle=true">
                    <!-- <i class="uil uil-apps nav__icon"></i> -->
                    <unicon name="apps" class="nav__open"/>

                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    data(){
        return{
            isToggle: false,
            showMenu : "show-menu"
        }
        
    },
    methods:{
       scrollLink(name){
            this.isToggle= false
            this.$emit("scroll", name)
       }
    }
}
</script>
<style>
@import url(Navbar.css);
</style>