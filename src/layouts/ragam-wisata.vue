<script lang="ts" setup>
import { ref, watch } from "vue";
import destination from "../data/destination.json";
import GridList from "../components/GridList.vue";

const destinations = ref(destination.places)
const cities = ref(destinations.value.map((place: { city: string }) => place.city))
// const unduplicate = ref([...new Set(cities.value)])
// const selectCity = ref("")
</script>

<template>
  <!-- Hero Dekstop -->
  <section class="hero h-[35rem] w-full flex items-center justify-end pt-28 mx-auto">
    <div class="absolute grid place-items-center rounded-2xl bg-slate-400"
      :style="{ boxShadow: '0.5em 0.5em 0.5em #48484850' }">
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

    <!-- Hero Mobile -->
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
  <section class="h-fit w-[85%] grid place-items-center mt-14 mx-auto" id="beragam-jenis" data-aos="fade-up">
    <p class="text-3xl text-gray-950 cursor-default font-semibold text-center">
      Beragam Jenis Objek Wisata Menunggu Kedatangan Anda!
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
  </section>

  <section class="h-fit w-full px-8 md:px-12 lg:px-28 mt-14" data-aos="fade-up">
    <GridList :data="destinations" />
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
  </section>
  <section class="h-fit w-[85%] grid place-items-center mx-auto my-6" data-aos="fade-up">
    <h4 class="text-1xl italic cursor-default font-semibold">
      Dan masih banyak lagi...~
    </h4>
  </section>
</template>