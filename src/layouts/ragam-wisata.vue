<script setup>
import CardDestinationVue from "../components/CardDestination.vue";
</script>

<template>
  <!-- Hero -->
  <div class="h-28 w-full"></div>
  <section class="hero h-[35rem] w-full flex items-center justify-end mx-auto">
    <div class="absolute grid place-items-center rounded-2xl bg-slate-400"
      :style="{ boxShadow: '0.5em 0.5em 0.5em #bebebe' }">
      <div class="h-full w-3/4 flex flex-col items-start justify-center" data-aos="fade-up">
        <b class="text-3xl cursor-default">
          Jenis Wisata Unik dan Menarik di Jatim!
        </b>
        <br />
        <p class="text-1xl text-gray-950 cursor-default font-medium text-justify" :style="{ lineHeight: '1.5' }">
          Banyak banget pilihan wisata yang bisa kalian kunjungi saat ke Jawa
          Timur, awas rawan dompet kosong!
        </p>
      </div>
    </div>
    <div class="h-full w-3/5 flex items-end justify-center bg-center bg-cover bg-no-repeat"
      :style="{ backgroundImage: 'url(/static/img/hotel-majapahit.jpg?url)' }">
      <div class="h-3/5 w-4/5 flex flex-col items-center justify-center text-center">
        <b class="text-3xl text-slate-50 cursor-default">
          Jenis Wisata Unik dan Menarik di Jatim!
        </b>
        <br />
        <p class="text-1xl text-slate-50 cursor-default font-medium text-center" :style="{ lineHeight: '1.5' }">
          Banyak banget pilihan wisata yang bisa kalian kunjungi saat ke Jawa
          Timur, awas rawan dompet kosong!
        </p>
      </div>
    </div>
  </section>

  <!-- Beragam Jenis Objek Wisata -->
  <section class="h-fit w-[85%] grid place-items-center mt-28 mx-auto" id="beragam-jenis" data-aos="fade-up">
    <p class="text-3xl text-gray-950 cursor-default font-semibold text-center">
      Beragam Jenis Objek Wisata
      <br />
      Menunggu Kedatangan Anda!
    </p>
    <hr class="h-1 w-2/5 bg-gray-950 rounded-md" />
  </section>

  <!-- Slide Tempat Wisata -->
  <section class="h-[35rem] w-full grid place-items-center mt-16" data-aos="fade-up">
    <div class="splide splide__1 h-full w-[90%] overflow-hidden">
      <div class="splide__track h-full w-full">
        <ul class="splide__list">
          <CardDestinationVue />
        </ul>
      </div>
    </div>
  </section>
  <div class="h-12 w-full"></div>
  <section class="h-fit w-[85%] grid place-items-center mx-auto" data-aos="fade-up">
    <h4 class="text-1xl italic cursor-default font-semibold">
      Dan masih banyak lagi...~
    </h4>
  </section>
  <div class="h-20 w-full"></div>

  <!-- <section class="w-full h-fit px-28">
    <div class="my-10 fit">
      <label for="">
        <h3 class="text-2xl my-5">Pilih Wilayah</h3>
        <select name="test" id="" class="h-10 w-96 border border-slate-950 rounded-md bg-slate-100">
          <option value="" selected>Semua</option>
          <option value="">Wilayah 1</option>
          <option value="">Wilayah 2</option>
          <option value="">Wilayah 3</option>
        </select>
      </label>

    </div>
    <div class="w-full h-fit grid grid-cols-3 gap-4">

      <div class="w-full h-64 bg-slate-800 flex flex-col items-center justify-end py-10">
        <h3 class="text-3xl text-slate-50 font-semibold">Nama</h3>
        <h4 class="text-xl text-slate-50 font-semibold">Wilayah</h4>
      </div>

      <div class="w-full h-64 bg-slate-800 flex flex-col items-center justify-end py-10">
        <h3 class="text-3xl text-slate-50 font-semibold">Nama</h3>
        <h4 class="text-xl text-slate-50 font-semibold">Wilayah</h4>
      </div>

      <div class="w-full h-64 bg-slate-800 flex flex-col items-center justify-end py-10">
        <h3 class="text-3xl text-slate-50 font-semibold">Nama</h3>
        <h4 class="text-xl text-slate-50 font-semibold">Wilayah</h4>
      </div>


      <div class="w-full h-64 bg-slate-800 flex flex-col items-center justify-end py-10">
        <h3 class="text-3xl text-slate-50 font-semibold">Nama</h3>
        <h4 class="text-xl text-slate-50 font-semibold">Wilayah</h4>
      </div>

      <div class="w-full h-64 bg-slate-800 flex flex-col items-center justify-end py-10">
        <h3 class="text-3xl text-slate-50 font-semibold">Nama</h3>
        <h4 class="text-xl text-slate-50 font-semibold">Wilayah</h4>
      </div>

      <div class="w-full h-64 bg-slate-800 flex flex-col items-center justify-end py-10">
        <h3 class="text-3xl text-slate-50 font-semibold">Nama</h3>
        <h4 class="text-xl text-slate-50 font-semibold">Wilayah</h4>
      </div>

    </div>
  </section> -->
</template>