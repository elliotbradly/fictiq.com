"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var serverRenderer$1 = require("@vue/server-renderer");
var vitePluginSsr = require("vite-plugin-ssr");
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var pluginVue_exportHelper = require("./plugin-vue_export-helper.db096aab.js");
var logoUrl = "/assets/logo.0ab59a12.svg";
const key = Symbol();
function usePageContext() {
  const pageContext = vue.inject(key);
  return pageContext;
}
function setPageContext(app, pageContext) {
  app.provide(key, pageContext);
}
var Link_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const pageContext = usePageContext();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: { active: vue.unref(pageContext).urlPathname === _ctx.$attrs.href }
      }, _attrs))} data-v-7c582ad2>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("renderer/Link.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Link = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$1, [["__scopeId", "data-v-7c582ad2"]]);
var PageShell_vue_vue_type_style_index_0_lang = "";
var PageShell_vue_vue_type_style_index_1_scoped_true_lang = "";
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "layout" }, _attrs))} data-v-0fe5f23c><div class="navigation" data-v-0fe5f23c><a href="/" class="logo" data-v-0fe5f23c><img${serverRenderer.ssrRenderAttr("src", logoUrl)} height="64" width="64" alt="logo" data-v-0fe5f23c></a>`);
      _push(serverRenderer.ssrRenderComponent(Link, { href: "/" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              vue.createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(Link, { href: "/about" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              vue.createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="content" data-v-0fe5f23c>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("renderer/PageShell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PageShell = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["__scopeId", "data-v-0fe5f23c"]]);
function createApp(pageContext) {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = vue.defineComponent({
    render() {
      return vue.h(PageShell, {}, {
        default() {
          return vue.h(Page, pageProps || {});
        }
      });
    }
  });
  const app = vue.createSSRApp(PageWithLayout);
  setPageContext(app, pageContext);
  return app;
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const app = createApp(pageContext);
  const appHtml = await serverRenderer$1.renderToString(app);
  const { documentProps } = pageContext;
  const title = documentProps && documentProps.title || "Vite SSR app";
  const desc = documentProps && documentProps.description || "App using Vite + vite-plugin-ssr";
  const documentHtml = vitePluginSsr.escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${vitePluginSsr.dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {}
  };
}
exports.passToClient = passToClient;
exports.render = render;
