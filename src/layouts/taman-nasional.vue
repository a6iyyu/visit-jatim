<script lang="ts" setup>
import { ref } from "vue";
// import ColumnListVue from '../components/ColumnList.vue';
import GridListVue from '../components/GridList.vue';
import destination from "../data/destination.json";

const destinations = ref(destination["taman-nasional"])
</script>

<template>
  <section class="h-[35rem] w-full mx-auto bg-center bg-cover bg-no-repeat z-10"
    :style="{ backgroundImage: 'url(/static/img/taman-nasional-baluran.jpg?url)' }">
    <div class="h-[35rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-20"></div>
  </section>
  <!-- Opening section -->
  <section
    class="absolute h-60 w-4/5 md:w-3/5 lg:w-2/5 left-1/2 transform -translate-x-1/2 grid place-items-center top-[27rem] rounded-xl bg-gradient-to-tr from-slate-400 to-slate-300 z-20"
    :style="{ boxShadow: '0.75rem 0.75rem 0.75rem #48484825' }">
    <div class="h-full w-full grid place-items-center px-10">
      <p class="text-2xl md:text-3xl text-gray-950 text-center cursor-default font-semibold" data-aos="fade-up">
        Menyatu dengan Alam di <br />
        Taman Nasional
      </p>
    </div>
  </section>

  <section class="h-fit w-[85%] grid place-items-center mt-52 mx-auto">
    <h2 class="text-2xl md:text-3xl text-gray-950 cursor-default font-semibold" data-aos="fade-up">
      MENJELAJAH DI ALAM LIAR
    </h2>
    <hr class="h-0.5 w-full bg-gray-950" data-aos="fade-up" />
  </section>
  <section class="h-fit w-[85%] grid place-items-center mt-6 mx-auto" data-aos=fade-up>
    <p class="text-base md:text-xl text-gray-950 cursor-default font-medium text-justify">
      Kalo udah mentok gatau pengen liburan kemana, enaknya ngapain lagi ya? Di Jawa Timur, ada wisata alternatif
      lainnya lho, misalnya aja ke taman nasional. Ada beberapa taman nasional yang bisa kalian kunjungi selama
      liburanmu di Jawa Timur, Mari kita berkelana di alam liar Jawa Timur untuk mengungkap keajaiban alam, flora, dan
      fauna yang memukau!
    </p>
  </section>

  <section class="h-fit w-[85%] mx-auto my-12">
    <!-- <ColumnListVue /> -->
    <GridListVue :data="destinations" />
  </section>
  <section class="h-fit w-[85%] grid place-items-center mb-8 mx-auto" data-aos="fade-up">
    <h4 class="text-1xl italic cursor-default font-semibold">
      Dan masih banyak lagi...~
    </h4>
  </section>
  <!-- <details class="h-fit w-[85%] flex mt-14 mx-auto" data-aos="fade-up">
    <summary
      class="h-fit w-fit text-2xl text-gray-950 cursor-pointer font-semibold transition-all duration-300 ease-in-out hover:text-gray-800 hover:underline">
      Taman Nasional Baluran
    </summary>
    <section></section>
  </details> -->
</template>