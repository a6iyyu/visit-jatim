<script lang="ts" setup>
import { ref } from "vue";
import GridListVue from "../components/GridList.vue";
import destination from "../data/destination.json";
import baluran from "../../public/taman-nasional-baluran.jpg";

const destinations = ref(destination["taman-nasional"]);
</script>

<template>
  <section
    class="z-10 mx-auto h-[35rem] w-full bg-cover bg-center bg-no-repeat"
    :style="{backgroundImage: `url(${baluran.src})`}"
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
        Menyatu dengan Alam di <br />
        Taman Nasional
      </p>
    </div>
  </section>

  <section class="mx-auto mt-56 flex h-fit w-full flex-col items-center">
    <h2
      class="mb-2 cursor-default text-center text-2xl font-semibold text-gray-950 md:text-3xl"
      data-aos="fade-up"
    >
      MENJELAJAH DI ALAM LIAR
    </h2>
    <hr class="h-0.5 w-[85%] bg-gray-950" data-aos="fade-up" />
  </section>
  <section class="mx-auto mb-6 mt-1 grid h-fit w-[85%] place-items-center">
    <p
      class="my-3 cursor-default text-justify text-base font-medium text-gray-950 md:text-xl"
      :style="{ textAlignLast: 'center' }"
      data-aos="fade-up"
    >
      Kalo udah mentok gatau pengen liburan kemana, enaknya ngapain lagi ya? Di
      Jawa Timur, ada wisata alternatif lainnya lho, misalnya aja ke taman
      nasional. Ada beberapa taman nasional yang bisa kalian kunjungi selama
      liburanmu di Jawa Timur, Mari kita berkelana di alam liar Jawa Timur untuk
      mengungkap keajaiban alam, flora, dan fauna yang memukau!
    </p>
  </section>

  <section class="mx-auto my-8 grid h-fit w-[85%] place-items-center">
    <GridListVue :data="destinations" />
  </section>
  <section
    class="mx-auto mb-12 grid h-fit w-[85%] place-items-center sm:mb-4"
    data-aos="fade-up"
  >
    <h4 class="text-1xl cursor-default font-semibold italic">
      Dan masih banyak lagi...~
    </h4>
  </section>
</template>