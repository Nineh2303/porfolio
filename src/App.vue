<template>
  <RouterView />
</template>
<script setup>
import { usePortfolioStore } from "@/stores";
import { onBeforeMount } from "vue";
onBeforeMount(() => {
  const portfolioStore = usePortfolioStore();
  portfolioStore.fetchSkill();
  portfolioStore.fetchProject();
});
</script>
<style></style>
