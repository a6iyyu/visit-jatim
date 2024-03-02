/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_BEAXyP6o.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import { _ as _export_sfc, $ as $$MainLayout } from './404_P5xe3fk-.mjs';
import { useSSRContext, defineComponent, ref } from 'vue';
import { ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { L as Latest } from './budaya_B9gbKm6x.mjs';

const cities = [
	{
		city: "SURABAYA",
		epithet: "KOTA PAHLAWAN",
		img: "/static/img/surabaya.jpg",
		link: "https://maps.app.goo.gl/tvhMS5eWbugWAij17"
	},
	{
		city: "BANYUWANGI",
		epithet: "THE SUNRISE OF JAVA",
		img: "/static/img/banyuwangi.jpg",
		link: "https://maps.app.goo.gl/CwQM3WDVWaSCAtAe6"
	},
	{
		city: "BLITAR",
		epithet: "KOTA PROKLAMATOR",
		img: "/static/img/blitar.jpg",
		link: "https://maps.app.goo.gl/6WPTLzYASDvdMb3d6"
	},
	{
		city: "BOJONEGORO",
		epithet: "KOTA LEDRE",
		img: "/static/img/bojonegoro.jpg",
		link: "https://maps.app.goo.gl/7yELszm4SZadfcJX9"
	},
	{
		city: "JEMBER",
		epithet: "KOTA TEMBAKAU",
		img: "/static/img/jember.jpg",
		link: "https://maps.app.goo.gl/mBwKLjoad9T1YMxRA"
	},
	{
		city: "KEDIRI",
		epithet: "KOTA TAHU",
		img: "/static/img/kediri.jpeg",
		link: "https://maps.app.goo.gl/iuf3gzgPMthoqU5m9"
	},
	{
		city: "MADIUN",
		epithet: "KOTA SEPUR",
		img: "/static/img/madiun.jpg",
		link: "https://maps.app.goo.gl/D1thT7EA5HQBJbVK6"
	},
	{
		city: "MALANG",
		epithet: "KOTA PENDIDIKAN",
		img: "/static/img/malang.jpg",
		link: "https://maps.app.goo.gl/RXHFViDvLoCUFaJD8"
	},
	{
		city: "MAGETAN",
		epithet: "THE SUNSET OF JAVA",
		img: "/static/img/magetan.jpg",
		link: "https://maps.app.goo.gl/rdBN2RkkFKRonSDz8"
	},
	{
		city: "MOJOKERTO",
		epithet: "KOTA ONDE-ONDE",
		img: "/static/img/mojokerto.png",
		link: "https://maps.app.goo.gl/EWKqbLhTQLiqBKBB9"
	},
	{
		city: "PASURUAN",
		epithet: "KOTA SANTRI",
		img: "/static/img/pasuruan.jpg",
		link: "https://maps.app.goo.gl/QuCF1PRmF6mc28gy7"
	},
	{
		city: "SIDOARJO",
		epithet: "KOTA UDANG",
		img: "/static/img/sidoarjo.jpg",
		link: "https://maps.app.goo.gl/Mx2hj4LKj94VKUmC9"
	}
];
const cityData = {
	cities: cities
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardCity",
  setup(__props, { expose: __expose }) {
    __expose();
    const cities = ref(cityData.cities);
    const __returned__ = { cities };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($setup.cities, (city, index) => {
    _push(`<a${ssrRenderAttr("href", city.link)} class="splide__slide h-full w-full flex flex-col justify-end rounded-3xl bg-center bg-cover bg-no-repeat" style="${ssrRenderStyle({ backgroundImage: "url(" + city.img + ")" })}" target="_blank"><div class="h-2/5 w-full flex flex-col items-center justify-center z-40"><h3 class="text-4xl font-black transition-all duration-300 ease-in-out text-white hover:text-slate-300">${ssrInterpolate(city.city)}</h3><h5 class="text-1xl font-medium transition-all duration-300 ease-in-out text-white hover:text-slate-300">${ssrInterpolate(city.epithet)}</h5></div></a>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CardCity.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardCityVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const blogs = [
	{
		id: 1,
		link: "https://jatim.viva.co.id/gaya-hidup/9107-10-wisata-kuliner-khas-jawa-timur-yang-wajib-dikunjungi-murah-dan-maknyus",
		img: "/static/img/pecel.jpg?url",
		title: "10 Wisata Kuliner Khas Jawa Timur yang Wajib Dikunjungi, Murah dan Maknyus",
		content: "Kuliner khas Jawa Timur memang beragam dan berbeda-beda di setiap daerahnya. Masakan khas orang Jawa Timur umumnya memiliki cita rasa..."
	},
	{
		id: 2,
		link: "https://www.kompas.com/tren/read/2023/08/14/124500165/daftar-10-perguruan-tinggi-negeri-terbaik-di-jawa-timur",
		img: "/static/img/ub.jpeg?url",
		title: "Daftar 10 Perguruan Tinggi Negeri Terbaik di Jawa Timur",
		content: "Perguruan Tinggi merupakan instansi yang menyelenggarakan pendidikan akademik dan vokasi dalam berbagai macam bidang ilmu pengetahuan..."
	},
	{
		id: 3,
		link: "https://www.detik.com/jatim/budaya/d-7000628/6-budaya-dan-tradisi-jawa-timur-yang-dikagumi-dunia",
		img: "/static/img/reog-2.jpeg?url",
		title: "6 Budaya dan Tradisi Jawa Timur yang Dikagumi Dunia",
		content: "Jawa Timur memiliki berbagai kearifan lokal. Sebanyak 6 kearifan lokal di Jawa Timur yang dikagumi dunia..."
	},
	{
		id: 4,
		link: "https://www.tripadvisor.co.id/Attractions-g2301797-Activities-c47-t17-East_Java_Java.html",
		img: "/static/img/candi-jawi.jpg?url",
		title: "Tempat Bersejarah di Jawa Timur",
		content: "Tempat Terkenal di Jawa Timur · 1. Gunung Bromo · 2. Jembatan Suramadu · 3. Mesjid Al-Akbar · 4. Monumen Kapal Selam (Monkasel) · 5. Tugu Pahlawan · 6. Patung Sura ..."
	},
	{
		id: 5,
		link: "https://www.jawapos.com/wisata-kuliner/011771965/8-desa-wisata-terbaik-di-jawa-timur-yang-wajib-dikunjungi",
		img: "/static/img/pujon-kidul.jpg?url",
		title: "8 Desa Wisata Terbaik di Jawa Timur yang Wajib Dikunjungi",
		content: "Wisata alam yang disuguhkan yaitu Taman Edelweiss dan Menjemput Matahari Penanjakan Adventure. Selain itu, ada wisata budaya, seperti One Day..."
	}
];
const blogData = {
	blogs: blogs
};

const _imports_0 = "/_astro/istana-gebang.M6v2YKJp.jpeg";

const _imports_1 = "/_astro/museum-sby.9Xt0Dtz8.jpg";

const _imports_2 = "/_astro/pulau-sakala.DvAMxZe_.jpg";

const _sfc_main = {
  __name: 'homepage',
  setup(__props, { expose: __expose }) {
  __expose();

const blogs = ref(blogData.blogs);

const __returned__ = { blogs, ref, CardCityVue, Latest, get blogData() { return blogData } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><section class="hero h-[40rem] w-full grid place-items-center bg-center bg-cover bg-no-repeat" style="${ssrRenderStyle({ backgroundImage: 'url(/static/img/bromo.jpg?url)' })}"><div class="h-[40rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-0 absolute"></div><div class="h-full w-[85%] flex flex-col items-start justify-center z-30"><div class="h-full w-1/2 flex flex-col items-start justify-center"><h1 class="text-4xl sm:text-5xl text-slate-50 cursor-default font-black text-start" data-aos="fade-up"> JAWA TIMUR </h1><br><p class="text-lg md:text-1xl text-slate-50 cursor-default font-medium text-start" data-aos="fade-up"> Sambut keindahan dan keragaman Jawa Timur, sebuah destinasi yang menakjubkan bagi pencinta petualangan dan kebudayaan. </p></div></div></section><section class="h-fit w-[85%] block mt-16 mx-auto" id="explore" data-aos="fade-up"><p class="text-3xl text-gray-950 cursor-default font-semibold"> Terbaru di Jatim </p><hr class="h-1 w-60 bg-gray-950 rounded-md"></section><section class="h-fit w-full grid place-items-center my-4" id="terbaru-di-jatim" data-aos="fade-up">`);
  _push(ssrRenderComponent($setup["Latest"], { data: $setup.blogs }, null, _parent));
  _push(`</section><section class="h-fit w-full grid place-items-center mt-20" id="jelajahi-jatim" data-aos="fade-up"><div class="h-full w-[85%] grid place-items-center"><p class="text-gray-950 text-3xl cursor-default font-semibold"> Jelajahi Jawa Timur </p><hr class="h-1 w-60 rounded-md bg-gray-950"><div class="h-4 w-full"></div><p class="text-gray-950 text-2xl cursor-default font-medium text-center"> Hal-Hal Unik dan Indah Menunggu Anda di Jawa Timur! </p><div class="h-8 w-full"></div></div></section><section class="h-[35rem] w-full grid place-items-center" data-aos="fade-up"><div class="splide splide__1 h-full w-[90%] overflow-hidden"><div class="splide__track h-full w-full"><ul class="splide__list">`);
  _push(ssrRenderComponent($setup["CardCityVue"], null, null, _parent));
  _push(`</ul></div></div></section><section class="h-fit w-full grid place-items-center mt-20" data-aos="fade-up"><p class="text-gray-950 text-3xl cursor-default font-semibold"> Tau Gak Sih? </p><hr class="h-1 w-44 rounded-md bg-gray-950"></section><section class="tau-gak-sih h-[25rem] w-[85%] flex items-center justify-between mt-8 mx-auto" data-aos="fade-up"><div class="h-full w-1/2 flex flex-col items-start justify-center"><h2 class="text-3xl text-gray-950 cursor-default font-semibold"> Pengen Belajar Sejarah? Ada! </h2><br><p class="text-1xl text-gray-950 cursor-default font-medium text-justify"> Di Blitar, ada lho peninggalan bersejarah yang menarik dimana tempat ini dulunya menjadi saksi bisu dari mendiang Presiden Soekarno. Nama tempatnya adalah Istana Gebang yang menjadi tempat tinggal bagi beliau semasa remaja. </p></div><div class="h-full w-[45%] flex items-center justify-end"><img${
    ssrRenderAttr("src", _imports_0)
  } alt="Istana Gebang" class="rounded-lg" width="600"></div></section><section class="tau-gak-sih tau-gak-sih-2 h-[25rem] w-[85%] flex items-center justify-between mx-auto" data-aos="fade-up"><div class="h-full w-1/2 flex items-center justify-start"><img${
    ssrRenderAttr("src", _imports_1)
  } alt="Museum Seni Presiden SBY" class="rounded-lg" width="600"></div><div class="h-full w-[45%] flex flex-col items-start justify-center"><h2 class="text-3xl text-gray-950 cursor-default font-semibold"> Emang Ada Museum di Jatim? </h2><br><p class="text-1xl text-gray-950 cursor-default font-medium text-justify"> Ada banyak pilihan museum yang bisa kalian kunjungi pas lagi berkunjung ke Jawa Timur, contohnya kayak Museum Seni SBY di Pacitan atau Museum Angkot di Batu. Museum Seni SBY pamerin hasil karya lukisan dari mantan presiden kita yang ke-6 lho, ternyata Pak SBY punya jiwa seniman juga. </p></div></section><section class="tau-gak-sih h-[25rem] w-[85%] flex items-center justify-between mx-auto" data-aos="fade-up"><div class="h-full w-1/2 flex flex-col items-start justify-center"><h2 class="text-3xl text-gray-950 cursor-default font-semibold text-center"> Sejauh Ini, Ini yang Paling Jauh </h2><br><p class="text-1xl text-gray-950 cursor-default font-medium text-justify"> Di Kabupaten Sumenep, ada wilayahnya yang nyasarnya jauh banget bahkan letaknya sampe di utaranya pulau NTB. Kenalin, namanya Pulau Sakala yang jadi pulau paling timur dari Jawa Timur. Lihat aja gambar di samping, jauh kan? Karena letaknya yang jauh ini, beberapa pembangunan infrastruktur menjadi terhambat, salah satunya adalah internet. </p></div><div class="h-full w-[45%] flex items-center justify-end"><img${
    ssrRenderAttr("src", _imports_2)
  } alt="Ujung Paling Timur Jawa Timur" class="rounded-lg" width="600"></div></section><section class="h-fit w-full mt-12 grid place-items-center" data-aos="fade-up"><p class="text-gray-950 text-3xl cursor-default font-semibold"> Tunggu Apa Lagi? </p><hr class="h-1 w-60 rounded-md bg-gray-950"><div class="h-8 w-full"></div></section><section class="h-[40rem] w-full bg-center bg-cover bg-no-repeat" style="${
    ssrRenderStyle({ backgroundImage: 'url(/static/img/reog.jpg?url)' })
  }"><div class="h-[40rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-20 absolute"></div><div class="h-full w-full md:w-3/4 lg:w-1/2 px-10 md:px-28 flex items-end md:items-center content-end justify-center"><p class="text-3xl md:text-5xl mb-44 md:mb-0 text-slate-50 text-center md:text-left cursor-default font-black z-30" data-aos="fade-right"> KAMI TUNGGU KEHADIRAN ANDA </p></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/homepage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const HomePage = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(["", ' <script type="text/javascript">\ndocument.addEventListener("DOMContentLoaded", function () {\n  new Splide(".splide__1", {\n    autoplay: true,\n    drag: "free",\n    perPage: 1,\n    snap: true,\n    type: "loop",\n  }).mount();\n});\n<\/script>'])), renderComponent($$result, "MainLayout", $$MainLayout, { "description": "Jelajahi keindahan alam, kekayaan budaya, dan kelezatan kuliner Jawa Timur bersama Visit Jatim.", "title": "Selamat datang!" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomePage", HomePage, {})} ` }));
}, "C:/laragon/www/Projects/Astro/wdc/src/pages/index.astro", void 0);

const $$file = "C:/laragon/www/Projects/Astro/wdc/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
