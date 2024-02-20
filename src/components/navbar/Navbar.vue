<template>
  <header class="header" id="header">
    <nav class="nav container">
      <router-link to="#" class="nav__logo"
        >Nineh <span class="logo__subtitle">portfolio</span></router-link
      >
      <div class="nav__menu" id="nav-menu" :class="{ [showMenu]: isToggle }">
        <ul class="nav__list grid">
          <li class="nav__item">
            <router-link
              to="#home"
              class="nav__link"
              @click="scrollLink('home')"
            >
              <!-- <i class="uil uil-estate nav__icon"></i> -->
              <unicon name="estate" class="nav__icon" />
              Home
              <div class="nav__link-bar"></div>
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="#about"
              class="nav__link"
              @click="scrollLink('about')"
            >
              <unicon name="user" class="nav__icon" />
              About
              <div class="nav__link-bar"></div>
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="#skills"
              class="nav__link"
              @click="scrollLink('skills')"
            >
              <unicon name="file" class="nav__icon" />

              Skills
              <div class="nav__link-bar"></div>
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="#services"
              class="nav__link"
              @click="scrollLink('service')"
            >
              <unicon name="briefcase-alt" class="nav__icon" />
              Services
              <div class="nav__link-bar"></div>
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="#"
              class="nav__link"
              @click="scrollLink('Portfolio')"
            >
              <unicon name="scenery" class="nav__icon" />
              Portfolio
              <div class="nav__link-bar"></div>
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="#contact"
              class="nav__link"
              @click="scrollLink('contact')"
            >
              <unicon name="message" class="nav__icon" />
              Contact Me
              <div class="nav__link-bar"></div>
            </router-link>
          </li>
        </ul>
        <unicon
          name="times"
          class="nav__close"
          @click="isToggle.value = false"
        />
      </div>

      <div class="nav__btns">
        <div class="nav__toggle" id="nav-toggle" @click="isToggle.value = true">
          <!-- <i class="uil uil-apps nav__icon"></i> -->
          <unicon name="apps" class="nav__open" />
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref } from "vue";
const emit = defineEmits();
const isToggle = ref(false);
const showMenu = ref("show-menu");
const scrollLink = (name) => {
  isToggle.value = false;
  emit("scroll", name);
};
</script>
<style>
@import url(Navbar.css);
</style>
