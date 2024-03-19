<script setup>
import { ref } from "vue";
import CardCityVue from "../components/CardCity.vue";
import Latest from "../components/Latest.vue";
import bromo from "../../public/bromo.jpg";
import reog from "../../public/reog.jpg";

import blogData from "../data/homepage-blogs.json";
const blogs = ref(blogData.blogs);
</script>

<template>
  <!-- Hero section -->
  <section
    class="hero grid h-[40rem] w-full place-items-center bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${bromo.src})` }"
  >
    <div class="absolute z-0 h-[40rem] w-full bg-gradient-to-t from-black opacity-60 md:bg-gradient-to-r"></div>
    <div class="z-30 flex h-full w-[85%] flex-col items-start justify-center">
      <div class="flex h-full w-1/2 flex-col items-center justify-center lg:items-start">
        <h1
          class="cursor-default text-center text-4xl font-black text-slate-50 lg:text-left lg:text-5xl"
          data-aos="fade-up"
        >
          JAWA TIMUR
        </h1>
        <br />
        <p
          class="lg:text-1xl cursor-default text-center text-lg font-medium text-slate-50 lg:text-left"
          data-aos="fade-up"
        >
          Sambut keindahan dan keragaman Jawa Timur, sebuah destinasi yang
          menakjubkan bagi pencinta petualangan dan kebudayaan.
        </p>
      </div>
    </div>
  </section>

  <!-- Explore -->
  <section
    class="mx-auto mt-16 block h-fit w-[85%]"
    id="explore"
    data-aos="fade-up"
  >
    <p class="cursor-default text-3xl font-semibold text-gray-950">
      Terbaru di Jatim
    </p>
    <hr class="h-1 w-60 rounded-md bg-gray-950" />
  </section>

  <!-- Blog -->
  <section
    class="my-4 grid h-fit w-full place-items-center"
    id="terbaru-di-jatim"
    data-aos="fade-up"
  >
    <Latest :data="blogs" />
  </section>

  <!-- Jelajahi Jawa Timur-->
  <section
    class="mt-20 grid h-fit w-full place-items-center"
    id="jelajahi-jatim"
    data-aos="fade-up"
  >
    <div class="grid h-full w-[85%] place-items-center">
      <p class="cursor-default text-3xl font-semibold text-gray-950">
        Jelajahi Jawa Timur
      </p>
      <hr class="h-1 w-60 rounded-md bg-gray-950" />
      <div class="h-4 w-full"></div>
      <p class="cursor-default text-center text-2xl font-medium text-gray-950">
        Hal-Hal Unik dan Indah Menunggu Anda di Jawa Timur!
      </p>
      <div class="h-8 w-full"></div>
    </div>
  </section>
  <section class="grid h-[35rem] w-full place-items-center" data-aos="fade-up">
    <div class="splide splide__1 h-full w-[90%] overflow-hidden">
      <div class="splide__track h-full w-full">
        <ul class="splide__list">
          <CardCityVue />
        </ul>
      </div>
    </div>
  </section>

  <!-- Tau Gak Sih? -->
  <section
    class="mt-20 grid h-fit w-full place-items-center"
    data-aos="fade-up"
  >
    <p class="cursor-default text-3xl font-semibold text-gray-950">
      Tau Gak Sih?
    </p>
    <hr class="h-1 w-44 rounded-md bg-gray-950" />
  </section>

  <!-- 1 -->
  <section
    class="tau-gak-sih mx-auto mt-8 flex h-fit w-[85%] items-center justify-between"
    data-aos="fade-up"
  >
    <div class="flex h-full w-1/2 flex-col items-start justify-center">
      <h2 class="cursor-default text-3xl font-semibold text-gray-950">
        Pengen Belajar Sejarah? Ada!
      </h2>
      <br />
      <p class="text-1xl cursor-default text-justify font-medium text-gray-950">
        Di Blitar, ada lho peninggalan bersejarah yang menarik dimana tempat ini
        dulunya menjadi saksi bisu dari mendiang Presiden Soekarno. Nama
        tempatnya adalah Istana Gebang yang menjadi tempat tinggal bagi beliau
        semasa remaja.
      </p>
    </div>
    <div class="flex h-full w-[45%] items-center justify-end">
      <img
        src="/istana-gebang.jpeg?url"
        alt="Istana Gebang"
        class="rounded-lg"
        width="600"
      />
    </div>
  </section>

  <!-- 2 -->
  <section
    class="tau-gak-sih tau-gak-sih-2 mx-auto flex h-fit w-[85%] items-center justify-between"
    data-aos="fade-up"
  >
    <div class="flex h-full w-1/2 items-center justify-start">
      <img
        src="/museum-sby.jpg?url"
        alt="Museum Seni Presiden SBY"
        class="rounded-lg"
        width="600"
      />
    </div>
    <div class="flex h-full w-[45%] flex-col items-start justify-center">
      <h2 class="cursor-default text-3xl font-semibold text-gray-950">
        Emang Ada Museum di Jatim?
      </h2>
      <br />
      <p class="text-1xl cursor-default text-justify font-medium text-gray-950">
        Ada banyak pilihan museum yang bisa kalian kunjungi pas lagi berkunjung
        ke Jawa Timur, contohnya kayak Museum Seni SBY di Pacitan atau Museum
        Angkot di Batu. Museum Seni SBY pamerin hasil karya lukisan dari mantan
        presiden kita yang ke-6 lho, ternyata Pak SBY punya jiwa seniman juga.
      </p>
    </div>
  </section>

  <!-- 3 -->
  <section
    class="tau-gak-sih mx-auto flex h-fit w-[85%] items-center justify-between"
    data-aos="fade-up"
  >
    <div class="flex h-full w-1/2 flex-col items-start justify-center">
      <h2 class="cursor-default text-center text-3xl font-semibold text-gray-950">
        Sejauh Ini, Ini yang Paling Jauh
      </h2>
      <br />
      <p class="text-1xl cursor-default text-justify font-medium text-gray-950">
        Di Kabupaten Sumenep, ada wilayahnya yang nyasarnya jauh banget bahkan
        letaknya sampe di utaranya pulau NTB. Kenalin, namanya Pulau Sakala yang
        jadi pulau paling timur dari Jawa Timur. Lihat aja gambar di samping,
        jauh kan? Karena letaknya yang jauh ini, beberapa pembangunan
        infrastruktur menjadi terhambat, salah satunya adalah internet.
      </p>
    </div>
    <div class="flex h-full w-[45%] items-center justify-end">
      <img
        src="/pulau-sakala.jpg?url"
        alt="Ujung Paling Timur Jawa Timur"
        class="rounded-lg"
        width="600"
      />
    </div>
  </section>

  <!-- Tunggu Apa Lagi? -->
  <section
    class="mt-12 grid h-fit w-full place-items-center"
    data-aos="fade-up"
  >
    <p class="cursor-default text-3xl font-semibold text-gray-950">
      Tunggu Apa Lagi?
    </p>
    <hr class="h-1 w-60 rounded-md bg-gray-950" />
    <div class="h-8 w-full"></div>
  </section>

  <section
    class="h-[40rem] w-full bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${reog.src})` }"
  >
    <div class="absolute z-20 h-[40rem] w-full bg-gradient-to-t from-black opacity-60 md:bg-gradient-to-r"></div>
    <div class="flex h-full w-full content-end items-end justify-center px-10 md:w-3/4 md:items-center md:px-28 lg:w-1/2">
      <p
        class="z-30 mb-44 cursor-default text-center text-3xl font-black text-slate-50 md:mb-0 md:text-left md:text-5xl"
        data-aos="fade-right"
      >
        KAMI TUNGGU KEHADIRAN ANDA
      </p>
    </div>
  </section>
</template>