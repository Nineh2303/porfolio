<template lang="">
     <section class="about section" id="about">
            <h2 class="section__title">About Me</h2>
            <span class="section__subtitle">My Introduction</span>
            <div class="about__container container grid">
                <img src="https://res.cloudinary.com/nineh2000/image/upload/v1674448112/188240_sljgud.jpg" alt="" class="about__img">
                <div class="about__data">
                    <P class="data__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita

                    </P>
                    <div class="about__info">
                        <div>
                            <span class="about__info-title">08+</span>
                            <span class="about__info-name">Year <br>Experience</span>
                        </div>
                        <div>
                            <span class="about__info-title">08+</span>
                            <span class="about__info-name">Completed <br>Projects</span>
                        </div>
                        <div>
                            <span class="about__info-title">08+</span>
                            <span class="about__info-name">Companies<br>Experienc</span>
                        </div>


                    </div>
                    <div class="about__buttons">
                        <a  download href="../../assets/download/CV_NguyenDucChinh.pdf" class="button button--flex" @click="downloadCV">
                            Download CV
                            <font-awesome-icon icon="fa-solid fa-download" class="button__icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
import axios from "axios"
import * as icons from "vue-unicons/dist/icons"
export default {
    methods:  {
        downloadCV({url, label}){
            console.log(icons)
            var result = Object.keys(icons).map((key) => [Number(key), icons[key]]);
            console.log(result)
    //         axios.get(url, { responseType: 'blob' })
    //   .then(response => {
    //     const blob = new Blob([response.data], { type: 'application/pdf' })
    //     const link = document.createElement('a')
    //     link.href = URL.createObjectURL(blob)
    //     link.download = label
    //     link.click()
    //     URL.revokeObjectURL(link.href)
    //   }).catch(console.error)
        }
    }
}
</script>
<style lang="css">
    @import url(About.css);
</style>