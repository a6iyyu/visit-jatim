<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import destination from "../data/destination.json";
import hotel from "../../public/hotel-majapahit.jpg";
import banyuwangi from "../../public/banyuwangi.jpg";

const destinations = ref(destination.places);
// const arrayDestination = ref([...destinations.value].sort(() => Math.random() - 0.5).slice(0, 6));
const cities = ref(
  destinations.value.map((place: { city: string }) => place.city)
);

const unduplicate = ref([...new Set(cities.value)]);
const filteredCity = ref();
const selectCity = ref();

onMounted(() => {
  filteredCity.value = destinations.value
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);
});

watch(selectCity, (newSelectCity: string) => {
  if (newSelectCity === "SEMUA" || newSelectCity == null) {
    filteredCity.value = destinations.value
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  } else {
    filteredCity.value = destinations.value.filter(
      (c: any) => c.city === newSelectCity
    );
  }
});
</script>

<template>
  <section
    class="h-[35rem] w-full mx-auto bg-center bg-cover bg-no-repeat z-10"
    :style="{
      backgroundImage: `url(${hotel.src})`,
    }"
  >
    <div class="h-[35rem] w-full bg-gradient-to-t md:bg-gradient-to-t from-black opacity-60 z-20"></div>
  </section>

  <!-- Opening section -->
  <section
    class="absolute h-60 w-4/5 md:w-3/5 lg:w-2/5 left-1/2 transform -translate-x-1/2 grid place-items-center top-[27rem] rounded-xl bg-gradient-to-tr from-slate-400 to-slate-300 z-20"
    :style="{ boxShadow: '0.75rem 0.75rem 0.75rem #48484825' }"
  >
    <div class="h-full w-full grid place-items-center px-10">
      <p
        class="text-2xl md:text-3xl text-gray-950 text-center cursor-default font-semibold"
        data-aos="fade-up"
      >
        Jenis Wisata Unik dan
        <br />
        Menarik di Jatim!
      </p>
    </div>
  </section>

  <section
    class="h-fit w-[85%] grid place-items-center mb-12 mt-44 mx-auto"
    id="beragam-jenis"
  >
    <p
      class="text-3xl text-gray-950 cursor-default font-semibold text-center mb-2"
      data-aos="fade-up"
    >
      Beragam Jenis Objek Wisata Menunggu Kedatangan Anda!
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" data-aos="fade-up" />
  </section>

  <section
    class="h-[35rem] w-full bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${banyuwangi.src})` }"
  >
    <div class="h-[35rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-20 absolute"></div>
    <div class="h-full w-[85%] flex items-center justify-center md:items-center md:justify-start mx-auto">
      <p
        class="text-4xl md:text-5xl text-slate-50 text-center md:text-left cursor-default font-black z-30"
        data-aos="fade-right"
      >
        KEINDAHAN TIADA
        <br />
        TARA
      </p>
    </div>
  </section>

  <section class="h-fit w-[85%] grid place-items-center mx-auto my-12" id="beragam-jenis">
    <p class="text-3xl text-gray-950 cursor-default font-semibold text-center mb-2">
      Ingin Tahu Mau Kemana Saja?
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
  </section>

  <!-- Filter -->
  <section class="h-fit w-[85%] mx-auto mt-8" data-aos="fade-up">
    <div class="my-10 fit">
      <label for="cities">
        <h3 class="text-1xl my-5 cursor-default font-medium">Pilih Wilayah</h3>
        <select
          name="test"
          id="cities"
          class="h-10 w-48 md:w-96 border border-slate-950 rounded-md bg-slate-100 px-3 cursor-pointer"
          v-model="selectCity"
        >
          <option value="SEMUA" selected>SEMUA</option>
          <option
            v-for="wilayah in unduplicate"
            :key="wilayah"
            :value="wilayah"
          >
            {{ wilayah }}
          </option>
        </select>
      </label>
    </div>
  </section>

  <!-- List section -->
  <section
    class="h-fit w-[85%] grid place-items-center mx-auto my-6"
    data-aos="fade-up"
  >
    <div
      class="w-full h-fit grid items-center sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3"
      v-if="filteredCity != null"
    >
      <a
        :href="content.link"
        v-for="content in filteredCity"
        :key="content.id"
        :style="{ 'background-image': 'url(' + content.img + ')' }"
        class="w-full h-64 mx-auto flex flex-col items-center justify-end object-cover object-center bg-cover cursor-pointer"
        data-aos="fade-up"
      >
        <div class="min-w-full min-h-full bg-gradient-to-t from-black opacity-50 hover:opacity-80 transition-opacity duration-100 z-20"></div>
        <div
          class="absolute max-w-72 flex flex-col items-center z-20 text-slate-100 font-semibold text-center"
        >
          <h3 class="md:text-xl lg:text-2xl my-1 mx-7">
            {{ content.destination }}
          </h3>
          <h4 class="md:text-base lg:text-lg mb-6">
            {{ content.city }}
          </h4>
        </div>
      </a>
    </div>

    <h4
      class="h-fit w-full text-1xl text-center italic cursor-default font-semibold mt-10 mx-auto"
      data-aos="fade-up"
    >
      Dan masih banyak lagi...~
    </h4>
  </section>
</template>