// Production
const EXCHANGE_URL = "https://api.exchangerate-api.com/v4/latest/USD"
// const API_URL = "http://herokuapp.com/"

// Development
// const API_URL = "http://localhost:4000"
const CONTACTS_URL = "https://contacts-express.herokuapp.com/contacts/"

// ---- Data Sets
const EXCHANGE_STATIC = {
    "base": "USD",
    "date": "2019-10-23",
    "time_last_updated": 1571789419,
    "rates": {
        "USD": 1,
        "AED": 3.671945,
        "ARS": 58.489895,
        "AUD": 1.45772,
        "BGN": 1.756646,
        "BRL": 4.120368,
        "BSD": 1,
        "CAD": 1.309512,
        "CHF": 0.988121,
        "CLP": 724.955604,
        "CNY": 7.07736,
        "COP": 3445.333333,
        "CZK": 22.961292,
        "DKK": 6.706656,
        "DOP": 52.657933,
        "EGP": 16.157213,
        "EUR": 0.897837,
        "FJD": 2.18672,
        "GBP": 0.773059,
        "GTQ": 7.770594,
        "HKD": 7.842703,
        "HRK": 6.681288,
        "HUF": 296.121622,
        "IDR": 14124.746684,
        "ILS": 3.539413,
        "INR": 70.921596,
        "ISK": 125.031387,
        "JPY": 108.570349,
        "KRW": 1172.036914,
        "KZT": 388.989247,
        "MXN": 19.120436,
        "MYR": 4.185938,
        "NOK": 9.140304,
        "NZD": 1.560808,
        "PAB": 1,
        "PEN": 3.342458,
        "PHP": 51.171798,
        "PKR": 155.931034,
        "PLN": 3.84052,
        "PYG": 6577.454545,
        "RON": 4.273597,
        "RUB": 63.72059,
        "SAR": 3.750566,
        "SEK": 9.635717,
        "SGD": 1.361955,
        "THB": 30.292734,
        "TRY": 5.8301,
        "TWD": 30.561182,
        "UAH": 24.856535,
        "UYU": 37.352607,
        "VND": 23382.142857,
        "ZAR": 14.680972
    }
}

const RandomName = 'Steve'

module.exports = {
    EXCHANGE_URL,
    EXCHANGE_STATIC,
    CONTACTS_URL,
    RandomName
    // API_URL
}