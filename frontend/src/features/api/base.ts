const CORS_BYPASS = "https://cors.abbondanzo.workers.dev";

const doSend =
  (method: "GET" | "POST", bypass: boolean = false) =>
  async <T>(
    destination: string,
    request: Omit<RequestInit, "method"> = {}
  ): Promise<T> => {
    const resp = await fetch(
      bypass ? `${CORS_BYPASS}/${destination}` : destination,
      { method, ...request }
    );
    const json = await resp.json();
    if (resp.status >= 200 && resp.status < 300) {
      return json;
    } else {
      throw new Error(json);
    }
  };

const get = doSend("GET", false);
const post = doSend("POST", false);
const proxyGet = doSend("GET", true);

export const base = {
  get,
  post,
  proxyGet,
};
