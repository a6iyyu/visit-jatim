<script setup>
import PatternSquare from "/public/pattern-square.png";
</script>

<template>
  <main
    class="grid h-fit w-full place-items-center bg-cover bg-center bg-no-repeat"
    id="kata-kata-bijak"
    :style="{ backgroundImage: `url(${PatternSquare.src})` }"
  >
    <section class="mx-auto my-20 flex h-fit w-4/5 flex-col">
      <b class="cursor-default text-4xl leading-snug text-transparent lg:text-5xl">
        Terkadang kamu tidak akan pernah menyadari nilai sebuah momen sampai itu
        menjadi kenangan.
      </b>
      <h3 class="my-5 cursor-default text-center text-3xl text-gray-50">•</h3>
      <b class="cursor-default text-right text-4xl leading-snug text-transparent lg:text-5xl">
        Alam adalah kenikmatan dari kesederhanaan dan memberikan kita pikiran
        yang segar.
      </b>
    </section>
  </main>
</template>

<style scoped>
main b {
  animation: animation 10s cubic-bezier(0.3, 0.5, 0.7, 0.5) infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 120%;
}

main b:first-child {
  background-image: url(/summer-beach.jpg?url);
}

main b:last-child {
  background-image: url(/summer-trees.jpg?url);
}

@keyframes animation {
  0% {
    background-position: 60% 60%;
  }
  50% {
    background-position: 80% 80%;
  }
  100% {
    background-position: 60% 60%;
  }
}
</style>