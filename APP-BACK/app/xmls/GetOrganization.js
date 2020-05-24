let GetOrganization = (agent, apiKey, secretKey, objOrganization) => {
  let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:com="http://tpconnects.com/service/comission" xmlns:save="http://tpconnects.com/service/organisation/save">`;
  soapData += `<soapenv:Header><com:SecurityHeader>`;
  soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
  soapData += `</com:SecurityHeader></soapenv:Header>`;
  soapData += `<soapenv:Body>`;
  soapData += `<com:SaveOrganisation><save:Organisation>`;
  soapData += `<activeSuppliers>${objOrganization.activeSuppliers}</activeSuppliers>`;
  soapData += `<address1>${objOrganization.address1}</address1>`;
  soapData += `<address2>${objOrganization.address2}</address2>`;
  soapData += `<agent>${objOrganization.agent}</agent>`;
  soapData += `<apiKey>${objOrganization.apiKey}</apiKey>`;
  soapData += `<associatedCategory>${objOrganization.associatedCategory}</associatedCategory>`;
  soapData += `<associatedOffice>${objOrganization.associatedOffice}</associatedOffice>`;
  soapData += `<associatedSalesPerson>${objOrganization.associatedOffice}</associatedSalesPerson>`;
  soapData += `<bookingsMonth>${objOrganization.associatedSalesPerson}</bookingsMonth>`;
  soapData += `<businessId>${objOrganization.businessId}</businessId>`;
  soapData += `<cid>${objOrganization.cid}</cid>`;
  soapData += `<cityId>${objOrganization.cityId}</cityId>`;
  soapData += `<contact>${objOrganization.contact}</contact>`;
  soapData += `<contactCountryId>${objOrganization.contactCountryId}</contactCountryId>`;
  soapData += `<countryId>${objOrganization.countryId}</countryId>`;
  soapData += `<created>${objOrganization.created}</created>`;
  soapData += `<currency>${objOrganization.currency}</currency>`;
  soapData += `<email>${objOrganization.email}</email>`;
  soapData += `<identificationId>${objOrganization.identificationId}</identificationId>`;
  soapData += `<imageEmail>${objOrganization.imageEmail}</imageEmail>`;
  soapData += `<imageInvoice>${objOrganization.imageInvoice}</imageInvoice>`;
  soapData += `<imageWebsite>${objOrganization.imageWebsite}</imageWebsite>`;
  soapData += `<isShareable>${objOrganization.isShareable}</isShareable>`;
  soapData += `<isSupervision>${objOrganization.isSupervision}</isSupervision>`;
  soapData += `<memberNumber>${objOrganization.memberNumber}</memberNumber>`;
  soapData += `<memberOf>${objOrganization.memberOf}</memberOf>`;
  soapData += `<name>${objOrganization.name}</name>`;
  soapData += `<parentId>${objOrganization.parentId}</parentId>`;
  soapData += `<revenueMonth>${objOrganization.revenueMonth}</revenueMonth>`;
  soapData += `<roundOff>${objOrganization.roundOff}</roundOff>`;
  soapData += `<schema>${objOrganization.schema}</schema>`;
  soapData += `<secretKey>${objOrganization.secretKey}</secretKey>`;
  soapData += `<stateProvince>${objOrganization.stateProvince}</stateProvince>`;
  soapData += `<status>${objOrganization.status}</status>`;
  soapData += `<termsConditions>${objOrganization.termsConditions}</termsConditions>`;
  soapData += `<timezone>${objOrganization.timezone}</timezone>`;
  soapData += `<zip>${objOrganization.zip}</zip>`;
  soapData += `</save:Organisation></com:SaveOrganisation>`;
  soapData += `</soapenv:Body></soapenv:Envelope>`;

  return soapData;
}
module.exports = GetOrganization;
