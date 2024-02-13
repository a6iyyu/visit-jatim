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

frontNews.id = array.value[randomIndex].id,
frontNews.link = array.value[randomIndex].link,
frontNews.img = array.value[randomIndex].img,
frontNews.title = array.value[randomIndex].title,
frontNews.content = array.value[randomIndex].content;

// const putFrontNews = () => {
//     const temp = getRandomBlog(array.blogs);

//     if (temp) {
//         frontNews.id = temp.id;
//         frontNews.link = temp.link;
//         frontNews.img = temp.img;
//         frontNews.title = temp.title;
//         frontNews.content = temp.content;
//     }
// }

onMounted(() => {
  //putFrontNews();
  console.log(frontNews);
});

watch(
  () => props.data,
  () => {
    array.value = [...props.data];
    // putFrontNews();
  }
);

const blogs = computed(() => {
  return array.value.filter((item) => item.id !== frontNews.id);
});
</script>


<template>
  <!-- Main -->
  <div class="h-full w-[85%] flex items-center justify-between">
    <div class="h-full w-1/2 flex flex-col">
      <a :href="frontNews.link" class="h-full w-full block">
        <img :src="frontNews.img" class="h-80 w-full rounded-md bg-bottom bg-cover bg-no-repeat shadow-md" alt="" />
        <br />
        <p class="h-fit w-full text-2xl text-gray-950 font-semibold text-justify hover:text-gray-800 hover:underline"
          :style="{ transition: 'all 0.3s ease-in-out' }">
          {{ frontNews.title }}
        </p>
        <br />
        <p class="h-fit w-full text-xl text-gray-950 font-medium text-justify hover:text-gray-800 hover:underline"
          :style="{ transition: 'all 0.3s ease-in-out' }">
          {{ frontNews.content }}
        </p>
        <br />
        <p class="h-fit w-full text-1xl text-gray-950 font-semibold text-justify hover:text-gray-800 hover:underline"
          :style="{ transition: 'all 0.3s ease-in-out' }">
          Baca Selengkapnya &#10132;
        </p>
      </a>
    </div>

    <!-- Side -->
    <div class="blog-slider flex flex-col overflow-y-auto ml-8">
      <a v-for="blog in blogs" :key="blog.id" :href="blog.link" class="max-h-60 h-full w-full flex justify-between py-2">
        <img :src="blog.img" class="blogs max-h-32 h-32 w-2/5 rounded bg-center bg-cover bg-no-repeat"
          :style="{ boxShadow: '0.4rem 0.4rem 0.4rem #bebebe' }" />
        <div class="h-full w-[55%] m-auto">
          <p class="text-1xl text-gray-950 font-semibold mr-3 hover:text-gray-800 hover:underline">
            {{ blog.title }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>