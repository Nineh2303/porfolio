<template lang="">
   <section class="qualification section">
        <h2 class="section__title">Qualification</h2>
        <span class="section__subtitle">My persional journey</span>
        <div class="qualification__container container">
            <div class="qualification__tabs">
                <div class="qualification__button button--flex" data-target="Education">
                    <i class="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
                <div class="qualification__button button--flex qualification__active" data-target="Work">
                    <i class="uil uil-briefcase-alt qualification__icon"></i>
                    Work
                </div>
                
            </div>
            <div class="qualification__sections">
                <!-- ================CONTENT 1================== -->
                <div class="qualification__content qualification__active" data-content id="Education">
                    <!-- ======================qualification 1========= -->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Infomation Security</h3>
                            <span class="qualification__subtitle">Ho Chi Minh City - Posts and Telecommunications Institute of Technology</span>
                            <div class="qualifiction__calendar">
                                <i class="uil uil-calendar-alt"></i>2018 - 2021
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
                                <i class="uil uil-calendar-alt"></i>2021 - 2023
                            </div>
                        </div>
                      
                    </div>
                    
                </div>
                <div class="qualification__content" data-content id="Work">
                    <!-- ======================qualification 2 ========= -->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Fresher Java</h3>
                            <span class="qualification__subtitle">MWG</span>
                            <div class="qualifiction__calendar">
                                <i class="uil uil-calendar-alt"></i>2022 - 2025
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
                            <span class="qualification__line"></span>
                        </div>
                        <div>
                            <h3 class="qualification__title">BackEnd Engineer</h3>
                            <span class="qualification__subtitle">MWG</span>
                            <div class="qualifiction__calendar">
                                <i class="uil uil-calendar-alt"></i>2022 - 2025
                            </div>
                        </div>
                       
                    </div>
                    
                </div>
            </div>
        </div>
   </section>
</template>
<script>
export default {
    mounted (){
        this.qualificationTab();
    },
    methods :{
        qualificationTab(){
            const tabs = document.querySelectorAll("[data-target]")
            const tabContents =document.querySelectorAll("[data-content]")

            tabs.forEach(tab=>{
                tab.addEventListener('click',()=>{
                    const target= tab

                    tabContents.forEach(tabContent=>{
                        tabContent.classList.remove('qualification__active')
                    })                    
                    target.classList.add('qualification__active')
                    tabs.forEach(tab=>{
                        tab.classList.remove('qualification__active')
                    })
                    tab.classList.add('qualification__active')
                })
            })
        }
    }
}
</script>
<style lang="css">
    @import url(Qualification.css);
</style>