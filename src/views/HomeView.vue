<template lang="">
  <NavBar/>
  <main class="main">
    <Home/>
    <About/>
    <Skills/>
    <Qualification/>
  </main>
</template>
<script>
import NavBar from "../components/navbar/Navbar.vue";
import Home from "../components/HomeSection/Home.vue";
import About from "../components/About/About.vue";
import Skills from "../components/Skills/Skills.vue";
import Qualification from "../components/qualification/Qualification.vue";
export default {
  name :"HomeView" ,
  components : {
    NavBar,
    Home,
    About,
    Skills,
    Qualification

  }
}
</script>
<style>
  
</style>