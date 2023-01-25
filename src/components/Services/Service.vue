<template lang="">
    <section class="services section" id="service">
        <h2 class="section__title">Services</h2>
        <span class="section__subtitle">What I Offer</span>
        
        <div class="services__container container grid">
            <!-- =====================Service 1================== -->
            <div class="services__content">
                <div>
                    <unicon name="web-grid" class="services__icon"/>
                    <h3 class="services__title">Backend Developer</h3>
                </div>

                <span class="button button--flex button--small button--link services__button">
                    View More
                    <unicon  name="arrow-right" class="button__icon"/>
                </span>
                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__model-title">Backend Developer </h4>
                        <unicon name="times" class="services__modal-close"/>
                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <unicon name="check-circle"  class="services__modal-icon"/>
                                <p>I develop the services for web plaform</p>
                            </li>
                            <li class="services__modal-service">
                                <unicon name="check-circle"  class="services__modal-icon"/>
                                <p>Develope app service for sale</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
             <!-- =====================Service 1================== -->
             <div class="services__content">
                <div>
                    <unicon name="web-grid" class="services__icon"/>
                    <h3 class="services__title">Frontend Developer</h3>
                </div>

                <span class="button button--flex button--small button--link services__button">
                    View More
                    <unicon  name="arrow-right" class="button__icon"/>
                </span>
                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__model-title">Frontend Developer </h4>
                        <unicon name="times" class="services__modal-close"/>
                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <unicon name="check-circle"  class="services__modal-icon"/>
                                <p>I develop the services for web plaform</p>
                            </li>
                            <li class="services__modal-service">
                                <unicon name="check-circle"  class="services__modal-icon"/>
                                <p>Develope app service for sale</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <!-- =====================Service 2================== -->
            <div class="services__content">
                <div>
                    <unicon name="web-grid" class="services__icon"/>
                    <h3 class="services__title">Design</h3>
                </div>

                <span class="button button--flex button--small button--link services__button">
                    View More
                    <unicon  name="arrow-right" class="button__icon"/>
                </span>
                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__model-title">
                            Design
                        </h4>
                        <unicon name="times" class="services__modal-close" />
                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <unicon name="check-circle"  class="services__modal-icon"/>
                                <p>I develop the services for web plaform</p>
                            </li>
                            <li class="services__modal-service">
                                <unicon name="check-circle"  class="services__modal-icon"/>
                                <p>Develope app service for sale</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>
<script>
export default {
    mounted(){
        const modalViews=document.querySelectorAll('.services__modal')
        const modalBtns = document.querySelectorAll('.services__button')
        const modalCloses= document.querySelectorAll('.services__modal-close')
        modalBtns.forEach((modalBtn,i)=>{
            modalBtn.addEventListener('click',()=>{
                modalViews[i].classList.add('active-modal')
            })
        })
        modalCloses.forEach((modalClose)=>{
            modalClose.addEventListener('click',()=>{
                modalViews.forEach(modalView=>{
                    modalView.classList.remove('active-modal')
                })
            })
        })
    },
    methods :{
       
    }
}
</script>
<style  lang="css">
    @import url("./Service.css");
</style>