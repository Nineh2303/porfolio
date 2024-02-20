<template>
  <NavBar @scroll="scrollLink" />
  <main class="main">
    <Home />
    <About />
    <Skills />
    <Qualification />
    <Service />
    <Portfolio />
    <!-- <ProjectMind/> -->
    <!-- <Testimonial/> -->
    <Contact />
    <Footer @scroll="scrollLink" />
    <router-link to="#" class="scrollup" id="scrollup">
      <unicon name="arrow-up" class="scrollup__icon" />
    </router-link>
    <router-link to="#" class="change-theme" id="scrollup" @click="changeTheme">
      <unicon name="moon" class="scrollup__icon" />
    </router-link>
  </main>
</template>
<script setup>
import NavBar from "../components/navbar/Navbar.vue";
import Home from "../components/HomeSection/Home.vue";
import About from "../components/About/About.vue";
import Skills from "../components/Skills/Skills.vue";
import Service from "../components/Services/Service.vue";
import Qualification from "../components/qualification/Qualification.vue";
import Portfolio from "../components/Portfolio/Portfolio.vue";
import Contact from "../components/Contact/Contact.vue";
import Footer from "../components/Footer/Footer.vue";
import { onMounted, ref } from "vue";

const isDarkTheme = ref(false);
const scrollLink = (name) => {
  document.getElementById(name).scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
};
const changeTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  const body = document.getElementsByTagName("body")[0];
  if (isDarkTheme.value) {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
};
onMounted(() => {
  const nav = document.getElementById("header");
  const scrollUp = document.getElementById("scrollup");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");

    if (window.scrollY >= 800) scrollUp.classList.add("scroll-up");
    else scrollUp.classList.remove("scroll-up");
  });

  scrollUp.addEventListener("click", () => {
    document.getElementById("home").scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
});
</script>
<style></style>
