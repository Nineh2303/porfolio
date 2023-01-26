import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkedin, faFacebook, faGithub, faHtml5, faJs, faReact, faVuejs, faCss3Alt, faPython, faJava, faNodeJs, faFigma } from "@fortawesome/free-brands-svg-icons";
import Unicon from 'vue-unicons'



import { uniWebGrid,uniApps,uniEstate, uniUser,uniFile,uniBriefcaseAlt,uniScenery,uniMessage,uniTimes,uniAngleDown,
    uniLinkedinAlt, uniDribbble, uniGithubAlt, uniMouseAlt,uniArrowDown,uniBracketsCurly, uniDatabaseAlt, uniImage, uniArrowRight, uniCheckCircle, uniPhone, uniEnvelope, uniFacebook, uniInstagram, uniArrowUp, uniMoon} from 'vue-unicons/dist/icons'
    import { faBriefcase, faDownload, faGraduationCap, faPen } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
    
    const icons= [
        uniEstate,
        uniUser,
        uniFile,
        uniBriefcaseAlt,
        uniScenery,
        uniMessage,
        uniTimes,
        uniApps,
        uniLinkedinAlt ,
        uniDribbble, uniGithubAlt ,uniMouseAlt,
        uniArrowDown,
        uniBracketsCurly,
        uniDatabaseAlt,
        uniImage,
        uniAngleDown,
        uniWebGrid  ,
        uniArrowRight,
        uniCheckCircle ,
        uniPhone ,
        uniEnvelope,
        uniFacebook,
        uniInstagram,
        uniArrowUp,
        uniMoon
    ]

    library.add([faLinkedin, faFacebook,  faGithub, faHtml5, faCss3Alt, faJs,faReact,faVuejs,
         faNodeJs, faPython,faJava,faFigma,faPen, faDownload, faGraduationCap, faBriefcase, faCalendarDays])
Unicon.add(icons)

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Unicon);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount("#app");
