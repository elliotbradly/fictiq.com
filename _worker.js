export default {
    async fetch(request, env) {
        var light = require('./003.light.js')
        var tasus = require('./015.tasus.js')
        var machine = require('./555.machine.js')

        const url = new URL(request.url)

        var idx = url.searchParams.get('idx')
        var src = url.searchParams.get('src')
        var val = url.searchParams.get('val')
        var bit

        if (val == null) val = 0

        if (url.pathname.startsWith('/auth/')) {
            bit = await globalThis.LIGHT.hunt(
                globalThis.LIGHT.ActClr.FETCH_COLOR,
                { val }
            )

            return new Response(JSON.stringify({ idx: 'auth', dat: bit }))
        } else if (url.pathname.startsWith('/open/')) {
            bit = await globalThis.TASUS.hunt(
                globalThis.TASUS.ActSrv.OPEN_SERVICE,
                { idx }
            )

            return new Response(JSON.stringify({ idx: 'open', dat: bit }))
        } else if (url.pathname.startsWith('/black-meat-machine/')) {
            return new Response(JSON.stringify({ idx: 'black-meat-machine' }))
        }
        // Otherwise, serve the static assets.
        // Without this, the Worker will error and no assets will be served.
        return env.ASSETS.fetch(request)
    },
}
