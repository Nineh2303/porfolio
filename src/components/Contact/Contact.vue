<template>
  <section class="contact section" id="contact">
    <h2 class="section__title">Contact Me</h2>
    <span class="section__subtitle">Get in Touch</span>
    <div class="contact__container container grid">
      <div>
        <div class="contact__infomation">
          <unicon name="phone" class="contact__icon" />
          <div>
            <h3 class="contact__title">Call Me</h3>
            <span class="contact__subtitle">0326550233</span>
          </div>
        </div>
        <div class="contact__infomation">
          <unicon name="envelope" class="contact__icon" />
          <div>
            <h3 class="contact__title">Email</h3>
            <span class="contact__subtitle">Chinhnguyenduc2000@gmail.com</span>
          </div>
        </div>
      </div>
      <form action="" class="contact__form grid">
        <div class="contact__inputs grid">
          <div class="contact__content">
            <lable class="contact__lable">Name</lable>
            <input type="text" class="contact__input" />
          </div>
          <div class="contact__content">
            <lable class="contact__lable">Email</lable>
            <input type="text" class="contact__input" />
          </div>
          <div class="contact__content">
            <lable class="contact__lable">Message</lable>
            <textarea
              name=""
              conls="0"
              rows="7"
              type="text"
              class="contact__input"
            />
          </div>
          <div>
            <router-link to="#" class="button button--flex">
              Send Message
              <unicon name="message" class="button__icon" />
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script setup></script>
<style lang="css">
@import url("./Contact.css");
</style>
