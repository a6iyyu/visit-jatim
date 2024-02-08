<script setup>
import BlogSliderHomepageVue from "../components/BlogSliderHomepage.vue";
import CardCityVue from "../components/CardCity.vue";
</script>

<template>
  <!-- Hero section -->
  <section
    class="hero h-screen w-full grid place-items-center bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(../../static/img/bromo.jpg)' }"
  >
    <div
      class="h-screen w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-0 absolute"
    ></div>
    <div class="h-full w-[85%] flex flex-col items-start justify-center z-30">
      <div class="h-full w-1/2 flex flex-col items-start justify-center">
        <h1
          class="text-4xl sm:text-5xl text-slate-50 cursor-default font-black text-start"
          data-aos="fade-up"
        >
          JAWA TIMUR
        </h1>
        <br />
        <p
          class="text-lg md:text-1xl text-slate-50 cursor-default font-medium text-start"
          data-aos="fade-up"
        >
          Sambut keindahan dan keragaman Jawa Timur, sebuah destinasi yang
          menakjubkan bagi pencinta petualangan dan kebudayaan.
        </p>
      </div>
    </div>
  </section>
  <div class="h-12 w-full"></div>

  <!-- Explore -->
  <section class="h-fit w-[85%] block mx-auto" id="explore" data-aos="fade-up">
    <p class="text-3xl text-gray-950 cursor-default font-semibold">
      Terbaru di Jatim
    </p>
    <hr class="h-1 w-60 bg-gray-950 rounded-md" />
  </section>

  <!-- Blog -->
  <section
    class="h-fit w-full grid place-items-center my-4"
    id="terbaru-di-jatim"
    data-aos="fade-up"
  >
    <div class="h-full w-[85%] flex items-center justify-between">
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
      <div class="blog-slider flex flex-col overflow-y-auto ml-8">
        <BlogSliderHomepageVue />
      </div>
    </div>
  </section>
  <div class="h-20 w-full"></div>

  <!-- Jelajahi Jawa Timur-->
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

  <!-- 1 -->
  <section
    class="tau-gak-sih h-[25rem] w-[85%] flex items-center justify-between mx-auto"
    data-aos="fade-up"
  >
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
      <img
        src="/static/img/istana-gebang.jpeg?url"
        alt="Istana Gebang"
        class="rounded-2xl"
        width="600"
      />
    </div>
  </section>
  <div class="h-12 w-full"></div>

  <!-- 2 -->
  <section
    class="tau-gak-sih tau-gak-sih-2 h-[25rem] w-[85%] flex items-center justify-between mx-auto"
    data-aos="fade-up"
  >
    <div class="h-full w-1/2 flex items-center justify-start">
      <img
        src="/static/img/museum-sby.jpg?url"
        alt="Museum Seni Presiden SBY"
        class="rounded-2xl"
        width="600"
      />
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
  <div class="h-12 w-full"></div>

  <!-- 3 -->
  <section
    class="tau-gak-sih h-[25rem] w-[85%] flex items-center justify-between mx-auto"
    data-aos="fade-up"
  >
    <div class="h-full w-1/2 flex flex-col items-start justify-center">
      <h2
        class="text-3xl text-gray-950 cursor-default font-semibold text-center"
      >
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
      <img
        src="/static/img/pulau-sakala.jpg?url"
        alt="Ujung Paling Timur Jawa Timur"
        class="rounded-2xl"
        width="600"
      />
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
</template>