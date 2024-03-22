export const onRequestPost = async (context) => {
  var body = await context.request.json();

  const response = await fetch(`https://discord.com/api/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: context.env.VITE_DISCORD_CLIENT_ID,
      client_secret: context.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code: body.code,
    }),
  });

  async function gatherResponse(response) {
    const { headers } = response;
    const contentType = headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return JSON.stringify(await response.json());
    } else if (contentType.includes("application/text")) {
      return response.text();
    } else if (contentType.includes("text/html")) {
      return response.text();
    } else {
      return response.text();
    }
  }

  const results = await gatherResponse(response);

  const init = {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  };

  return new Response(results, init);
};
