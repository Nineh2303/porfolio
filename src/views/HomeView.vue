<template lang="">
  <NavBar @scroll="this.scrollLink"/>
  <main class="main">
    <Home/>
    <About/>
    <Skills/>
    <Qualification/>
    <Service/>
    <Porfolio/>
    <!-- <ProjectMind/> -->
    <!-- <Testimonial/> -->
    <Contact/>
    <Footer @scroll="this.scrollLink"/>
  </main>
</template>
<script>
import NavBar from "../components/navbar/Navbar.vue";
import Home from "../components/HomeSection/Home.vue";
import About from "../components/About/About.vue";
import Skills from "../components/Skills/Skills.vue";
import Service from "../components/Services/Service.vue";
import Qualification from "../components/qualification/Qualification.vue";
import Porfolio from "../components/Porfolio/Porfolio.vue";
import ProjectMind from "../components/ProjectMind/ProjectMind.vue";
import Testimonial from "../components/Testimonial/Testimonial.vue"
import Contact from "../components/Contact/Contact.vue"
import Footer from "../components/Footer/Footer.vue"
export default {
  name :"HomeView" ,
  components : {
    NavBar,
    Home,
    About,
    Skills,
    Qualification,
    Service,
    Porfolio,
    ProjectMind,
    Testimonial,
    Contact,
    Footer
  },
  mounted (){
    const nav = document.getElementById('header')
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=100) nav.classList.add('scroll-header');
      else nav.classList.remove('scroll-header')
    })
  },
  methods:{
    scrollLink(name){
      const el=   document.getElementById(name).scrollIntoView({
        block: "center",
        behavior:"smooth"
      })
    }
  }

}
</script>
<style>
  
</style>