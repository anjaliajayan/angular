let OrderRetrieve = ((agent, apiKey, secretKey, objBookings) => {
    let soapData = `<soapenv:Envelope xmlns:edis="http://www.iata.org/IATA/EDIST" xmlns:head="http://tpconnects.com/security/header" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">`;
	soapData += `<soapenv:Header><head:SecurityHeader>`;
  soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
  soapData += `</head:SecurityHeader></soapenv:Header>`;
  soapData += `<soapenv:Body>`;
  soapData += `<OrderRetrieveRQ xmlns="http://www.iata.org/IATA/EDIST" AltLangID="EN" EchoToken="${objBookings.echoToken}" PrimaryLangID="EN" Version="1.1.4">
			<PointOfSale>
				<Location>
					<CountryCode>${objBookings.retSenderCity}</CountryCode>
					<CityCode>${objBookings.retSenderCity}</CityCode>
				</Location>
				<RequestTime Zone="EST">2019-10-30T14:37:31+00:00</RequestTime>
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
				<Name>${objBookings.ownerId}</Name>
				<ReferenceVersion>1.0</ReferenceVersion>
			</Document>
			<Party>
				<Sender>
					<AggregatorSender>
						<Name>${objBookings.aggSenderName}</Name>
						<Category>
							<Code>M</Code>
							<Definition>NDC aggregator</Definition>
						</Category>
						<AggregatorID>${objBookings.ownerId}</AggregatorID>
					</AggregatorSender>
					<RetailPartnerSender>
						<AgentUser>
							<Name>${objBookings.retSenderAgentName}</Name>
							<Type>BSP</Type>
							<PseudoCity>${objBookings.retSenderCity}</PseudoCity>
							<IATA_Number>62210201</IATA_Number>
							<AgentUserID>${objBookings.retSenderAgentUserId}</AgentUserID>
						</AgentUser>
					</RetailPartnerSender>
				</Sender>
				<Participants>
					<Participant>
						<TravelAgencyParticipant SequenceNumber="1">
							<Name>USD Travel</Name>
							<Type>TravelAgency</Type>
							<Contacts>
								<Contact>
									<EmailContact>
										<Address>ndc@usdtravel.com</Address>
									</EmailContact>
								</Contact>
							</Contacts>
							<PseudoCity>1F8</PseudoCity>
							<IATA_Number>2212345</IATA_Number>
							<AgencyID Owner="${objBookings.ownerId}">${objBookings.ownerPNR}</AgencyID>
							<AgentUser>
								<Name>John Smith</Name>
								<AgentUserID>1980</AgentUserID>
								<UserRole>Admin</UserRole>
							</AgentUser>
						</TravelAgencyParticipant>
					</Participant>
				</Participants>
			</Party>
			<Query>
				<Filters>
					<OrderID Owner="${objBookings.ownerId}">${objBookings.ownerPNR}</OrderID>
					<BookingReferences>
						<BookingReference>
							<Type>
								<Code>${objBookings.currency}</Code>
								<Definition>DisplayCurrency</Definition>
							</Type>
							<OtherID Name="TPC">${objBookings.tripId}</OtherID>
						</BookingReference>
					</BookingReferences>
				</Filters>
			</Query>
		</OrderRetrieveRQ>
	</soapenv:Body>
</soapenv:Envelope>`
    return soapData
});
module.exports = OrderRetrieve;