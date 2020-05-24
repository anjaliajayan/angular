
const cancelTemplate = () => {
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
                        <adult>1</adult>
                         <benefit>000000</benefit>
                        <birthDate>2001-10-07</birthDate>
                        <browserAgent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</browserAgent>
                        <browserIp>94.200.55.38</browserIp>
                        <child></child>
                        <country>AE</country>
                        <currency>SAR</currency>
                        <depart_country>PK</depart_country>
                        <endDate>2020-07-30</endDate>
                        <infant>0</infant>
                        <plan>SHWALL</plan>
                        <product>020107</product>
                        <responseKey></responseKey>
                        <startDate>2020-04-16</startDate>
                 </InsuranceSearchCriteria>
            </ns1:SearchInsurance>
            </SOAP-ENV:Body>
            </SOAP-ENV:Envelope>`;
}







module.exports = {
    cancelTemplate
};