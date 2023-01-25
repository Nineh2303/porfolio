<template lang="">
  <NavBar @scroll="this.scrollLink"/>
  <main class="main">
    <Home/>
    <About/>
    <Skills/>
    <Qualification/>
    <Service/>
  </main>
</template>
<script>
import NavBar from "../components/navbar/Navbar.vue";
import Home from "../components/HomeSection/Home.vue";
import About from "../components/About/About.vue";
import Skills from "../components/Skills/Skills.vue";
import Service from "../components/Services/Service.vue";
import Qualification from "../components/qualification/Qualification.vue";
export default {
  name :"HomeView" ,
  components : {
    NavBar,
    Home,
    About,
    Skills,
    Qualification,
    Service
  },
  methods:{
    scrollLink(name){
      const el=   document.getElementById(name).scrollIntoView({
        block: "center",
        behavior:"smooth"
      })
      console.log(el)
    }
  }

}
</script>
<style>
  
</style>