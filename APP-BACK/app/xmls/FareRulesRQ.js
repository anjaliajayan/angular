const _ = require('lodash');
let moment = require('moment');
const {buildSOAPStart, buildSOAPEnd, soapConst, getHeader, getBodyParty, getBodyDocument} = require('../../config/soap_const')
let {getOrgDetails} = require("./../helpers/utils");
let errorList = [];

try {
  let FareRulesRQ = async (req) => {
	  
	let resultOrgDetails = getOrgDetails(req)
	if (!resultOrgDetails.auth) {
	  errorList.push("Not authorized to access FlightPrice")
	  return errorList;
	}
	let fltSeg = req.body;
	//let soapData = buildSOAPStart("FareRulesRQ", req, resultOrgDetails);
	let soapData = `<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:edis="${soapConst.envelope.attr_xmlns_iataIataEdis}" xmlns:head="${soapConst.envelope.attr_xmlns_tpconnectsSecurityHeader}" xmlns:soapenv="${soapConst.envelope.attr_xmlns_xmlsoapSoapEnvelope}">`
	 soapData += getHeader(resultOrgDetails)
	 soapData += `<soapenv:Body><FareRulesRQ xmlns="${soapConst.envelope.attr_xmlns_iataIataEdis}"  AltLangID="EN" Version="1.1.5" EchoToken="${fltSeg.echoToken}">`
	 soapData += getBodyDocument(resultOrgDetails)
	 soapData += `<Party>`;
	 soapData += `<Sender><AggregatorSender><Name>${soapConst.envelope.body.party.sender.aggregator_sender.name}</Name><Category><Code>${soapConst.envelope.body.party.sender.aggregator_sender.category.code}</Code><Definition>${soapConst.envelope.body.party.sender.aggregator_sender.category.definition}</Definition></Category>`
	 soapData += `<AggregatorID>${fltSeg.SpecialFare.CompanyIndex}</AggregatorID></AggregatorSender>`;
	 soapData += `</Sender>`;
	 soapData += `<Participants>`;
	 soapData += `<Participant>`;
	 soapData += `<TravelAgencyParticipant SequenceNumber="1">`;
	 soapData += `<Name>${resultOrgDetails.org_name}</Name>`;
	 soapData += `<Type>TravelAgency</Type>`;
	 soapData += `<Contacts>`;
	 soapData += `<Contact>`;
	 soapData += `<EmailContact>`;
	 soapData += `<Address>${resultOrgDetails.org_email}</Address>`;
	 soapData += `</EmailContact>`;
	 soapData += `</Contact>`;
	 soapData += `</Contacts>`;
	 soapData += `<PseudoCity>1F8</PseudoCity>`;
	 soapData += `<IATA_Number>${resultOrgDetails.org_iata_no}</IATA_Number>`;
	 soapData += `<AgencyID Owner="A3">${resultOrgDetails.org_id}</AgencyID>`;
	 soapData += `<AgentUser>`;
	 soapData += `<Name>${resultOrgDetails.user_first_name + ' ' + resultOrgDetails.user_last_name}</Name>`;
	 soapData += `<AgentUserID>${resultOrgDetails.user_users_id}</AgentUserID>`;
	 soapData += `<UserRole>Admin</UserRole>`;
	 soapData += `</AgentUser>`;
	 soapData += `</TravelAgencyParticipant>`;
	 soapData += `</Participant>`;
	 soapData += `</Participants>`;
	 soapData += `</Party>`;
	 //soapData += getBodyParty(resultOrgDetails)
     soapData += `<Query>`
	 soapData += `<Departure>`
	 soapData += `<AirportCode>${fltSeg.Departure.AirportCode}</AirportCode>`
	 soapData += `<Date>${moment(fltSeg.Departure.Date).format("YYYY-MM-DD")}</Date>`
	 soapData += `<Time>${fltSeg.Departure.Time}</Time>`
	 soapData += `</Departure>`

	 soapData += `<Arrival>`
	 soapData += `<AirportCode>${fltSeg.Arrival.AirportCode}</AirportCode>`
	 soapData += `<Date>${moment(fltSeg.Arrival.Date).format("YYYY-MM-DD")}</Date>`
	 soapData += `<Time>${fltSeg.Arrival.Time}</Time>`
	 soapData += `</Arrival>`
	 soapData += `<FareBasisCode>`
	 soapData += `<Code>${fltSeg.FareBasisCode && fltSeg.FareBasisCode != undefined ? fltSeg.FareBasisCode.Code : null}</Code>`
	 soapData += `<Application/>`
	 soapData += `</FareBasisCode>`
	 soapData += `<AirlineID>${fltSeg.MarketingCarrier.AirlineID}</AirlineID>`
	 soapData += `<SpecialFare>`
	 soapData += `<AirlineID>${fltSeg.MarketingCarrier.AirlineID}</AirlineID>`
	 soapData += `<CompanyIndex>${fltSeg.SpecialFare.CompanyIndex}</CompanyIndex>`
	 soapData += `</SpecialFare>`
	 soapData += `<FareReferenceKey>${fltSeg.FareReferenceKey != "" && fltSeg.FareReferenceKey != "" ? fltSeg.FareReferenceKey: ''}</FareReferenceKey>`
	 soapData += `</Query>`
	 soapData += `<Metadata/></FareRulesRQ></soapenv:Body></soapenv:Envelope>`
	// soapData += buildSOAPEnd("FareRulesRQ");
     if (errorList.length > 0) {
		return errorList;
	  } else {
		return soapData;
	  }
  }
  module.exports = FareRulesRQ;
} catch (error) {
  // console.log(error);
}
