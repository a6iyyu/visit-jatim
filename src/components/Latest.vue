<script setup>
import { reactive, defineProps, ref, onMounted, watch, computed } from "vue";
const props = defineProps(["data"]);
const array = ref([...props.data]);
const randomIndex = Math.floor(Math.random() * array.value.length);

const frontNews = reactive({
  id: 0,
  link: "",
  img: "",
  title: "",
  content: "",
});

(frontNews.id = array.value[randomIndex].id),
  (frontNews.link = array.value[randomIndex].link),
  (frontNews.img = array.value[randomIndex].img),
  (frontNews.title = array.value[randomIndex].title),
  (frontNews.content = array.value[randomIndex].content);

onMounted(() => {
  console.log(frontNews);
});

watch(
  () => props.data,
  () => {
    array.value = [...props.data];
  },
);

const blogs = computed(() => {
  return array.value.filter((item) => item.id !== frontNews.id);
});
</script>

<template>
  <!-- Main -->
  <div class="flex h-full w-[85%] items-center justify-between">
    <div class="flex h-full w-1/2 flex-col">
      <a :href="frontNews.link" class="block h-full w-full" target="_blank">
        <img
          :src="frontNews.img"
          class="h-80 w-full rounded-md bg-cover bg-bottom bg-no-repeat shadow-md"
          alt=""
        />
        <br />
        <p
          class="h-fit w-full text-justify text-2xl font-semibold text-gray-950 hover:text-gray-800 hover:underline"
          :style="{ transition: 'all 0.3s ease-in-out' }"
        >
          {{ frontNews.title }}
        </p>
        <br />
        <p
          class="h-fit w-full text-justify text-xl font-medium text-gray-950 hover:text-gray-800 hover:underline"
          :style="{ transition: 'all 0.3s ease-in-out' }"
        >
          {{ frontNews.content }}
        </p>
        <br />
        <p
          class="text-1xl h-fit w-full text-justify font-semibold text-gray-950 hover:text-gray-800 hover:underline"
          :style="{ transition: 'all 0.3s ease-in-out' }"
        >
          Baca Selengkapnya &#10132;
        </p>
      </a>
    </div>

    <!-- Side -->
    <div class="blog-slider ml-8 flex flex-col overflow-y-auto">
      <a
        v-for="blog in blogs"
        :key="blog.id"
        :href="blog.link"
        class="flex h-full max-h-60 w-full justify-between py-2"
        target="_blank"
      >
        <img
          :src="blog.img"
          class="blogs h-32 max-h-32 w-2/5 rounded bg-cover bg-center bg-no-repeat"
          :style="{ boxShadow: '0.4rem 0.4rem 0.4rem #bebebe' }"
        />
        <div class="m-auto h-full w-[55%]">
          <p class="md:text-1xl mr-3 text-sm font-semibold text-gray-950 hover:text-gray-800 hover:underline">
            {{ blog.title }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>