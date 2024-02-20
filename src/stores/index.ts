import { defineStore } from "pinia";
import { axiosInstance } from "../utils/axiosConfig";
import { Ref, ref, UnwrapRef } from "vue";
import skillType from "../utils/TypeDefine";

export const usePortfolioStore = defineStore("portfolio", () => {
  let backendSkill = ref([]);
  let frontendSkill = ref([]);
  let designSkill = ref([]);
  let allProjects = ref([]);

  async function fetchSkill() {
    await axiosInstance
      .get("/skills")
      .then((res) => {
        backendSkill.value = res.data.filter((e) => e.skillType === "BACK_END");
        frontendSkill.value = res.data.filter(
          (e) => e.skillType === "FRONT_END"
        );
        designSkill.value = res.data.filter((e) => e.skillType === "DESIGN");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchProject() {
    await axiosInstance
      .get("/projects")
      .then((res) => {
        console.log(res.data);
        allProjects.value = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return {
    backendSkill,
    frontendSkill,
    designSkill,
    fetchSkill,
    fetchProject,
    allProjects,
  };
});
