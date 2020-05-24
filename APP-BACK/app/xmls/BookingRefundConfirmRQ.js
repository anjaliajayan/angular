const {getHeader, getBodyPointOfSaleMinified, getBodyParty, buildSOAPEnd} = require('../../config/soap_const');
let {getOrgDetails} = require("./../helpers/utils");
let BookingRefundConfirmRQ = (req, data, retail) => {
  let resultOrgDetails = getOrgDetails(req);
  if (!resultOrgDetails.auth) return '';
  let jsonAirDocIssueOrTicketDocInfo = data.bookingInfo;
  let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:head="http://tpconnects.com/security/header" xmlns:edis="http://www.iata.org/IATA/EDIST">`;
  soapData += getHeader(resultOrgDetails);
  soapData += `<soapenv:Body>`;
  soapData += `<ItinReshopRQ Version="16.1" PrimaryLangID="EN" AltLangID="EN" xmlns="http://www.iata.org/IATA/EDIST" EchoToken="${data.echoToken}">`;
  soapData += getBodyPointOfSaleMinified(req, data.retSenderCity, data.retSenderCity);
  soapData += `<Document><Name>A3 NDC GATEWAY</Name><ReferenceVersion>1.0</ReferenceVersion></Document>`;
  soapData += getBodyParty(resultOrgDetails, retail);
  soapData += `<Query>`;
  soapData += `<Reshop>`;
  soapData += `<Actions>`;
  soapData += `<ActionType>Refund</ActionType>`;
  soapData += `<BookingReferences>`;
  soapData += `<BookingReference>`;
  soapData += `<ID>${data.currency}</ID>`;
  soapData += `<OtherID Name="TPC">${data.tripId}</OtherID>`;
  soapData += `</BookingReference>`;
  soapData += `</BookingReferences>`;
  soapData += `<OrderID Owner="${data.ownerId}">${data.ownerPNR}</OrderID>`;
  if (jsonAirDocIssueOrTicketDocInfo) {
    soapData += `<TicketDocuments><TicketDocument><TicketDocNbr>`;
    soapData += jsonAirDocIssueOrTicketDocInfo;
    soapData += `</TicketDocNbr></TicketDocument></TicketDocuments>`;
  } else {
    soapData += `<TicketDocuments/>`;
  }
  soapData += `</Actions>`;
  soapData += `</Reshop></Query>`;
  soapData += buildSOAPEnd("ItinReshopRQ");
  return soapData;
};

module.exports = BookingRefundConfirmRQ;
