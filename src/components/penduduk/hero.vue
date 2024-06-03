<script setup>
import Penduduk from "/public/penduduk.jpg";
</script>

<template>
  <main
    class="z-20 flex h-[41rem] w-full flex-col bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${Penduduk.src})`, letterSpacing: '0.1rem' }"
  >
    <div class="absolute z-0 h-[41rem] w-full bg-gradient-to-t from-black opacity-60 md:bg-gradient-to-r"></div>
    <section class="z-10 mx-auto mb-32 mt-72 flex h-fit w-4/5">
      <div class="flex h-full flex-col">
        <h2 class="cursor-default text-5xl font-black text-gray-50">
          Penduduk
        </h2>
        <br />
        <h4 class="cursor-default text-justify text-gray-50">
          Kenali lebih dekat ragam budaya dan kehidupan masyarakat di berbagai
          wilayah Jawa Timur.
        </h4>
        <br />
        <button
          class="mt-2 h-fit w-fit cursor-pointer rounded-full bg-gray-200 px-10 py-5 text-lg font-black transition-all duration-300 ease-in-out hover:bg-gray-300"
          style="box-shadow: 0.3rem 0.3rem 0 #bcbcbc"
          id="mari-jelajahi"
        >
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
</style>