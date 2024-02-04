<template>
  <section class="mb-14" id="hero">
    <div class="absolute h-[35rem] w-full bg-gradient-to-t from-black"></div>
    <div class="h-[35rem] w-full z-30 px-28 grid place-items-center bg-center bg-cover bg-no-repeat"
      :style="{ backgroundImage: 'url(../../static/img/bromo.jpg)' }">
      <div class="h-full w-[90%] flex justify-start">
        <div class="absolute h-full w-1/2 flex flex-col items-start justify-center z-10">
          <p class="text-5xl text-slate-50 cursor-default font-black" data-aos="fade-up">
            JAWA TIMUR
          </p>
          <br />
          <p class="text-1xl max-w-[400px] text-slate-50 cursor-default font-medium text-justify" data-aos="fade-up">
            Sambut keindahan dan keragaman Jawa Timur, sebuah destinasi yang
            menakjubkan bagi pencinta petualangan dan kebudayaan.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="px-28" id="latest">
    <div class="h-full mb-14 flex flex-col justify-start">
      <p class="text-3xl text-gray-950 cursor-default font-semibold decoration-solid" data-aos="fade-up">
        Jelajahi Sekarang!
      </p>
      <hr class=" mt-8 w-72 border-2 border-black rounded-md">
    </div>
    <div class="h-fit w-full flex">

      <div class="h-full w-full flex">
        <a href="https://www.jawapos.com/wisata-kuliner/011771965/8-desa-wisata-terbaik-di-jawa-timur-yang-wajib-dikunjungi"
          class="h-full w-full block">
          <div class="h-80 w-full rounded-xl bg-bottom bg-cover bg-no-repeat" :style="{
            backgroundImage: 'url(../../static/img/sample-1.jpg)',
            boxShadow: '0.75rem 0.75rem 0.75rem #bebebe',
          }" data-aos="fade-up"></div>
          <br />
          <p class="text-2xl text-gray-950 font-semibold text-justify hover:text-gray-800 hover:underline"
            data-aos="fade-up">
            8 Desa Wisata Terbaik di Jawa Timur yang Wajib Dikunjungi
          </p>
          <br />
          <p class="text-1xl text-gray-950 font-medium text-justify hover:text-gray-800 hover:underline"
            data-aos="fade-up">
            Wisata alam yang disuguhkan yaitu Taman Edelweiss dan Menjemput
            Matahari Penanjakan Adventure. Selain itu, ada wisata budaya, seperti
            One Day ...
          </p>
          <br />
          <p class="text-1xl text-gray-950 font-semibold text-justify hover:text-gray-800 hover:underline">
            Baca Selengkapnya &#10132;
          </p>
        </a>
      </div>

      <div class="max-h-[510px] w-full flex flex-col overflow-y-auto">
        <div class="flex items-center px-5 py-2">
          <img src="../../static/img/sample-1.jpg" class="max-w-full object-cover object-center max-h-36 rounded-lg"
            alt="">
          <h2 class="text-slate-900 font-semibold mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            delectus? Perferendis, reiciendis.</h2>
        </div>

        <div class="flex items-center px-5 py-2">
          <img src="../../static/img/sample-1.jpg" class="max-w-full object-cover object-center max-h-36 rounded-lg"
            alt="">
          <h2 class="text-slate-900 font-semibold mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            delectus? Perferendis, reiciendis.</h2>
        </div>

        <div class="flex items-center px-5 py-2">
          <img src="../../static/img/sample-1.jpg" class="max-w-full object-cover object-center max-h-36 rounded-lg"
            alt="">
          <h2 class="text-slate-900 font-semibold mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            delectus? Perferendis, reiciendis.</h2>
        </div>

        <div class="flex items-center px-5 py-2">
          <img src="../../static/img/sample-1.jpg" class="max-w-full object-cover object-center max-h-36 rounded-lg"
            alt="">
          <h2 class="text-slate-900 font-semibold mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          delectus? Perferendis, reiciendis.</h2>
      </div>
    </div>
  </div>
</section></template>