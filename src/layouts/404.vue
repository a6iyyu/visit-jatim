<template>
  <div class="h-32 w-full"></div>
  <section class="not-found-page grid h-[40rem] w-full place-items-center">
    <div class="block h-full w-[90%] lg:flex">
      <div class="grid h-[45%] w-1/2 place-items-center lg:h-full">
        <img
          src="/public/404.png?url"
          alt="404: Not Found!"
          data-aos="fade-up"
        />
      </div>
      <div
        class="flex h-[55%] w-1/2 flex-col items-center justify-center lg:h-full"
      >
        <div class="flex h-1/4 w-full flex-col items-start justify-end">
          <p
            class="cursor-default text-5xl font-bold text-gray-950"
            data-aos="fade-up"
          >
            Oops!
          </p>
          <p
            class="cursor-default text-4xl font-medium text-gray-950"
            data-aos="fade-up"
          >
            Didn't find anything here.
          </p>
        </div>
        <div class="grid h-1/3 w-full place-items-center">
          <p
            class="cursor-default text-justify text-2xl font-normal text-gray-900"
            data-aos="fade-up"
          >
            Seems like this page took a brushstroke in the wrong direction.
            Let's navigate back to the main exhibit together.
          </p>
        </div>
        <div class="flex h-1/5 w-full items-center">
          <a
            href="/"
            class="back-to-home flex items-center justify-center rounded-full bg-gray-950 text-slate-50 transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
            data-aos="fade-up"
          >
            <div
              class="grid place-items-center rounded-full bg-slate-50 text-2xl text-gray-950 transition-all duration-300 ease-in-out hover:bg-slate-100 hover:text-gray-800"
              :style="{ transform: 'rotate(225deg)' }"
            >
              &#10132;
            </div>
            <div class="grid place-items-center">
              <p class="font-bold text-white">Drift Home</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>