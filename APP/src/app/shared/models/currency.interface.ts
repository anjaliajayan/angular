export interface Currency {
    currency_id: {
        type: Number,
        primary: true
    },
    code: String,
    name: String,
    symbol: String,
    country_id: Number,
    rate: Number,
    status: Number
}