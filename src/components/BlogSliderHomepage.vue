<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import blogData from '../data/blogs.json'

const blogs = ref(blogData.blogs);
</script>

<template>
  <a v-for="blog in blogs" :key="blog.id" :href="blog.link" class="max-h-60 h-full w-full flex justify-between py-2">
    <img :src="blog.img" class="max-h-32 h-32 w-2/5 rounded bg-center bg-cover bg-no-repeat" />
    <div class="h-full w-[55%] flex items-center justify-start">
      <p class="text-1xl text-gray-950 font-semibold hover:text-gray-800 hover:underline">
        {{ blog.title }}
      </p>
    </div>
  </a>
</template>

