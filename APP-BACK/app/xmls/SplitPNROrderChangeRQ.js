const {
	getHeader,
	buildSOAPQueryPassengersMinimized,
	buildRecognizedTravelerListFromPassengers,
	requestResponseWithSpecificCurrencyOrderChange,
	buildSOAPBookingReferences,
	buildSOAPEnd
} = require('../../config/soap_const');
let {
	convertToArray,
	getOrgDetails
} = require("./../helpers/utils");
let SplitPNROrderChangeRQ = (req) => {
	let resultOrgDetails = getOrgDetails(req);
	if (!resultOrgDetails.auth) return '';
	let data = req.body;
	let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:head="http://tpconnects.com/security/header" xmlns:edis="http://www.iata.org/IATA/EDIST">`;
	soapData += getHeader(resultOrgDetails);
	soapData += `<soapenv:Body>`;
	soapData += `<OrderChangeRQ Version="16.1" PrimaryLangID="EN" AltLangID="EN" xmlns="http://www.iata.org/IATA/EDIST" EchoToken="${data.echoToken}">`;
	soapData += `<Document><Name>${data.owner + '-' + data.pnr_no}</Name></Document>`;
	soapData += `<Party>`;
	soapData += `<Sender><CorporateSender><ID>JV1212GB</ID></CorporateSender></Sender>`;
	soapData += `<Participants>`;
	soapData += `<Participant>`;
	soapData += `<TravelAgencyParticipant SequenceNumber="1">`;
	soapData += `<AggregatorID>${data.owner + '-' + data.pnr_no}</AggregatorID>`;
	soapData += `</TravelAgencyParticipant>`;
	soapData += `</Participant>`;
	soapData += `</Participants>`;
	soapData += `</Party>`;
	soapData += `<Query>`;
	console.log(data);
	let myPassengerList = convertToArray(data.passengers);
	soapData += buildSOAPQueryPassengersMinimized(myPassengerList);
	soapData += `<Order>`;
	soapData += `<OrderID Owner="${data.owner}">${data.pnr_no}</OrderID>`;
	soapData += `<OrderItems>`;
	let selectedPassengers = convertToArray(data.selected);
	selectedPassengers.map((pax, paxIdx) => {
		let tmpNo = ++paxIdx;
		soapData += `<OrderItem>`;
		soapData += `<OrderItemID Owner="${data.owner}">${tmpNo}</OrderItemID>`;
		soapData += `<Associations>`;
		soapData += `<Passengers>`;
		soapData += `<Passenger refs="${pax.pax_ref_key}">`;
		soapData += `<Name>`;
		soapData += `<Surname>${pax.pax_last_name}</Surname>`;
		soapData += `</Name>`;
		soapData += `</Passenger>`;
		soapData += `</Passengers>`;
		soapData += `</Associations>`;
		soapData += `<ActionType>Delete</ActionType>`;
		soapData += `</OrderItem>`;
	});
	soapData += `</OrderItems>`;
	soapData += `</Order>`;
	soapData += buildSOAPBookingReferences(data.trip_id, undefined, undefined);
	soapData += requestResponseWithSpecificCurrencyOrderChange(data.currency, data.decimals);
	soapData += `</Query>`;
	soapData += `<DataLists>`;
	soapData += buildRecognizedTravelerListFromPassengers(data.passengers);
	soapData += `</DataLists>`;
	soapData += buildSOAPEnd("OrderChangeRQ");
	return soapData;
};

module.exports = SplitPNROrderChangeRQ;