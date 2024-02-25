<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import destination from "../data/destination.json";

const destinations = ref(destination.places);
const arrayDestination = ref([...destinations.value].sort(() => Math.random() - 0.5).slice(0, 6));
const cities = ref(destinations.value.map((place: { city: string }) => place.city));

const unduplicate = ref([...new Set(cities.value)]);
const filteredCity = ref();
const selectCity = ref();

onMounted(()=>{
  filteredCity.value = destinations.value.sort(() => Math.random() - 0.5).slice(0, 6);
})

watch(selectCity, (newSelectCity:string) => {
  if (newSelectCity === 'SEMUA' || newSelectCity == null) {
    filteredCity.value = destinations.value.sort(() => Math.random() - 0.5).slice(0, 6);
  } else {
    filteredCity.value = destinations.value.filter((c:any) => c.city === newSelectCity);
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
      <div
          class="block md:hidden absolute min-w-full min-h-full bg-gradient-to-t from-black opacity-50 hover:opacity-80 transition-opacity duration-100 z-20">
        </div>
      <div class="h-3/5 w-4/5 flex flex-col items-center justify-center text-center z-30">
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
  <section class="h-fit w-full grid place-items-center px-28 my-24 mx-auto" id="beragam-jenis" data-aos="fade-up">
    <p class="text-3xl my-10 text-gray-950 cursor-default font-semibold text-center">
      Beragam Jenis Objek Wisata <br> Menunggu Kedatangan Anda!
    </p>
    <hr class="h-0.5 w-full md:w-2/3 lg:w-1/2 bg-gray-950 rounded-md" />
  </section>

  <section class="h-[35rem] w-full bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(../../static/img/banyuwangi.jpg)' }">
    <div class="h-[35rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-20 absolute"></div>
    <div class="h-full w-full md:w-3/4 lg:w-1/2 px-10 md:px-28 flex items-end md:items-center content-end justify-center">
      <p class="text-3xl md:text-5xl mb-44 md:mb-0 text-slate-50 text-center md:text-left cursor-default font-black z-30"
        data-aos="fade-right">
        KEINDAHAN TIADA TARA
      </p>
    </div>
  </section>

  <section class="h-fit w-full grid place-items-center px-28 my-24 mx-auto" id="beragam-jenis" data-aos="fade-up">
    <p class="text-3xl my-10 text-gray-950 cursor-default font-semibold text-center">
      Ingin Tahu Mau Kemana Saja?
    </p>
    <hr class="h-0.5 w-full md:w-2/3 lg:w-1/2 bg-gray-950 rounded-md" />
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
      <a :href="content.link" v-for="content in filteredCity" :key="content.id"
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

    <h4 class="h-fit w-full text-1xl text-center italic cursor-default font-semibold mt-10 mx-auto" data-aos="fade-up">
      Dan masih banyak lagi...~
    </h4>
  </section>
</template>