<script lang="ts" setup>
import { ref, watch } from "vue";
import destination from "../data/destination.json";

const destinations = ref(destination["city-villages"]);
const arrayDestination = ref([...destinations.value].sort(() => Math.random() - 0.5).slice(0, 6));
const filtered = ref(arrayDestination.value);

const allBtn = ref(true);
const kotaBtn = ref(false);
const desaBtn = ref(false);

const toggleAllBtn = () => {
  allBtn.value = true;
  kotaBtn.value = false;
  desaBtn.value = false;
};

const toggleKotaBtn = () => {
  allBtn.value = false;
  kotaBtn.value = true;
  desaBtn.value = false;
};

const toggleDesaBtn = () => {
  allBtn.value = false;
  kotaBtn.value = false;
  desaBtn.value = true;
};

watch([allBtn, kotaBtn, desaBtn], ([all, kota, desa]) => {
  if (all) {
    filtered.value = destinations.value
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  } else if (kota) {
    filtered.value = destinations.value
      .filter((c) => c.destination === "Kota")
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  } else if (desa) {
    filtered.value = destinations.value
      .filter((c) => c.destination === "Desa")
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  }
});
</script>

<template>
  <!-- Hero section -->
  <section class="hero h-[40rem] w-full grid place-items-center bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(/static/img/surabaya.jpg?url)' }">
    <div class="h-[40rem] w-full bg-gradient-to-t from-black opacity-60 z-0 absolute"></div>
    <div class="h-3/5 w-[85%] flex items-end justify-center z-10">
      <h1 class="text-3xl md:text-5xl text-slate-50 cursor-default font-semibold text-center" data-aos="fade-up">
        BERKELANA
        <br />
        DI KOTA & DESA
      </h1>
    </div>
  </section>

  <section class="h-fit w-full px-16 md:px-12 lg:px-28 mt-14" data-aos="fade-up">
    <div class="my-10 w-full md:w-3/4 lg:w-1/2 grid grid-cols-3 gap-4">
      <button @click="toggleAllBtn()"
        class="border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-slate-50 transition-colors text-lg focus:text-slate-50 focus:bg-slate-900">
        Semua
      </button>
      <button @click="toggleKotaBtn()"
        class="border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-slate-50 transition-colors text-lg focus:text-slate-50 focus:bg-slate-900">
        Kota
      </button>
      <button @click="toggleDesaBtn()"
        class="border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-slate-50 transition-colors text-lg focus:text-slate-50 focus:bg-slate-900">
        Desa
      </button>
    </div>
  </section>

  <section class="h-fit w-full grid place-items-center px-16 md:px-12 lg:px-28 mx-auto my-6" data-aos="fade-up">
    <div class="w-full h-fit grid items-center sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3" v-if="filtered != null">
      <a :href="content.link" v-for="content in filtered" :key="content.city"
        :style="{ 'background-image': 'url(' + content.img + ')' }"
        class="w-full h-64 mx-auto flex flex-col items-center justify-end object-cover object-center bg-cover cursor-pointer"
        data-aos="fade-up">
        <div
          class="min-w-full min-h-full bg-gradient-to-t from-black opacity-50 hover:opacity-80 transition-opacity duration-100 z-20">
        </div>
        <div class="absolute max-w-72 flex flex-col items-center z-20 text-slate-100 font-semibold text-center">
          <h3 class="text-xl lg:text-2xl my-1 mx-7">
            {{ content.city }}
          </h3>
          <h4 class="text-base lg:text-lg mb-6">
            {{ content.destination }}
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