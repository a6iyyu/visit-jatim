/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_BEAXyP6o.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                   */
import { _ as _export_sfc, $ as $$MainLayout } from './404_P5xe3fk-.mjs';
import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { d as destination } from './kota-_-desa_DJ19rtvv.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GridList",
  props: ["data"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const array = ref([...props.data].sort(() => Math.random() - 0.5).slice(0, 6));
    const __returned__ = { props, array };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-fit grid items-center sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3" }, _attrs))}><!--[-->`);
  ssrRenderList($setup.array, (content) => {
    _push(`<a${ssrRenderAttr("href", content.link)} style="${ssrRenderStyle({ "background-image": "url(" + content.img + ")" })}" class="w-full h-64 mx-auto flex flex-col items-center justify-end object-cover object-center bg-cover cursor-pointer" data-aos="fade-up"><div class="min-w-full min-h-full bg-gradient-to-t from-black opacity-50 hover:opacity-70 transition-opacity duration-100 z-20"></div><div class="absolute max-w-72 flex flex-col items-center z-20 text-slate-100 font-semibold text-center"><h3 class="md:text-xl lg:text-2xl my-1 mx-7">${ssrInterpolate(content.destination)}</h3><h4 class="md:text-base lg:text-lg mb-6">${ssrInterpolate(content.city)}</h4></div></a>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/GridList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GridListVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "taman-nasional",
  setup(__props, { expose: __expose }) {
    __expose();
    const destinations = ref(destination["taman-nasional"]);
    const __returned__ = { destinations, GridListVue };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><section class="h-[35rem] w-full mx-auto bg-center bg-cover bg-no-repeat z-10" style="${ssrRenderStyle({
    backgroundImage: "url(/static/img/taman-nasional-baluran.jpg?url)"
  })}"><div class="h-[35rem] w-full bg-gradient-to-t md:bg-gradient-to-t from-black opacity-60 z-20"></div></section><section class="absolute h-60 w-4/5 md:w-3/5 lg:w-2/5 left-1/2 transform -translate-x-1/2 grid place-items-center top-[27rem] rounded-xl bg-gradient-to-tr from-slate-400 to-slate-300 z-20" style="${ssrRenderStyle({ boxShadow: "0.75rem 0.75rem 0.75rem #48484825" })}"><div class="h-full w-full grid place-items-center px-10"><p class="text-2xl md:text-3xl text-gray-950 text-center cursor-default font-semibold" data-aos="fade-up"> Menyatu dengan Alam di <br> Taman Nasional </p></div></section><section class="h-fit w-full flex flex-col items-center mt-56 mx-auto"><h2 class="text-2xl md:text-3xl text-gray-950 cursor-default font-semibold text-center mb-2" data-aos="fade-up"> MENJELAJAH DI ALAM LIAR </h2><hr class="h-0.5 w-[85%] bg-gray-950" data-aos="fade-up"></section><section class="h-fit w-[85%] grid place-items-center mb-6 mt-1 mx-auto"><p class="text-base md:text-xl my-3 text-gray-950 cursor-default font-medium text-justify" style="${ssrRenderStyle({ textAlignLast: "center" })}" data-aos="fade-up"> Kalo udah mentok gatau pengen liburan kemana, enaknya ngapain lagi ya? Di Jawa Timur, ada wisata alternatif lainnya lho, misalnya aja ke taman nasional. Ada beberapa taman nasional yang bisa kalian kunjungi selama liburanmu di Jawa Timur, Mari kita berkelana di alam liar Jawa Timur untuk mengungkap keajaiban alam, flora, dan fauna yang memukau! </p></section><section class="h-fit w-[85%] grid place-items-center mx-auto my-8">`);
  _push(ssrRenderComponent($setup["GridListVue"], { data: $setup.destinations }, null, _parent));
  _push(`</section><section class="h-fit w-[85%] grid place-items-center mb-4 mx-auto" data-aos="fade-up"><h4 class="text-1xl italic cursor-default font-semibold"> Dan masih banyak lagi...~ </h4></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/taman-nasional.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TamanNasionalPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro();
const $$TamanNasional = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TamanNasional;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "description": "Jelajahi panorama alam yang menakjubkan, telusuri keanekaragaman flora dan fauna yang memukau!", "title": "Taman Nasional" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TamanNasionalPage", TamanNasionalPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/laragon/www/Projects/Astro/wdc/src/layouts/taman-nasional.vue", "client:component-export": "default" })} ` })}`;
}, "C:/laragon/www/Projects/Astro/wdc/src/pages/taman-nasional.astro", void 0);

const $$file = "C:/laragon/www/Projects/Astro/wdc/src/pages/taman-nasional.astro";
const $$url = "/taman-nasional";

export { $$TamanNasional as default, $$file as file, $$url as url };
