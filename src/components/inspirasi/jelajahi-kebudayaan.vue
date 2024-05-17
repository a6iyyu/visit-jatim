<template>
  <span
    class="absolute right-0 z-0 h-40 w-40 opacity-50"
    style="background-color: #00d4ff; filter: blur(8rem)"
  >
  </span>
  <hr class="mx-auto mb-4 h-0.5 w-4/5 rounded-full bg-gray-50 opacity-70" />
  <main class="z-10 mx-auto flex h-fit w-4/5 flex-col items-center text-gray-50">
    <h3 class="mb-4 mt-6 cursor-default text-center text-4xl font-bold underline lg:text-5xl">
      Jelajahi Kebudayaan
    </h3>
    <section class="grid grid-cols-1 place-items-center gap-x-10 xl:grid-cols-2">
      <h5 class="mt-8 cursor-default text-justify leading-relaxed xl:mt-0">
        Kekayaan tradisi Jawa Timur memang luar biasa, bahkan sampai dikagumi
        dunia. Tradisi-tradisi ini tak hanya menjadi identitas masyarakat Jawa
        Timur, tetapi juga daya tarik wisata yang memikat pengunjung dari
        berbagai penjuru. Dari ritual adat penuh makna hingga perayaan yang
        meriah, tradisi Jawa Timur menawarkan pengalaman budaya yang unik.
        Keunikan dan keragaman tradisi ini mencerminkan kekayaan sejarah dan
        nilai-nilai luhur yang diwariskan turun-temurun.
      </h5>
      <img
        src="/jelajahi-kebudayaan.jpg?url"
        alt="Upacara Adat"
        class="-order-1 mt-6 w-full rounded-xl font-semibold text-gray-50 xl:order-1 xl:mt-0 xl:h-4/5 xl:w-4/5"
        style="box-shadow: 0.3rem 0.3rem 0 #bcbcbc"
      />
    </section>
  </main>
</template>

<style scoped>
main h5::first-letter {
  float: left;
  font-size: 6rem;
  font-weight: bold;
  line-height: 4.5rem;
}
</style>