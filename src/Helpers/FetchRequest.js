export default class FetchRequest {
  url;

  method;

  body;

  headers;

  constructor({
    url = '',
    method = 'GET',
    body,
    headers = {
      'Content-type': 'application/json; charset=UTF-8',
    },
  } = {}) {
    this.url = url;
    this.method = method;
    this.body = body;
    this.headers = headers;
  }

  async call() {
    const options = {
      method: this.method,
      body: this.method === 'POST' ? this.body : undefined,
      headers: this.method === 'POST' ? this.headers : undefined,
    };

    try {
      const response = await fetch(this.url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
