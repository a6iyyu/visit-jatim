<script setup>
import CardPopulationVue from '../components/CardPopulation.vue';
</script>

<template>
  <!-- Hero section -->
  <section class="hero h-[40rem] w-full grid place-items-center bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(../../static/img/telaga-sarangan.jpg)' }">
    <div class="h-[40rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-0 absolute"></div>
    <div class="h-3/5 w-[85%] flex items-end justify-center z-30">
      <h1 class="text-5xl text-slate-50 cursor-default font-semibold text-center" data-aos="fade-up">
        MARI BERKENALAN
        <br />
        DENGAN JAWA TIMUR
      </h1>
    </div>
  </section>
  <div class="h-24 w-full"></div>

  <!-- Selamat Datang -->
  <section class="h-fit w-[85%] flex flex-col mx-auto" data-aos="fade-up">
    <p class="text-3xl text-gray-950 cursor-default font-semibold text-start">
      SELAMAT DATANG DI JAWA TIMUR
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
  </section>
  <div class="h-6 w-full"></div>
  <div class="h-fit w-[85%] grid place-items-center mx-auto" data-aos="fade-up">
    <p class="text-1xl text-gray-950 cursor-default font-medium text-justify" :style="{ lineHeight: '1.5' }">
      Selamat datang di Jawa Timur, tempat di mana kita akan menggali kekayaan
      budaya, pesona alam, dan sejarah yang memukau dari Jawa Timur. Mari
      jelajahi keindahannya bersama, memahami warisan budaya yang istimewa, dan
      menghidupkan keajaiban alam, tradisi, dan kehidupan masyarakatnya.
    </p>
  </div>
  <div class="h-20 w-full"></div>

  <!-- Kedatangan di Jawa Timur -->
  <section class="h-fit w-[85%] flex flex-col mx-auto" data-aos="fade-up">
    <p class="text-3xl text-gray-950 cursor-default font-semibold text-start">
      KEDATANGAN DI JAWA TIMUR
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
  </section>
  <div class="h-6 w-full"></div>
  <section class="h-fit w-[85%] grid place-items-center mx-auto" data-aos="fade-up">
    <p class="text-1xl text-gray-950 cursor-default font-medium text-justify"
      :style="{ lineHeight: '1.5', textAlignLast: 'start' }">
      Jawa Timur memberikan pengalaman yang menakjubkan dengan berbagai pilihan
      transportasi yang memudahkan perjalanan. Provinsi ini dapat diakses
      melalui udara, darat, maupun laut, dengan bandara utama seperti Bandara
      Internasional Juanda di Surabaya. Jadi, Anda tak perlu takut atau bingung
      bagaimana caranya untuk pergi ke Jawa Timur!
    </p>
  </section>
  <div class="h-14 w-full"></div>

  <!-- Ibukota -->
  <section class="h-fit w-full grid place-items-center">
    <iframe class="max-h-[30rem] h-[30rem] max-w-[85%] w-[85%]"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253423.48794765712!2d110.54089582314452!3d-7.039577975160281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1707562703539!5m2!1sid!2sid"
      allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" :style="{ border: '0' }"
      data-aos="fade-up"></iframe>
  </section>
  <div class="h-14 w-full"></div>

  <section class="h-fit w-[85%] flex flex-col mx-auto" data-aos="fade-up">
    <p class="text-3xl text-gray-950 cursor-default font-semibold text-start">
      IBUKOTA
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
  </section>
  <div class="h-6 w-full"></div>
  <section class="h-fit w-[85%] grid place-items-center mx-auto" data-aos="fade-up">
    <p class="text-1xl text-gray-950 cursor-default font-medium text-justify"
      :style="{ lineHeight: '1.5', textAlignLast: 'start' }">
      Surabaya! Pernah kesana apa belum teman-teman? Surabaya menjadi pusatnya Jawa Timur yang tak pernah berhenti
      berdetak. Kota ini menyuguhkan energi yang luar biasa, dari kulinernya yang legendaris hingga kehidupan sehari-hari
      yang selalu menggema. Sebuah kota dimana sejarah dan modernitas bersatu, mengundang kalian untuk hadir merasakan
      kehidupan yang berbeda nan luar biasa. Banyak wisatawan lokal maupun turis yang berkunjung ke ibukota ini karena
      memiliki tempat wisata yang banyak seperti Surabaya Zoo serta memiliki sejarah panjang seperti Peristiwa 10 November
      di Hotel Yamato.
    </p>
  </section>
  <div class="h-14 w-full"></div>

  <section class="h-[25rem] w-full grid place-items-center" data-aos="fade-up">
    <div class="splide splide__1 h-full w-[85%] overflow-hidden">
      <div class="splide__track h-full w-full">
        <ul class="splide__list">
          <CardPopulationVue />
        </ul>
      </div>
    </div>
  </section>
  <div class="h-14 w-full"></div>
</template>