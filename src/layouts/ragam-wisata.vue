<script lang="ts" setup>
import { ref, watch } from "vue";
import destination from "../data/destination.json";

const destinations = ref(destination.places);
const arrayDestination = ref([...destinations.value].sort(() => Math.random() - 0.5).slice(0, 6));
const cities = ref(destinations.value.map((place: { city: string }) => place.city));
const unduplicate = ref([...new Set(cities.value)]);
const filteredCity = ref(arrayDestination.value);
const selectCity = ref();

watch(selectCity, (newSelectCity) => {
  if (newSelectCity === 'SEMUA') {
    filteredCity.value = arrayDestination.value;
  } else {
    filteredCity.value = destinations.value.filter(c => c.city === newSelectCity);
  }
})
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

  <!-- Filter -->
  <section class="h-fit w-[85%] mx-auto mt-8" data-aos="fade-up">
    <div class="my-10 fit">
      <label for="cities">
        <h3 class="text-1xl my-5 cursor-default font-medium">Pilih Wilayah</h3>
        <select name="test" id="cities"
          class="h-10 w-48 md:w-96 border border-slate-950 rounded-md bg-slate-100 px-3 cursor-pointer"
          v-model="selectCity">
          <option value="SEMUA" selected>SEMUA</option>
          <option v-for="wilayah in unduplicate" :key="wilayah" :value="wilayah">{{ wilayah }}</option>
        </select>
      </label>
    </div>
  </section>

  <!-- List section -->
  <section class="h-fit w-[85%] grid place-items-center mx-auto my-6" data-aos="fade-up">
    <div class="w-full h-fit grid items-center sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3" v-if="filteredCity != null">
      <a :href="content.link" v-for="content in filteredCity" :key="content.city"
        :style="{ 'background-image': 'url(' + content.img + ')' }"
        class="w-full h-64 mx-auto flex flex-col items-center justify-end object-cover object-center bg-cover cursor-pointer"
        data-aos="fade-up">
        <div
          class="min-w-full min-h-full bg-gradient-to-t from-black opacity-50 hover:opacity-80 transition-opacity duration-100 z-20">
        </div>
        <div class="absolute max-w-72 flex flex-col items-center z-20 text-slate-100 font-semibold text-center">
          <h3 class="md:text-xl lg:text-2xl my-1 mx-7">
            {{ content.destination }}
          </h3>
          <h4 class="md:text-base lg:text-lg mb-6">
            {{ content.city }}
          </h4>
        </div>
      </a>
    </div>

    <h4 class="h-fit w-full text-1xl text-center italic cursor-default font-semibold mb-4 mt-10 mx-auto"
      data-aos="fade-up">
      Dan masih banyak lagi...~
    </h4>
  </section>
</template>