<script setup>
import PatternSquare from "/public/pattern-square.png";
import KehidupanMasyarakat from "./kehidupan-masyarakat.vue";
import TokohInspiratif from "./tokoh-inspiratif.vue";
</script>

<template>
  <span class="absolute z-0 h-40 w-40" style="background-color: #ff85ad; filter: blur(8rem)"></span>
  <main
    class="z-10 flex h-fit w-full flex-col items-center bg-cover bg-center bg-no-repeat"
    id="menjelajahi-kota-dan-desa"
    :style="{ backgroundImage: `url(${PatternSquare.src})` }"
  >
    <section class="mx-auto my-24 flex h-fit w-4/5 flex-col-reverse place-items-center items-center gap-x-16 lg:grid lg:grid-cols-2">
      <div class="mt-8 flex cursor-default flex-col leading-relaxed text-gray-50 lg:mt-0">
        <h2 class="text-center text-4xl font-bold lg:text-left">
          Menjelajahi Kota dan Desa
        </h2>
        <br />
        <h4 class="text-justify text-lg">
          Temukan keunikan setiap kota dan desa di Jawa Timur. Dari gemerlapnya
          kota metropolitan hingga ketenangan desa-desa tradisional, jelajahi
          keragaman dan pesona yang ditawarkan oleh setiap wilayah.
        </h4>
      </div>
      <img src="/peta-jawa-timur.png" alt="Jawa Timur" class="font-semibold text-gray-50" />
    </section>
    <KehidupanMasyarakat />
    <TokohInspiratif />
  </main>
</template>