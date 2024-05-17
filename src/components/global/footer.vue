<template>
  <footer class="mt-10 grid h-fit w-full place-items-center">
    <main class="flex h-full w-4/5 flex-col items-center text-gray-50">
      <h2 class="cursor-default text-4xl font-black tracking-widest">
        VISIT JATIM
      </h2>
      <h4
        class="mt-4 hidden cursor-default text-justify font-normal leading-relaxed tracking-wider lg:flex"
        style="text-align-last: center"
      >
        Visit Jatim is not just a regular online travel guide, but also features
        informative readings that explore various interesting aspects of East
        Java, from culture and history, to culinary and hidden tourist
        destinations. Let's go on an adventure together in East Java!
      </h4>
      <h4
        class="mt-4 flex cursor-default text-justify font-normal leading-relaxed tracking-wider lg:hidden"
        style="text-align-last: center"
      >
        Visit Jatim provides interesting information exploration of East Java's
        culture, history, culinary, and destinations.
      </h4>
      <section class="mt-4 flex">
        <a
          href="https://github.com/a6iyyu"
          target="_blank"
          class="underline transition-all duration-300 ease-in-out hover:font-bold hover:text-gray-300"
        >
          Rafi Abiyyu Airlangga
        </a>
        <p class="cursor-default">&nbsp;|&nbsp;</p>
        <a
          href="https://github.com/Afif-Ghifari"
          target="_blank"
          class="underline transition-all duration-300 ease-in-out hover:font-bold hover:text-gray-300"
        >
          Muhammad Afif Al Ghifari
        </a>
      </section>
      <h5 class="mb-8 mt-4 cursor-default text-gray-50">&copy; 2024</h5>
    </main>
  </footer>
</template>

<style scoped>
@media screen and (max-width: 480px) {
  main section {
    flex-direction: column-reverse;
    text-align: center;
  }
  p {
    display: none;
  }
}
</style>