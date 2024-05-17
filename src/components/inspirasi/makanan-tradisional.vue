<template>
  <span
    class="absolute z-0 h-40 w-40 opacity-50"
    style="background-color: #ff85ad; filter: blur(8rem)"
  >
  </span>
  <main
    class="z-10 mx-auto flex h-fit w-4/5 flex-col items-center text-gray-50"
    id="mengulik-pendidikan"
  >
    <section class="mb-8 grid grid-cols-1 place-items-center gap-x-10 xl:grid-cols-2">
      <img
        src="/makanan-tradisional.jpg?url"
        alt="Siswa Membaca Buku"
        class="mt-8 w-full rounded-xl font-semibold text-gray-50 xl:mt-0 xl:h-4/5"
        style="box-shadow: 0.3rem 0.3rem 0 #bcbcbc"
      />
      <h5 class="mt-8 cursor-default text-justify leading-relaxed xl:mt-0">
        Setiap daerah di Jawa Timur pasti punya makanan khas yang layak dicicipi
        para pencinta kuliner. Kekhasan masakan Jawa Timur identik dengan
        rempah-rempah, rasa pedas, gurih dan sedikit asin. Makanan khas Jawa
        Timur punya cita rasa yang cenderung gurih, asam, dan pedas karena
        biasanya ditambahkan terasi dan petis sebagai bumbunya. Tak hanya itu,
        makanan khas Jawa Timur juga umumnya dimasak dengan cara dikukus,
        dibakar, dipepes, dan digoreng. Proses memasaknya dilakukan hingga
        makanan matang dengan sempurna.
      </h5>
    </section>
  </main>
</template>

<style scoped>
main h5::first-letter {
  float: left;
  font-size: 6rem;
  font-weight: bold;
  line-height: 4rem;
}
</style>