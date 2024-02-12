<template>
  <section class="h-[35rem] w-full mx-auto bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(/static/img/taman-nasional-baluran.jpg?url)' }">
    <div class="h-[35rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-0 absolute"></div>
  </section>

  <!-- Opening section -->
  <section class="absolute h-60 w-2/5 grid place-items-center top-[27rem] right-[30%] rounded-xl bg-slate-400">
    <div class="h-full w-[85%] grid place-items-center">
      <p class="text-3xl text-gray-950 text-center cursor-default font-semibold" data-aos="fade-up">
        Menyatu dengan Alam di <br />
        Taman Nasional
      </p>
    </div>
  </section>

  <section class="h-fit w-[85%] flex flex-col items-center justify-center mt-52 mx-auto">
    <p class="text-3xl text-gray-950 cursor-default font-semibold" data-aos="fade-up">
      MENJELAJAH DI ALAM LIAR
    </p>
    <hr class="h-0.5 w-full bg-gray-950" data-aos="fade-up" />
  </section>

  <section class="h-fit w-[85%] grid place-items-center mt-6 mx-auto" data-aos="fade-up">
    <p class="text-1xl text-gray-950 cursor-default font-medium text-justify"
      :style="{ lineHeight: '1.5', textAlignLast: 'start' }">
      Kalo udah mentok gatau pengen liburan kemana, enaknya ngapain lagi ya? Di Jawa Timur, ada wisata alternatif lainnya
      lho, misalnya aja ke taman nasional. Ada beberapa taman nasional yang bisa kalian kunjungi selama liburanmu di Jawa
      Timur, Mari kita berkelana di alam liar Jawa Timur untuk mengungkap keajaiban alam, flora, dan fauna yang memukau!
    </p>
  </section>
</template>