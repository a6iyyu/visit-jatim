/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_BEAXyP6o.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                  */
import { _ as _export_sfc, $ as $$MainLayout } from './404_P5xe3fk-.mjs';
import { useSSRContext, defineComponent, ref } from 'vue';
import { ssrRenderList, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';

const img = [
	"/static/img/kehidupan-1.jpg",
	"/static/img/kehidupan-2.jpg",
	"/static/img/kehidupan-3.jpg",
	"/static/img/kehidupan-4.jpg",
	"/static/img/kehidupan-5.jpg",
	"/static/img/kehidupan-6.jpg"
];
const citizensImageData = {
	img: img
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardPopulation",
  setup(__props, { expose: __expose }) {
    __expose();
    const citizens = ref(citizensImageData.img);
    const __returned__ = { citizens };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($setup.citizens, (citizen, index) => {
    _push(`<div class="splide__slide h-full w-full grid place-items-center"><div class="h-full w-[95%] bg-center bg-cover bg-no-repeat rounded-xl transition-all duration-500 ease-in-out" style="${ssrRenderStyle({ backgroundImage: "url(" + citizen + ")" })}"></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CardPopulation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardPopulationVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tentang-jatim",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { CardPopulationVue };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><section class="hero h-[40rem] w-full grid place-items-center bg-center bg-cover bg-no-repeat" style="${ssrRenderStyle({ backgroundImage: "url(/static/img/kehidupan-4.jpg?url)" })}"><div class="h-[40rem] w-full bg-gradient-to-t from-black opacity-60 z-0 absolute"></div><div class="h-3/5 w-[85%] flex items-end justify-center z-10"><h1 class="text-5xl text-slate-50 cursor-default font-semibold text-center" data-aos="fade-up"> MARI BERKENALAN <br> DENGAN JAWA TIMUR </h1></div></section><section class="h-fit w-[85%] flex flex-col mt-24 mx-auto" data-aos="fade-up"><h2 class="text-3xl text-gray-950 cursor-default font-semibold text-start"> SELAMAT DATANG DI JAWA TIMUR </h2><hr class="h-0.5 w-full bg-gray-950 rounded-md"><div class="h-fit w-full grid place-items-center mt-6 mx-auto" data-aos="fade-up"><p class="text-1xl text-gray-950 cursor-default font-medium text-justify" style="${ssrRenderStyle({ lineHeight: "1.5" })}"> Selamat datang di Jawa Timur, tempat di mana kita akan menggali kekayaan budaya, pesona alam, dan sejarah yang memukau dari Jawa Timur. Mari jelajahi keindahannya bersama, memahami warisan budaya yang istimewa, dan menghidupkan keajaiban alam, tradisi, dan kehidupan masyarakatnya. </p></div></section><section class="h-fit w-[85%] flex flex-col mt-14 mx-auto" data-aos="fade-up"><h2 class="text-3xl text-gray-950 cursor-default font-semibold text-start"> KEDATANGAN DI JAWA TIMUR </h2><hr class="h-0.5 w-full bg-gray-950 rounded-md"><section class="h-fit w-full grid place-items-center mt-6 mx-auto" data-aos="fade-up"><p class="text-1xl text-gray-950 cursor-default font-medium text-justify" style="${ssrRenderStyle({ lineHeight: "1.5", textAlignLast: "start" })}"> Jawa Timur memberikan pengalaman yang menakjubkan dengan berbagai pilihan transportasi yang memudahkan perjalanan. Provinsi ini dapat diakses melalui udara, darat, maupun laut, dengan bandara utama seperti Bandara Internasional Juanda di Surabaya. Jadi, Anda tak perlu takut atau bingung bagaimana caranya untuk pergi ke Jawa Timur! </p></section></section><section class="h-fit w-[85%] mt-14 mx-auto grid place-items-center"><iframe class="max-h-[30rem] h-[30rem] max-w-full w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253423.48794765712!2d110.54089582314452!3d-7.039577975160281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1707562703539!5m2!1sid!2sid" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="${ssrRenderStyle({ border: "0" })}" data-aos="fade-up"></iframe></section><section class="h-fit w-[85%] flex flex-col mt-14 mx-auto" data-aos="fade-up"><h2 class="text-3xl text-gray-950 cursor-default font-semibold text-start"> IBUKOTA </h2><hr class="h-0.5 w-full bg-gray-950 rounded-md"><section class="h-fit w-full grid place-items-center mt-6 mx-auto" data-aos="fade-up"><p class="text-1xl text-gray-950 cursor-default font-medium text-justify" style="${ssrRenderStyle({ lineHeight: "1.5", textAlignLast: "start" })}"> Surabaya! Pernah kesana apa belum teman-teman? Surabaya menjadi pusatnya Jawa Timur yang tak pernah berhenti berdetak. Kota ini menyuguhkan energi yang luar biasa, dari kulinernya yang legendaris hingga kehidupan sehari-hari yang selalu menggema. Sebuah kota dimana sejarah dan modernitas bersatu, mengundang kalian untuk hadir merasakan kehidupan yang berbeda nan luar biasa. Banyak wisatawan lokal maupun turis yang berkunjung ke ibukota ini karena memiliki tempat wisata yang banyak seperti Surabaya Zoo serta memiliki sejarah panjang seperti Peristiwa 10 November di Hotel Yamato. </p></section></section><section class="h-[25rem] w-[85%] grid place-items-center mt-14 mx-auto" data-aos="fade-up"><div class="splide splide__1 h-full w-full overflow-hidden"><div class="splide__track h-full w-full py-4"><ul class="splide__list">`);
  _push(ssrRenderComponent($setup["CardPopulationVue"], null, null, _parent));
  _push(`</ul></div></div></section><section class="h-fit w-[85%] flex flex-col mt-14 mx-auto" data-aos="fade-up"><h2 class="text-3xl text-gray-950 cursor-default font-semibold text-start"> POPULASI </h2><hr class="h-0.5 w-full bg-gray-950 rounded-md"><div class="h-fit w-full grid place-items-center mt-6 mx-auto" data-aos="fade-up"><p class="text-1xl text-gray-950 cursor-default font-medium text-justify" style="${ssrRenderStyle({ lineHeight: "1.5" })}"> Tau gak sih kalo provinsi ini jadi provinsi dengan jumlah penduduk terbanyak di Indonesia? Berdasarkan data yang dikutip dari <a href="https://kedirikota.bps.go.id/indicator/12/358/1/jumlah-penduduk-provinsi-jawa-timur.html" class="text-blue-500 underline transition-all duration-300 ease-in-out hover:text-blue-400" target="_blank"> BPS Kota Kediri</a> dan <a href="https://www.inilah.com/10-provinsi-dengan-jumlah-penduduk-terbanyak-di-indonesia-tahun-2023" class="text-blue-500 underline transition-all duration-300 ease-in-out hover:text-blue-400" target="_blank"> inilah.com</a>, Provinsi Jawa Timur menempati posisi urutan kedua setelah Provinsi Jawa Barat dengan total jumlah penduduk sebanyak 41.416.407 jiwa. <b>Kota dengan penduduk terbanyak pada tahun 2023</b> ditempati oleh <b>Kota Surabaya</b> dengan jumlah penduduknya mencapai <b>2.893.698 jiwa</b>, diikuti oleh Kota Malang dengan jumlah penduduknya mencapai <b>2.703.175 jiwa.</b> Hal ini tak dapat dipungkiri karena pada dasarnya kedua kota tersebut sering dikunjungi oleh para wisatawan maupun para perantau yang ingin mengadu nasib. Sedangkan untuk <b>kota dengan penduduk paling sedikit di tahun 2023</b> ditempati oleh <b>Kota Mojokerto</b> dengan jumlah penduduknya mencapai <b>135.414 jiwa</b>, diikuti oleh <b>Kota Blitar</b> dengan jumlah penduduknya mencapai <b>153.541 jiwa.</b></p></div></section><img src="/static/img/seruni-point.jpg" class="h-[30rem] w-[85%] object-cover mt-14 mx-auto rounded-xl" data-aos="fade-up"><section class="h-fit w-[85%] flex flex-col mt-14 mx-auto" data-aos="fade-up"><h2 class="text-3xl text-gray-950 cursor-default font-semibold text-start"> PUNCAK TERTINGGI </h2><hr class="h-0.5 w-full bg-gray-950 rounded-md"><section class="h-fit w-full flex mt-6 mx-auto" data-aos="fade-up"><p class="text-1xl text-gray-950 cursor-default font-medium text-justify" style="${ssrRenderStyle({ lineHeight: "1.5", textAlignLast: "start" })}"> Siapa disini yang pernah ke Gunung Semeru? Tau gak sih kalo Gunung Semeru itu jadi puncak tertinggi di Jawa Timur? Berdasarkan data yang dimuat dari artikel <a href="https://www.detik.com/jatim/wisata/d-6008094/6-gunung-tertinggi-di-jawa-timur-simak-detailnya" class="text-blue-500 underline transition-all duration-300 ease-in-out hover:text-blue-400" target="_blank"> Detik.com</a>, ketinggian dari Gunung Semeru sendiri yakni sekitar 3.676 mdpl, tinggi banget kan! </p></section></section><section class="h-fit w-[85%] flex flex-col mt-14 mx-auto" data-aos="fade-up"><p class="text-3xl text-gray-950 cursor-default font-semibold text-start"> SUMBER DAYA ALAM </p><hr class="h-0.5 w-full bg-gray-950 rounded-md"><section class="h-fit w-full grid place-items-center mt-6 mb-8 mx-auto" data-aos="fade-up"><h2 class="text-1xl text-gray-950 cursor-default font-medium text-justify" style="${ssrRenderStyle({ lineHeight: "1.5", textAlignLast: "start" })}"> Pernah minum es tebu dari penjual keliling belum? Rasanya manis dan seger di tenggorokan, bukan? Tebu yang kalian teguk di siang hari bisa jadi itu berasal dari Jawa Timur lho, karena seperti yang dikutip di halaman <a href="https://primagama.co.id/blog/berbagai-jenis-sumber-daya-alam-yang-ada-di-pulau-jawa/#:~:text=Provinsi%20Jawa%20Timur&amp;text=Potensi%20sumber%20daya%20alam%20di%20Jawa%20Timur%20dalam%20sektor%20perkebunan,bahan%20pangan%20yang%20banyak%20dibutuhkan." class="text-blue-500 underline transition-all duration-300 ease-in-out hover:text-blue-400" target="_blank"> Primagama.com</a>, komoditas perkebunan terbesar Jawa Timur adalah tebu dan ini dibuktikan dengan adanya 31 unit pabrik gula. Wow, banyak banget! </h2></section></section><section class="h-fit w-[85%] flex flex-col mt-14 mx-auto" data-aos="fade-up"><h2 class="text-3xl text-gray-950 cursor-default font-semibold text-start"> WEBSITE TERKAIT </h2><hr class="h-0.5 w-full bg-gray-950 rounded-md"><div class="h-fit w-full pl-16 mt-6" data-aos="fade-up"><ul class="text-1xl text-gray-950 cursor-default font-medium text-justify list-disc space-y-3" style="${ssrRenderStyle({ lineHeight: "1.5" })}"><li><a class="font-bold hover:underline" href="https://www.bmkg.go.id/cuaca/prakiraan-cuaca-indonesia.bmkg?Prov=12&amp;NamaProv=Jawa%20Timur">Kondisi Cuaca</a></li><li><a class="font-bold hover:underline" href="https://www.posindonesia.co.id/en">Kantor Pos</a></li></ul></div></section><section class="h-fit w-[85%] flex flex-col mt-14 mx-auto" data-aos="fade-up"><h2 class="text-3xl text-gray-950 cursor-default font-semibold text-start"> NOMOR DARURAT </h2><hr class="h-0.5 w-full bg-gray-950 rounded-md"><div class="h-fit w-full pl-16 mt-6" data-aos="fade-up"><ul class="text-1xl text-gray-950 cursor-default font-medium text-justify list-disc space-y-3" style="${ssrRenderStyle({ lineHeight: "1.5" })}"><li>Polisi: 110</li><li>Ambulans: 119</li><li>Pemadam Kebakaran: 113</li></ul></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/tentang-jatim.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TentangJatimPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$TentangJatim = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TentangJatim;
  return renderTemplate(_a || (_a = __template(["", ' <script type="text/javascript">\ndocument.addEventListener("DOMContentLoaded", function () {\n  new Splide(".splide__1", {\n    drag: "free",\n    perPage: 3,\n    type: "loop",\n    autoScroll: {\n      speed: 1,\n    },\n  }).mount(window.splide.Extensions);\n});\n<\/script>'])), renderComponent($$result, "MainLayout", $$MainLayout, { "description": "Menelusuri keindahan alam, infografis singkat, dan pesona masyarakat yang memikat di setiap sudut provinsi.", "title": "Tentang Jatim" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TentangJatimPage", TentangJatimPage, {})} ` }));
}, "C:/laragon/www/Projects/Astro/wdc/src/pages/tentang-jatim.astro", void 0);

const $$file = "C:/laragon/www/Projects/Astro/wdc/src/pages/tentang-jatim.astro";
const $$url = "/tentang-jatim";

export { $$TentangJatim as default, $$file as file, $$url as url };
