/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_BEAXyP6o.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                           */
import { _ as _export_sfc, $ as $$MainLayout } from './404_P5xe3fk-.mjs';
import { useSSRContext, ref, reactive, onMounted, watch, computed, mergeProps } from 'vue';
import { ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';

const culture = [
	{
		img: "/static/img/yadnya-kasada.jpg?url",
		name: "YADNYA KASADA",
		origin: "MALANG"
	},
	{
		img: "/static/img/keduk-beji.jpeg?url",
		name: "KEDUK BEJI",
		origin: "NGAWI"
	},
	{
		img: "/static/img/larung-sembonyo.jpg?url",
		name: "LARUNG SEMBONYO",
		origin: "TRENGGALEK"
	},
	{
		img: "/static/img/kebo-keboan.jpg?url",
		name: "KEBO-KEBOAN",
		origin: "BANYUWANGI"
	}
];
const dataCulture = {
	culture: culture
};

const _sfc_main$2 = {
  __name: 'CultureSlider',
  setup(__props, { expose: __expose }) {
  __expose();

const cultures = ref(dataCulture.culture);

const __returned__ = { cultures, ref, get dataCulture() { return dataCulture } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($setup.cultures, (culture, index) => {
    _push(`<div class="splide__slide h-full w-full grid place-items-center transition-all duration-500 ease-in-out hover:scale-[1.035]"><div class="h-full w-[95%] flex flex-col items-center justify-end bg-center bg-cover bg-no-repeat rounded-xl transition-all duration-500 ease-in-out" style="${
      ssrRenderStyle({ backgroundImage: 'url(' + culture.img + ')' })
    }"><h4 class="h-1/5 w-3/4 text-3xl text-center text-slate-50 flex items-end justify-center cursor-default font-extrabold">${
      ssrInterpolate(culture.name)
    }</h4><h5 class="h-1/5 w-3/4 text-1xl text-center text-slate-50 flex items-start justify-center cursor-default font-semibold">${
      ssrInterpolate(culture.origin)
    }</h5></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/CultureSlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const CultureSliderVue = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender$2]]);

const _sfc_main$1 = {
  __name: 'Latest',
  props: ["data"],
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;
const array = ref([...props.data]);
const randomIndex = Math.floor(Math.random() * array.value.length);

const frontNews = reactive({
  id: 0,
  link: "",
  img: "",
  title: "",
  content: "",
});

(frontNews.id = array.value[randomIndex].id),
  (frontNews.link = array.value[randomIndex].link),
  (frontNews.img = array.value[randomIndex].img),
  (frontNews.title = array.value[randomIndex].title),
  (frontNews.content = array.value[randomIndex].content);

onMounted(() => {
  //putFrontNews();
  console.log(frontNews);
});

watch(
  () => props.data,
  () => {
    array.value = [...props.data];
  }
);

const blogs = computed(() => {
  return array.value.filter((item) => item.id !== frontNews.id);
});

const __returned__ = { props, array, randomIndex, frontNews, blogs, reactive, ref, onMounted, watch, computed };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(mergeProps({ class: "h-full w-[85%] flex items-center justify-between" }, _attrs))
  }><div class="h-full w-1/2 flex flex-col"><a${
    ssrRenderAttr("href", $setup.frontNews.link)
  } class="h-full w-full block" target="_blank"><img${
    ssrRenderAttr("src", $setup.frontNews.img)
  } class="h-80 w-full rounded-md bg-bottom bg-cover bg-no-repeat shadow-md" alt=""><br><p class="h-fit w-full text-2xl text-gray-950 font-semibold text-justify hover:text-gray-800 hover:underline" style="${
    ssrRenderStyle({ transition: 'all 0.3s ease-in-out' })
  }">${
    ssrInterpolate($setup.frontNews.title)
  }</p><br><p class="h-fit w-full text-xl text-gray-950 font-medium text-justify hover:text-gray-800 hover:underline" style="${
    ssrRenderStyle({ transition: 'all 0.3s ease-in-out' })
  }">${
    ssrInterpolate($setup.frontNews.content)
  }</p><br><p class="h-fit w-full text-1xl text-gray-950 font-semibold text-justify hover:text-gray-800 hover:underline" style="${
    ssrRenderStyle({ transition: 'all 0.3s ease-in-out' })
  }"> Baca Selengkapnya ➔ </p></a></div><div class="blog-slider flex flex-col overflow-y-auto ml-8"><!--[-->`);
  ssrRenderList($setup.blogs, (blog) => {
    _push(`<a${
      ssrRenderAttr("href", blog.link)
    } class="max-h-60 h-full w-full flex justify-between py-2" target="_blank"><img${
      ssrRenderAttr("src", blog.img)
    } class="blogs max-h-32 h-32 w-2/5 rounded bg-center bg-cover bg-no-repeat" style="${
      ssrRenderStyle({ boxShadow: '0.4rem 0.4rem 0.4rem #bebebe' })
    }"><div class="h-full w-[55%] m-auto"><p class="text-1xl text-gray-950 font-semibold mr-3 hover:text-gray-800 hover:underline">${
      ssrInterpolate(blog.title)
    }</p></div></a>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Latest.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const Latest = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const blogs = [
	{
		id: 1,
		link: "https://kumparan.com/sejarah-dan-sosial/mengenal-suku-osing-dari-banyuwangi-dan-tradisi-uniknya-20Ke2BKv1eX",
		img: "/static/img/suku-osing.jpg?url",
		title: "Mengenal Suku Osing dari Banyuwangi dan Tradisi Uniknya",
		content: "Suku Osing berasal dari Banyuwangi, Jawa Timur. Suku ini mempunyai tradisi khas berupa Mepe Kasur. Berikut penjelasan lengkapnya."
	},
	{
		id: 2,
		link: "https://mediaindonesia.com/ramadan/567535/mengenal-megengan-tradisi-menyambut-ramadan-masyarakat-jawa#:~:text=Megengan%20merupakan%20alkuturasi%20budaya%20Jawa,mulia%20yaitu%20Rajab%20dan%20Ramadan.",
		img: "/static/img/megengan.jpg?url",
		title: "Mengenal Megengan, Tradisi Menyambut Ramadan Masyarakat Jawa",
		content: "Megengan merupakan alkuturasi budaya Jawa dan budaya Islam yang dilakukan Walisongo saat menyebarkan ajaran Islam di Jawa ..."
	},
	{
		id: 3,
		link: "https://www.sonora.id/read/423884477/makna-dan-pesan-moral-lagu-rek-ayo-rek-lagu-daerah-jawa-timur#:~:text=Makna%20dari%20lagu%20%22Rek%20Ayo,daerah%20Tunjungan%20untuk%20mencari%20hiburan.",
		img: "/static/img/rek-ayo-rek.jpg?url",
		title: "Makna dan Pesan Moral Lagu Rek Ayo Rek, Lagu Daerah Jawa Timur",
		content: "Makna dari lagu \"Rek Ayo Rek\" adalah mengajak anak muda untuk tidak hanya melamun atau berdiam diri di rumah saat malam Minggu."
	},
	{
		id: 4,
		link: "https://tugujatim.id/wajib-tahu-6-suku-yang-ada-di-jawa-timur-yang-eksis/",
		img: "/static/img/6-suku-eksis.jpg?url",
		title: "Wajib Tahu! 6 Suku yang Ada di Jawa Timur yang Eksis hingga Sekarang Lengkap dengan Ciri Khasnya",
		content: "Update Suku yang ada di Jawa Timur 2024. Tradisi Kerapan Sapi yang biasa dilakukan oleh para lelaki Suku Madura. Suku yang ..."
	}
];
const blogData = {
	blogs: blogs
};

const _sfc_main = {
  __name: 'budaya',
  setup(__props, { expose: __expose }) {
  __expose();

const blogs = ref(blogData.blogs);

const __returned__ = { blogs, ref, CultureSliderVue, Latest, get blogData() { return blogData } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><section class="hero h-[35rem] w-full flex items-center justify-end pt-28 mx-auto"><div class="absolute grid place-items-center rounded-2xl bg-slate-400" style="${
    ssrRenderStyle({ boxShadow: '0.5em 0.5em 0.5em #48484850' })
  }"><div class="h-full w-3/4 flex flex-col items-start justify-center" data-aos="fade-up"><b class="text-3xl cursor-default"> Mari Telusuri Ragam Tradisi Lokal! </b><br><p class="text-1xl text-gray-950 cursor-default font-medium text-justify" style="${
    ssrRenderStyle({ lineHeight: '1.5' })
  }"> Temukan pesona budaya Jawa Timur melalui tradisi dan festival yang memukau. </p></div></div><div class="h-full w-3/5 flex items-end justify-center bg-center bg-cover bg-no-repeat" style="${
    ssrRenderStyle({ backgroundImage: 'url(/static/img/candi-singosari.jpg?url)' })
  }"><div class="h-3/5 w-4/5 flex flex-col items-center justify-center text-center"><b class="text-3xl text-slate-50 cursor-default"> Mari Telusuri Ragam Tradisi Lokal! </b><br><p class="text-1xl text-slate-50 cursor-default font-medium text-center" style="${
    ssrRenderStyle({ lineHeight: '1.5' })
  }"> Temukan pesona budaya Jawa Timur melalui tradisi dan festival yang memukau. </p></div></div></section><section class="h-fit w-[85%] block mt-16 mx-auto" id="kenali-kebudayaan" data-aos="fade-up"><p class="text-3xl text-gray-950 text-center cursor-default font-semibold"> Upacara Adat Khas Jawa Timur </p><hr class="h-0.5 w-full bg-gray-950 rounded-md"></section><section class="h-[25rem] w-full grid place-items-center mt-6" data-aos="fade-up"><div class="splide splide__1 h-full w-[85%] overflow-hidden"><div class="splide__track h-full w-full py-4"><ul class="splide__list">`);
  _push(ssrRenderComponent($setup["CultureSliderVue"], null, null, _parent));
  _push(`</ul></div></div></section><section class="h-full w-[85%] mt-4 mx-auto grid place-items-center"><p class="text-gray-900 text-1xl cursor-default font-medium text-justify tracking-wide" style="${ssrRenderStyle({ lineHeight: '1.5' })}" data-aos="fade-up"> Di Jawa Timur, ada beberapa upacara adat yang dilakuin di beberapa daerah dan oleh suku tertentu. Misalnya kayak Upacara Yadnya Kasada yang dilakuin oleh Suku Tengger di Gunung Bromo yang tujuannya adalah agar masyarakat setempat terhindar dari berbagai macam musibah dengan cara menyampaikan persembahan kepada Sang Hyang Widhi di kawah puncak Gunung Bromo. Selain itu, ada juga Upacara Kebo-Keboan yang asalnya dari Banyuwangi. Ga sekadar sebagai upacara adat, ternyata Kebo-Keboan bisa narik wisatawan buat ngerti tradisi daerah sana! </p></section><section class="h-fit w-[85%] block mt-16 mx-auto" id="latest" data-aos="fade-up"><p class="text-3xl text-gray-950 text-center cursor-default font-semibold"> Kenali Kebudayaan Lokalnya </p><hr class="h-0.5 w-full bg-gray-950 rounded-md"></section><section class="h-fit w-full grid place-items-center mx-auto my-12" id="blog-kebudayaan" data-aos="fade-up">`);
  _push(ssrRenderComponent($setup["Latest"], { data: $setup.blogs }, null, _parent));
  _push(`</section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/budaya.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const BudayaPage = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Budaya = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Budaya;
  return renderTemplate(_a || (_a = __template(["", ' <script type="text/javascript">\ndocument.addEventListener("DOMContentLoaded", function () {\n  new Splide(".splide__1", {\n    drag: "free",\n    perPage: 2,\n    type: "loop",\n    autoScroll: {\n      speed: 1,\n    },\n  }).mount(window.splide.Extensions);\n});\n<\/script>'])), renderComponent($$result, "MainLayout", $$MainLayout, { "description": "Temukan sejarah, tradisi, dan keunikan seni yang melekat dalam kehidupan masyarakat setempat.", "title": "Budaya" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BudayaPage", BudayaPage, {})} ` }));
}, "C:/laragon/www/Projects/Astro/wdc/src/pages/budaya.astro", void 0);

const $$file = "C:/laragon/www/Projects/Astro/wdc/src/pages/budaya.astro";
const $$url = "/budaya";

const budaya = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Budaya,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Latest as L, budaya as b };
