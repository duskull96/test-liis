
export const Api = {

    URL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0',
    token: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    country: '/RU',
    currency: '/RUB',
    locale: '/ru-RU',
    originPlace: '/SVO',
    destinationPlace: '/JFK/',
    inboundPartialDate: '/',
    browseQuotes: (outboundPartialDate) => {
        return fetch(Api.URL + Api.country + Api.currency + Api.locale + Api.originPlace + Api.destinationPlace + outboundPartialDate + Api.inboundPartialDate, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "2212962c14mshd24a588ceae8d42p1a854ajsn80040d81bdb2",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
            }
        })
    },

    getToken: (login, password) => {
        return new Promise((res, rej) => {
            if (login === 'testuser@gmail.com' && password === 'q1w2e3r4t5y6') {
                res({
                    status: 200,
                    body: {
                        message: { token: Api.token }
                    }
                })
            } else {
                rej({
                    status: 400,
                    body: {
                        message: 'Incorrect login or password'
                    }
                })
            }
        })
    }
}