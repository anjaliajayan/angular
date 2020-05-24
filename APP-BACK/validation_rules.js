let rules = {};

// Topup section
rules.updateTopup = {
    topup_id: 'required',
    bank_charge_currency: 'required',
    bank_charge: 'required',
    topup_status: 'required',
    organisation_id: 'required',
    payment_amount: 'required'
}
// Add Floating deposit
rules.addFloatingDeposit = {
    agency_iata_num: 'required',
    agency_name: 'required',
    agency_country: 'required',
    agency_currency: 'required',
    topup_type: 'required',
    topup_subtype: 'required',
    topup_purpose: 'required',
    // document_ref_no: 'required',
    request_no: 'required',
    request_initiator: 'required',
    bank_name: 'required',
    bank_account_no: 'required',
    payment_date: 'required',
    payment_currency: 'required',
    payment_amount: 'required',
    payment_type: 'required',
    attachment: 'required',
    // bank_charge: 'required'
}

// Agent Transaction
rules.agentTransaction = {
    amount: 'required',
    selectType: 'required',
    // organisation_id: 'required',  //this is partially viceversa
    // trip_id: 'required', 
    payment_type: 'required',
    currency_id: 'required',
    transaction_type: 'required',
    available_deposit: 'required',
    transaction_comments: 'required'
}

// Corporate Transaction
rules.corporateTransaction = {
    amount: 'required',
    organisation_id: 'required',
    // staff_id: 'required',  //need to confirm
    payment_type: 'required',
    currency_id: 'required',
    transaction_type: 'required',
    available_deposit: 'required',
    transaction_comments: 'required'
}
// Add Business user required fields
rules.addBusinessUser = {
    salute: 'required',
    first_name: 'required',
    last_name: 'required',
    sex: 'required',
    mobile: 'required',
    email: 'required',
    password: 'required',
    password_confirmation: 'required',
    username: 'required',
    address_1: 'required',
    country_id: 'required',
    organisation_id: 'required'
}

rules.editBusinessUser = {
    salute: 'required',
    first_name: 'required',
    last_name: 'required',
    sex: 'required',
    mobile: 'required',
    address_1: 'required',
    country_id: 'required'
}

rules.updateLoginUser = {
    salute: 'required',
    first_name: 'required',
    last_name: 'required',
    mobile: 'required',
    address_1: 'required',
    country_id: 'required'
}

rules.updateTemplate = {
    email_template_name: 'required',
    email_template_description: 'required',
}

rules.addTourCode = {
    supplier: 'required',
    tourcode: 'required',
    rbd: 'required',
    orgin: 'required',
    destination: 'required'
}

rules.editTourCode = {
    // supplier: 'required',
    // tourcode:'required',
    // rbd:'required',
    // destination:'required'
}

rules.addCommission = {
    airline: 'required',
    rbd: 'required',
    orgin: 'required',
    destination: 'required',
    supplier: 'required'
}

rules.editCommission = {
    // add: 'required',
    // ddd: 'required',
}

rules.addCurrency = {
    from: 'required',
    to: 'required',
    value: 'required'
}

rules.updateCurrency = {
    from: 'required',
    to: 'required',
    value: 'required'
}
rules.addSupplier = {
    name: 'required',
    supplier_code: 'required',
    country_id: 'required',
    currency_id: 'required',
    email: 'required',
    contact: 'required'
}

// rules.editSupplier = {

// supplier_code: 'required',
// country_id: 'required',
// currency_id: 'required',
// email: 'required',
// contact: 'required'
// }
 
rules.addRole = {
    name: 'required',
    permissions:'required'
}

module.exports.rules = rules;