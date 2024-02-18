<script lang="ts" setup>
import { ref, watch } from "vue";
import destination from "../data/destination.json";
import CardDestinationVue from "../components/CardDestination.vue";
import GridList from "../components/GridList.vue";

const destinations = ref(destination.places)
const cities = ref(destinations.value.map((place: { city: string }) => place.city))
// const unduplicate = ref([...new Set(cities.value)])

// const selectCity = ref("")

</script>

<template>
  <!-- Hero Desktop -->
  <div class="hidden md:block h-28 w-full"></div>
  <section class="h-[35rem] w-full">

    <div class="pl-16 hidden lg:flex flex-row-reverse items-center w-full h-full">
      <img src="../../static/img/hotel-majapahit.jpg" class="h-5/6 z-10" alt="">
      <div class="w-[70vw] xl:w-[40vw] h-72 px-10 xl:px-16 py-5 -mr-48 xl:-mr-20 z-20 rounded-md bg-slate-400 flex flex-col justify-evenly">
        <h2 class="text-3xl cursor-default font-bold">
          Jenis Wisata Unik dan Menarik di Jatim!
        </h2>
        <p class="text-1xl text-gray-950 cursor-default font-medium text-justify" :style="{ lineHeight: '1.5' }">
          Banyak banget pilihan wisata yang bisa kalian kunjungi saat ke Jawa
          Timur, awas rawan dompet kosong!
        </p>
      </div>
    </div>

    <!-- Hero mobile -->
    <div class="h-full w-full flex lg:hidden items-end justify-center bg-center bg-cover bg-no-repeat"
      :style="{ backgroundImage: 'url(/static/img/hotel-majapahit.jpg?url)' }">
      <div class="block lg:hidden h-[40rem] w-full bg-gradient-to-t from-black opacity-60 z-0 absolute"></div>
      <div class="h-3/5 w-4/5 flex flex-col items-center justify-center text-center z-10">
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
  <section class="h-[35rem] w-full grid place-items-center mt-16 px-28" data-aos="fade-up">
    <div class="splide splide__1 h-full w-full overflow-hidden">
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

  <section class="w-full h-fit px-8 md:px-12 lg:px-28" data-aos="fade-up">
    <div class="w-fit mx-auto my-10">
      <h2 class="text-3xl cursor-default font-semibold">
        Masih Bingung Mau Kemana?
      </h2>
      <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
    </div>
    <!-- <div class="my-10 fit">
      <label for="cities">
        <h3 class="text-2xl my-5">Pilih Wilayah</h3>
        <select name="test" id="cities" class="h-10 w-48 md:w-96 border border-slate-950 rounded-md bg-slate-100 px-3"
          v-model="selectCity">
          <option value="null" selected>SEMUA</option>
          <option v-for="wilayah in unduplicate" :key="wilayah" :value="wilayah">{{ wilayah }}</option>
        </select>
      </label>
    </div>
    selected: {{ selectCity }}
    <br> -->
    <GridList :data="destinations" />
  </section>
</template>