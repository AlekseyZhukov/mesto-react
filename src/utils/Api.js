

class Api {
    constructor(config) {
        this.mainUrl = config.mainUrl;
        this.headers = config.headers;
    }

    getInitialCards(url) {
        return fetch(this.mainUrl + url,
            { headers: this.headers })
            .then(this._getResponseData)
    }

    getUserInfo(url) {
        return fetch(this.mainUrl + url, {
            headers: this.headers
        })
        .then(this._getResponseData)

    }

    changeUserInfo(url, data) {
        return fetch(this.mainUrl + url, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then(this._getResponseData)
    }

    changeUserAvatar(url, data) {
        return fetch(this.mainUrl + url, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: data.avatar,

            })
        })
        .then(this._getResponseData)
    }

    newCardAdd(url, data) {
        return fetch(this.mainUrl + url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(this._getResponseData)

    }

    deleteCard(url) {
        return fetch(this.mainUrl + url, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._getResponseData)
    }
    changeLikeCardStatus(id, isLiked) {
        if (isLiked) {
          return this.likeRemove(`cards/likes/${id}`);
        } else {
          return this.likeAdd(`cards/likes/${id}`);
        }
      }

    likeAdd(url) {
        return fetch(this.mainUrl + url, {
            method: 'PUT',
            headers: this.headers
        })
        .then(this._getResponseData)
    }

    likeRemove(url) {
        return fetch(this.mainUrl + url, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(this._getResponseData)      
    }
    
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`????????????: ${res.status}`);
        }
        return res.json();
    }

}

export const api = new Api({
    mainUrl: 'https://mesto.nomoreparties.co/v1/cohort-27/',
    headers: {
      authorization: '6d5ca00d-91ba-48f8-98c4-b38aa97b3c19',
      'Content-Type': 'application/json'
    }
  });




