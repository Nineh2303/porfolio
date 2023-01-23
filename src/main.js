import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import Unicon from 'vue-unicons'
import { uniApps,uniEstate, uniUser,uniFile,uniBriefcaseAlt,uniScenery,uniMessage,uniTimes,
    uniLinkedinAlt, uniDribbble, uniGithubAlt  } from 'vue-unicons/dist/icons'

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
     uniDribbble, uniGithubAlt 

]
Unicon.add(icons)

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Unicon);

app.mount("#app");
