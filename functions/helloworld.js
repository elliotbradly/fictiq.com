export default {
    async fetch(request) {
        const data = {
            hello: "world",
        };

        const json = JSON.stringify(data, null, 2);

        return new Response(json, {
            headers: {
                "text/html;charset=UTF-8"
            },
        });
    },
};