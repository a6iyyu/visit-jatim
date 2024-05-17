<script setup>
import { onMounted } from "vue";
import Hero from "../components/inspirasi/hero.vue";
import MengulikPendidikan from "../components/inspirasi/mengulik-pendidikan.vue";
import TingkatMelekHuruf from "../components/inspirasi/tingkat-melek-huruf.vue";
import Universitas from "../components/inspirasi/universitas.vue";
import JelajahiKebudayaan from "../components/inspirasi/jelajahi-kebudayaan.vue";
import KaroselUpacaraAdat from "../components/inspirasi/karosel-upacara-adat.vue";
import MakananTradisional from "../components/inspirasi/makanan-tradisional.vue";
import KaroselKulinerTradisional from "../components/inspirasi/karosel-kuliner-tradisional.vue";

onMounted(() => {
  document.getElementById("mari-jelajahi").addEventListener("click", () => {
    document.getElementById("mengulik-pendidikan").scrollIntoView({
      behavior: "smooth",
    });
  });
});
</script>

<template>
  <Hero />
  <MengulikPendidikan />
  <TingkatMelekHuruf />
  <Universitas />
  <JelajahiKebudayaan />
  <KaroselUpacaraAdat />
  <MakananTradisional />
  <KaroselKulinerTradisional />
</template>