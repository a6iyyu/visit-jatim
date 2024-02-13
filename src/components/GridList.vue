<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps(["data", "selected"])
const array = ref([...props.data])
const selectedCity = ref(props.selected)

</script>

<template>
    nilai: {{ selectedCity }}
    <div class="w-full h-fit grid items-center sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
        <div v-for="content in array" :key="content" :style="{ 'background-image': 'url(' + content.img + ')' }"
            class="w-full h-64 mx-auto flex flex-col items-center justify-end object-cover object-center bg-cover">
            <div class="min-w-full min-h-full bg-gradient-to-t from-black opacity-30 z-10"></div>
            <div class="absolute max-w-72 flex flex-col items-center z-20 text-slate-100 font-semibold text-center">
                <h3 class="md:text-xl lg:text-2xl my-1 mx-7">{{ content.destination }}</h3>
                <h4 class="md:text-base lg:text-lg mb-6">{{ content.city }}</h4>
            </div>
        </div>
    </div>
</template>
