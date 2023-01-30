<template lang="">
     <section class="skills section" id="skills">
            <h2 class="section__title">Skills</h2>
            <span class="section__subtitle">My Favourite Technical</span>
            <div class="skills__container container grid">
                <div>
                    <!-- ==========================SKILL 1========================= -->
                    <div class="skills__content skills__open" ref="skills__toggle">
                        <div class="skills__header">
                            <unicon name="brackets-curly" class="skills__icon"/>
                            <div>
                                <h1 class="skills__title">Frontend Developer</h1>
                                <span class="skills__subtitle">More Than 1 Years</span>
                            </div>

                            <unicon name="angle-down" class="skills__arrow"/>
                        </div>
                        <div class="skills__list grid" v-for="skill in this.fontEndSkills">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <div class="skills__block">
                                    <!-- <unicon :name="skill.icon|| 'database-alt'" class="sub__skills" /> -->
                                    <font-awesome-icon :icon="skill.icon||null" class="sub__skills" />
                                    <h3 class="skills__name">{{skill.name}}</h3>
                                    </div>
                                    <span class="skills__number">{{skill.percent}}%</span>
                                    
                                </div>
                                <div class="skills__bar">
                                    <div class="skills__percentage" :style="{'width':`${skill.percent}%`}">
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                    <!-- ==========================SKILL 2========================= -->
                    <div class="skills__content skills__close" >
                        <div class="skills__header">
                            <unicon name="database-alt" class="skills__icon"/>


                            <div>
                                <h1 class="skills__title">BackEnd Developer</h1>
                                <span class="skills__subtitle">More Than 2 Years</span>
                            </div>

                            <unicon name="angle-down" class="skills__arrow"/>

                        </div>
                        <div class="skills__list grid" v-for="skill in this.backEndSkills">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <div class="skills__block">
                                    <font-awesome-icon :icon="skill.icon||null" class="sub__skills" />
                                    <h3 class="skills__name">{{skill.name}}</h3>
                                    </div>
                                    <span class="skills__number">{{skill.percent}}%</span>
                                </div>
                                <div class="skills__bar">
                                    <div class="skills__percentage" :style="{'width':`${skill.percent}%`}">
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                <div>
                <!-- ==========================SKILL 3========================= -->
                <div class="skills__content skills__close">
                        <div class="skills__header">
                            <unicon name="image" class="skills__icon"/>


                            <div>
                                <h1 class="skills__title">Design And Photograph</h1>
                                <span class="skills__subtitle">More Than 1 Years</span>
                            </div>

                            <unicon name="angle-down" class="skills__arrow"/>
                            
                        </div>
                        <div class="skills__list grid" v-for="skill in this.designSkills">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <div class="skills__block">
                                    <font-awesome-icon :icon="skill.icon||null" class="sub__skills" />
                                    <h3 class="skills__name">{{skill.name}}</h3>
                                    </div>
                                    <span class="skills__number">{{skill.percent}}%</span>
                                </div>
                                <div class="skills__bar">
                                    <div class="skills__percentage" :style="{'width':`${skill.percent}%`}">
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
import { slotFlagsText } from '@vue/shared'
import $ from 'jquery'
export default {
    data() {
        return {
            isToggle: true,
            fontEndSkills: [
                {
                    name: "HTML",
                    percent: 60,
                    icon:  "fa-brands fa-html5"
                },
                {
                    name: "CSS",
                    percent: 50,
                    icon:"fa-brands fa-css3-alt"
                },
                {
                    name: "JavaScript",
                    percent: 50,
                    icon:  "fa-brands fa-js"
                    
                },
                {
                    name: "ReactJS",
                    percent: 40,
                    icon:  "fa-brands fa-react"

                },
                {
                    name: "VueJS",
                    percent: 60,
                    icon:  "fa-brands fa-vuejs"

                },
            ],
            backEndSkills: [
                {
                    name: "Python",
                    percent: 70,
                    icon:  "fa-brands fa-python"
                },
                {
                    name: "Java",
                    percent: 60,
                    icon:  "fa-brands fa-java"
                },
                {
                    name: "NodeJs",
                    percent: 50,
                    icon:  "fa-brands fa-node-js"
                },
            ],
            designSkills: [
                {
                    name: "Photoshop",
                    percent: 70,
                    icon: "fa-solid fa-pen"
                }
                , {
                    name: "Figma",
                    percent: 70,
                    icon : 'fa-brands fa-figma'
                },
            ]
        }
    },
    mounted() {
        const skillHeaders= document.querySelectorAll(".skills__content")
        skillHeaders.forEach(skillHeader=>{
            skillHeader.addEventListener('click',()=>{
                 if(skillHeader.classList[1]=='skills__open'){
                    skillHeader.classList.remove('skills__open')
                    skillHeader.classList.add('skills__close')
                }  else {
                    skillHeaders.forEach(skillHeader=>{
                    if(skillHeader.classList[1]=='skills__open'){
                    skillHeader.classList.remove('skills__open')
                    skillHeader.classList.add('skills__close')
                } 
                })
               
                    {
                    skillHeader.classList.remove('skills__close')
                    skillHeader.classList.add('skills__open')
                }
                }
                
            })
        })
           
    },
    methods: {
        toggle(){
            
        }
    }
}
</script>
<style lang="css">
@import url(Skill.css);
</style>