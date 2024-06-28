<script setup>
import Bromo from "/public/bromo.jpg";
</script>

<template>
  <main class="z-20 flex h-[43rem] w-full flex-col bg-cover bg-center bg-no-repeat [letter-spacing:0.1rem]" :style="{ backgroundImage: `url(${Bromo.src})` }">
    <div class="absolute z-0 h-[43rem] w-full bg-gradient-to-t from-black opacity-60 md:bg-gradient-to-r"></div>
    <section class="z-10 mx-auto mb-32 mt-72 flex h-fit w-4/5">
      <div class="flex h-full flex-col">
        <h2 class="cursor-default text-center text-4xl font-black text-gray-50 md:text-left md:text-5xl">
          JAWA TIMUR
        </h2>
        <br />
        <h4 class="cursor-default text-justify text-gray-50">
          Sambut keindahan dan keragaman Jawa Timur, sebuah destinasi yang
          menakjubkan bagi pencinta petualangan dan kebudayaan.
        </h4>
        <br />
        <button id="mari-jelajahi" class="mt-2 h-fit w-fit cursor-pointer rounded-full bg-gray-200 px-10 py-5 text-lg font-black transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc] hover:bg-gray-300">
          Mari Jelajahi &#10132;
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
@media screen and (max-width: 3120px) {
  main > section > div:first-child {
    width: 30%;
  }
}
@media screen and (max-width: 1800px) {
  main > section > div:first-child {
    width: 50%;
  }
}
@media screen and (max-width: 1024px) {
  main > section > div:first-child {
    width: 100%;
    align-items: center;
  }
  main h4 {
    text-align-last: center;
  }
}
@media screen and (max-width: 360px) {
  main,
  main div {
    height: 47rem !important;
  }
  h2 {
    font-size: 2.5rem !important;
  }
  h4 {
    font-size: 1rem !important;
  }
}
</style>