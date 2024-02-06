<script setup>
import BlogSliderHomepageVue from "../components/BlogSliderHomepage.vue";
import CardCityVue from "../components/CardCity.vue";
</script>

<template>
  <!-- Hero section -->
  <section
    class="h-screen w-full pl-28 pr-40 grid place-items-center bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(../../static/img/bromo.jpg)' }"
  >
    <div
      class="h-screen w-full bg-gradient-to-r from-black opacity-60 z-20 absolute"
    ></div>
    <div class="h-full w-full flex justify-start">
      <div class="h-full w-1/2 flex flex-col items-start justify-center z-30">
        <p
          class="text-5xl text-slate-50 cursor-default font-black"
          data-aos="fade-up"
        >
          JAWA TIMUR
        </p>
        <br />
        <p
          class="text-1xl text-slate-50 cursor-default font-medium text-justify"
          data-aos="fade-up"
        >
          Sambut keindahan dan keragaman Jawa Timur, sebuah destinasi yang
          menakjubkan bagi pencinta petualangan dan kebudayaan.
        </p>
      </div>
    </div>
  </section>

  <!-- Explore -->
  <section class="h-fit w-full px-28 mt-20 grid place-items-center">
    <div class="h-full w-full block" data-aos="fade-up">
      <p class="text-3xl text-gray-950 cursor-default font-semibold">
        Terbaru di Jatim
      </p>
      <hr class="h-1 w-60 bg-gray-950 rounded-md" />
    </div>
  </section>

  <!-- Blog -->
  <section class="h-fit w-full grid place-items-center my-4" data-aos="fade-up">
    <div class="h-full w-[85%] flex">
      <div class="h-full w-1/2 flex flex-col">
        <a
          href="https://www.jawapos.com/wisata-kuliner/011771965/8-desa-wisata-terbaik-di-jawa-timur-yang-wajib-dikunjungi"
          class="h-full w-full block"
        >
          <div
            class="h-80 w-full rounded-md bg-bottom bg-cover bg-no-repeat"
            :style="{
              backgroundImage: 'url(../../static/img/sample-1.jpg)',
              boxShadow: '0.75rem 0.75rem 0.75rem #bebebe',
            }"
          ></div>
          <br />
          <p
            class="h-fit w-full text-2xl text-gray-950 font-semibold text-justify hover:text-gray-800 hover:underline"
            :style="{ transition: 'all 0.3s ease-in-out' }"
          >
            8 Desa Wisata Terbaik di Jawa Timur yang Wajib Dikunjungi
          </p>
          <br />
          <p
            class="h-fit w-full text-xl text-gray-950 font-medium text-justify hover:text-gray-800 hover:underline"
            :style="{ transition: 'all 0.3s ease-in-out' }"
          >
            Wisata alam yang disuguhkan yaitu Taman Edelweiss dan Menjemput
            Matahari Penanjakan Adventure. Selain itu, ada wisata budaya,
            seperti One Day ...
          </p>
          <br />
          <p
            class="h-fit w-full text-1xl text-gray-950 font-semibold text-justify hover:text-gray-800 hover:underline"
            :style="{ transition: 'all 0.3s ease-in-out' }"
          >
            Baca Selengkapnya &#10132;
          </p>
        </a>
      </div>
      <div class="max-h-[540px] w-1/2 flex flex-col overflow-y-auto ml-8">
        <BlogSliderHomepageVue />
      </div>
    </div>
  </section>
  <div class="h-20 w-full"></div>

  <section
    class="h-fit w-full grid place-items-center"
    id="jelajahi-jatim"
    data-aos="fade-up"
  >
    <p
      class="text-gray-950 text-3xl cursor-default font-semibold"
      data-aos="fade-up"
    >
      Jelajahi Jawa Timur
    </p>
    <hr class="h-1 w-60 rounded-md bg-gray-950" data-aos="fade-up" />
    <div class="h-4 w-full"></div>
    <p
      class="text-gray-950 text-2xl cursor-default font-medium"
      data-aos="fade-up"
    >
      Hal-Hal Unik dan Indah Menunggu Anda di Jawa Timur!
    </p>
    <div class="h-8 w-full"></div>
  </section>

  <section class="h-[35rem] w-full grid place-items-center" data-aos="fade-up">
    <div class="splide splide__1 h-full w-[90%] overflow-hidden">
      <div class="splide__track h-full w-full">
        <ul class="splide__list">
          <CardCityVue />
          <CardCityVue />
          <CardCityVue />
          <CardCityVue />
        </ul>
      </div>
    </div>
  </section>
  <div class="h-20 w-full"></div>
</template>