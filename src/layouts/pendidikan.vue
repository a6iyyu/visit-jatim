<script setup>
import { ref } from "vue";
import collegeData from "../data/college-blogs.json";
import CollegeSlider from "../components/CollegeSlider.vue";
import Latest from "../components/Latest.vue";

const blogs = ref(collegeData.blogs)
</script>

<template>
  <!-- Hero section -->
  <section class="h-[40rem] w-full grid place-items-center mx-auto bg-bottom bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(/static/img/ub.jpeg?url)' }">
    <div class="h-[40rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-0 absolute"></div>
    <div class="h-3/5 w-[85%] flex items-end justify-center z-10">
      <h1 class="text-5xl text-slate-50 cursor-default font-semibold text-center" data-aos="fade-out">
        YUK CARI <br />
        ILMU DISINI
      </h1>
    </div>
  </section>

  <!-- Apakah pendidikan itu penting -->
  <section class="h-fit w-[85%] my-20 mx-auto grid grid-cols-3 gap-10" id="pendidikan-penting">
    <h1 class="text-3xl text-gray-950 cursor-default font-semibold text-justify" data-aos="fade-right">
      Mengapa Pendidikan Itu Penting?
    </h1>
    <h4 class="text-1xl text-gray-950 cursor-default font-medium text-justify" :style="{ lineHeight: '1.5' }"
      data-aos="fade-up">
      Di zaman serba digital seperti sekarang ini, pendidikan menjadi kunci untuk mempersiapkan
      generasi masa depan menghadapi tantangan yang semakin kompleks dan dinamis. Melalui pendidikan, individu diberikan
      pemahaman yang mendalam tentang teknologi dan keterampilan digital yang kritis, yang sangat dibutuhkan untuk
      beradaptasi dan bersaing di dunia kerja yang terus berkembang.
    </h4>
    <h4 class="text-1xl text-gray-950 cursor-default font-medium text-justify" :style="{ lineHeight: '1.5' }"
      data-aos="fade-left">
      Lebih dari sekadar mempersiapkan individu untuk dunia kerja, pendidikan juga membentuk karakter, nilai, dan etika
      yang mendasar bagi kemajuan sosial dan ekonomi. Dengan pendidikan yang kokoh, individu dapat menjadi agen perubahan
      positif dalam masyarakat, berkontribusi pada inovasi, pembangunan, dan penyelesaian tantangan-tantangan global yang
      semakin kompleks.
    </h4>
  </section>

  <!-- Karosel kuliah -->
  <section class="h-fit w-[85%] block mt-16 mx-auto" id="latest" data-aos="fade-up">
    <p class="text-3xl text-gray-950 cursor-default font-semibold">
      Pilih Kampus Impianmu!
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
  </section>
  <section class="h-[25rem] w-full grid place-items-center mt-8" data-aos="fade-up">
    <div class="splide splide__1 h-full w-[85%] overflow-hidden">
      <div class="splide__track h-full w-full">
        <ul class="splide__list">
          <CollegeSlider />
        </ul>
      </div>
    </div>
  </section>

  <!-- Terbaru di Pendidikan -->
  <section class="h-fit w-[85%] block mt-16 mx-auto" id="latest" data-aos="fade-up">
    <p class="text-3xl text-gray-950 cursor-default font-semibold">
      Terbaru di Pendidikan
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
  </section>

  <section class="h-fit w-full grid place-items-center my-4" id="terbaru-di-pendidikan" data-aos="fade-up">
    <Latest :data="blogs" />
  </section>

  <!-- Kami Percaya Pada Anda -->
  <section class="h-fit w-[85%] my-20 mx-auto grid grid-cols-2 gap-10" id="kami-percaya">
    <h1 class="flex flex-col items-start justify-center text-3xl text-gray-950 cursor-default font-semibold text-justify"
      data-aos="fade-up">
      KAMI PERCAYA<br />PADA ANDA SEBAGAI<br />GENERASI PENERUS BANGSA
    </h1>
    <img src="/static/img/businessman.jpg?url" alt="Successful" class="cursor-default font-semibold rounded-lg"
      data-aos="fade-up" :style="{ boxShadow: '0.75rem 0.75rem 0.75rem #bebebe' }" />
  </section>

  <section class="h-[40rem] bg-gray-950"></section>

  <section class="h-fit w-[85%] block mt-16 mb-6 mx-auto" id="latest" data-aos="fade-up">
    <p class="text-3xl text-gray-950 cursor-default font-semibold">
      Tips Masuk PTN Impian
    </p>
    <hr class="h-0.5 w-full bg-gray-950 rounded-md" />
  </section>

  <section class="h-fit w-[85%] flex flex-col items-start justify-center mx-auto mb-8">
    <p class="text-1xl cursor-default font-medium" data-aos="fade-up" :style="{ lineHeight: '1.5' }">
      Kalian udah nentuin mau masuk kampus mana? Memang sih masuk kampus dan jurusan impian tuh kebayang seru, tapi perlu
      diingat buat kesana tentunya tidak dilakukan secara instan. Perlu perjuangan yang gede dan selalu baca informasi
      tentang pendaftaran masuk perkuliahan. Di halaman ini, bakal dikasih tau tips-tips yang bisa kalian terapkan biar
      bisa masuk ke perkuliahan. Apa aja ya kira-kira? Mari kita telusuri!
    </p>
  </section>
</template>