<script setup>
import PatternSquare from "/public/pattern-square.png";
</script>

<template>
  <main
    class="grid h-fit w-full place-items-center bg-cover bg-center bg-no-repeat"
    id="kata-kata-bijak"
    :style="{ backgroundImage: `url(${PatternSquare.src})` }"
  >
    <section class="mx-auto my-20 flex h-fit w-4/5 cursor-default flex-col text-4xl text-gray-50 lg:text-5xl">
      <b>
        Terkadang kamu tidak akan pernah menyadari nilai sebuah momen sampai itu
        menjadi kenangan.
      </b>
      <h3 class="my-5 text-center selection:bg-none">•</h3>
      <b class="text-right">
        Alam adalah kenikmatan dari kesederhanaan dan memberikan kita pikiran
        yang segar.
      </b>
    </section>
  </main>
</template>

<style scoped>
b {
  line-height: 1.375;
}
</style>