<script setup>
import { ref } from "vue";

const Reading = ref([
  {
    title: "Pengen Belajar Sejarah? Ada!",
    description: "Di Blitar, ada lho peninggalan bersejarah yang menarik dimana tempat ini dulunya menjadi saksi bisu dari mendiang Presiden Soekarno. Nama tempatnya adalah Istana Gebang yang menjadi tempat tinggal bagi beliau semasa remaja.",
    img: "/istana-gebang.jpeg?url",
    alt: "Istana Gebang",
  },
  {
    title: "Emang Ada Museum di Jatim?",
    description: "Ada banyak pilihan museum yang bisa kalian kunjungi pas lagi berkunjung ke Jawa Timur, contohnya kayak Museum Seni SBY di Pacitan atau Museum Angkot di Batu. Museum Seni SBY pamerin hasil karya lukisan dari mantan presiden kita yang ke-6 lho, ternyata Pak SBY punya jiwa seniman juga.",
    img: "/museum-sby.jpg?url",
    alt: "Museum SBY",
  },
  {
    title: "Sejauh Ini, Ini yang Paling Jauh",
    description: "Di Kabupaten Sumenep, ada wilayahnya yang nyasarnya jauh banget bahkan letaknya sampe di utaranya pulau NTB. Kenalin, namanya Pulau Sakala yang jadi pulau paling timur dari Jawa Timur. Lihat aja gambar di samping, jauh kan? Karena letaknya yang jauh ini, beberapa pembangunan infrastruktur menjadi terhambat, salah satunya adalah internet.",
    img: "/pulau-sakala.jpg?url",
    alt: "Pulau Sakala",
  },
]);
</script>

<template>
  <span class="absolute left-0 top-[125rem] z-0 h-40 w-40" style="background-color: #be3475; filter: blur(8rem)"></span>
  <span class="absolute right-0 top-[160rem] z-0 h-40 w-40" style="background-color: #2c862c; filter: blur(8rem)"></span>
  <main class="z-20 mx-auto mb-20 mt-8 h-full w-4/5">
    <section
      v-for="(read, index) in Reading"
      :key="index"
      class="mt-20 flex h-fit w-full flex-col-reverse items-center justify-between xl:flex-row"
    >
      <div class="mt-8 flex h-fit w-full cursor-default flex-col xl:mt-0 xl:w-2/5">
        <h3 class="text-center text-4xl font-bold text-gray-50 xl:text-justify">
          {{ read.title }}
        </h3>
        <h5 class="mt-4 text-justify text-lg font-medium text-gray-50">
          {{ read.description }}
        </h5>
      </div>
      <img :src="read.img" :alt="read.alt" class="w-full font-bold text-gray-50 xl:w-[55%]" style="box-shadow: 0.5rem 0.5rem 0 #bcbcbc" />
    </section>
  </main>
</template>

<style scoped>
@media screen and (max-width: 3120px) {
  main section:nth-child(2) {
    flex-direction: row-reverse;
  }
}
@media screen and (max-width: 1279px) {
  main section:nth-child(2) {
    flex-direction: column-reverse;
  }
}
</style>