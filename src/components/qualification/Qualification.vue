<template lang="">
   <section class="qualification section" >
        <h2 class="section__title">Qualification</h2>
        <span class="section__subtitle">My persional journey</span>
        <div class="qualification__container container">
            <div class="qualification__tabs">
                <div class="qualification__button button--flex" @click="this.Tab='EDUCATION'">
                    <font-awesome-icon icon="fa-solid fa-graduation-cap" class="qualification__icon" />
                    Education
                </div>
                <div class="qualification__button button--flex qualification__active"  @click="this.Tab='WORK'">
                    <font-awesome-icon icon="fa-solid fa-briefcase" class="qualification__icon" />

                    Work
                </div>
                
            </div>
            <div class="qualification__sections">
                <!-- ================CONTENT 1================== -->
                <div class="qualification__content qualification__active">
                    <!-- ======================qualification 1========= -->
                    <template v-if="this.Tab=='EDUCATION'">
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Infomation Security</h3>
                            <span class="qualification__subtitle">Ho Chi Minh City - Posts and Telecommunications Institute of Technology</span>
                            <div class="qualifiction__calendar">
                                <font-awesome-icon icon="fa-regular fa-calendar-days" class="icon__calendar"/>2018 - 2021
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                    <div class="qualification__data">
                        <div></div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <!-- <span class="qualification__line"></span> -->
                        </div>
                        <div>
                            <h3 class="qualification__title">Backend Develper</h3>
                            <span class="qualification__subtitle">Ho Chi Minh City - Posts and Telecommunications Institute of Technology</span>
                            <div class="qualifiction__calendar">
                                <font-awesome-icon icon="fa-regular fa-calendar-days" class="icon__calendar"/>2021 - 2023
                            </div>
                        </div>
                      
                    </div>
                </template>
                    
                </div>
                <div class="qualification__content">
                    <!-- ======================qualification 2 ========= -->
                    <template v-if="this.Tab=='WORK'">
                        <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Fresher Java</h3>
                            <span class="qualification__subtitle">MWG</span>
                            <div class="qualifiction__calendar">
                                <font-awesome-icon icon="fa-regular fa-calendar-days" class="icon__calendar"/>2022 - 2025
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                    <div class="qualification__data">
                        <div></div>
                         <div>
                            <span class="qualification__rounder"></span>
                        </div>
                        <div>
                            <h3 class="qualification__title">BackEnd Engineer</h3>
                            <span class="qualification__subtitle">MWG</span>
                            <div class="qualifiction__calendar">
                                <font-awesome-icon icon="fa-regular fa-calendar-days" class="icon__calendar"/>2022 - 2025
                            </div>
                        </div>
                       
                    </div>
                </template>
                    
                </div>
            </div>
        </div>
   </section>
</template>
<script>
export default {
    data(){
        return {
            Tab :'EDUCATION'
        }
    }
}
</script>
<style lang="css">
@import url(Qualification.css);
</style>