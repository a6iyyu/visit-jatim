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
    class="z-10 mx-auto h-[35rem] w-full bg-cover bg-center bg-no-repeat"
    :style="{backgroundImage: `url(${candisingosari.src})`}"
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
        Mari Telusuri Ragam
        <br />
        Tradisi Lokal!
      </p>
    </div>
  </section>

  <!-- Karosel Kebudayaan -->
  <section
    class="mx-auto mt-44 block h-fit w-[85%]"
    id="kenali-kebudayaan"
    data-aos="fade-up"
  >
    <p class="cursor-default text-center text-3xl font-semibold text-gray-950">
      Upacara Adat Khas Jawa Timur
    </p>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
  </section>
  <section
    class="mt-6 grid h-[25rem] w-full place-items-center"
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
  <section class="mx-auto mt-4 grid h-full w-[85%] place-items-center">
    <p
      class="text-1xl cursor-default text-justify font-medium tracking-wide text-gray-900"
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
    class="mx-auto mt-16 block h-fit w-[85%]"
    id="latest"
    data-aos="fade-up"
  >
    <p class="cursor-default text-center text-3xl font-semibold text-gray-950">
      Kenali Kebudayaan Lokalnya
    </p>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
  </section>
  <section
    class="mx-auto my-12 grid h-fit w-full place-items-center"
    id="blog-kebudayaan"
    data-aos="fade-up"
  >
    <Latest :data="blogs" />
  </section>
</template>