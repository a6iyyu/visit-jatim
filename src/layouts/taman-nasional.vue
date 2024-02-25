<script lang="ts" setup>
import { ref } from "vue";
import GridListVue from '../components/GridList.vue';
import destination from "../data/destination.json";

const destinations = ref(destination["taman-nasional"])
</script>

<template>
  <section class="h-[35rem] w-full mx-auto bg-center bg-cover bg-no-repeat z-10"
    :style="{ backgroundImage: 'url(/static/img/taman-nasional-baluran.jpg?url)' }">
    <div class="h-[35rem] w-full bg-gradient-to-t md:bg-gradient-to-t from-black opacity-60 z-20"></div>
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

  <section class="h-fit w-full flex flex-col items-center px-14 md:px-28 mt-56 mb-20 mx-auto">
    <h2 class="text-2xl md:text-3xl text-gray-950 cursor-default font-semibold my-3 text-center" data-aos="fade-up">
      MENJELAJAH DI ALAM LIAR
    </h2>
    <hr class="h-0.5 my-5 w-5/6 md:w-[500px] lg:w-[750px] bg-gray-950" data-aos="fade-up" />
  </section>
  <section class="h-fit w-[85%] grid place-items-center mt-6 mx-auto" data-aos=fade-up>
    <p class="text-base md:text-xl my-3 md:px-8 lg:px-24 text-gray-950 cursor-default font-medium text-justify">
      Kalo udah mentok gatau pengen liburan kemana, enaknya ngapain lagi ya? Di Jawa Timur, ada wisata alternatif
      lainnya lho, misalnya aja ke taman nasional. Ada beberapa taman nasional yang bisa kalian kunjungi selama
      liburanmu di Jawa Timur, Mari kita berkelana di alam liar Jawa Timur untuk mengungkap keajaiban alam, flora, dan
      fauna yang memukau!
    </p>
  </section>

  <section class="h-fit w-full grid place-items-center px-16 md:px-12 lg:px-28 mx-auto my-8">
    <GridListVue :data="destinations" />
  </section>
  <section class="h-fit w-[85%] grid place-items-center mx-auto" data-aos="fade-up">
    <h4 class="text-1xl italic cursor-default font-semibold">
      Dan masih banyak lagi...~
    </h4>
  </section>
</template>