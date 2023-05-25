export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname.startsWith('/api/')) {
            // TODO: Add your custom /api/* logic here.

            switch (url.pathname) {
                case '/openService':
                    bit = await globalThis.TASUS.hunt(globalThis.TASUS.ActSrv.OPEN_SERVICE, { idx });
                    value = bit;
                    break
                case '/update':
                    value = Number(value) + 1
                    break
                case '/reset/':
                    value = 555
                    break
                case '/':
                    value = 'change';
                    break
                default:
                    return new Response('Not found', { status: 404 })
            }





            return new Response('Ok');
        }
        // Otherwise, serve the static assets.
        // Without this, the Worker will error and no assets will be served.
        return env.ASSETS.fetch(request);
    },
}