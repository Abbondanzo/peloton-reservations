const CORS_BYPASS = "https://cors.abbondanzo.workers.dev";

const doSend =
  (method: "GET" | "POST") => async (destination: string, body?: BodyInit) => {
    const resp = await fetch(`${CORS_BYPASS}/${destination}`, { method, body });
    const json = await resp.json();
    if (resp.status >= 200 && resp.status < 300) {
      return json;
    } else {
      throw new Error(json);
    }
  };

const get = doSend("GET");
const post = doSend("POST");

export const base = {
  get,
  post,
};
