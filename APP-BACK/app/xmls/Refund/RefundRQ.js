let RefundBooking = ((agent, apiKey, secretKey, data) => {
	let soapData = `<soapenv:Envelope xmlns:edis="http://www.iata.org/IATA/EDIST" xmlns:head="http://tpconnects.com/security/header" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">`;
	soapData += `<soapenv:Header><head:SecurityHeader>`;
	soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
	soapData += `</head:SecurityHeader></soapenv:Header>`;
	soapData += `<soapenv:Body>`;
	soapData += `<OrderCancelRQ xmlns="http://www.iata.org/IATA/EDIST" Version="16.1" EchoToken="${data.echoToken}" PrimaryLangID="EN" AltLangID="EN">`;
	soapData += `<PointOfSale>
	<Location>
		<CountryCode>United Arab Emirates</CountryCode>
		<CityCode>UAE</CityCode>
	</Location>
	<RequestTime Zone="EST">2020-03-05T13:01:21+00:00</RequestTime>
	<TouchPoint>
		<Device>
			<Code>2</Code>
			<Definition>Web Browser</Definition>
			<Position>
				<Latitude>50.04717</Latitude>
				<Longitude>8.70066</Longitude>
				<NAC>HPQJH RB728</NAC>
			</Position>
		</Device>
	</TouchPoint>
</PointOfSale>
<Document>
	<Name>A3 NDC GATEWAY</Name>
	<ReferenceVersion>1.0</ReferenceVersion>
</Document>
<Party>
	<Sender>
		<AggregatorSender>
			<Name>TpConnects</Name>
			<Category>
				<Code>M</Code>
				<Definition>NDC aggregator</Definition>
			</Category>
			<AggregatorID>1T</AggregatorID>
		</AggregatorSender>
		<RetailPartnerSender>
			<AgentUser>
				<Name>Test travels and tours</Name>
				<Type>BSP</Type>
				<PseudoCity>SAR</PseudoCity>
				<IATA_Number>52200150</IATA_Number>
				<AgentUserID>170</AgentUserID>
			</AgentUser>
		</RetailPartnerSender>
	</Sender>
	<Participants>
		<Participant>
			<TravelAgencyParticipant SequenceNumber="1">
				<Name>Tpconnects 123</Name>
				<Type>TravelAgency</Type>
				<Contacts>
					<Contact>
						<EmailContact>
							<Address>mariam1@tpconnects.com</Address>
						</EmailContact>
					</Contact>
				</Contacts>
				<PseudoCity>1F8</PseudoCity>
				<IATA_Number>91212391</IATA_Number>
				<AgencyID Owner="1A">1111</AgencyID>
				<AgentUser>
					<Name>roshan pravin</Name>
					<AgentUserID>0</AgentUserID>
					<UserRole>Admin</UserRole>
				</AgentUser>
			</TravelAgencyParticipant>
		</Participant>
	</Participants>
</Party>`;
	soapData += `<ExpectedRefundAmount><Total Code="${data.currency}">${data.amount}</Total></ExpectedRefundAmount>`;
	soapData += `<Query>
			<OrderID Owner="${data.ownerId}">${data.ownerPNR}</OrderID>
			<BookingReferences>
				<BookingReference>
					<ID>${data.currency}</ID>
					<OtherID Name="TPC">${data.tripId}</OtherID>
				</BookingReference>
			</BookingReferences>
		</Query>
		</OrderCancelRQ>
		</soapenv:Body>
		</soapenv:Envelope>`;
	return soapData;
});
module.exports = RefundBooking;