/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_BEAXyP6o.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                 */
import { _ as _export_sfc, $ as $$MainLayout } from './404_P5xe3fk-.mjs';
import { useSSRContext, defineComponent, ref, onMounted, watch } from 'vue';
import { d as destination } from './kota-_-desa_DJ19rtvv.mjs';
import { ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ragam-wisata",
  setup(__props, { expose: __expose }) {
    __expose();
    const destinations = ref(destination.places);
    const cities = ref(
      destinations.value.map((place) => place.city)
    );
    const unduplicate = ref([...new Set(cities.value)]);
    const filteredCity = ref();
    const selectCity = ref();
    onMounted(() => {
      filteredCity.value = destinations.value.sort(() => Math.random() - 0.5).slice(0, 6);
    });
    watch(selectCity, (newSelectCity) => {
      if (newSelectCity === "SEMUA" || newSelectCity == null) {
        filteredCity.value = destinations.value.sort(() => Math.random() - 0.5).slice(0, 6);
      } else {
        filteredCity.value = destinations.value.filter(
          (c) => c.city === newSelectCity
        );
      }
    });
    const __returned__ = { destinations, cities, unduplicate, filteredCity, selectCity };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><section class="hero h-[35rem] w-full flex items-center justify-end pt-28 mx-auto"><div class="absolute grid place-items-center rounded-2xl bg-slate-400" style="${ssrRenderStyle({ boxShadow: "0.5em 0.5em 0.5em #48484850" })}"><div class="h-full w-3/4 flex flex-col items-start justify-center" data-aos="fade-up"><b class="text-3xl cursor-default"> Jenis Wisata Unik dan Menarik di Jatim! </b><br><p class="text-1xl text-gray-950 cursor-default font-medium text-justify" style="${ssrRenderStyle({ lineHeight: "1.5" })}"> Banyak banget pilihan wisata yang bisa kalian kunjungi saat ke Jawa Timur, awas rawan dompet kosong! </p></div></div><div class="h-full w-3/5 flex items-end justify-center bg-center bg-cover bg-no-repeat" style="${ssrRenderStyle({ backgroundImage: "url(/static/img/hotel-majapahit.jpg?url)" })}"><div class="block md:hidden absolute min-w-full min-h-full bg-gradient-to-t from-black opacity-50 hover:opacity-80 transition-opacity duration-100 z-20"></div><div class="h-3/5 w-4/5 flex flex-col items-center justify-center text-center z-30"><b class="text-3xl text-slate-50 cursor-default"> Jenis Wisata Unik dan Menarik di Jatim! </b><br><p class="text-1xl text-slate-50 cursor-default font-medium text-center" style="${ssrRenderStyle({ lineHeight: "1.5" })}"> Banyak banget pilihan wisata yang bisa kalian kunjungi saat ke Jawa Timur, awas rawan dompet kosong! </p></div></div></section><section class="h-fit w-[85%] grid place-items-center mb-12 mt-24 mx-auto" id="beragam-jenis"><p class="text-3xl text-gray-950 cursor-default font-semibold text-center mb-2" data-aos="fade-up"> Beragam Jenis Objek Wisata Menunggu Kedatangan Anda! </p><hr class="h-0.5 w-full bg-gray-950 rounded-md" data-aos="fade-up"></section><section class="h-[35rem] w-full bg-center bg-cover bg-no-repeat" style="${ssrRenderStyle({ backgroundImage: "url(/static/img/banyuwangi.jpg?url)" })}"><div class="h-[35rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-20 absolute"></div><div class="h-full w-[85%] flex items-center justify-center md:items-center md:justify-start mx-auto"><p class="text-4xl md:text-5xl text-slate-50 text-center md:text-left cursor-default font-black z-30" data-aos="fade-right"> KEINDAHAN TIADA<br> TARA </p></div></section><section class="h-fit w-[85%] grid place-items-center mx-auto my-12" id="beragam-jenis"><p class="text-3xl text-gray-950 cursor-default font-semibold text-center mb-2"> Ingin Tahu Mau Kemana Saja? </p><hr class="h-0.5 w-full bg-gray-950 rounded-md"></section><section class="h-fit w-[85%] mx-auto mt-8" data-aos="fade-up"><div class="my-10 fit"><label for="cities"><h3 class="text-1xl my-5 cursor-default font-medium">Pilih Wilayah</h3><select name="test" id="cities" class="h-10 w-48 md:w-96 border border-slate-950 rounded-md bg-slate-100 px-3 cursor-pointer"><option value="SEMUA" selected>SEMUA</option><!--[-->`);
  ssrRenderList($setup.unduplicate, (wilayah) => {
    _push(`<option${ssrRenderAttr("value", wilayah)}>${ssrInterpolate(wilayah)}</option>`);
  });
  _push(`<!--]--></select></label></div></section><section class="h-fit w-[85%] grid place-items-center mx-auto my-6" data-aos="fade-up">`);
  if ($setup.filteredCity != null) {
    _push(`<div class="w-full h-fit grid items-center sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3"><!--[-->`);
    ssrRenderList($setup.filteredCity, (content) => {
      _push(`<a${ssrRenderAttr("href", content.link)} style="${ssrRenderStyle({ "background-image": "url(" + content.img + ")" })}" class="w-full h-64 mx-auto flex flex-col items-center justify-end object-cover object-center bg-cover cursor-pointer" data-aos="fade-up"><div class="min-w-full min-h-full bg-gradient-to-t from-black opacity-50 hover:opacity-80 transition-opacity duration-100 z-20"></div><div class="absolute max-w-72 flex flex-col items-center z-20 text-slate-100 font-semibold text-center"><h3 class="md:text-xl lg:text-2xl my-1 mx-7">${ssrInterpolate(content.destination)}</h3><h4 class="md:text-base lg:text-lg mb-6">${ssrInterpolate(content.city)}</h4></div></a>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h4 class="h-fit w-full text-1xl text-center italic cursor-default font-semibold mt-10 mx-auto" data-aos="fade-up"> Dan masih banyak lagi...~ </h4></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/ragam-wisata.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RagamWisataPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$RagamWisata = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RagamWisata;
  return renderTemplate(_a || (_a = __template(["", ' <script type="text/javascript">\ndocument.addEventListener("DOMContentLoaded", function () {\n  new Splide(".splide__1", {\n    autoplay: true,\n    drag: "free",\n    perPage: 1,\n    snap: true,\n    type: "loop",\n  }).mount();\n});\n<\/script>'])), renderComponent($$result, "MainLayout", $$MainLayout, { "description": "Mengungkap kekayaan wisata, pemandangan alam, hingga atraksi budaya yang memukau di setiap tujuan wisata.", "title": "Ragam Wisata" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RagamWisataPage", RagamWisataPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/laragon/www/Projects/Astro/wdc/src/layouts/ragam-wisata.vue", "client:component-export": "default" })} ` }));
}, "C:/laragon/www/Projects/Astro/wdc/src/pages/ragam-wisata.astro", void 0);

const $$file = "C:/laragon/www/Projects/Astro/wdc/src/pages/ragam-wisata.astro";
const $$url = "/ragam-wisata";

export { $$RagamWisata as default, $$file as file, $$url as url };
