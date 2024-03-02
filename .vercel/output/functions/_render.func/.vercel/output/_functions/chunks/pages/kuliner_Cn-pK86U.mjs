/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_BEAXyP6o.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                            */
import { _ as _export_sfc, $ as $$MainLayout } from './404_P5xe3fk-.mjs';
import { useSSRContext, ref } from 'vue';
import { ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';

const culinary = [
	{
		img: "/static/img/rujak-cingur.jpg?url",
		name: "RUJAK CINGUR",
		origin: "MALANG"
	},
	{
		img: "/static/img/pecel.jpg?url",
		name: "PECEL TUMPANG",
		origin: "MADIUN"
	},
	{
		img: "/static/img/sate-madura.jpg?url",
		name: "SATE MADURA",
		origin: "PULAU MADURA"
	},
	{
		img: "/static/img/soto-lamongan.jpg?url",
		name: "SOTO LAMONGAN",
		origin: "LAMONGAN"
	},
	{
		img: "/static/img/lontong-balap.jpg?url",
		name: "LONTONG BALAP",
		origin: "SURABAYA"
	},
	{
		img: "/static/img/rawon.jpg?url",
		name: "RAWON",
		origin: "PONOROGO"
	},
	{
		img: "/static/img/rujak-soto.jpg?url",
		name: "RUJAK SOTO",
		origin: "BANYUWANGI"
	},
	{
		img: "/static/img/nasi-tempong.jpg?url",
		name: "NASI TEMPONG",
		origin: "BANYUWANGI"
	},
	{
		img: "/static/img/tahu-tek.jpg?url",
		name: "TAHU TEK",
		origin: "LAMONGAN"
	}
];
const dataCulinary = {
	culinary: culinary
};

const _sfc_main$1 = {
  __name: 'CardCulinary',
  setup(__props, { expose: __expose }) {
  __expose();

const dishes = ref(dataCulinary.culinary);

const __returned__ = { dishes, ref, get dataCulinary() { return dataCulinary } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($setup.dishes, (culinary, index) => {
    _push(`<div class="splide__slide h-full w-full grid place-items-center"><div class="h-full w-[95%] flex flex-col items-center justify-end bg-center bg-cover bg-no-repeat rounded-xl transition-all duration-500 ease-in-out" style="${
      ssrRenderStyle({ backgroundImage: 'url(' + culinary.img + ')' })
    }"><h4 class="h-1/5 w-3/4 text-3xl text-center text-slate-50 flex items-end justify-center cursor-default font-extrabold">${
      ssrInterpolate(culinary.name)
    }</h4><h5 class="h-1/5 w-3/4 text-1xl text-center text-slate-50 flex items-start justify-center cursor-default font-semibold">${
      ssrInterpolate(culinary.origin)
    }</h5></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/CardCulinary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const CardCulinary = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const _imports_0 = "data:image/jpeg;base64,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";

const _imports_1 = "/_astro/gacoan.C6oyB5P6.png";

const _imports_2 = "/_astro/ayam-nelongso.rNxwpN_N.jpg";

const _imports_3 = "/_astro/kopi-studio-24.CEwSHcBv.png";

const _sfc_main = {
  __name: 'kuliner',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { CardCulinary };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><section class="h-[35rem] w-full mx-auto bg-center bg-cover bg-no-repeat" style="${
    ssrRenderStyle({ backgroundImage: 'url(/static/img/soto-lamongan.jpg?url)' })
  }"><div class="h-[35rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-0 absolute"></div></section><section class="absolute h-60 grid place-items-center top-[27rem] rounded-xl bg-gradient-to-tr from-slate-300 to-slate-200" id="jangan-khawatir" style="${
    ssrRenderStyle({ boxShadow: '0.75rem 0.75rem 0.75rem #48484850' })
  }"><div class="h-full w-[85%] grid place-items-center"><p class="text-3xl text-gray-950 text-center cursor-default font-semibold"> Laper? <br> Jangan Khawatir! </p></div></section><section class="h-fit w-[85%] flex flex-col items-center justify-center mt-52 mx-auto"><p class="text-3xl text-gray-950 text-center cursor-default font-semibold" data-aos="fade-up"> Nikmati Berbagai Macam Jenis Kuliner di Jatim! </p><hr class="h-0.5 w-full bg-gray-950" data-aos="fade-up"></section><section class="h-[25rem] w-full grid place-items-center mt-4" data-aos="fade-up"><div class="splide splide__1 h-full w-[85%] overflow-hidden"><div class="splide__track h-full w-full py-4"><ul class="splide__list">`);
  _push(ssrRenderComponent($setup["CardCulinary"], null, null, _parent));
  _push(`</ul></div></div></section><section class="h-fit w-[85%] grid place-items-center mx-auto mb-14 mt-4" data-aos="fade-up"><h4 class="text-1xl italic cursor-default font-semibold"> Dan masih banyak lagi...~ </h4></section><section class="h-fit w-[85%] flex flex-col items-center justify-center mt-8 mx-auto"><p class="text-3xl text-gray-950 text-center cursor-default font-semibold" data-aos="fade-up"> Memperkenalkan FnB Terkenal Khas Jatim </p><hr class="h-0.5 w-full bg-gray-950" data-aos="fade-up"></section><section class="h-fit w-[85%] grid place-items-center grid-cols-4 mx-auto" id="fnb-logos"><img${
    ssrRenderAttr("src", _imports_0)
  } alt="Pesen Kopi" class="cursor-default font-semibold mix-blend-multiply" width="150" data-aos="fade-right"><img${
    ssrRenderAttr("src", _imports_1)
  } alt="Mie Gacoan" class="cursor-default font-semibold mix-blend-multiply" width="150" data-aos="fade-up"><img${
    ssrRenderAttr("src", _imports_2)
  } alt="Ayam Nelongso" class="cursor-default font-semibold mix-blend-multiply" width="150" data-aos="fade-up"><img${
    ssrRenderAttr("src", _imports_3)
  } alt="Kopi Studio 24" class="cursor-default font-semibold mix-blend-multiply" width="150" data-aos="fade-left"></section><section class="h-fit w-[85%] flex items-center mb-8 mx-auto" id="fnb-description"><p class="text-gray-900 text-1xl cursor-default font-medium text-justify tracking-wide" style="${
    ssrRenderStyle({ lineHeight: '1.5' })
  }" data-aos="fade-up"> Ke Jawa Timur belum afdol nih kalo kalian belum nyobain restorannya. Pernah dengar Mie Gacoan ga? Atau Kopi Studio 24 yang merupakan kafe terkenal dan sekarang punya banyak cabang? Tau ga sih, ternyata logo-logo di atas merupakan FnB terkenal yang awal pendiriannya di Jawa Timur lho, dari Pesen Kopi, Ayam Nelongso, Mie Gacoan, dan Kopi Studio 24. Harga makanan dan minumannya pun ramah di kantong, udah gitu rasanya pas di lidah, suasananya nyaman (apalagi kalian yang punya pacar bisalah diajak), dan cocok buat kalian yang pengen makan bareng keluarga. Selama kalian pergi liburan ke Jawa Timur, jangan khawatir jika perutmu udah karaoke-an karena banyak pilihan makanan dan restoran yang siap melayanimu! </p></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/kuliner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const HomePage = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Kuliner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kuliner;
  return renderTemplate(_a || (_a = __template(["", ' <script type="text/javascript">\ndocument.addEventListener("DOMContentLoaded", function () {\n  new Splide(".splide__1", {\n    drag: "free",\n    perPage: 3,\n    type: "loop",\n    autoScroll: {\n      speed: 1,\n    },\n  }).mount(window.splide.Extensions);\n});\n<\/script>'])), renderComponent($$result, "MainLayout", $$MainLayout, { "description": "Telusuri ragam hidangan lezat, makanan khas, dan tempat makan terbaik yang memikat lidah.", "title": "Kuliner" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomePage", HomePage, {})} ` }));
}, "C:/laragon/www/Projects/Astro/wdc/src/pages/kuliner.astro", void 0);

const $$file = "C:/laragon/www/Projects/Astro/wdc/src/pages/kuliner.astro";
const $$url = "/kuliner";

export { $$Kuliner as default, $$file as file, $$url as url };
