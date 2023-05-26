
export default {

    async fetch(request, env) {
        const url = new URL(request.url);

        var idx = url.searchParams.get('idx')
        var src = url.searchParams.get('src')
        var val = url.searchParams.get('val')
        var bit;

        if (val == null) val = 0;

        if (url.pathname.startsWith('/auth/')) {

            var neo = 'https://003-light.beeing.workers.dev/fetchColor?val=' + val;
            neo = encodeURI(neo);
            //url = url.substring(0, url.length - 1);
            console.log(neo)
            bit = await fetch(url, { method: 'GET' })
            var dat = await bit.json()

            console.log('sjow ' + dat)

            //we get a color

            //var jwt = require('@tsndr/cloudflare-worker-jwt')
            //const token = await jwt.sign({ name: 'John Doe', email: 'john.doe@gmail.com' }, 'secret')
            return new Response(JSON.stringify(dat));

        } else if (url.pathname.startsWith('/api/')) {
            // TODO: Add your custom /api/* logic here.

            var value = 'sweet'

            switch (url.pathname) {
                case '/openService':
                    bit = await globalThis.TASUS.hunt(globalThis.TASUS.ActSrv.OPEN_SERVICE, { idx });
                    value = bit;
                    break
                case '/update':
                    value = Number(value) + 1
                    break
                case '/api/reset/':
                    value = 555
                    break
                case '/':
                    value = 'change';
                    break
                default:
                    return new Response('Not found', { status: 404 })
            }



            return new Response(value);
        }
        // Otherwise, serve the static assets.
        // Without this, the Worker will error and no assets will be served.
        return env.ASSETS.fetch(request);
    },
}