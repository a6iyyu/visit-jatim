<script setup>
import { ref, onMounted } from "vue";
import Splide from "@splidejs/splide";

const images = ref([
  {
    name: "Banyuwangi",
    image: "/banyuwangi.jpg?url",
  },
  {
    name: "Blitar",
    image: "/blitar.jpg?url",
  },
  {
    name: "Bojonegoro",
    image: "/bojonegoro.jpg?url",
  },
  {
    name: "Jember",
    image: "/jember.jpg?url",
  },
  {
    name: "Madiun",
    image: "/madiun.jpg?url",
  },
  {
    name: "Magetan",
    image: "/magetan.jpg?url",
  },
  {
    name: "Malang",
    image: "/malang.jpg?url",
  },
  {
    name: "Mojokerto",
    image: "/mojokerto.png?url",
  },
  {
    name: "Pamekasan",
    image: "/pamekasan.jpg?url",
  },
  {
    name: "Pasuruan",
    image: "/pasuruan.jpg?url",
  },
]);
const splide = ref(null);

onMounted(() => {
  new Splide(splide.value, {
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
  <main class="z-10 -mt-48 grid h-fit w-full place-items-center bg-gradient-to-r from-[#0c0c1e] to-[#141414] [border-radius:20%_20%_10%_10%_/_10%_10%_0%_0%]">
    <section class="flex h-fit w-4/5 cursor-default flex-col items-center">
      <h3 class="mb-8 mt-52 text-center text-4xl font-bold text-gray-50 underline">
        Kenali Kota & Desa
      </h3>
      <section class="mb-4 grid h-[35rem] w-full place-items-center">
        <article class="splide h-full w-full overflow-hidden" ref="splide">
          <div class="splide__track h-full w-full py-4">
            <ul class="splide__list">
              <li class="splide__slide flex h-full w-full" v-for="(image, index) in images" :key="index">
                <span class="grid h-full place-items-center rounded-xl bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out" :style="{ backgroundImage: 'url(' + image.image + ')' }">
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
  main section:hover .splide__slide a:not(:hover) {
    filter: blur(0.1rem);
    transform: scale(0.95);
  }
}
@media screen and (max-width: 1280px) {
  main {
    border-radius: 10% 10% 5% 5% / 5% 5% 0% 0%;
  }
  main section .splide__slide span {
    width: 100%;
  }
}
</style>