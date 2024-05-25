<script setup>
import { onMounted } from "vue";
import Hero from "../components/wisata/hero.vue";
import KataKataBijak from "../components/wisata/kata-kata-bijak.vue";

onMounted(() => {
  document.getElementById("mari-jelajahi").addEventListener("click", () => {
    document.getElementById("kata-kata-bijak").scrollIntoView({
      behavior: "smooth",
    });
  });
});
</script>

<template>
  <Hero />
  <KataKataBijak />
</template>