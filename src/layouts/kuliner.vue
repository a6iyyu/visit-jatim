<script setup>
import CardCulinary from "../components/CardCulinary.vue";
import sotolamongan from "../static/img/soto-lamongan.jpg";
</script>

<template>
  <section class="h-[35rem] w-full mx-auto bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${sotolamongan.src})` }">
    <div class="h-[35rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-0 absolute"></div>
  </section>

  <!-- Opening section -->
  <section
    class="absolute h-60 grid place-items-center top-[27rem] rounded-xl bg-gradient-to-tr from-slate-300 to-slate-200"
    id="jangan-khawatir" :style="{ boxShadow: '0.75rem 0.75rem 0.75rem #48484850' }">
    <div class="h-full w-[85%] grid place-items-center">
      <p class="text-3xl text-gray-950 text-center cursor-default font-semibold">
        Laper? <br />
        Jangan Khawatir!
      </p>
    </div>
  </section>

  <!-- Nikmati Berbagai Macam Jens Kuliner -->
  <section class="h-fit w-[85%] flex flex-col items-center justify-center mt-52 mx-auto">
    <p class="text-3xl text-gray-950 text-center cursor-default font-semibold" data-aos="fade-up">
      Nikmati Berbagai Macam Jenis Kuliner di Jatim!
    </p>
    <hr class="h-0.5 w-full bg-gray-950" data-aos="fade-up" />
  </section>
  <section class="h-[25rem] w-full grid place-items-center mt-4" data-aos="fade-up">
    <div class="splide splide__1 h-full w-[85%] overflow-hidden">
      <div class="splide__track h-full w-full py-4">
        <ul class="splide__list">
          <CardCulinary />
        </ul>
      </div>
    </div>
  </section>
  <section class="h-fit w-[85%] grid place-items-center mx-auto mb-14 mt-4" data-aos="fade-up">
    <h4 class="text-1xl italic cursor-default font-semibold">
      Dan masih banyak lagi...~
    </h4>
  </section>

  <!-- FnB Terkenal -->
  <section class="h-fit w-[85%] flex flex-col items-center justify-center mt-8 mx-auto">
    <p class="text-3xl text-gray-950 text-center cursor-default font-semibold" data-aos="fade-up">
      Memperkenalkan FnB Terkenal Khas Jatim
    </p>
    <hr class="h-0.5 w-full bg-gray-950" data-aos="fade-up" />
  </section>
  <section class="h-fit w-[85%] grid place-items-center grid-cols-4 mx-auto" id="fnb-logos">
    <img src="../static/img/pesen-kopi.jpg?url" alt="Pesen Kopi" class="cursor-default font-semibold mix-blend-multiply"
      width="150" data-aos="fade-right" />
    <img src="../static/img/gacoan.png?url" alt="Mie Gacoan" class="cursor-default font-semibold mix-blend-multiply"
      width="150" data-aos="fade-up" />
    <img src="../static/img/ayam-nelongso.jpg?url" alt="Ayam Nelongso"
      class="cursor-default font-semibold mix-blend-multiply" width="150" data-aos="fade-up" />
    <img src="../static/img/kopi-studio-24.png?url" alt="Kopi Studio 24"
      class="cursor-default font-semibold mix-blend-multiply" width="150" data-aos="fade-left" />
  </section>
  <section class="h-fit w-[85%] flex items-center mb-8 mx-auto" id="fnb-description">
    <p class="text-gray-900 text-1xl cursor-default font-medium text-justify tracking-wide" :style="{ lineHeight: '1.5' }"
      data-aos="fade-up">
      Ke Jawa Timur belum afdol nih kalo kalian belum nyobain restorannya. Pernah dengar Mie Gacoan ga? Atau Kopi Studio
      24 yang merupakan kafe terkenal dan sekarang punya banyak cabang? Tau ga sih, ternyata logo-logo di atas merupakan
      FnB terkenal yang awal pendiriannya di Jawa Timur lho, dari Pesen Kopi, Ayam Nelongso, Mie Gacoan, dan Kopi Studio
      24. Harga makanan dan minumannya pun ramah di kantong, udah gitu rasanya pas di lidah, suasananya nyaman (apalagi
      kalian yang punya pacar bisalah diajak), dan cocok buat kalian yang pengen makan bareng keluarga. Selama kalian
      pergi liburan ke Jawa Timur, jangan khawatir jika perutmu udah karaoke-an karena banyak pilihan makanan dan restoran
      yang siap melayanimu!
    </p>
  </section>
</template>