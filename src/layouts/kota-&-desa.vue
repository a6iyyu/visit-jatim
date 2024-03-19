<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import destination from "../data/destination.json";
import surabaya from "../../public/surabaya.jpg";

const destinations = ref(destination.city_villages);
// const arrayDestination = ref([...destinations.value].sort(() => Math.random() - 0.5).slice(0, 6));
const filtered = ref();

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

onMounted(() => {
  filtered.value = destinations.value
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);
});

watch(
  [allBtn, kotaBtn, desaBtn],
  ([all, kota, desa]: [boolean, boolean, boolean]) => {
    if (all) {
      filtered.value = destinations.value
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
    } else if (kota) {
      filtered.value = destinations.value
        .filter((c: any) => c.destination === "Kota")
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
    } else if (desa) {
      filtered.value = destinations.value
        .filter((c: any) => c.destination === "Desa")
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
    }
  },
);
</script>

<template>
  <!-- Hero section -->
  <section
    class="hero grid h-[40rem] w-full place-items-center bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${surabaya.src})` }"
  >
    <div class="absolute z-0 h-[40rem] w-full bg-gradient-to-t from-black opacity-60"></div>
    <div class="z-10 flex h-3/5 w-[85%] items-end justify-center">
      <h1
        class="cursor-default text-center text-3xl font-semibold text-slate-50 md:text-5xl"
        data-aos="fade-up"
      >
        BERKELANA
        <br />
        DI KOTA & DESA
      </h1>
    </div>
  </section>

  <section
    class="mx-auto mb-10 mt-20 flex h-fit w-[85%] flex-col items-center"
    data-aos="fade-up"
  >
    <h2
      class="my-3 cursor-default text-center text-2xl font-semibold text-gray-950 md:text-3xl"
      data-aos="fade-up"
    >
      TEMUKAN KEINDAHAN DI SETIAP JALAN KOTA DAN DESA
    </h2>
    <hr class="h-0.5 w-full bg-gray-950" data-aos="fade-up" />
    <p
      class="my-3 cursor-default text-justify text-base font-medium text-gray-950 md:text-xl"
      :style="{ textAlignLast: 'center' }"
      data-aos="fade-up"
    >
      Jelajahi pesona kota yang modern dan desa yang asri dalam satu perjalanan!
      Nikmati kehidupan perkotaan yang dinamis dan kemudian meresapi ketenangan
      desa yang memesona. Keindahan di setiap kota dan desa menanti untuk
      dijelajahi!
    </p>
  </section>

  <section class="mx-auto mt-14 h-fit w-[85%]" data-aos="fade-up">
    <div class="my-10 grid w-full grid-cols-3 gap-4 md:w-3/4 lg:w-1/2">
      <button
        @click="toggleAllBtn()"
        class="border border-slate-900 px-4 py-2 text-lg transition-colors hover:bg-slate-900 hover:text-slate-50 focus:bg-slate-900 focus:text-slate-50"
      >
        Semua
      </button>
      <button
        @click="toggleKotaBtn()"
        class="border border-slate-900 px-4 py-2 text-lg transition-colors hover:bg-slate-900 hover:text-slate-50 focus:bg-slate-900 focus:text-slate-50"
      >
        Kota
      </button>
      <button
        @click="toggleDesaBtn()"
        class="border border-slate-900 px-4 py-2 text-lg transition-colors hover:bg-slate-900 hover:text-slate-50 focus:bg-slate-900 focus:text-slate-50"
      >
        Desa
      </button>
    </div>
  </section>

  <section
    class="mx-auto my-6 grid h-fit w-[85%] place-items-center"
    data-aos="fade-up"
  >
    <div
      class="grid h-fit w-full items-center gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3"
      v-if="filtered != null"
    >
      <a
        :href="content.link"
        v-for="content in filtered"
        :key="content.city"
        :style="{ 'background-image': 'url(' + content.img + ')' }"
        class="mx-auto flex h-64 w-full cursor-pointer flex-col items-center justify-end bg-cover object-cover object-center"
        data-aos="fade-up"
      >
        <div class="z-20 min-h-full min-w-full bg-gradient-to-t from-black opacity-50 transition-opacity duration-100 hover:opacity-80"></div>
        <div class="absolute z-20 flex max-w-72 flex-col items-center text-center font-semibold text-slate-100">
          <h3 class="mx-7 my-1 text-xl lg:text-2xl">
            {{ content.city }}
          </h3>
          <h4 class="mb-6 text-base lg:text-lg">
            {{ content.destination }}
          </h4>
        </div>
      </a>
    </div>

    <h4
      class="text-1xl mx-auto mb-4 mt-10 h-fit w-full cursor-default text-center font-semibold italic"
      data-aos="fade-up"
    >
      Dan masih banyak lagi...~
    </h4>
  </section>
</template>