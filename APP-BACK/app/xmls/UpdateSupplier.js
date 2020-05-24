let UpdateSupplier = (agent, apiKey, secretKey, record) => {
  /*let recordXml = '';
  if (record.supplier_id)
      recordXml += `<supplierId>${record.supplier_id}</supplierId>`;
  if (record.status || record.shortCode == "" || record.shortCode == false)
      recordXml += `<status>${record.status}</status>`;
  if (record.shortCode || record.shortCode == "" || record.shortCode == false)
      recordXml += `<shortCode>${record.shortCode}</shortCode>`;
  if (record.isHotel || record.shortCode == "" || record.shortCode == false)
      recordXml += `<isHotel>${record.isHotel}</isHotel>`;
  if (record.isFlight || record.shortCode == "" || record.shortCode == false)
      recordXml += `<isFlight>${record.isFlight}</isFlight>`;
  if (record.isHoliday || record.shortCode == "" || record.shortCode == false)
      recordXml += `<isHoliday>${record.isHoliday}</isHoliday>`;
  if (record.isActivity || record.shortCode == "" || record.shortCode == false)
      recordXml += `<isActivity>${record.isActivity}</isActivity>`;
  if (record.isCarhire || record.shortCode == "" || record.shortCode == false)
      recordXml += `<isCarhire>${record.isCarhire}</isCarhire>`;
  if (record.isTransfer || record.shortCode == "" || record.shortCode == false)
      recordXml += `<isTransfer>${record.isTransfer}</isTransfer>`;
  if (record.isVisa || record.shortCode == "" || record.shortCode == false)
      recordXml += `<isVisa>${record.isVisa}</isVisa>`;
  if (record.isInsurance || record.shortCode == "" || record.shortCode == false)
      recordXml += `<isInsurance>${record.isInsurance}</isInsurance>`;*/
  let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tps="http://tpconnects.com/service/TPSupplier">`;
  soapData += `<soapenv:Header><tps:SecurityHeader>`;
  soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
  soapData += `</tps:SecurityHeader></soapenv:Header>`;
  soapData = `<soapenv:Body>`;
  soapData += `<tps:SaveSuppliers>
        <SuppliersCriteria>
        <credentials>
       <supplierId>${record.supplier_id}</supplierId>
        <status>${record.status}</status>
        <isHotel>${record.isHotel}</isHotel>
        <isFlight>${record.isFlight}</isFlight>
        <isHoliday>${record.isHoliday}</isHoliday>
        <isActivity>${record.isActivity}</isActivity>
        <isCarhire>${record.isCarhire}</isCarhire>
        <isTransfer>${record.isTransfer}</isTransfer>
        <isVisa>${record.isVisa}</isVisa>
        <isInsurance>${record.isInsurance}</isInsurance>
        </credentials>
        </SuppliersCriteria>
        </tps:SaveSuppliers>
        </soapenv:Body>
        </soapenv:Envelope>`;

  return soapData;
}
module.exports = UpdateSupplier;
