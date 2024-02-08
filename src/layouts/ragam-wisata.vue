<template>
  <!-- Hero -->
  <div class="h-28 w-full"></div>
  <section
    class="hero h-[35rem] w-[87.5%] flex items-center justify-end mx-auto"
  >
    <div
      class="h-1/2 w-2/5 absolute grid place-items-center mr-[35rem] rounded-2xl bg-slate-400"
    >
      <div
        class="h-full w-3/4 flex flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <b class="text-3xl cursor-default">
          Jenis Wisata Unik dan Menarik di Jatim!
        </b>
        <br />
        <p
          class="text-1xl text-gray-950 cursor-default font-medium text-justify"
          :style="{ lineHeight: '1.5' }"
        >
          Banyak banget pilihan wisata yang bisa kalian kunjungi saat ke Jawa
          Timur, awas rawan dompet kosong!
        </p>
      </div>
    </div>
    <div
      class="h-full w-3/5 bg-center bg-cover bg-no-repeat"
      style="background-image: url(/static/img/hotel-majapahit.jpg?url)"
    ></div>
  </section>
</template>