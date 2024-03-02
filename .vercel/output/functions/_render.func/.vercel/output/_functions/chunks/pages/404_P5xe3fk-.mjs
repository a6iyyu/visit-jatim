/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, f as renderSlot, g as renderHead, h as addAttribute } from '../astro_BEAXyP6o.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                        */
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';

const Logo = "/_astro/logo-black.CZKHq5CH.png";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "h-44 w-[85%] flex flex-row items-center justify-between mx-auto" }, _attrs))}><h2 class="text-gray-950 text-2xl cursor-default font-semibold"> VISIT JATIM <p class="text-1xl font-medium">© 2024</p></h2><h2 class="text-gray-950 text-2xl cursor-default font-semibold flex flex-col"> Created By: <a href="https://github.com/Afif-Ghifari" class="text-1xl font-medium" target="_blank">Muhammad Afif Al Ghifari</a><a href="https://github.com/a6iyyu" class="text-1xl font-medium" target="_blank">Rafi Abiyyu Airlangga</a></h2></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const Footer = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { description, title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta name="description"', '><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", '</title><link rel="icon"', '><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">', "</head> <body> ", " ", " ", " ", " ", ' <script crossorigin="https://cdn.tailwindcss.com"><\/script>  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"><\/script> <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js"><\/script> <script type="text/javascript" src="https://unpkg.com/aos@next/dist/aos.js"><\/script> <script type="text/javascript">\n    AOS.init();\n  <\/script> </body></html>'])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, addAttribute(Logo, "href"), renderHead(), renderComponent($$result, "ScrollIndicator", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/laragon/www/Projects/Astro/wdc/src/components/ScrollIndicator", "client:component-export": "ScrollIndicator" }), renderComponent($$result, "ScrollToTop", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/laragon/www/Projects/Astro/wdc/src/components/ScrollToTop", "client:component-export": "ScrollToTop" }), renderComponent($$result, "Header", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/laragon/www/Projects/Astro/wdc/src/components/Header", "client:component-export": "Header" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, {}));
}, "C:/laragon/www/Projects/Astro/wdc/src/layouts/main-layout.astro", void 0);

const _imports_0 = "/_astro/404.wEzvZWqi.png";

const _sfc_main = {};


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="h-32 w-full"></div><section class="not-found-page h-[40rem] w-full grid place-items-center"><div class="h-full w-[90%] block lg:flex"><div class="h-[45%] lg:h-full w-1/2 grid place-items-center"><img${
    ssrRenderAttr("src", _imports_0)
  } alt="404: Not Found!" data-aos="fade-up"></div><div class="h-[55%] lg:h-full w-1/2 flex flex-col items-center justify-center"><div class="h-1/4 w-full flex flex-col items-start justify-end"><p class="text-gray-950 text-5xl cursor-default font-bold" data-aos="fade-up"> Oops! </p><p class="text-gray-950 text-4xl cursor-default font-medium" data-aos="fade-up"> Didn&#39;t find anything here. </p></div><div class="h-1/3 w-full grid place-items-center"><p class="text-gray-900 text-2xl cursor-default font-normal text-justify" data-aos="fade-up"> Seems like this page took a brushstroke in the wrong direction. Let&#39;s navigate back to the main exhibit together. </p></div><div class="h-1/5 w-full flex items-center"><a href="/" class="back-to-home flex items-center justify-center rounded-full transition-all duration-300 ease-in-out bg-gray-950 text-slate-50 hover:bg-gray-800 hover:text-white" data-aos="fade-up"><div class="grid place-items-center rounded-full transition-all duration-300 ease-in-out text-2xl bg-slate-50 text-gray-950 hover:bg-slate-100 hover:text-gray-800" style="${
    ssrRenderStyle({ transform: 'rotate(225deg)' })
  }"> ➔ </div><div class="grid place-items-center"><p class="font-bold text-white">Drift Home</p></div></a></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const NotFoundPage = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "description": "Sayang sekali, halaman yang Anda cari tidak tersedia di Visit Jatim.", "title": "404: Not Found!" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NotFoundPage", NotFoundPage, {})} ` })}`;
}, "C:/laragon/www/Projects/Astro/wdc/src/pages/404.astro", void 0);

const $$file = "C:/laragon/www/Projects/Astro/wdc/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, _export_sfc as _, _404 as a };
