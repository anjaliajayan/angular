//var moment = require('moment');
//const config = require('./../../../config/config');
let VoidReqBooking = ((agent, apiKey, secretKey, data) => {
    let soapData = `<soapenv:Envelope xmlns:edis="http://www.iata.org/IATA/EDIST" xmlns:head="http://tpconnects.com/security/header" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">`;
	soapData += `<soapenv:Header><head:SecurityHeader>`;
	soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
	soapData += `</head:SecurityHeader></soapenv:Header>`;
	soapData += `<soapenv:Body>`;
	soapData += `<AirDocVoidRQ xmlns="http://www.iata.org/IATA/EDIST" Version="1" PrimaryLangID="EN" AltLangID="EN" EchoToken="${data.echoToken}">
                <PointOfSale>
				<Location>
					<CountryCode>US</CountryCode>
					<CityCode>WAS</CityCode>
				</Location>
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
				<ReferenceVersion>1</ReferenceVersion>
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
							<Type>BSP</Type>
							<PseudoCity>SAR</PseudoCity>
							<IATA_Number>62210201</IATA_Number>
							<AgentUserID>0</AgentUserID>
						</AgentUser>
					</RetailPartnerSender>
				</Sender>
				<Participants>
					<Participant>
						<TravelAgencyParticipant SequenceNumber="1">
							<Name>Tpconnects</Name>
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
							<AgencyID Owner="${data.ownerId}">1001</AgencyID>
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
                        <TicketDocument>
                            <TicketDocNbr>${data.ownerPNR}-${data.ticket_number}</TicketDocNbr>
                            <Type refs="th">
                                <Code>dsg</Code>
                                <Definition>sdg</Definition>
                                <TableName>sdgs</TableName>
                                <Link>sdgfs</Link>
                            </Type>
                            <CpnNbrs>
                                <CpnNbr>4235</CpnNbr>
                            </CpnNbrs>
                        </TicketDocument>
                        <TicketDocQuantity>1</TicketDocQuantity>
                    </Query>
                </AirDocVoidRQ>
            </soapenv:Body>
        </soapenv:Envelope>
    `
    return soapData;
})

module.exports = VoidReqBooking;