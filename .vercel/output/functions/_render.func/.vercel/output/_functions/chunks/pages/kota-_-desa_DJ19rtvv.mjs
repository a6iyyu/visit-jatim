/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_BEAXyP6o.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                */
import { _ as _export_sfc, $ as $$MainLayout } from './404_P5xe3fk-.mjs';
import { useSSRContext, defineComponent, ref, onMounted, watch } from 'vue';
import { ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const places = [
	{
		id: 1,
		city: "BANYUWANGI",
		destination: "KAWAH IJEN",
		img: "/static/img/kawah-ijen.jpg",
		link: "https://maps.app.goo.gl/Eq96qJgKzzjJFxUS9"
	},
	{
		id: 2,
		city: "BLITAR",
		destination: "MAKAM BUNG KARNO",
		img: "/static/img/museum-bung-karno.jpg",
		link: "https://maps.app.goo.gl/obekNQZknFEc4gXVA"
	},
	{
		id: 3,
		city: "MAGETAN",
		destination: "TELAGA SARANGAN",
		img: "/static/img/telaga-sarangan.jpg",
		link: "https://maps.app.goo.gl/6HaBzN5TqJndHSU96"
	},
	{
		id: 3,
		city: "MALANG",
		destination: "CANDI SINGOSARI",
		img: "/static/img/candi-singosari.jpg",
		link: "https://maps.app.goo.gl/K6Ck296PsbX1cX1y9"
	},
	{
		id: 4,
		city: "MALANG",
		destination: "PANTAI TELUK ASMARA",
		img: "/static/img/teluk-asmara.jpg",
		link: "https://maps.app.goo.gl/NDPqTfFcHDDHb4BS6"
	},
	{
		id: 5,
		city: "MALANG",
		destination: "SERUNI POINT",
		img: "/static/img/seruni-point.jpg",
		link: "https://maps.app.goo.gl/KFrncQR8saxaQHhcA"
	},
	{
		id: 6,
		city: "PACITAN",
		destination: "MUSEUM DAN GALERI SENI SBY",
		img: "/static/img/museum-sby.jpg",
		link: "https://maps.app.goo.gl/A9TweKV8FRJRAXbdA"
	},
	{
		id: 7,
		city: "SITUBONDO",
		destination: "TAMAN NASIONAL BALURAN",
		img: "/static/img/taman-nasional-baluran.jpg",
		link: "https://maps.app.goo.gl/r1SuGtsjAUQwk8nn7"
	},
	{
		id: 8,
		city: "SUMENEP",
		destination: "PANTAI SEMBILAN",
		img: "/static/img/pantai-sembilan.jpg",
		link: "https://maps.app.goo.gl/BhHSG4kLSDWmeDr58"
	},
	{
		id: 9,
		city: "TUBAN",
		destination: "WISATA RELIGI SUNAN BONANG",
		img: "/static/img/makam-sunan-bonang.jpg",
		link: "https://maps.app.goo.gl/9jpqcv2bGeuzXEoG7"
	}
];
const city_villages = [
	{
		id: 1,
		city: "BANYUWANGI",
		destination: "Kota",
		img: "/static/img/banyuwangi-kota.jpg",
		link: "https://maps.app.goo.gl/LPF9h9XZZan14oER6"
	},
	{
		id: 2,
		city: "BLITAR",
		destination: "Kota",
		img: "/static/img/blitar.jpg",
		link: "https://maps.app.goo.gl/ajRniYUTQ1snAfdH7"
	},
	{
		id: 2,
		city: "MALANG",
		destination: "Kota",
		img: "/static/img/malang.jpg",
		link: "https://maps.app.goo.gl/X2UhaqdeVJpvENjU6"
	},
	{
		id: 3,
		city: "SURABAYA",
		destination: "Kota",
		img: "/static/img/surabaya.jpg",
		link: "https://maps.app.goo.gl/PDcGT1B3agXYv6xJ6"
	},
	{
		id: 4,
		city: "MADIUN",
		destination: "Kota",
		img: "/static/img/madiun.jpg",
		link: "https://maps.app.goo.gl/Wqo41arMh2LvMM5u9"
	},
	{
		id: 5,
		city: "KEDIRI",
		destination: "Kota",
		img: "/static/img/kediri.jpeg",
		link: "https://maps.app.goo.gl/A9TweKV8FRJRAXbdA"
	},
	{
		id: 6,
		city: "PAMEKASAN",
		destination: "Kota",
		img: "/static/img/pamekasan.jpg",
		link: "https://maps.app.goo.gl/Cc4LBs5q62hpjUcY6"
	},
	{
		id: 7,
		city: "TAMANSARI",
		destination: "Desa",
		img: "/static/img/desa-tamansari.jpg",
		link: "https://maps.app.goo.gl/F1nf5HbFdRvA8A1e9"
	},
	{
		id: 8,
		city: "PUJON KIDUL",
		destination: "Desa",
		img: "/static/img/pujon-kidul.jpg",
		link: "https://maps.app.goo.gl/EsGZGRotUhdPEwyx6"
	},
	{
		id: 9,
		city: "KAMPUNG KUNGKUK",
		destination: "Desa",
		img: "/static/img/desa-kampung-kungkuk.jpg",
		link: "https://maps.app.goo.gl/41NFCAz16byvixv1A"
	},
	{
		id: 10,
		city: "BIRA TENGAH",
		destination: "Desa",
		img: "/static/img/desa-bira-tengah.jpg",
		link: "https://maps.app.goo.gl/eK4G43Va4bLgEmTM9"
	},
	{
		id: 11,
		city: "GUWOTERUS",
		destination: "Desa",
		img: "/static/img/desa-guwoterus.jpg",
		link: "https://maps.app.goo.gl/QZBuRKoirwJHQaTX8"
	},
	{
		id: 12,
		city: "SENDANG",
		destination: "Desa",
		img: "/static/img/desa-sendang.jpg",
		link: "https://maps.app.goo.gl/MxRoynnbox2HJEqd9"
	}
];
const destination = {
	places: places,
	"taman-nasional": [
	{
		id: 1,
		city: "MALANG",
		destination: "KAWAH IJEN",
		img: "/static/img/kawah-ijen.jpg",
		link: "https://maps.app.goo.gl/DSXhPuqR8YJr43gX7"
	},
	{
		id: 2,
		city: "SITUBONDO",
		destination: "TAMAN NASIONAL BALURAN",
		img: "/static/img/taman-nasional-baluran.jpg",
		link: "https://maps.app.goo.gl/r1SuGtsjAUQwk8nn7"
	},
	{
		id: 3,
		city: "BANYUWANGI",
		destination: "TAMAN NASIONAL ALAS PURWO",
		img: "/static/img/roberto-rendon-alas-purwo.jpg",
		link: "https://maps.app.goo.gl/TBvqhd2pstGb3mqd8"
	},
	{
		id: 4,
		city: "JEMBER",
		destination: "TAMAN NASIONAL MERU BETIRI",
		img: "/static/img/taman-nasional-meru-betiri.jpg",
		link: "https://maps.app.goo.gl/Yb6SKuqkLUFE12Jg9"
	},
	{
		id: 5,
		city: "PURWODADI",
		destination: "PURWODADI BOTANIC GARDEN",
		img: "/static/img/kebun-raya-purwodadi.png",
		link: "https://maps.app.goo.gl/wgCqvKxf2zXuEc7i7"
	},
	{
		id: 6,
		city: "BANYUWANGI",
		destination: "PANTAI PANCUR",
		img: "/static/img/pantai-pancur-banyuwangi-2.jpg",
		link: "https://maps.app.goo.gl/aEnYGV5xSQCQRwETA"
	},
	{
		id: 7,
		city: "BANYUWANGI",
		destination: "PANTAI TRIANGGULASI",
		img: "/static/img/pantai-trianggulasi.jpg",
		link: "https://maps.app.goo.gl/AFruuRKYpyudghSZ9"
	}
],
	city_villages: city_villages
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "kota-&-desa",
  setup(__props, { expose: __expose }) {
    __expose();
    const destinations = ref(destination.city_villages);
    const filtered = ref();
    const allBtn = ref(true);
    const kotaBtn = ref(false);
    const desaBtn = ref(false);
    const toggleAllBtn = () => {
      allBtn.value = true;
      kotaBtn.value = false;
      desaBtn.value = false;
    };
    const toggleKotaBtn = () => {
      allBtn.value = false;
      kotaBtn.value = true;
      desaBtn.value = false;
    };
    const toggleDesaBtn = () => {
      allBtn.value = false;
      kotaBtn.value = false;
      desaBtn.value = true;
    };
    onMounted(() => {
      filtered.value = destinations.value.sort(() => Math.random() - 0.5).slice(0, 6);
    });
    watch(
      [allBtn, kotaBtn, desaBtn],
      ([all, kota, desa]) => {
        if (all) {
          filtered.value = destinations.value.sort(() => Math.random() - 0.5).slice(0, 6);
        } else if (kota) {
          filtered.value = destinations.value.filter((c) => c.destination === "Kota").sort(() => Math.random() - 0.5).slice(0, 6);
        } else if (desa) {
          filtered.value = destinations.value.filter((c) => c.destination === "Desa").sort(() => Math.random() - 0.5).slice(0, 6);
        }
      }
    );
    const __returned__ = { destinations, filtered, allBtn, kotaBtn, desaBtn, toggleAllBtn, toggleKotaBtn, toggleDesaBtn };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><section class="hero h-[40rem] w-full grid place-items-center bg-center bg-cover bg-no-repeat" style="${ssrRenderStyle({ backgroundImage: "url(/static/img/surabaya.jpg?url)" })}"><div class="h-[40rem] w-full bg-gradient-to-t from-black opacity-60 z-0 absolute"></div><div class="h-3/5 w-[85%] flex items-end justify-center z-10"><h1 class="text-3xl md:text-5xl text-slate-50 cursor-default font-semibold text-center" data-aos="fade-up"> BERKELANA <br> DI KOTA &amp; DESA </h1></div></section><section class="h-fit w-[85%] flex flex-col items-center mb-10 mt-20 mx-auto" data-aos="fade-up"><h2 class="text-2xl md:text-3xl text-gray-950 cursor-default font-semibold my-3 text-center" data-aos="fade-up"> TEMUKAN KEINDAHAN DI SETIAP JALAN KOTA DAN DESA </h2><hr class="h-0.5 w-full bg-gray-950" data-aos="fade-up"><p class="text-base md:text-xl my-3 text-gray-950 cursor-default font-medium text-justify" style="${ssrRenderStyle({ textAlignLast: "center" })}" data-aos="fade-up"> Jelajahi pesona kota yang modern dan desa yang asri dalam satu perjalanan! Nikmati kehidupan perkotaan yang dinamis dan kemudian meresapi ketenangan desa yang memesona. Keindahan di setiap kota dan desa menanti untuk dijelajahi! </p></section><section class="h-fit w-[85%] mt-14 mx-auto" data-aos="fade-up"><div class="my-10 w-full md:w-3/4 lg:w-1/2 grid grid-cols-3 gap-4"><button class="border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-slate-50 transition-colors text-lg focus:text-slate-50 focus:bg-slate-900"> Semua </button><button class="border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-slate-50 transition-colors text-lg focus:text-slate-50 focus:bg-slate-900"> Kota </button><button class="border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-slate-50 transition-colors text-lg focus:text-slate-50 focus:bg-slate-900"> Desa </button></div></section><section class="h-fit w-[85%] grid place-items-center mx-auto my-6" data-aos="fade-up">`);
  if ($setup.filtered != null) {
    _push(`<div class="w-full h-fit grid items-center sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3"><!--[-->`);
    ssrRenderList($setup.filtered, (content) => {
      _push(`<a${ssrRenderAttr("href", content.link)} style="${ssrRenderStyle({ "background-image": "url(" + content.img + ")" })}" class="w-full h-64 mx-auto flex flex-col items-center justify-end object-cover object-center bg-cover cursor-pointer" data-aos="fade-up"><div class="min-w-full min-h-full bg-gradient-to-t from-black opacity-50 hover:opacity-80 transition-opacity duration-100 z-20"></div><div class="absolute max-w-72 flex flex-col items-center z-20 text-slate-100 font-semibold text-center"><h3 class="text-xl lg:text-2xl my-1 mx-7">${ssrInterpolate(content.city)}</h3><h4 class="text-base lg:text-lg mb-6">${ssrInterpolate(content.destination)}</h4></div></a>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h4 class="h-fit w-full text-1xl text-center italic cursor-default font-semibold mb-4 mt-10 mx-auto" data-aos="fade-up"> Dan masih banyak lagi...~ </h4></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/kota-&-desa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const KotaDesaPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro();
const $$KotaDesa = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$KotaDesa;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "description": "Jelajahi keindahan alam, kekayaan budaya, dan kelezatan kuliner Jawa Timur bersama Visit Jatim.", "title": "Kota & Desa" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "KotaDesaPage", KotaDesaPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/laragon/www/Projects/Astro/wdc/src/layouts/kota-&-desa.vue", "client:component-export": "default" })} ` })}`;
}, "C:/laragon/www/Projects/Astro/wdc/src/pages/kota-&-desa.astro", void 0);

const $$file = "C:/laragon/www/Projects/Astro/wdc/src/pages/kota-&-desa.astro";
const $$url = "/kota-&-desa";

const kota__Desa = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$KotaDesa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { destination as d, kota__Desa as k };
