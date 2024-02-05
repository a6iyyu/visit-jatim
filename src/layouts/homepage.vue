<script setup>
import BlogSliderHomepageVue from "../components/BlogSliderHomepage.vue";
</script>

<template>
  <section
    class="h-[35rem] w-full grid place-items-center bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(../../static/img/bromo.jpg)' }"
  >
    <div class="h-full w-[90%] flex justify-start">
      <div class="h-full w-1/2 flex flex-col items-start justify-center">
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
  <div class="h-12 w-full"></div>
  <section class="h-fit w-full grid place-items-center">
    <div class="h-full w-[90%] block" data-aos="fade-up">
      <p class="text-3xl text-gray-950 cursor-default font-semibold">
        Jelajahi Sekarang!
      </p>
      <hr class="h-1 w-[17rem] bg-gray-950 rounded-md" />
    </div>
  </section>
  <div class="h-6 w-full"></div>
  <section class="h-fit w-full grid place-items-center" data-aos="fade-up">
    <div class="h-full w-[90%] flex">
      <a
        href="https://www.jawapos.com/wisata-kuliner/011771965/8-desa-wisata-terbaik-di-jawa-timur-yang-wajib-dikunjungi"
        class="h-full w-1/2 block"
      >
        <div
          class="h-80 w-[95%] rounded-2xl bg-bottom bg-cover bg-no-repeat"
          :style="{
            backgroundImage: 'url(../../static/img/sample-1.jpg)',
            boxShadow: '0.75rem 0.75rem 0.75rem #bebebe',
          }"
        ></div>
        <br />
        <p
          class="h-fit w-[95%] text-2xl text-gray-950 font-semibold text-justify hover:text-gray-800 hover:underline"
          :style="{ transition: 'all 0.3s ease-in-out' }"
        >
          8 Desa Wisata Terbaik di Jawa Timur yang Wajib Dikunjungi
        </p>
        <br />
        <p
          class="h-fit w-[95%] text-1xl text-gray-950 font-medium text-justify hover:text-gray-800 hover:underline"
          :style="{ transition: 'all 0.3s ease-in-out' }"
        >
          Wisata alam yang disuguhkan yaitu Taman Edelweiss dan Menjemput
          Matahari Penanjakan Adventure. Selain itu, ada wisata budaya, seperti
          One Day ...
        </p>
        <br />
        <p
          class="h-fit w-[95%] text-1xl text-gray-950 font-semibold text-justify hover:text-gray-800 hover:underline"
          :style="{ transition: 'all 0.3s ease-in-out' }"
        >
          Baca Selengkapnya &#10132;
        </p>
      </a>
      <div class="max-h-[535px] w-1/2 flex flex-col overflow-y-auto">
        <BlogSliderHomepageVue />
      </div>
    </div>
  </section>
  <div class="h-20 w-full"></div>
</template>