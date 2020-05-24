const {getOrgDetails} = require("../../../helpers/utils");
const searchTemplate = ( req) => {
    let data = req.body;
    let userDetail = getOrgDetails(req);
    // let orgCurrency = JSON.parse(userDetail).['organisation.currency.code'];
    let orgCurrency = userDetail.currency_code;
    return `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/insurance">
    <SOAP-ENV:Header>
        <ns1:SecurityHeader>
            <agent>TSS</agent>
            <apiKey>5ec8b2955d618a38232bd168870eca60</apiKey>
            <secretKey>11ce6082-988a-11e7-abc4-cec278b6b50a</secretKey>
            </ns1:SecurityHeader>
            </SOAP-ENV:Header>
            <SOAP-ENV:Body>
                <ns1:SearchInsurance>
                    <InsuranceSearchCriteria>
                        <adult>${data.adult}</adult>
                         <benefit>${data.benefit}</benefit>
                        <birthDate>${data.birthDate}</birthDate>
                        <browserAgent>${data.browserAgent}</browserAgent>
                        <browserIp>${data.browserIp}</browserIp>
                        <child>${data.child}</child>
                        <country>${data.country}</country>
                        <currency>${orgCurrency}</currency>
                        <depart_country>${data.depart_country}</depart_country>
                        <endDate>${data.endDate}</endDate>
                        <infant>${data.infant}</infant>
                        <plan>${data.plan}</plan>
                        <product>${data.product}</product>
                        <responseKey>${data.responseKey}</responseKey>
                        <startDate>${data.startDate}</startDate>
                 </InsuranceSearchCriteria>
            </ns1:SearchInsurance>
            </SOAP-ENV:Body>
            </SOAP-ENV:Envelope>`;
}







module.exports = {
    searchTemplate
};