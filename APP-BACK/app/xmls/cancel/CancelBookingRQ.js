let CancelRequest = ((agent, apiKey, secretKey, data) => {
    let soapData = `<soapenv:Envelope xmlns:edis="http://www.iata.org/IATA/EDIST" xmlns:head="http://tpconnects.com/security/header" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">`;
    soapData += `<soapenv:Header><head:SecurityHeader>`;
    soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
    soapData += `</head:SecurityHeader></soapenv:Header>`;
    soapData += `<soapenv:Body>`;
    soapData += `<OrderCancelRQ xmlns="http://www.iata.org/IATA/EDIST" Version="16.1" EchoToken="${data.echoToken}" PrimaryLangID="EN" AltLangID="EN">
			<Document>
				<Name>${data.ownerId}</Name>
			</Document>
			<Party>
                <Sender>
                    <AggregatorSender>
                        <Name>TpConnects</Name>
                        <Category>
                            <Code>M</Code>
                            <Definition>NDC aggregator</Definition>
                        </Category>
                        <AggregatorID>${data.ownerId}</AggregatorID>
                    </AggregatorSender>
                    <RetailPartnerSender>
                        <AgentUser>
                            <Name>Ullas Travels</Name>
                            <PseudoCity>SAR</PseudoCity>
                            <IATA_Number>62210201</IATA_Number>
                            <AgentUserID>0</AgentUserID>
                        </AgentUser>
                    </RetailPartnerSender>
                </Sender>
                <Participants>
                    <Participant>
                        <TravelAgencyParticipant SequenceNumber="2">
                            <AggregatorID>${data.ownerId}</AggregatorID>
                        </TravelAgencyParticipant>
                    </Participant>
                </Participants>
            </Party>
			<Query>
				<OrderID Owner="${data.ownerId}">${data.ownerPNR}</OrderID>
				<BookingReferences>
					<BookingReference>
						<ID>${data.booking_id}</ID>
						<OtherID Name="TPC">${data.tripId}</OtherID>
					</BookingReference>
				</BookingReferences>
			</Query>
		</OrderCancelRQ>
	</soapenv:Body>
</soapenv:Envelope>
    `
    return soapData
});

module.exports = CancelRequest;