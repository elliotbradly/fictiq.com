export default {
    async fetch(request, env) {
        const url = new URL(request.url)

        var idx = url.searchParams.get('idx')
        var src = url.searchParams.get('src')
        var val = url.searchParams.get('val')
        var bit

        if (val == null) val = 0

        if (url.pathname.startsWith('/auth/')) {
            var neo =
                'https://003-light.beeing.workers.dev/fetchColor?val=' + val
            neo = encodeURI(neo)
            //url = url.substring(0, url.length - 1);
            console.log(neo)
            bit = await fetch(neo, { method: 'GET' })
            var jsonBit = await bit.json()

            var bit = jsonBit.bit.clrBit.dat

            console.log('name ' + bit.name)
            console.log('hex ' + bit.hex)

            //nbf: Math.floor(Date.now() / 1000) + (60 * 60),      // Not before: Now + 1h
            //exp: Math.floor(Date.now() / 1000) + (2 * (60 * 60)) // Expires: Now + 2h

            //we get a color
            // Creating a token
            var jwt = require('@tsndr/cloudflare-worker-jwt')
            var token = await jwt.sign(
                {
                    name: 'John Doe',
                    email: 'john.doe@gmail.com',
                    nbf: Math.floor(Date.now() / 1000) + 60 * 1, // Not before: Now + 1min
                    exp: Math.floor(Date.now() / 1000) + 2 * (60 * 2), // Expires: Now + 2min
                },
                'albin0 alligat0r'
            )

            var fin = { idx: bit.hex, src: bit.name, dat: token }

            //const token = await jwt.sign({ name: 'John Doe', email: 'john.doe@gmail.com' }, 'secret')
            return new Response(JSON.stringify(fin))
        } else if (url.pathname.startsWith('/check/')) {
            var token = idx
            const isValid = await jwt.verify(token, 'albin0 alligat0r')

            if ( isValid == true){
                const { payload } = jwt.decode(token)
                    return new Response("valid " + JSON.stringify(payload))
            }
            else{
                    return new Response("not valid")
            }

    // Check for validity
    if (!isValid)


        } else if (url.pathname.startsWith('/api/')) {
            // TODO: Add your custom /api/* logic here.

            var value = 'sweet'

            switch (url.pathname) {
                case '/openService':
                    bit = await globalThis.TASUS.hunt(
                        globalThis.TASUS.ActSrv.OPEN_SERVICE,
                        { idx }
                    )
                    value = bit
                    break
                case '/update':
                    value = Number(value) + 1
                    break
                case '/api/reset/':
                    value = 555
                    break
                case '/':
                    value = 'change'
                    break
                default:
                    return new Response('Not found', { status: 404 })
            }

            return new Response(value)
        }
        // Otherwise, serve the static assets.
        // Without this, the Worker will error and no assets will be served.
        return env.ASSETS.fetch(request)
    },
}
