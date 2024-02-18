var pivot = require("./888.market");

export const onRequestGet = async () => {
  var bit = await globalThis.MARKET.hunt(MARKET.ActOai.UPDATE_OPENAI, { idx: env.OPENAI_API_KEY });

  var response = "yo yo yo bit" + JSON.stringify(bit);
  return new Response(response);
};

// POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
export const onRequestPost = async ({ request }) => {
  const { name } = await request.json();
  return new Response(`Hello, ${name}!`);
};
