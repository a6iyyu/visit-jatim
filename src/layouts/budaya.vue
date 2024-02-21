<script setup>
import CultureSliderVue from '../components/CultureSlider.vue';
</script>

<template>
  <!-- Hero Dekstop -->
  <section class="hero h-[35rem] w-full flex items-center justify-end pt-28 mx-auto">
    <div class="absolute grid place-items-center rounded-2xl bg-slate-400"
      :style="{ boxShadow: '0.5em 0.5em 0.5em #48484850' }">
      <div class="h-full w-3/4 flex flex-col items-start justify-center" data-aos="fade-up">
        <b class="text-3xl cursor-default">
          Mari Telusuri Ragam Tradisi Lokal!
        </b>
        <br />
        <p class="text-1xl text-gray-950 cursor-default font-medium text-justify" :style="{ lineHeight: '1.5' }">
          Temukan pesona budaya Jawa Timur melalui tradisi dan festival yang memukau.
        </p>
      </div>
    </div>

    <!-- Hero Mobile -->
    <div class="h-full w-3/5 flex items-end justify-center bg-center bg-cover bg-no-repeat"
      :style="{ backgroundImage: 'url(/static/img/candi-singosari.jpg?url)' }">
      <div class="h-3/5 w-4/5 flex flex-col items-center justify-center text-center">
        <b class="text-3xl text-slate-50 cursor-default">
          Mari Telusuri Ragam Tradisi Lokal!
        </b>
        <br />
        <p class="text-1xl text-slate-50 cursor-default font-medium text-center" :style="{ lineHeight: '1.5' }">
          Temukan pesona budaya Jawa Timur melalui tradisi dan festival yang memukau.
        </p>
      </div>
    </div>
  </section>

  <!-- Karosel Kebudayaan -->
  <section class="h-fit w-[85%] block mt-16 mx-auto" id="latest" data-aos="fade-up">
    <p class="text-3xl text-gray-950 cursor-default font-semibold">
      Kenali Kebudayaan Khas Jawa Timur
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
  </section>
  <section class="h-[25rem] w-full grid place-items-center mt-6" data-aos="fade-up">
    <div class="splide splide__1 h-full w-[85%] overflow-hidden">
      <div class="splide__track h-full w-full py-4">
        <ul class="splide__list">
          <CultureSliderVue />
        </ul>
      </div>
    </div>
  </section>
</template>