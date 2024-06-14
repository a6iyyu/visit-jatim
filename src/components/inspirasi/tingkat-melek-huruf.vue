<script setup>
import JumlahMelekHuruf from "./jumlah-melek-huruf.vue";
</script>

<template>
  <main class="z-10 mx-auto flex h-fit w-4/5 flex-col items-center text-gray-50">
    <section class="mb-8 mt-4 grid grid-cols-1 place-items-center gap-x-10 xl:grid-cols-2">
      <img
        src="/siswa-membaca-buku.jpg?url"
        alt="Siswa Membaca Buku"
        class="mt-8 w-full rounded-xl font-semibold text-gray-50 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc] xl:mt-0 xl:h-4/5"
      />
      <h5 class="mt-8 cursor-default text-justify leading-relaxed xl:mt-0">
        Buku adalah jendela dunia. Selain menambah ilmu pengetahuan, kegiatan
        membaca buku juga bisa menstimulasi otak sehingga tidak mudah pikun.
        Namun kenyataannya sangat disayangkan karena minat membaca di negara
        Indonesia cukuplah rendah. Berdasarkan survei yang dilakukan Program for
        International Student Assessment (PISA), yang menunjukkan bahwa tingkat
        literasi Indonesia berada pada urutan ke 62 dari 70 negara. Namun, untuk
        tingkat melek huruf di Jawa Timur, persentasenya sangat tinggi
        berdasarkan data dari Badan Pusat Statistik.
      </h5>
    </section>
    <JumlahMelekHuruf />
  </main>
</template>

<style scoped>
main h5::first-letter {
  float: left;
  font-size: 6rem;
  font-weight: bold;
  line-height: 4rem;
}
section > img:hover {
  transform: scale(1.05);
}
</style>