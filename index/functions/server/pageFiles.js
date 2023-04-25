"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const pageFiles = {
  ".page": { "/renderer/_error.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/_error.page.aa9e6b2d.js");
  }), "/pages/about/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.f74db2ff.js");
  }), "/pages/index/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.136c4139.js");
  }) },
  ".page.client": { "/renderer/_default.page.client.ts": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.client.6de15507.js");
  }) },
  ".page.server": { "/renderer/_default.page.server.ts": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.server.e34e4f29.js");
  }) },
  ".page.route": {}
};
exports.pageFiles = pageFiles;
