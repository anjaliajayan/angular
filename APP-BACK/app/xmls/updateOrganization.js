let UpdateOrganization = (agent, apiKey, secretKey, record) => {
   let recordXml = '';
   recordXml += `<roundOff>0</roundOff>`;
   if (record.organisation_id)
      recordXml += `<organisationId>${record.organisation_id}</organisationId>`;
   if (record.parent_id)
      recordXml += `<parentId>${record.parent_id}</parentId>`;
   if (record.name)
      recordXml += `<name>${record.name}</name>`;
   if (record.created)
      recordXml += `<created>${record.created}</created>`;
   if (record.status)
      recordXml += `<status>${record.status}</status>`;
   if (record.active_suppliers)
      recordXml += `<activeSuppliers>${record.active_suppliers}</activeSuppliers>`;
   if (record.address_1)
      recordXml += `<address1>${record.address_1}</address1>`;
   if (record.address_2)
      recordXml += `<address2>${record.address_2}</address2>`;
   if (record.city_id)
      recordXml += `<cityId>${record.city_id}</cityId>`;
   if (record.contact_country_id)
      recordXml += `<contactCountryId>${record.contact_country_id}</contactCountryId>`;
   if (record.country_id)
      recordXml += `<countryId>${record.country_id}</countryId>`;
   if (record.email)
      recordXml += `<email>${record.email}</email>`;
   if (record.image_email)
      recordXml += `<imageEmail>${record.image_email}</imageEmail>`;
   if (record.contact_country_id)
      recordXml += `<imageInvoice>${record.contact_country_id}</imageInvoice>`;
   if (record.image_invoice)
      recordXml += `<imageWebsite>${record.image_invoice}</imageWebsite>`;
   if (record.timezone_id)
      recordXml += `<timezone>${record.timezone_id}</timezone>`;
   if (record.terms_conditions)
      recordXml += `<termsConditions>${record.terms_conditions}</termsConditions>`;
   if (record.zip)
      recordXml += `<zip>${record.zip}</zip>`;
   if (record.state_province)
      recordXml += `<stateProvince>${record.state_province}</stateProvince>`;
   if (record.business_id)
      recordXml += `<businessId>${record.business_id}</businessId>`;
   if (record.monthlyTarget)
      recordXml += `<revenueMonth>${record.monthlyTarget}</revenueMonth>`;
   if (record.numberOfUsers)
      recordXml += `<memberNumber>${record.numberOfUsers}</memberNumber>`;
   if (record.currency_id)
      recordXml += `<currency>${record.currency_id}</currency>`;

   // <agent>?</agent>
   // <apiKey>?</apiKey>
   // <associatedCategory>?</associatedCategory>
   // <associatedOffice>?</associatedOffice>
   // <associatedSalesPerson>?</associatedSalesPerson>
   // <bookingsMonth>?</bookingsMonth>
   // <cid>?</cid>
   // <contact>?</contact>
   // <identificationId>?</identificationId>
   // <isShareable>?</isShareable>
   // <isSupervision>?</isSupervision>
   // <memberOf>?</memberOf>
   // <schema>?</schema>
   // <secretKey>?</secretKey>

   let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:com="http://tpconnects.com/service/comission" xmlns:save="http://tpconnects.com/service/organisation/save">`;
   soapData += `<soapenv:Header><com:SecurityHeader>`;
   soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
   soapData += `</com:SecurityHeader></soapenv:Header>`;
   soapData += `<soapenv:Body>`;
   soapData += `<com:SaveOrganisation><save:Organisation>${recordXml}</save:Organisation></com:SaveOrganisation>`;
   soapData += `</soapenv:Body></soapenv:Envelope>`;
   return soapData;
}
module.exports = UpdateOrganization;
