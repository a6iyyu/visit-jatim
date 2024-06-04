<script setup>
import JumlahSekolah from "./jumlah-sekolah.vue";
</script>

<template>
  <span class="absolute z-0 h-40 w-40 opacity-50" style="background-color: #ff85ad; filter: blur(8rem)"></span>
  <main
    class="z-10 mx-auto flex h-fit w-4/5 flex-col items-center text-gray-50"
    id="mengulik-pendidikan"
  >
    <h3 class="mt-20 cursor-default text-center text-4xl font-bold underline lg:text-5xl">
      Mengulik Pendidikan
    </h3>
    <section class="mb-8 mt-4 grid grid-cols-1 place-items-center gap-x-10 xl:grid-cols-2">
      <h5 class="mt-8 cursor-default text-justify leading-relaxed xl:mt-0">
        Pendidikan memungkinkan orang untuk mencapai potensi penuh mereka
        sehingga mereka dapat menjalani kehidupan yang lebih baik. Individu yang
        terdidik lebih mampu membuat keputusan yang baik dan mendapat informasi
        tentang dunia di sekitar mereka. Ada begitu banyak pengaruh yang datang
        dari segala arah, dan pendidikan dapat membantu kita menguraikan apa
        yang harus kita anggap benar, dan apa yang harus kita ambil dengan
        sebutir garam. Pendidikan dapat membentuk orang menjadi anggota
        masyarakat yang fungsional dengan jenis nilai yang tepat.
      </h5>
      <img
        src="/pendidikan.jpg?url"
        alt="Pendidikan"
        class="-order-1 mt-6 w-full rounded-xl font-semibold text-gray-50 transition-all duration-300 ease-in-out xl:order-1 xl:mt-0 xl:h-4/5 xl:w-4/5"
        style="box-shadow: 0.3rem 0.3rem 0 #bcbcbc"
      />
    </section>
    <JumlahSekolah />
  </main>
</template>

<style scoped>
main h5::first-letter {
  float: left;
  font-size: 6rem;
  font-weight: bold;
  line-height: 4.5rem;
}
section > img:hover {
  transform: scale(1.05);
}
</style>