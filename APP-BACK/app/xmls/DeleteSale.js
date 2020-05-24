let DeleteSaleID = function (agent, apiKey, secretKey, id) {
  let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:com="http://tpconnects.com/service/comission" xmlns:rem="http://tpconnects.com/service/sales/remove">`;
  soapData += `<soapenv:Header><com:SecurityHeader>`;
  soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
  soapData += `</com:SecurityHeader></soapenv:Header>`;
  soapData += `<soapenv:Body>`;
  soapData += `<com:RemoveSales><rem:Sales><saleId>${ id }</saleId></rem:Sales></com:RemoveSales>`;
  soapData += `</soapenv:Body></soapenv:Envelope>`;
  return soapData;
}
module.exports = DeleteSaleID;
