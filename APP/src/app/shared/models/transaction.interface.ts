export interface Transaction {
    transaction_id: {
        type: Number,
        primaryKey: true
    },
    users_id: Number,
    organisation_id: Number,
    transaction_typee: String,
    payment_type: String,
    amount: String,
    currency_id: Number,
    transaction_comments: String,
    status: Boolean,
    created: String,
    before_debit: String,
    trip_id: String,
    payment_gateway_id: Number,
    tax_no: String,
    tax_email: String
}