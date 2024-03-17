<script setup>
import { ref } from "vue";
import CultureSliderVue from "../components/CultureSlider.vue";
import Latest from "../components/Latest.vue";
import candisingosari from "../../public/candi-singosari.jpg";

import blogData from "../data/culture-blogs.json";
const blogs = ref(blogData.blogs);
</script>

<template>
  <section
    class="h-[35rem] w-full mx-auto bg-center bg-cover bg-no-repeat z-10"
    :style="{
      backgroundImage: `url(${candisingosari.src})`,
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
        Mari Telusuri Ragam
        <br />
        Tradisi Lokal!
      </p>
    </div>
  </section>

  <!-- Karosel Kebudayaan -->
  <section
    class="h-fit w-[85%] block mt-44 mx-auto"
    id="kenali-kebudayaan"
    data-aos="fade-up"
  >
    <p class="text-3xl text-gray-950 text-center cursor-default font-semibold">
      Upacara Adat Khas Jawa Timur
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
  </section>
  <section
    class="h-[25rem] w-full grid place-items-center mt-6"
    data-aos="fade-up"
  >
    <div class="splide splide__1 h-full w-[85%] overflow-hidden">
      <div class="splide__track h-full w-full py-4">
        <ul class="splide__list">
          <CultureSliderVue />
        </ul>
      </div>
    </div>
  </section>
  <section class="h-full w-[85%] mt-4 mx-auto grid place-items-center">
    <p
      class="text-gray-900 text-1xl cursor-default font-medium text-justify tracking-wide"
      :style="{ lineHeight: '1.5' }"
      data-aos="fade-up"
    >
      Di Jawa Timur, ada beberapa upacara adat yang dilakuin di beberapa daerah
      dan oleh suku tertentu. Misalnya kayak Upacara Yadnya Kasada yang dilakuin
      oleh Suku Tengger di Gunung Bromo yang tujuannya adalah agar masyarakat
      setempat terhindar dari berbagai macam musibah dengan cara menyampaikan
      persembahan kepada Sang Hyang Widhi di kawah puncak Gunung Bromo. Selain
      itu, ada juga Upacara Kebo-Keboan yang asalnya dari Banyuwangi. Ga sekadar
      sebagai upacara adat, ternyata Kebo-Keboan bisa narik wisatawan buat
      ngerti tradisi daerah sana!
    </p>
  </section>
  <section
    class="h-fit w-[85%] block mt-16 mx-auto"
    id="latest"
    data-aos="fade-up"
  >
    <p class="text-3xl text-gray-950 text-center cursor-default font-semibold">
      Kenali Kebudayaan Lokalnya
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
  </section>
  <section
    class="h-fit w-full grid place-items-center mx-auto my-12"
    id="blog-kebudayaan"
    data-aos="fade-up"
  >
    <Latest :data="blogs" />
  </section>
</template>