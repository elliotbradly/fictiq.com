var pivot = require("./888.market");

export const onRequestGet = async (context) => {
  const url = "https://render-com-hjy7.onrender.com/mike";

  var body = { idx: context.env.OPENAI_API_KEY };

  const init = {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  };

  const bit = await fetch(url, init);
  const results = await gatherResponse(response);
  return new Response(results, init);

  //var response = "yo yo yo bit" + JSON.stringify(bit);
  //return new Response(response);
};

// POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
export const onRequestPost = async ({ request }) => {
  const { name } = await request.json();
  return new Response(`Hello, ${name}!`);
};
