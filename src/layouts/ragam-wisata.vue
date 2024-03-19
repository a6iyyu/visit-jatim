<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import destination from "../data/destination.json";
import hotel from "../../public/hotel-majapahit.jpg";
import banyuwangi from "../../public/banyuwangi.jpg";

const destinations = ref(destination.places);
// const arrayDestination = ref([...destinations.value].sort(() => Math.random() - 0.5).slice(0, 6));
const cities = ref(
  destinations.value.map((place: { city: string }) => place.city),
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
      (c: any) => c.city === newSelectCity,
    );
  }
});
</script>

<template>
  <section
    class="z-10 mx-auto h-[35rem] w-full bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: `url(${hotel.src})`,
    }"
  >
    <div class="z-20 h-[35rem] w-full bg-gradient-to-t from-black opacity-60 md:bg-gradient-to-t"></div>
  </section>

  <!-- Opening section -->
  <section
    class="absolute left-1/2 top-[27rem] z-20 grid h-60 w-4/5 -translate-x-1/2 transform place-items-center rounded-xl bg-gradient-to-tr from-slate-400 to-slate-300 md:w-3/5 lg:w-2/5"
    :style="{ boxShadow: '0.75rem 0.75rem 0.75rem #48484825' }"
  >
    <div class="grid h-full w-full place-items-center px-10">
      <p
        class="cursor-default text-center text-2xl font-semibold text-gray-950 md:text-3xl"
        data-aos="fade-up"
      >
        Jenis Wisata Unik dan
        <br />
        Menarik di Jatim!
      </p>
    </div>
  </section>

  <section
    class="mx-auto mb-12 mt-44 grid h-fit w-[85%] place-items-center"
    id="beragam-jenis"
  >
    <p
      class="mb-2 cursor-default text-center text-3xl font-semibold text-gray-950"
      data-aos="fade-up"
    >
      Beragam Jenis Objek Wisata Menunggu Kedatangan Anda!
    </p>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" data-aos="fade-up" />
  </section>

  <section
    class="h-[35rem] w-full bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${banyuwangi.src})` }"
  >
    <div class="absolute z-20 h-[35rem] w-full bg-gradient-to-t from-black opacity-60 md:bg-gradient-to-r"></div>
    <div class="mx-auto flex h-full w-[85%] items-center justify-center md:items-center md:justify-start">
      <p
        class="z-30 cursor-default text-center text-4xl font-black text-slate-50 md:text-left md:text-5xl"
        data-aos="fade-right"
      >
        KEINDAHAN TIADA
        <br />
        TARA
      </p>
    </div>
  </section>

  <section
    class="mx-auto my-12 grid h-fit w-[85%] place-items-center"
    id="beragam-jenis"
  >
    <p class="mb-2 cursor-default text-center text-3xl font-semibold text-gray-950">
      Ingin Tahu Mau Kemana Saja?
    </p>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
  </section>

  <!-- Filter -->
  <section class="mx-auto mt-8 h-fit w-[85%]" data-aos="fade-up">
    <div class="fit my-10">
      <label for="cities">
        <h3 class="text-1xl my-5 cursor-default font-medium">Pilih Wilayah</h3>
        <select
          name="test"
          id="cities"
          class="h-10 w-48 cursor-pointer rounded-md border border-slate-950 bg-slate-100 px-3 md:w-96"
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
    class="mx-auto my-6 grid h-fit w-[85%] place-items-center"
    data-aos="fade-up"
  >
    <div
      class="grid h-fit w-full items-center gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3"
      v-if="filteredCity != null"
    >
      <a
        :href="content.link"
        v-for="content in filteredCity"
        :key="content.id"
        :style="{ 'background-image': 'url(' + content.img + ')' }"
        class="mx-auto flex h-64 w-full cursor-pointer flex-col items-center justify-end bg-cover object-cover object-center"
        data-aos="fade-up"
      >
        <div class="z-20 min-h-full min-w-full bg-gradient-to-t from-black opacity-50 transition-opacity duration-100 hover:opacity-80"></div>
        <div class="absolute z-20 flex max-w-72 flex-col items-center text-center font-semibold text-slate-100">
          <h3 class="mx-7 my-1 md:text-xl lg:text-2xl">
            {{ content.destination }}
          </h3>
          <h4 class="mb-6 md:text-base lg:text-lg">
            {{ content.city }}
          </h4>
        </div>
      </a>
    </div>

    <h4
      class="text-1xl mx-auto mt-10 h-fit w-full cursor-default text-center font-semibold italic"
      data-aos="fade-up"
    >
      Dan masih banyak lagi...~
    </h4>
  </section>
</template>