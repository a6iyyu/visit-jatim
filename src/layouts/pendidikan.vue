<script setup>
import { ref } from "vue";
import collegeData from "../data/college-blogs.json";
import CollegeSlider from "../components/CollegeSlider.vue";
import Latest from "../components/Latest.vue";
import CollegeEntryTips from "../components/CollegeEntryTips.vue";
import ub from "../../public/ub.jpeg";

const blogs = ref(collegeData.blogs);
</script>

<template>
  <!-- Hero section -->
  <section
    class="mx-auto grid h-[40rem] w-full place-items-center bg-cover bg-bottom bg-no-repeat"
    :style="{ backgroundImage: `url(${ub.src})` }"
  >
    <div class="absolute z-0 h-[40rem] w-full bg-gradient-to-t from-black opacity-60 md:bg-gradient-to-r"></div>
    <div class="z-10 flex h-3/5 w-[85%] items-end justify-center">
      <h1
        class="cursor-default text-center text-5xl font-semibold text-slate-50"
        data-aos="fade-out"
      >
        YUK CARI
        <br />
        ILMU DISINI
      </h1>
    </div>
  </section>

  <!-- Apakah pendidikan itu penting -->
  <section
    class="mx-auto my-20 grid h-fit w-[85%] grid-cols-2 gap-10"
    id="pendidikan-penting"
  >
    <h1
      class="cursor-default text-justify text-3xl font-semibold text-gray-950"
      data-aos="fade-right"
    >
      Mengapa Pendidikan Itu Penting?
    </h1>
    <h4
      class="text-1xl cursor-default text-justify font-medium text-gray-950"
      :style="{ lineHeight: '1.5' }"
      data-aos="fade-left"
    >
      Di zaman serba digital seperti sekarang ini, pendidikan menjadi kunci
      untuk mempersiapkan generasi masa depan menghadapi tantangan yang semakin
      kompleks dan dinamis. Melalui pendidikan, individu diberikan pemahaman
      yang mendalam tentang teknologi dan keterampilan digital yang kritis, yang
      sangat dibutuhkan untuk beradaptasi dan bersaing di dunia kerja yang terus
      berkembang.
    </h4>
  </section>

  <!-- Karosel kuliah -->
  <section
    class="mx-auto mt-16 block h-fit w-[85%]"
    id="latest"
    data-aos="fade-up"
  >
    <p class="cursor-default text-3xl font-semibold text-gray-950">
      Pilih Kampus Impianmu!
    </p>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
  </section>
  <section
    class="mt-8 grid h-[25rem] w-full place-items-center"
    id="college-slider"
    data-aos="fade-up"
  >
    <div class="splide splide__1 h-full w-[85%] overflow-hidden">
      <div class="splide__track h-full w-full py-4">
        <ul class="splide__list">
          <CollegeSlider />
        </ul>
      </div>
    </div>
  </section>

  <!-- Terbaru di Pendidikan -->
  <section
    class="mx-auto mt-16 block h-fit w-[85%]"
    id="latest"
    data-aos="fade-up"
  >
    <p class="cursor-default text-3xl font-semibold text-gray-950">
      Terbaru di Pendidikan
    </p>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
  </section>

  <section
    class="my-4 grid h-fit w-full place-items-center"
    id="terbaru-di-pendidikan"
    data-aos="fade-up"
  >
    <Latest :data="blogs" />
  </section>

  <!-- Kami Percaya Pada Anda -->
  <section
    class="mx-auto my-20 grid h-fit w-[85%] grid-cols-2 gap-10"
    id="kami-percaya"
  >
    <h1
      class="flex cursor-default flex-col items-start justify-center text-justify text-3xl font-semibold text-gray-950"
      data-aos="fade-up"
    >
      KAMI PERCAYA<br />
      PADA ANDA SEBAGAI<br />
      GENERASI PENERUS BANGSA
    </h1>
    <img
      src="/public/img/businessman.jpg?url"
      alt="Successful"
      class="cursor-default rounded-lg font-semibold"
      data-aos="fade-up"
      :style="{ boxShadow: '0.75rem 0.75rem 0.75rem #bebebe' }"
    />
  </section>

  <section class="grid h-[40rem] w-full place-items-center bg-gray-950">
    <p
      class="m-auto h-fit w-[85%] cursor-default text-4xl font-semibold text-slate-50"
      data-aos="fade-right"
    >
      Udah nentuin<br />
      kampus impian belum?
    </p>
  </section>

  <!-- Tips Masuk PTN Impian -->
  <section
    class="mx-auto mb-6 mt-16 block h-fit w-[85%]"
    id="latest"
    data-aos="fade-right"
  >
    <p class="cursor-default text-3xl font-semibold text-gray-950">
      Tips Masuk PTN Impian
    </p>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
  </section>

  <section class="mx-auto mb-8 flex h-fit w-[85%] flex-col items-start justify-center">
    <p
      class="text-1xl cursor-default text-justify font-medium"
      data-aos="fade-right"
      :style="{ lineHeight: '1.5' }"
    >
      Kalian udah nentuin mau masuk kampus mana? Memang sih masuk kampus dan
      jurusan impian tuh kebayang seru, tapi perlu diingat buat kesana tentunya
      tidak dilakukan secara instan. Perlu perjuangan yang gede dan selalu baca
      informasi tentang pendaftaran masuk perkuliahan. Di halaman ini, bakal
      dikasih tau tips-tips yang bisa kalian terapkan biar bisa masuk ke
      perkuliahan. Apa aja ya kira-kira? Mari kita pahami bersama!
    </p>
  </section>

  <section
    class="mt-8 grid h-80 w-full place-items-center"
    id="college-entry"
    data-aos="fade-up"
  >
    <div class="splide splide__2 h-full w-[85%] overflow-hidden">
      <div class="splide__track h-full w-full py-4">
        <ul class="splide__list">
          <CollegeEntryTips />
        </ul>
      </div>
    </div>
  </section>

  <!-- Reminder -->
  <p class="mx-auto mb-8 mt-16 grid h-fit w-[85%] place-items-center">
    <q
      class="cursor-default text-center text-xl font-semibold text-gray-900 md:text-2xl"
      data-aos="fade-left"
    >
      Hanya pendidikan yang bisa menyelamatkan masa depan, tanpa pendidikan
      Indonesia tak mungkin bertahan.
    </q>
  </p>
</template>