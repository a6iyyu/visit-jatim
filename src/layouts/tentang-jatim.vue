<script lang="ts" setup>
import CardPopulationVue from "../components/CardPopulation.vue";
import kehidupan1 from "../../public/kehidupan-1.jpg";
import seruni from "../../public/seruni-point.jpg";
</script>

<template>
  <!-- Hero section -->
  <section
    class="hero grid h-[40rem] w-full place-items-center bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${kehidupan1.src})` }"
  >
    <div class="absolute z-0 h-[40rem] w-full bg-gradient-to-t from-black opacity-60"></div>
    <div class="z-10 flex h-3/5 w-[85%] items-end justify-center">
      <h1
        class="cursor-default text-center text-4xl font-semibold text-slate-50 lg:text-5xl"
        data-aos="fade-up"
      >
        MARI BERKENALAN
        <br />
        DENGAN JAWA TIMUR
      </h1>
    </div>
  </section>

  <!-- Selamat Datang -->
  <section class="mx-auto mt-24 flex h-fit w-[85%] flex-col" data-aos="fade-up">
    <h2 class="cursor-default text-start text-3xl font-semibold text-gray-950">
      SELAMAT DATANG DI JAWA TIMUR
    </h2>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
    <div
      class="mx-auto mt-6 grid h-fit w-full place-items-center"
      data-aos="fade-up"
    >
      <p
        class="text-1xl cursor-default text-justify font-medium text-gray-950"
        :style="{ lineHeight: '1.5' }"
      >
        Selamat datang di Jawa Timur, tempat di mana kita akan menggali kekayaan
        budaya, pesona alam, dan sejarah yang memukau dari Jawa Timur. Mari
        jelajahi keindahannya bersama, memahami warisan budaya yang istimewa,
        dan menghidupkan keajaiban alam, tradisi, dan kehidupan masyarakatnya.
      </p>
    </div>
  </section>

  <!-- Kedatangan di Jawa Timur -->
  <section class="mx-auto mt-14 flex h-fit w-[85%] flex-col" data-aos="fade-up">
    <h2 class="cursor-default text-start text-3xl font-semibold text-gray-950">
      KEDATANGAN DI JAWA TIMUR
    </h2>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
    <section
      class="mx-auto mt-6 grid h-fit w-full place-items-center"
      data-aos="fade-up"
    >
      <p
        class="text-1xl cursor-default text-justify font-medium text-gray-950"
        :style="{ lineHeight: '1.5', textAlignLast: 'start' }"
      >
        Jawa Timur memberikan pengalaman yang menakjubkan dengan berbagai
        pilihan transportasi yang memudahkan perjalanan. Provinsi ini dapat
        diakses melalui udara, darat, maupun laut, dengan bandara utama seperti
        Bandara Internasional Juanda di Surabaya. Jadi, Anda tak perlu takut
        atau bingung bagaimana caranya untuk pergi ke Jawa Timur!
      </p>
    </section>
  </section>

  <!-- Ibukota -->
  <section class="mx-auto mt-14 grid h-fit w-[85%] place-items-center">
    <iframe
      class="h-[30rem] max-h-[30rem] w-full max-w-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253423.48794765712!2d110.54089582314452!3d-7.039577975160281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1707562703539!5m2!1sid!2sid"
      allowFullScreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      :style="{ border: '0' }"
      data-aos="fade-up"
    ></iframe>
  </section>

  <section class="mx-auto mt-14 flex h-fit w-[85%] flex-col" data-aos="fade-up">
    <h2 class="cursor-default text-start text-3xl font-semibold text-gray-950">
      IBUKOTA
    </h2>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
    <section
      class="mx-auto mt-6 grid h-fit w-full place-items-center"
      data-aos="fade-up"
    >
      <p
        class="text-1xl cursor-default text-justify font-medium text-gray-950"
        :style="{ lineHeight: '1.5', textAlignLast: 'start' }"
      >
        Surabaya! Pernah kesana apa belum teman-teman? Surabaya menjadi pusatnya
        Jawa Timur yang tak pernah berhenti berdetak. Kota ini menyuguhkan
        energi yang luar biasa, dari kulinernya yang legendaris hingga kehidupan
        sehari-hari yang selalu menggema. Sebuah kota dimana sejarah dan
        modernitas bersatu, mengundang kalian untuk hadir merasakan kehidupan
        yang berbeda nan luar biasa. Banyak wisatawan lokal maupun turis yang
        berkunjung ke ibukota ini karena memiliki tempat wisata yang banyak
        seperti Surabaya Zoo serta memiliki sejarah panjang seperti Peristiwa 10
        November di Hotel Yamato.
      </p>
    </section>
  </section>

  <section
    class="mx-auto mt-14 grid h-[25rem] w-[85%] place-items-center"
    data-aos="fade-up"
  >
    <div class="splide splide__1 h-full w-full overflow-hidden">
      <div class="splide__track h-full w-full py-4">
        <ul class="splide__list">
          <CardPopulationVue />
        </ul>
      </div>
    </div>
  </section>

  <!-- Populasi -->
  <section class="mx-auto mt-14 flex h-fit w-[85%] flex-col" data-aos="fade-up">
    <h2 class="cursor-default text-start text-3xl font-semibold text-gray-950">
      POPULASI
    </h2>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
    <div
      class="mx-auto mt-6 grid h-fit w-full place-items-center"
      data-aos="fade-up"
    >
      <p
        class="text-1xl cursor-default text-justify font-medium text-gray-950"
        :style="{ lineHeight: '1.5' }"
      >
        Tau gak sih kalo provinsi ini jadi provinsi dengan jumlah penduduk
        terbanyak di Indonesia? Berdasarkan data yang dikutip dari
        <a
          href="https://kedirikota.bps.go.id/indicator/12/358/1/jumlah-penduduk-provinsi-jawa-timur.html"
          class="text-blue-500 underline transition-all duration-300 ease-in-out hover:text-blue-400"
          target="_blank"
        >
          BPS Kota Kediri
        </a>
        dan
        <a
          href="https://www.inilah.com/10-provinsi-dengan-jumlah-penduduk-terbanyak-di-indonesia-tahun-2023"
          class="text-blue-500 underline transition-all duration-300 ease-in-out hover:text-blue-400"
          target="_blank"
        >
          inilah.com </a
        >, Provinsi Jawa Timur menempati posisi urutan kedua setelah Provinsi
        Jawa Barat dengan total jumlah penduduk sebanyak 41.416.407 jiwa.
        <b>Kota dengan penduduk terbanyak pada tahun 2023</b> ditempati oleh
        <b>Kota Surabaya</b> dengan jumlah penduduknya mencapai
        <b>2.893.698 jiwa</b>, diikuti oleh Kota Malang dengan jumlah
        penduduknya mencapai <b>2.703.175 jiwa.</b> Hal ini tak dapat dipungkiri
        karena pada dasarnya kedua kota tersebut sering dikunjungi oleh para
        wisatawan maupun para perantau yang ingin mengadu nasib. Sedangkan untuk
        <b>kota dengan penduduk paling sedikit di tahun 2023</b> ditempati oleh
        <b>Kota Mojokerto</b> dengan jumlah penduduknya mencapai
        <b>135.414 jiwa</b>, diikuti oleh <b>Kota Blitar</b> dengan jumlah
        penduduknya mencapai <b>153.541 jiwa.</b>
      </p>
    </div>
  </section>

  <!-- Puncak Tertinggi -->
  <img
    :src="`${seruni.src}`"
    class="mx-auto mt-14 h-[30rem] w-[85%] rounded-xl object-cover"
    data-aos="fade-up"
  />

  <section class="mx-auto mt-14 flex h-fit w-[85%] flex-col" data-aos="fade-up">
    <h2 class="cursor-default text-start text-3xl font-semibold text-gray-950">
      PUNCAK TERTINGGI
    </h2>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
    <section class="mx-auto mt-6 flex h-fit w-full" data-aos="fade-up">
      <p
        class="text-1xl cursor-default text-justify font-medium text-gray-950"
        :style="{ lineHeight: '1.5', textAlignLast: 'start' }"
      >
        Siapa disini yang pernah ke Gunung Semeru? Tau gak sih kalo Gunung
        Semeru itu jadi puncak tertinggi di Jawa Timur? Berdasarkan data yang
        dimuat dari artikel
        <a
          href="https://www.detik.com/jatim/wisata/d-6008094/6-gunung-tertinggi-di-jawa-timur-simak-detailnya"
          class="text-blue-500 underline transition-all duration-300 ease-in-out hover:text-blue-400"
          target="_blank"
        >
          Detik.com </a
        >, ketinggian dari Gunung Semeru sendiri yakni sekitar 3.676 mdpl,
        tinggi banget kan!
      </p>
    </section>
  </section>

  <!-- SDA -->
  <section class="mx-auto mt-14 flex h-fit w-[85%] flex-col" data-aos="fade-up">
    <p class="cursor-default text-start text-3xl font-semibold text-gray-950">
      SUMBER DAYA ALAM
    </p>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
    <section
      class="mx-auto mb-8 mt-6 grid h-fit w-full place-items-center"
      data-aos="fade-up"
    >
      <h2
        class="text-1xl cursor-default text-justify font-medium text-gray-950"
        :style="{ lineHeight: '1.5', textAlignLast: 'start' }"
      >
        Pernah minum es tebu dari penjual keliling belum? Rasanya manis dan
        seger di tenggorokan, bukan? Tebu yang kalian teguk di siang hari bisa
        jadi itu berasal dari Jawa Timur lho, karena seperti yang dikutip di
        halaman
        <a
          href="https://primagama.co.id/blog/berbagai-jenis-sumber-daya-alam-yang-ada-di-pulau-jawa/#:~:text=Provinsi%20Jawa%20Timur&text=Potensi%20sumber%20daya%20alam%20di%20Jawa%20Timur%20dalam%20sektor%20perkebunan,bahan%20pangan%20yang%20banyak%20dibutuhkan."
          class="text-blue-500 underline transition-all duration-300 ease-in-out hover:text-blue-400"
          target="_blank"
        >
          Primagama.com </a
        >, komoditas perkebunan terbesar Jawa Timur adalah tebu dan ini
        dibuktikan dengan adanya 31 unit pabrik gula. Wow, banyak banget!
      </h2>
    </section>
  </section>

  <!-- Website Terkait -->
  <section class="mx-auto mt-14 flex h-fit w-[85%] flex-col" data-aos="fade-up">
    <h2 class="cursor-default text-start text-3xl font-semibold text-gray-950">
      WEBSITE TERKAIT
    </h2>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
    <div class="mt-6 h-fit w-full pl-16" data-aos="fade-up">
      <ul
        class="text-1xl cursor-default list-disc space-y-3 text-justify font-medium text-gray-950"
        :style="{ lineHeight: '1.5' }"
      >
        <li>
          <a
            class="font-bold hover:underline"
            href="https://www.bmkg.go.id/cuaca/prakiraan-cuaca-indonesia.bmkg?Prov=12&NamaProv=Jawa%20Timur"
          >
            Kondisi Cuaca
          </a>
        </li>
        <li>
          <a
            class="font-bold hover:underline"
            href="https://www.posindonesia.co.id/en"
          >
            Kantor Pos
          </a>
        </li>
      </ul>
    </div>
  </section>

  <!-- Nomor darurat -->
  <section class="mx-auto my-14 flex h-fit w-[85%] flex-col" data-aos="fade-up">
    <h2 class="cursor-default text-start text-3xl font-semibold text-gray-950">
      NOMOR DARURAT
    </h2>
    <hr class="h-0.5 w-full rounded-md bg-gray-950" />
    <div class="mt-6 h-fit w-full pl-16" data-aos="fade-up">
      <ul
        class="text-1xl cursor-default list-disc space-y-3 text-justify font-medium text-gray-950"
        :style="{ lineHeight: '1.5' }"
      >
        <li>Polisi: 110</li>
        <li>Ambulans: 119</li>
        <li>Pemadam Kebakaran: 113</li>
      </ul>
    </div>
  </section>
</template>