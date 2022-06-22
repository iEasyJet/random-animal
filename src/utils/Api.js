class Api {  constructor(config) {
    this._url = config.url;
  }

  // Анализирование ответа
  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`Произошла ошибка со статус-кодом ${res.status}`)
    );
  }

  // Получение рандомного котика фото
  randomCatPhoto() {
    return fetch('https://cataas.com/cat?json=true').then((res) =>
      this._parseResponse(res)
    );
  }

  // Получение рандомного котика фото с тектом
  randomCatPhotoWhithText(text) {
    return fetch(`${this._url}/cat/says/${text}?json=true`).then((res) =>
      this._parseResponse(res)
    );
  }

  // Получение рандомного котика гифка кастомная
  randomCatPhotoWhithCustom(text, size, color) {
    return fetch(
      `${this._url}/cat/says/${text}?size=${size}&color=${color}&json=true`
    ).then((res) => this._parseResponse(res));
  }

  // Получение рандомного котика гифка
  randomCatGif() {
    return fetch(`${this._url}/cat/gif?json=true`).then((res) =>
      this._parseResponse(res)
    );
  }

  // Получение рандомного котика гифка с текстом
  randomCatGifWhithText(text) {
    return fetch(`${this._url}/cat/gif/says/${text}?json=true`).then((res) =>
      this._parseResponse(res)
    );
  }

  // Получение рандомного котика гифка кастомная
  randomCatGifWhithCustom(text, size, color) {
    return fetch(
      `${this._url}/cat/gif/says/${text}?size=${size}&color=${color}&json=true`
    ).then((res) => this._parseResponse(res));
  }

  // Рандомная собака
  randomDog() {
    return fetch(`https://random.dog/woof.json`).then((res) =>
      this._parseResponse(res)
    );
  }

  randomFox() {
    return fetch('https://randomfox.ca/floof/').then((res) =>
      this._parseResponse(res)
    );
  }
}

const configApi = {
  url: 'https://cataas.com',
};

const api = new Api(configApi);

export default api;
