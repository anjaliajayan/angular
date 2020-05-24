

let getMarkupXML = function(agent, apiKey, secretKey, markup_id)  {
    let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:com="http://tpconnects.com/service/comission" xmlns:rem="http://tpconnects.com/service/markup/remove">`;
    soapData += `<soapenv:Header><com:SecurityHeader>`;
    soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
    soapData += `</com:SecurityHeader></soapenv:Header>`;
    soapData += `<soapenv:Body>`;
    soapData += `<com:RemoveMarkup><rem:Markup><markupId>${markup_id}</markupId></rem:Markup></com:RemoveMarkup>`;
    soapData += `</soapenv:Body></soapenv:Envelope>`;
    return soapData;
}
module.exports = getMarkupXML;

