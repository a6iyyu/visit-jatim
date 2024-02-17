<script setup>
import CardCulinary from '../components/CardCulinary.vue';
</script>

<template>
  <section class="h-[35rem] w-full mx-auto bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(/static/img/pecel.jpg?url)' }">
    <div class="h-[35rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-0 absolute"></div>
  </section>

  <!-- Opening section -->
  <section class="absolute h-60 grid place-items-center top-[27rem] rounded-xl bg-slate-400"
    id="jangan-khawatir">
    <div class="h-full w-[85%] grid place-items-center">
      <p class="text-3xl text-gray-950 text-center cursor-default font-semibold" data-aos="fade-up">
        Laper? <br />
        Jangan Khawatir!
      </p>
    </div>
  </section>

  <!-- Nikmati Berbagai Macam Jens Kuliner -->
  <section class="h-fit w-[85%] flex flex-col items-center justify-center mt-52 mx-auto">
    <p class="text-3xl text-gray-950 text-center cursor-default font-semibold" data-aos="fade-up">
      Nikmati Berbagai Macam Jenis Kuliner di Jatim!
    </p>
    <hr class="h-0.5 w-full bg-gray-950" data-aos="fade-up" />
  </section>
  <section class="h-[25rem] w-full grid place-items-center mt-8" data-aos="fade-up">
    <div class="splide splide__1 h-full w-[85%] overflow-hidden">
      <div class="splide__track h-full w-full py-4">
        <ul class="splide__list">
          <CardCulinary />
        </ul>
      </div>
    </div>
  </section>
</template>