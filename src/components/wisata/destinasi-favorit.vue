<script setup>
import { ref, onMounted } from "vue";
import Splide from "@splidejs/splide";
import FavouriteDestination from "/src/data/favourite-destination.json";

const destinations = ref(FavouriteDestination.list);
</script>

<template></template>