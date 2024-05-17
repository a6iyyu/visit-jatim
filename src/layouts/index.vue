<script setup>
import { onMounted } from "vue";
import Hero from "../components/index/hero.vue";
import ApaItuJawaTimur from "../components/index/apa-itu-jawa-timur.vue";
import Karosel from "../components/index/karosel.vue";

onMounted(() => {
  document.getElementById("mari-jelajahi").addEventListener("click", () => {
    document.getElementById("apa-itu-jawa-timur").scrollIntoView({
      behavior: "smooth",
    });
  });
});
</script>

<template>
  <Hero />
  <ApaItuJawaTimur />
  <Karosel />
</template>