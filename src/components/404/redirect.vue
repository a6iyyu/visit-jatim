<template>
  <main class="mx-auto mb-28 mt-60 flex w-4/5 flex-col items-center justify-between lg:flex-row">
    <img src="/404.png?url" alt="404: Not Found!" class="font-semibold text-gray-50" />
    <section class="mt-8 flex h-full w-full cursor-default flex-col items-center justify-center text-gray-50 lg:mt-0 lg:w-1/2 lg:items-start">
      <p class="h-fit w-fit text-4xl font-bold lg:text-5xl">Oops!</p>
      <p class="mt-2 h-fit w-fit text-3xl font-medium lg:text-4xl">
        Didn't find anything here.
      </p>
      <br />
      <p class="text-justify text-lg font-normal lg:text-2xl">
        Seems like this page took a brushstroke in the wrong direction. Let's
        navigate back to the main exhibit together.
      </p>
      <br />
      <br />
      <a href="/" class="flex h-20 w-60 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300">
        <div class="grid h-14 w-14 place-items-center rounded-full bg-gray-950 text-xl text-gray-50 transition-all duration-300 ease-in-out [transform:rotate(225deg)] hover:bg-gray-800 hover:text-gray-200">
          &#10132;
        </div>
        <h5 class="ml-4 text-lg font-bold text-gray-950">Drift Home</h5>
      </a>
    </section>
  </main>
</template>

<style scoped>
@media screen and (max-width: 3120px) {
  main {
    height: 45rem;
  }
  img {
    width: 30%;
  }
}
@media screen and (max-width: 1800px) {
  main {
    height: 40rem;
  }
  img {
    width: fit-content;
  }
}
@media screen and (max-width: 960px) {
  main {
    height: fit-content;
    text-align-last: center;
  }
}
</style>