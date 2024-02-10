<template>
  <!-- Hero section -->
  <section
    class="hero h-[40rem] w-full grid place-items-center bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(../../static/img/bromo.jpg)' }"
  >
    <div
      class="h-[40rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-0 absolute"
    ></div>
    <div class="h-3/5 w-[85%] flex items-end justify-center z-30">
      <h1
        class="text-5xl text-slate-50 cursor-default font-semibold text-center"
        data-aos="fade-up"
      >
        MARI BERKENALAN
        <br />
        DENGAN JAWA TIMUR
      </h1>
    </div>
  </section>
  <div class="h-24 w-full"></div>

  <!-- Selamat Datang -->
  <section
    class="h-fit w-[85%] flex flex-col items-start mx-auto"
    data-aos="fade-up"
  >
    <p class="text-3xl text-gray-950 cursor-default font-semibold text-start">
      SELAMAT DATANG DI JAWA TIMUR
    </p>
    <hr class="h-1 w-[45%] bg-gray-950 rounded-md" />
  </section>
  <div class="h-6 w-full"></div>
  <div class="h-fit w-[85%] grid place-items-center mx-auto" data-aos="fade-up">
    <p
      class="text-1xl text-gray-950 cursor-default font-medium text-justify"
      :style="{ lineHeight: '1.5' }"
    >
      Selamat datang di Jawa Timur, tempat di mana kita akan menggali kekayaan
      budaya, pesona alam, dan sejarah yang memukau dari Jawa Timur. Mari
      jelajahi keindahannya bersama, memahami warisan budaya yang istimewa, dan
      menghidupkan keajaiban alam, tradisi, dan kehidupan masyarakatnya.
    </p>
  </div>
  <div class="h-20 w-full"></div>

  <!-- Kedatangan di Jawa Timur -->
  <section
    class="h-fit w-[85%] flex flex-col items-end mx-auto"
    data-aos="fade-up"
  >
    <p class="text-3xl text-gray-950 cursor-default font-semibold text-end">
      KEDATANGAN DI JAWA TIMUR
    </p>
    <hr class="h-1 w-2/5 bg-gray-950 rounded-md" />
  </section>
  <div class="h-6 w-full"></div>
  <div class="h-fit w-[85%] grid place-items-center mx-auto" data-aos="fade-up">
    <p
      class="text-1xl text-gray-950 cursor-default font-medium text-justify"
      :style="{ lineHeight: '1.5', textAlignLast: 'end' }"
    >
      Selamat datang di Jawa Timur, tempat di mana kita akan menggali kekayaan
      budaya, pesona alam, dan sejarah yang memukau dari Jawa Timur. Mari
      jelajahi keindahannya bersama, memahami warisan budaya yang istimewa, dan
      menghidupkan keajaiban alam, tradisi, dan kehidupan masyarakatnya.
    </p>
  </div>
  <div class="h-24 w-full"></div>
</template>