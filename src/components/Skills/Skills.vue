<template lang="">
     <section class="skills section">
            <h2 class="section__title">Skills</h2>
            <span class="section__subtitle">My Favourite Technical</span>
            <div class="skills__container container grid">
                <div>
                    <!-- ==========================SKILL 1========================= -->
                    <div class="skills__content skills__open" ref="skills__toggle">
                        <div class="skills__header">
                            <i class="uil uil-brackets-curly skills__icon"></i>
                            <div>
                                <h1 class="skills__title">Frontend Developer</h1>
                                <span class="skills__subtitle">More Than 1 Years</span>
                            </div>

                            <i class="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div class="skills__list grid" v-for="skill in this.fontEndSkills">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">{{skill.name}}</h3>
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
                            <i class="uil uil-brackets-curly skills__icon"></i>

                            <div>
                                <h1 class="skills__title">BackEnd Developer</h1>
                                <span class="skills__subtitle">More Than 2 Years</span>
                            </div>

                            <i class="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div class="skills__list grid" v-for="skill in this.backEndSkills">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">{{skill.name}}</h3>
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
                            <i class="uil uil-brackets-curly skills__icon"></i>

                            <div>
                                <h1 class="skills__title">BackEnd Developer</h1>
                                <span class="skills__subtitle">More Than 2 Years</span>
                            </div>

                            <i class="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div class="skills__list grid" v-for="skill in this.designSkills">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">{{skill.name}}</h3>
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
import $ from 'jquery'
export default {
    data() {
        return {
            isToggle: true,
            fontEndSkills: [
                {
                    name: "HTML",
                    percent: 60
                },
                {
                    name: "CSS",
                    percent: 50
                },
                {
                    name: "JavaScript",
                    percent: 50
                },
                {
                    name: "ReactJS",
                    percent: 40
                },
                {
                    name: "VueJS",
                    percent: 60
                },
            ],
            backEndSkills: [
                {
                    name: "Python",
                    percent: 70
                },
                {
                    name: "Jave",
                    percent: 60
                },
                {
                    name: "NodeJs",
                    percent: 50
                },
            ],
            designSkills: [
                {
                    name: "Photoshop",
                    percent: 70
                }
                , {
                    name: "Figma",
                    percent: 70
                },
            ]
        }
    },
    mounted() {
        const skillsContent =  document.getElementsByClassName('skills__content')

        const skillsHeader = document.querySelectorAll('.skills__header')
        skillsHeader.forEach((el) => {
            el.addEventListener('click', (el) => {
                let itemClass = el.path[2].className                
                for (let i = 0; i < skillsContent.length; i++) {
                    skillsContent[i].className = 'skills__content skills__close'

                }
                if (itemClass === 'skills__content skills__close') {
                    el.path[2].className = 'skills__content skills__open'
                }

            })

        })
    },
    methods: {

    }
}
</script>
<style lang="css">
@import url(Skill.css);
</style>