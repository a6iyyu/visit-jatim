<script setup>
import BlogSliderHomepageVue from "../components/BlogSliderHomepage.vue";
import CardCityVue from "../components/CardCity.vue";
</script>

<template>
  <!-- Hero section -->
  <section
    class="h-screen w-full grid place-items-center bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(../../static/img/bromo.jpg)' }"
  >
    <div
      class="h-screen w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-20 absolute"
    ></div>
    <div class="h-full w-full flex justify-start">
      <div
        class="h-full w-5/6 md:w-1/2 mx-auto md:mx-16 lg:mx-28 flex flex-col items-start justify-center z-30"
      >
        <h1
          class="mx-auto md:mx-1 text-4xl sm:text-5xl text-slate-50 cursor-default font-black text-start"
          data-aos="fade-up"
        >
          JAWA TIMUR
        </h1>
        <br />
        <p
          class="text-lg md:text-1xl text-slate-50 cursor-default font-medium text-center md:text-justify lg:pr-36"
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
  <div class="h-20 w-full"></div>

  <!-- Tau Gak Sih? -->
  <section class="h-fit w-full grid place-items-center" data-aos="fade-up">
    <p class="text-gray-950 text-3xl cursor-default font-semibold">
      Tau Gak Sih?
    </p>
    <hr class="h-1 w-44 rounded-md bg-gray-950" />
    <div class="h-8 w-full"></div>
  </section>

  <section
    class="h-[25rem] w-[85%] flex items-center justify-between mx-auto"
    data-aos="fade-up"
  >
    <div class="h-full w-1/2 flex flex-col items-center justify-center">
      <h2 class="text-3xl text-gray-950 cursor-default font-semibold">
        Pengen Belajar Sejarah? Ada!
        <p class="text-1xl font-medium text-justify">
          Di Blitar, ada lho peninggalan bersejarah yang menarik dimana tempat
          ini dulunya menjadi saksi bisu dari mendiang Presiden Soekarno. Nama
          tempatnya adalah Istana Gebang yang menjadi tempat tinggal bagi beliau
          semasa remaja.
        </p>
      </h2>
    </div>
    <div class="h-full w-[45%] grid place-items-center">
      <img
        src="../../static/img/istana-gebang.jpeg"
        alt="Istana Gebang"
        class="rounded-2xl"
      />
    </div>
  </section>
  <div class="h-12 w-full"></div>

  <section
    class="h-[25rem] w-[85%] flex items-center justify-between mx-auto"
    data-aos="fade-up"
  >
    <div class="h-full w-1/2 grid place-items-center">
      <img src="" alt="Museum Seni Presiden SBY" class="rounded-2xl" />
    </div>
    <div class="h-full w-[45%] flex flex-col items-center justify-center">
      <h2 class="text-3xl text-gray-950 cursor-default font-semibold">
        Mana Ada Museum Seni di Jatim!
        <p class="text-1xl font-medium text-justify">
          Di Pacitan, Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Error, dolores odio velit quasi nesciunt quisquam fuga quidem corporis
          odit sit illum itaque temporibus numquam ipsa, assumenda iusto tempora
          distinctio dolorem.
        </p>
      </h2>
    </div>
  </section>
  <div class="h-12 w-full"></div>

  <section
    class="h-[25rem] w-[85%] flex items-center justify-between mx-auto"
    data-aos="fade-up"
  >
    <div class="h-full w-1/2 flex flex-col items-center justify-center">
      <h2 class="text-3xl text-gray-950 cursor-default font-semibold">
        Nyasarnya Jauh Banget!
        <p class="text-1xl font-medium text-justify">
          Di Kota Sumenep, Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Error, dolores odio velit quasi nesciunt quisquam fuga quidem
          corporis odit sit illum itaque temporibus numquam ipsa, assumenda
          iusto tempora distinctio dolorem.
        </p>
      </h2>
    </div>
    <div class="h-full w-[45%] grid place-items-center">
      <img src="" alt="Ujung Paling Timur Jawa Timur" class="rounded-2xl" />
    </div>
  </section>
  <div class="h-12 w-full"></div>

  <!-- Tunggu Apa Lagi? -->
  <section class="h-fit w-full grid place-items-center" data-aos="fade-up">
    <p class="text-gray-950 text-3xl cursor-default font-semibold">
      Tunggu Apa Lagi?
    </p>
    <hr class="h-1 w-60 rounded-md bg-gray-950" />
    <div class="h-8 w-full"></div>
  </section>

  <section
    class="h-screen w-full grid place-items-center bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(../../static/img/reog.jpg)' }"
  >
    <div
      class="h-screen w-full bg-gradient-to-r from-black opacity-60 z-20 absolute"
    ></div>
    <div class="h-full w-[85%] flex justify-start">
      <div class="h-full w-1/2 flex flex-col items-start justify-center z-30">
        <p
          class="text-5xl text-slate-50 cursor-default font-black"
          data-aos="fade-up"
        >
          KAMI TUNGGU KEHADIRAN ANDA
        </p>
      </div>
    </div>
  </section>

  <footer class="h-40 w-full grid place-items-center">
    <div class="h-full w-[85%] flex flex-row items-center justify-between">
      <h2 class="text-gray-950 text-2xl cursor-default font-semibold">
        VISIT JATIM
        <p class="text-1xl font-medium">&copy; 2024</p>
      </h2>
      <h2 class="text-gray-950 text-2xl cursor-default font-semibold">
        Created By:
        <p class="text-1xl font-medium">Muhammad Afif Al Ghifari</p>
        <p class="text-1xl font-medium">Rafi Abiyyu Airlangga</p>
      </h2>
    </div>
  </footer>
</template>