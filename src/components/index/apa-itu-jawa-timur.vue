<script setup>
import PatternSquare from "/public/pattern-square.png";
import DataJawaTimur from "./data-jawa-timur.vue";
import FaktaJawaTimur from "./fakta-jawa-timur.vue";
</script>

<template>
  <span
    class="absolute z-0 h-40 w-40"
    style="background-color: #ff85ad; filter: blur(8rem)"
  >
  </span>
  <main
    class="z-10 flex h-fit w-full flex-col items-center bg-cover bg-center bg-no-repeat"
    id="apa-itu-jawa-timur"
    :style="{ backgroundImage: `url(${PatternSquare.src})` }"
  >
    <h3 class="mt-20 w-fit cursor-default text-center text-4xl font-bold text-gray-50 underline lg:text-5xl">
      Mengenal Jawa Timur
    </h3>
    <section class="mx-auto mb-28 mt-10 flex h-fit w-4/5 flex-col-reverse place-items-center items-center gap-x-10 lg:grid lg:grid-cols-2">
      <h4 class="mt-12 cursor-default text-justify font-bold leading-relaxed text-gray-50 lg:mt-0">
        Jawa Timur adalah sebuah provinsi di bagian timur Pulau Jawa, Indonesia.
        Provinsi Jawa Timur didirikan pada tanggal 4 Maret 1950 berdasarkan
        dasar hukum UU No. 2 Tahun 1950. Ibukota Provinsi Jawa Timur adalah Kota
        Surabaya yang juga merupakan Kota Terbesar kedua di Indonesia setelah
        DKI Jakarta. Letak Geografis Provinsi Jawa Timur adalah 111°0’ - 114°4’
        Bujur Timur dan 7°12’ - 8°48‘ Lintang Selatan. Provinsi Jawa Timur yang
        merupakan Provinsi Terbesar di Pulau Jawa ini memiliki luas wilayah
        sebesar 47.799,75 Km2. Pulau Madura merupakan Pulau Terbesar di Provinsi
        Jawa Timur.
      </h4>
      <img
        src="/peta-jawa-timur.png"
        alt="Jawa Timur"
        class="font-semibold text-gray-50"
      />
    </section>
    <DataJawaTimur />
    <FaktaJawaTimur />
  </main>
</template>