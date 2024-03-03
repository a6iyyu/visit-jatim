<script setup>
import { ref } from "vue";
import CardCityVue from "../components/CardCity.vue";
import Latest from "../components/Latest.vue";
import bromo from "../../static/img/bromo.jpg";
import reog from "../../static/img/reog.jpg";

import blogData from "../data/homepage-blogs.json";
const blogs = ref(blogData.blogs);
</script>

<template>
  <!-- Hero section -->
  <section class="hero h-[40rem] w-full grid place-items-center bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${bromo.src})` }">
    <div class="h-[40rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-0 absolute"></div>
    <div class="h-full w-[85%] flex flex-col items-start justify-center z-30">
      <div class="h-full w-1/2 flex flex-col items-start justify-center">
        <h1 class="text-4xl sm:text-5xl text-slate-50 cursor-default font-black text-start" data-aos="fade-up">
          JAWA TIMUR
        </h1>
        <br />
        <p class="text-lg md:text-1xl text-slate-50 cursor-default font-medium text-start" data-aos="fade-up">
          Sambut keindahan dan keragaman Jawa Timur, sebuah destinasi yang
          menakjubkan bagi pencinta petualangan dan kebudayaan.
        </p>
      </div>
    </div>
  </section>

  <!-- Explore -->
  <section class="h-fit w-[85%] block mt-16 mx-auto" id="explore" data-aos="fade-up">
    <p class="text-3xl text-gray-950 cursor-default font-semibold">
      Terbaru di Jatim
    </p>
    <hr class="h-1 w-60 bg-gray-950 rounded-md" />
  </section>

  <!-- Blog -->
  <section class="h-fit w-full grid place-items-center my-4" id="terbaru-di-jatim" data-aos="fade-up">
    <Latest :data="blogs" />
  </section>

  <!-- Jelajahi Jawa Timur-->
  <section class="h-fit w-full grid place-items-center mt-20" id="jelajahi-jatim" data-aos="fade-up">
    <div class="h-full w-[85%] grid place-items-center">
      <p class="text-gray-950 text-3xl cursor-default font-semibold">
        Jelajahi Jawa Timur
      </p>
      <hr class="h-1 w-60 rounded-md bg-gray-950" />
      <div class="h-4 w-full"></div>
      <p class="text-gray-950 text-2xl cursor-default font-medium text-center">
        Hal-Hal Unik dan Indah Menunggu Anda di Jawa Timur!
      </p>
      <div class="h-8 w-full"></div>
    </div>
  </section>
  <section class="h-[35rem] w-full grid place-items-center" data-aos="fade-up">
    <div class="splide splide__1 h-full w-[90%] overflow-hidden">
      <div class="splide__track h-full w-full">
        <ul class="splide__list">
          <CardCityVue />
        </ul>
      </div>
    </div>
  </section>

  <!-- Tau Gak Sih? -->
  <section class="h-fit w-full grid place-items-center mt-20" data-aos="fade-up">
    <p class="text-gray-950 text-3xl cursor-default font-semibold">
      Tau Gak Sih?
    </p>
    <hr class="h-1 w-44 rounded-md bg-gray-950" />
  </section>

  <!-- 1 -->
  <section class="tau-gak-sih h-[25rem] w-[85%] flex items-center justify-between mt-8 mx-auto" data-aos="fade-up">
    <div class="h-full w-1/2 flex flex-col items-start justify-center">
      <h2 class="text-3xl text-gray-950 cursor-default font-semibold">
        Pengen Belajar Sejarah? Ada!
      </h2>
      <br />
      <p class="text-1xl text-gray-950 cursor-default font-medium text-justify">
        Di Blitar, ada lho peninggalan bersejarah yang menarik dimana tempat ini
        dulunya menjadi saksi bisu dari mendiang Presiden Soekarno. Nama
        tempatnya adalah Istana Gebang yang menjadi tempat tinggal bagi beliau
        semasa remaja.
      </p>
    </div>
    <div class="h-full w-[45%] flex items-center justify-end">
      <img src="/static/img/istana-gebang.jpeg?url" alt="Istana Gebang" class="rounded-lg" width="600" />
    </div>
  </section>

  <!-- 2 -->
  <section class="tau-gak-sih tau-gak-sih-2 h-[25rem] w-[85%] flex items-center justify-between mx-auto"
    data-aos="fade-up">
    <div class="h-full w-1/2 flex items-center justify-start">
      <img src="/static/img/museum-sby.jpg?url" alt="Museum Seni Presiden SBY" class="rounded-lg" width="600" />
    </div>
    <div class="h-full w-[45%] flex flex-col items-start justify-center">
      <h2 class="text-3xl text-gray-950 cursor-default font-semibold">
        Emang Ada Museum di Jatim?
      </h2>
      <br />
      <p class="text-1xl text-gray-950 cursor-default font-medium text-justify">
        Ada banyak pilihan museum yang bisa kalian kunjungi pas lagi berkunjung
        ke Jawa Timur, contohnya kayak Museum Seni SBY di Pacitan atau Museum
        Angkot di Batu. Museum Seni SBY pamerin hasil karya lukisan dari mantan
        presiden kita yang ke-6 lho, ternyata Pak SBY punya jiwa seniman juga.
      </p>
    </div>
  </section>

  <!-- 3 -->
  <section class="tau-gak-sih h-[25rem] w-[85%] flex items-center justify-between mx-auto" data-aos="fade-up">
    <div class="h-full w-1/2 flex flex-col items-start justify-center">
      <h2 class="text-3xl text-gray-950 cursor-default font-semibold text-center">
        Sejauh Ini, Ini yang Paling Jauh
      </h2>
      <br />
      <p class="text-1xl text-gray-950 cursor-default font-medium text-justify">
        Di Kabupaten Sumenep, ada wilayahnya yang nyasarnya jauh banget bahkan
        letaknya sampe di utaranya pulau NTB. Kenalin, namanya Pulau Sakala yang
        jadi pulau paling timur dari Jawa Timur. Lihat aja gambar di samping,
        jauh kan? Karena letaknya yang jauh ini, beberapa pembangunan
        infrastruktur menjadi terhambat, salah satunya adalah internet.
      </p>
    </div>
    <div class="h-full w-[45%] flex items-center justify-end">
      <img src="/static/img/pulau-sakala.jpg?url" alt="Ujung Paling Timur Jawa Timur" class="rounded-lg" width="600" />
    </div>
  </section>

  <!-- Tunggu Apa Lagi? -->
  <section class="h-fit w-full mt-12 grid place-items-center" data-aos="fade-up">
    <p class="text-gray-950 text-3xl cursor-default font-semibold">
      Tunggu Apa Lagi?
    </p>
    <hr class="h-1 w-60 rounded-md bg-gray-950" />
    <div class="h-8 w-full"></div>
  </section>

  <section class="h-[40rem] w-full bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${reog.src})` }">
    <div class="h-[40rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-20 absolute"></div>
    <div class="h-full w-full md:w-3/4 lg:w-1/2 px-10 md:px-28 flex items-end md:items-center content-end justify-center">
      <p class="text-3xl md:text-5xl mb-44 md:mb-0 text-slate-50 text-center md:text-left cursor-default font-black z-30"
        data-aos="fade-right">
        KAMI TUNGGU KEHADIRAN ANDA
      </p>
    </div>
  </section>
</template>