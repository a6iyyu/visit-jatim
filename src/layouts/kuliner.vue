<script setup>
import CardCulinary from "../components/CardCulinary.vue";
import sotolamongan from "../../public/soto-lamongan.jpg";
</script>

<template>
  <section
    class="mx-auto h-[35rem] w-full bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${sotolamongan.src})` }"
  >
    <div class="absolute z-0 h-[35rem] w-full bg-gradient-to-t from-black opacity-60 md:bg-gradient-to-r"></div>
  </section>

  <!-- Opening section -->
  <section
    class="absolute top-[27rem] grid h-60 place-items-center rounded-xl bg-gradient-to-tr from-slate-300 to-slate-200"
    id="jangan-khawatir"
    :style="{ boxShadow: '0.75rem 0.75rem 0.75rem #48484850' }"
  >
    <div class="grid h-full w-[85%] place-items-center">
      <p class="cursor-default text-center text-3xl font-semibold text-gray-950">
        Laper?
        <br />
        Jangan Khawatir!
      </p>
    </div>
  </section>

  <!-- Nikmati Berbagai Macam Jens Kuliner -->
  <section class="mx-auto mt-52 flex h-fit w-[85%] flex-col items-center justify-center">
    <p
      class="cursor-default text-center text-3xl font-semibold text-gray-950"
      data-aos="fade-up"
    >
      Nikmati Berbagai Macam Jenis Kuliner di Jatim!
    </p>
    <hr class="h-0.5 w-full bg-gray-950" data-aos="fade-up" />
  </section>
  <section
    class="mt-4 grid h-[25rem] w-full place-items-center"
    data-aos="fade-up"
  >
    <div class="splide splide__1 h-full w-[85%] overflow-hidden">
      <div class="splide__track h-full w-full py-4">
        <ul class="splide__list">
          <CardCulinary />
        </ul>
      </div>
    </div>
  </section>
  <section
    class="mx-auto mb-14 mt-4 grid h-fit w-[85%] place-items-center"
    data-aos="fade-up"
  >
    <h4 class="text-1xl cursor-default font-semibold italic">
      Dan masih banyak lagi...~
    </h4>
  </section>

  <!-- FnB Terkenal -->
  <section class="mx-auto mt-8 flex h-fit w-[85%] flex-col items-center justify-center">
    <p
      class="cursor-default text-center text-3xl font-semibold text-gray-950"
      data-aos="fade-up"
    >
      Memperkenalkan FnB Terkenal Khas Jatim
    </p>
    <hr class="h-0.5 w-full bg-gray-950" data-aos="fade-up" />
  </section>
  <section
    class="mx-auto grid h-fit w-[85%] grid-cols-4 place-items-center"
    id="fnb-logos"
  >
    <img
      src="/public/img/pesen-kopi.jpg?url"
      alt="Pesen Kopi"
      class="cursor-default font-semibold mix-blend-multiply"
      width="150"
      data-aos="fade-right"
    />
    <img
      src="/public/img/gacoan.png?url"
      alt="Mie Gacoan"
      class="cursor-default font-semibold mix-blend-multiply"
      width="150"
      data-aos="fade-up"
    />
    <img
      src="/public/img/ayam-nelongso.jpg?url"
      alt="Ayam Nelongso"
      class="cursor-default font-semibold mix-blend-multiply"
      width="150"
      data-aos="fade-up"
    />
    <img
      src="/public/img/kopi-studio-24.png?url"
      alt="Kopi Studio 24"
      class="cursor-default font-semibold mix-blend-multiply"
      width="150"
      data-aos="fade-left"
    />
  </section>
  <section
    class="mx-auto mb-8 flex h-fit w-[85%] items-center"
    id="fnb-description"
  >
    <p
      class="text-1xl cursor-default text-justify font-medium tracking-wide text-gray-900"
      :style="{ lineHeight: '1.5' }"
      data-aos="fade-up"
    >
      Ke Jawa Timur belum afdol nih kalo kalian belum nyobain restorannya.
      Pernah dengar Mie Gacoan ga? Atau Kopi Studio 24 yang merupakan kafe
      terkenal dan sekarang punya banyak cabang? Tau ga sih, ternyata logo-logo
      di atas merupakan FnB terkenal yang awal pendiriannya di Jawa Timur lho,
      dari Pesen Kopi, Ayam Nelongso, Mie Gacoan, dan Kopi Studio 24. Harga
      makanan dan minumannya pun ramah di kantong, udah gitu rasanya pas di
      lidah, suasananya nyaman (apalagi kalian yang punya pacar bisalah diajak),
      dan cocok buat kalian yang pengen makan bareng keluarga. Selama kalian
      pergi liburan ke Jawa Timur, jangan khawatir jika perutmu udah karaoke-an
      karena banyak pilihan makanan dan restoran yang siap melayanimu!
    </p>
  </section>
</template>