export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    var idx = url.searchParams.get("idx");
    var src = url.searchParams.get("src");
    var dat = url.searchParams.get("dat");
    var val = url.searchParams.get("val");
    var bit;

    if (val == null) val = 0;

    if (url.pathname.startsWith("/writePlayer/")) {

      var url0 = "'https://orange-voice-caa1.beeing.workers.dev/writePlayer/?idx=" + idx;

      const response = await fetch(url0, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return new Response(JSON.stringify(data));
    }
    else if (url.pathname.startsWith("/open/")) {
      bit = await globalThis.TASUS.hunt(globalThis.TASUS.ActSrv.OPEN_SERVICE, { idx });

      return new Response(JSON.stringify({ idx: "open", dat: bit }));
    }
    else if (url.pathname.startsWith("/black-meat-machine/")) {
      switch (idx) {
        case "readTime":
          bit = { idx: "read-time" };
          break;

        default:
          bit = { idx: "black-meat-machine" };
          break;
      }

      return new Response(JSON.stringify(bit));
    }
    // Otherwise, serve the static assets.
    // Without this, the Worker will error and no assets will be served.
    return env.ASSETS.fetch(request);
  },
};
