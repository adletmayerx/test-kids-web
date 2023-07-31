class Api {
  private _url: string;
  private _headers: HeadersInit;

  constructor({ url, headers }: { url: string; headers: HeadersInit }) {
    this._url = url;
    this._headers = headers;
  }

  authorize(email: string, password: string) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this.checkResult);
  }

  register(email: string, password: string) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this.checkResult);
  }

  signOut = () => {
    return fetch(`${this._url}/signout`, {
      method: "DELETE",
      credentials: "include",
    }).then(this.checkResult);
  };

  addFeedback(feedback: string) {
    return fetch(this._url + "/users/me/feedback", {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ feedback }),
    }).then(this.checkResult);
  }

  checkResult = (res: Response) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };
}

const api = new Api({
  url: "http://62.84.116.43",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
