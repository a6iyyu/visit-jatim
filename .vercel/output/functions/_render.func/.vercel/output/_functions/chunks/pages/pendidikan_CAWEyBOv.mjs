/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_BEAXyP6o.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                               */
import { _ as _export_sfc, $ as $$MainLayout } from './404_P5xe3fk-.mjs';
import { useSSRContext, defineComponent, ref } from 'vue';
import { ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { L as Latest } from './budaya_B9gbKm6x.mjs';

const blogs = [
	{
		id: 1,
		link: "https://www.its.ac.id/news/2024/02/13/ungguli-kampus-top-dunia-barunastra-its-kembali-berjaya-di-amerika/",
		img: "/static/img/pendidikan-2.jpg?url",
		title: "Ungguli Kampus Top Dunia, Barunastra ITS Kembali Berjaya di Amerika",
		content: "Barunastra ITS kembali berhasil mengharumkan nama almamater dan bangsa Indonesia dengan meraih juara ketiga di ajang IRC 2024."
	},
	{
		id: 2,
		link: "https://timesindonesia.co.id/pendidikan/484830/buat-aplikasi-signavoice-mahasiswa-polinema-raih-juara-1pimkipnas-2024",
		img: "/static/img/pendidikan-3.jpg?url",
		title: "Buat Aplikasi Signavoice, Mahasiswa Polinema Raih Juara 1 Pimkipnas 2024",
		content: "\"Signavoice adalah aplikasi penerjemah Bahasa Isyarat Indonesia yang memudahkan komunikasi antara penyandang tuna wicara dan masyarakat umum,\" ..."
	},
	{
		id: 3,
		link: "https://ff.unair.ac.id/wrt/2146/kembali-peroleh-penghargaan-ff-unair-terbaik-pada-usulan-terobosan-flagship-program-2024.html",
		img: "/static/img/pendidikan-4.jpg?url",
		title: "Kembali Peroleh Penghargaan, FF UNAIR Terbaik pada Usulan Terobosan Flagship Program 2024",
		content: "Pada hari ini (17/1/2024) penghargaan kembali menghampiri FF UNAIR karena terpilih menjadi Fakultas dengan Usulan Terobosan Flagship Program ..."
	},
	{
		id: 4,
		link: "https://prasetya.ub.ac.id/fk-panen-juara-di-ajang-simpic-2024/",
		img: "/static/img/pendidikan-5.jpg?url",
		title: "FK Panen Juara di Ajang SIMPIC 2024",
		content: "Kontingen Fakultas Kedokteran Universitas Brawijaya (FK UB) meraih prestasi di ajang bergengsi Sisiraj International Microbiology, ..."
	},
	{
		id: 5,
		link: "https://www.rri.co.id/daerah/506390/inilah-capaian-prestasi-jatim-bidang-pendidikan-lima-tahun-terakhir",
		img: "/static/img/pendidikan-1.jpeg?url",
		title: "Inilah Capaian Prestasi Jatim Bidang Pendidikan Lima Tahun Terakhir",
		content: "KBRN, Surabaya: Gubernur Jawa Timur Khofifah Indar Parawansa optimistis prestasi bidang pendidikan Jatim akan semakin di tahun 2024 ini."
	}
];
const collegeData$1 = {
	blogs: blogs
};

const colleges = [
	{
		img: "/static/img/its.jpg?url",
		link: "https://maps.app.goo.gl/bxV77jRjjS74CNm87"
	},
	{
		img: "/static/img/unair.jpg?url",
		link: "https://maps.app.goo.gl/ppsMuhD9Y1MVbKbr5"
	},
	{
		img: "/static/img/ub.jpeg?url",
		link: "https://maps.app.goo.gl/fzUv7GGuZ1Vq2SWF8"
	},
	{
		img: "/static/img/um.jpg?url",
		link: "https://maps.app.goo.gl/G8D7QAFHBNG6qqsT6"
	},
	{
		img: "/static/img/polinema.jpg?url",
		link: "https://maps.app.goo.gl/qrJ2TyQ5fRzpmzFQ9"
	},
	{
		img: "/static/img/unesa.jpg?url",
		link: "https://maps.app.goo.gl/rFqKjQcyzKaCv5sG8"
	},
	{
		img: "/static/img/unej.jpg?url",
		link: "https://maps.app.goo.gl/HPF52Vqn5P7yawP49"
	},
	{
		img: "/static/img/upn.jpg?url",
		link: "https://maps.app.goo.gl/XWMFmaQurYkF8fNP9"
	},
	{
		img: "/static/img/uin.jpg?url",
		link: "https://maps.app.goo.gl/3pXQydBYK6ririYJA"
	},
	{
		img: "/static/img/umm.jpeg?url",
		link: "https://maps.app.goo.gl/6U95xud9suqrY9Ax7"
	},
	{
		img: "/static/img/pens.jpg?url",
		link: "https://maps.app.goo.gl/LXeXFFGq1NidexYL6"
	}
];
const collegeData = {
	colleges: colleges
};

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CollegeSlider",
  setup(__props, { expose: __expose }) {
    __expose();
    const colleges = ref(collegeData.colleges);
    const __returned__ = { colleges };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($setup.colleges, (college, index) => {
    _push(`<div class="splide__slide h-full w-full grid place-items-center"><a class="h-full w-[95%] grid place-items-center bg-center bg-cover bg-no-repeat rounded-xl z-30 transition-all duration-750 ease-in-out" style="${ssrRenderStyle({ backgroundImage: "url(" + college.img + ")" })}"${ssrRenderAttr("href", college.link)}></a></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CollegeSlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CollegeSlider = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);

const tips = [
	{
		num: 1,
		tips: "Pilih Jalur Seleksi yang Tepat"
	},
	{
		num: 2,
		tips: "Kenali Minat dan Kompetensi Diri"
	},
	{
		num: 3,
		tips: "Buatlah Timeline Belajar per Hari"
	},
	{
		num: 4,
		tips: "Pelajari Kembali Soal yang Kurang Dikuasai"
	},
	{
		num: 5,
		tips: "Mengikuti Tryout atau Simulasi SNBT/UTBK"
	},
	{
		num: 6,
		tips: "Pahami Prosedur Seleksi PTN"
	},
	{
		num: 7,
		tips: "Usaha Maksimal dengan Doa dan Tawakal"
	}
];
const dataCollegeEntryTips = {
	tips: tips
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CollegeEntryTips",
  setup(__props, { expose: __expose }) {
    __expose();
    const collegeEntry = ref(dataCollegeEntryTips.tips);
    const __returned__ = { collegeEntry };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($setup.collegeEntry, (tips, index) => {
    _push(`<div class="splide__slide h-full w-full grid place-items-center"><div class="h-full w-[95%] grid place-items-center rounded-xl bg-gray-950 transition-all duration-500 ease-in-out"><p class="h-3/5 w-3/5 text-3xl text-slate-50 flex flex-col items-start justify-start cursor-default font-semibold m-auto">${ssrInterpolate(tips.num)} <br><br> ${ssrInterpolate(tips.tips)}</p></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CollegeEntryTips.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CollegeEntryTips = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _imports_0 = "/_astro/businessman.D0vjYiRY.jpg";

const _sfc_main = {
  __name: 'pendidikan',
  setup(__props, { expose: __expose }) {
  __expose();

const blogs = ref(collegeData$1.blogs);

const __returned__ = { blogs, ref, get collegeData() { return collegeData$1 }, CollegeSlider, Latest, CollegeEntryTips };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><section class="h-[40rem] w-full grid place-items-center mx-auto bg-bottom bg-cover bg-no-repeat" style="${
    ssrRenderStyle({ backgroundImage: 'url(/static/img/ub.jpeg?url)' })
  }"><div class="h-[40rem] w-full bg-gradient-to-t md:bg-gradient-to-r from-black opacity-60 z-0 absolute"></div><div class="h-3/5 w-[85%] flex items-end justify-center z-10"><h1 class="text-5xl text-slate-50 cursor-default font-semibold text-center" data-aos="fade-out"> YUK CARI <br> ILMU DISINI </h1></div></section><section class="h-fit w-[85%] my-20 mx-auto grid grid-cols-2 gap-10" id="pendidikan-penting"><h1 class="text-3xl text-gray-950 cursor-default font-semibold text-justify" data-aos="fade-right"> Mengapa Pendidikan Itu Penting? </h1><h4 class="text-1xl text-gray-950 cursor-default font-medium text-justify" style="${
    ssrRenderStyle({ lineHeight: '1.5' })
  }" data-aos="fade-left"> Di zaman serba digital seperti sekarang ini, pendidikan menjadi kunci untuk mempersiapkan generasi masa depan menghadapi tantangan yang semakin kompleks dan dinamis. Melalui pendidikan, individu diberikan pemahaman yang mendalam tentang teknologi dan keterampilan digital yang kritis, yang sangat dibutuhkan untuk beradaptasi dan bersaing di dunia kerja yang terus berkembang. </h4></section><section class="h-fit w-[85%] block mt-16 mx-auto" id="latest" data-aos="fade-up"><p class="text-3xl text-gray-950 cursor-default font-semibold"> Pilih Kampus Impianmu! </p><hr class="h-0.5 w-full bg-gray-950 rounded-md"></section><section class="h-[25rem] w-full grid place-items-center mt-8" data-aos="fade-up"><div class="splide splide__1 h-full w-[85%] overflow-hidden"><div class="splide__track h-full w-full py-4"><ul class="splide__list">`);
  _push(ssrRenderComponent($setup["CollegeSlider"], null, null, _parent));
  _push(`</ul></div></div></section><section class="h-fit w-[85%] block mt-16 mx-auto" id="latest" data-aos="fade-up"><p class="text-3xl text-gray-950 cursor-default font-semibold"> Terbaru di Pendidikan </p><hr class="h-0.5 w-full bg-gray-950 rounded-md"></section><section class="h-fit w-full grid place-items-center my-4" id="terbaru-di-pendidikan" data-aos="fade-up">`);
  _push(ssrRenderComponent($setup["Latest"], { data: $setup.blogs }, null, _parent));
  _push(`</section><section class="h-fit w-[85%] my-20 mx-auto grid grid-cols-2 gap-10" id="kami-percaya"><h1 class="flex flex-col items-start justify-center text-3xl text-gray-950 cursor-default font-semibold text-justify" data-aos="fade-up"> KAMI PERCAYA<br> PADA ANDA SEBAGAI<br> GENERASI PENERUS BANGSA </h1><img${
    ssrRenderAttr("src", _imports_0)
  } alt="Successful" class="cursor-default font-semibold rounded-lg" data-aos="fade-up" style="${
    ssrRenderStyle({ boxShadow: '0.75rem 0.75rem 0.75rem #bebebe' })
  }"></section><section class="h-[40rem] w-full grid place-items-center bg-gray-950"><p class="h-fit w-[85%] text-slate-50 text-4xl cursor-default font-semibold m-auto" data-aos="fade-right"> Udah nentuin<br> kampus impian belum? </p></section><section class="h-fit w-[85%] block mt-16 mb-6 mx-auto" id="latest" data-aos="fade-right"><p class="text-3xl text-gray-950 cursor-default font-semibold"> Tips Masuk PTN Impian </p><hr class="h-0.5 w-full bg-gray-950 rounded-md"></section><section class="h-fit w-[85%] flex flex-col items-start justify-center mx-auto mb-8"><p class="text-1xl cursor-default font-medium text-justify" data-aos="fade-right" style="${
    ssrRenderStyle({ lineHeight: '1.5' })
  }"> Kalian udah nentuin mau masuk kampus mana? Memang sih masuk kampus dan jurusan impian tuh kebayang seru, tapi perlu diingat buat kesana tentunya tidak dilakukan secara instan. Perlu perjuangan yang gede dan selalu baca informasi tentang pendaftaran masuk perkuliahan. Di halaman ini, bakal dikasih tau tips-tips yang bisa kalian terapkan biar bisa masuk ke perkuliahan. Apa aja ya kira-kira? Mari kita pahami bersama! </p></section><section class="h-80 w-full grid place-items-center mt-8" id="college-entry" data-aos="fade-up"><div class="splide splide__2 h-full w-[85%] overflow-hidden"><div class="splide__track h-full w-full py-4"><ul class="splide__list">`);
  _push(ssrRenderComponent($setup["CollegeEntryTips"], null, null, _parent));
  _push(`</ul></div></div></section><p class="h-fit w-[85%] grid place-items-center mt-16 mb-8 mx-auto"><q class="text-center text-gray-900 text-2xl cursor-default font-semibold" data-aos="fade-left"> Hanya pendidikan yang bisa menyelamatkan masa depan, tanpa pendidikan Indonesia tak mungkin bertahan. </q></p><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/pendidikan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const PendidikanPage = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Pendidikan = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pendidikan;
  return renderTemplate(_a || (_a = __template(["", ' <script type="text/javascript">\ndocument.addEventListener("DOMContentLoaded", function () {\n  new Splide(".splide__1", {\n    drag: "free",\n    perPage: 2,\n    type: "loop",\n    autoScroll: {\n      speed: 1,\n    },\n  }).mount(window.splide.Extensions);\n  new Splide(".splide__2", {\n    drag: "free",\n    perPage: 2,\n    snap: true,\n    type: "loop",\n  }).mount();\n});\n<\/script>'])), renderComponent($$result, "MainLayout", $$MainLayout, { "description": "Temukan berita terkini, pilihan kampus, hingga cerita inspiratif dari dunia pendidikan.", "title": "Pendidikan" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PendidikanPage", PendidikanPage, {})} ` }));
}, "C:/laragon/www/Projects/Astro/wdc/src/pages/pendidikan.astro", void 0);

const $$file = "C:/laragon/www/Projects/Astro/wdc/src/pages/pendidikan.astro";
const $$url = "/pendidikan";

export { $$Pendidikan as default, $$file as file, $$url as url };
