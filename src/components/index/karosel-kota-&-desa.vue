<script setup>
import { ref, onMounted } from "vue";
import Splide from "@splidejs/splide";
import Cities from "/src/data/cities.json";

const images = ref(Cities.cities);

onMounted(() => {
  new Splide("#splide", {
    autoplay: true,
    drag: "free",
    perPage: 2,
    snap: true,
    type: "loop",
    breakpoints: {
      1280: {
        perPage: 1,
      },
    },
  }).mount();
});
</script>

<template>
  <main class="z-10 -mt-48 grid h-fit w-full place-items-center">
    <section class="flex h-fit w-4/5 cursor-default flex-col items-center">
      <h3 class="mb-8 mt-52 text-center text-4xl font-bold text-gray-50 underline">
        Kenali Kota & Desa
      </h3>
      <section class="mb-4 grid h-[35rem] w-full place-items-center">
        <article class="splide h-full w-full overflow-hidden" id="splide">
          <div class="splide__track h-full w-full py-4">
            <ul class="splide__list">
              <li class="splide__slide flex h-full w-full" v-for="(image, index) in images" :key="index">
                <span
                  class="grid h-full place-items-center rounded-xl bg-cover bg-center bg-no-repeat"
                  :style="{ backgroundImage: 'url(' + image.image + ')' }"
                >
                  <h4 class="mx-auto flex h-4/5 w-4/5 items-end justify-center text-4xl font-bold text-gray-50">
                    {{ image.name }}
                  </h4>
                </span>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </section>
  </main>
</template>

<style scoped>
main {
  background-image: linear-gradient(to right, #0c0c1e, #141414);
  border-radius: 20% 20% 10% 10% / 10% 10% 0% 0%;
}
@media screen and (max-width: 3120px) {
  main section .splide__slide:nth-child(even) {
    justify-content: flex-end;
  }
  main section .splide__slide:nth-child(odd) {
    justify-content: flex-start;
  }
  main section .splide__slide span {
    width: 97.5%;
  }
}
@media screen and (max-width: 1280px) {
  main section .splide__slide span {
    width: 100%;
  }
}
</style>