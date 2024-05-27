<script setup>
import { ref, onMounted } from "vue";
import Splide from "@splidejs/splide";
import TraditionalCulinary from "/src/data/traditional-culinaries.json";

const images = ref(TraditionalCulinary.culinaries);

onMounted(() => {
  new Splide("#splide-1", {
    autoplay: true,
    drag: "free",
    snap: true,
    type: "loop",
    breakpoints: {
      3120: {
        perPage: 3,
      },
      1280: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    },
  }).mount();
});
</script>

<template>
  <main class="mx-auto mb-8 grid h-[35rem] w-4/5 place-items-center">
    <section class="splide h-full w-full overflow-hidden" id="splide-1">
      <article class="splide__track h-full w-full py-4">
        <ul class="splide__list">
          <li
            class="splide__slide flex h-full w-full"
            v-for="(image, index) in images"
            :key="index"
          >
            <span
              class="grid h-full place-items-center rounded-xl bg-cover bg-center bg-no-repeat"
              :style="{ backgroundImage: 'url(' + image.image + ')' }"
            >
              <h4 class="mx-auto flex h-4/5 w-4/5 items-end text-4xl font-bold text-gray-50">
                {{ image.name }}
              </h4>
            </span>
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>

<style scoped>
@media screen and (max-width: 3120px) {
  main .splide__slide:nth-child(3n + 1) {
    justify-content: flex-start;
  }
  main .splide__slide:nth-child(3n + 2) {
    justify-content: center;
  }
  main .splide__slide:nth-child(3n) {
    justify-content: flex-end;
  }
  main .splide__slide span {
    width: 97.5%;
  }
}
@media screen and (max-width: 1280px) {
  main .splide__slide:nth-child(even) {
    justify-content: flex-end;
  }
  main .splide__slide:nth-child(odd) {
    justify-content: flex-start;
  }
}
@media screen and (max-width: 768px) {
  main .splide__slide span {
    width: 100%;
  }
}
</style>