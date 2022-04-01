class API {
  #api_key;
  constructor(apiKey) {
    this.API_KEY = apiKey;
  }

  set API_KEY(apiKey) {
    this.#api_key = `api_key=${apiKey}`;
  }

  get API_KEY() {
    return this.#api_key;
  }

  async fetchApi(url) {
    try {
      let api = await fetch(url + this.#api_key);
      api = await api.json();
      return api;
    } catch (error) {
      console.log(error);
    }
  }
}

const sapaan = 'Haloo gess'

export default API
export{
    sapaan
}