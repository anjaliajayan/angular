const soapConst = {
    envelope: {
        attr_xmlns_iataIataEdis: 'http://www.iata.org/IATA/EDIST',
        attr_xmlns_tpconnectsSecurityHeader: 'http://tpconnects.com/security/header',
        attr_xmlns_xmlsoapSoapEnvelope: 'http://schemas.xmlsoap.org/soap/envelope/',
        body: {
            primaryLangID: 'en',
            document: {
                metadata: 'NDC GATEWAY',
                ref_ver: '16.1'
            },
            party: {
                sender: {
                    aggregator_sender: {
                        name: 'TpConnects',
                        category: {
                            code: 'M',
                            definition: 'NDC GATEWAY'
                        },
                        aggregator_id: 'travelfusion'
                    }
                }
            }
        }
    }
};

function getStart() {
    return `<soapenv:Envelope xmlns:edis="${soapConst.envelope.attr_xmlns_iataIataEdis}" xmlns:head="${soapConst.envelope.attr_xmlns_tpconnectsSecurityHeader}" xmlns:soapenv="${soapConst.envelope.attr_xmlns_xmlsoapSoapEnvelope}">`;
}

function getHeader(data) {
    let soapData = `<soapenv:Header><head:SecurityHeader>`;
    soapData += `<agent>${data.agent}</agent><apiKey>${data.api_key}</apiKey><secretKey>${data.secret_key}</secretKey>`;
    soapData += `</head:SecurityHeader></soapenv:Header>`;
    return soapData;
}

const {
    getLocationInfoByIp,
    convertToArray
} = require("../app/helpers/utils");

function getBodyPointOfSale(req) {
    let locationData = getLocationInfoByIp(req);
    let soapData = `<PointOfSale>`;
    soapData += `<Location><CountryCode>${locationData.country}</CountryCode><CityCode>${locationData.city}</CityCode></Location>`;
    soapData += `<TouchPoint><Device><Code>${locationData.ip}</Code><Definition>${locationData.browser}</Definition><Position><Latitude>${locationData.latitude}</Latitude><Longitude>${locationData.longitude}</Longitude><NAC>9KD7V PGGM0</NAC></Position></Device></TouchPoint>`;
    soapData += `</PointOfSale>`;
    return soapData;
}

function getBodyPointOfSaleMinified(req, countryName, countryISO) {
    let locationData = getLocationInfoByIp(req);
    let soapData = `<PointOfSale>`;
    soapData += `<Location><CountryCode>${countryName}</CountryCode><CityCode>${countryISO}</CityCode></Location>`;
    soapData += `<RequestTime Zone="UTC">${(new Date()).toISOString()}</RequestTime>`;
    soapData += `<TouchPoint><Device><Code>${locationData.ip}</Code><Definition>${locationData.browser}</Definition><Position><Latitude>${locationData.latitude}</Latitude><Longitude>${locationData.longitude}</Longitude><NAC>HPQJH RB728</NAC></Position></Device></TouchPoint>`;
    soapData += `</PointOfSale>`;
    return soapData;
}

function getBodyDocument(isNDC, tripId, pnr_no) {
    let soapData = `<Document`;
    if (tripId) soapData += ` id="${tripId}"`;
    soapData += `>`;
    if (isNDC) soapData += `<Metadata>${soapConst.envelope.body.document.metadata}</Metadata>`;
    if (pnr_no) soapData += `<Name>${pnr_no}</Name>`;
    soapData += `<ReferenceVersion>${soapConst.envelope.body.document.ref_ver}</ReferenceVersion></Document>`;
    return soapData;
}

function getBodyParty(data, retail) {
    let soapData = `<Party>`;
    soapData += `<Sender><AggregatorSender><Name>${soapConst.envelope.body.party.sender.aggregator_sender.name}</Name><Category><Code>${soapConst.envelope.body.party.sender.aggregator_sender.category.code}</Code><Definition>${soapConst.envelope.body.party.sender.aggregator_sender.category.definition}</Definition></Category><AggregatorID>${soapConst.envelope.body.party.sender.aggregator_sender.aggregator_id}</AggregatorID></AggregatorSender>`;
    if (retail) {
        soapData += `<RetailPartnerSender>`;
        soapData += `<AgentUser>`;
        soapData += `<Name>${retail.Name}</Name>`;
        soapData += `<Type>${retail.Type}</Type>`;
        soapData += `<PseudoCity>${retail.PseudoCity}</PseudoCity>`;
        soapData += `<IATA_Number>2212345</IATA_Number>`;
        soapData += `<AgentUserID>${retail.AgentUserID}</AgentUserID>`;
        soapData += `</AgentUser>`;
        soapData += `</RetailPartnerSender>`;
    }
    soapData += `</Sender>`;
    soapData += `<Participants>`;
    soapData += `<Participant>`;
    soapData += `<TravelAgencyParticipant SequenceNumber="1">`;
    soapData += `<Name>${data.org_name}</Name>`;
    soapData += `<Type>TravelAgency</Type>`;
    soapData += `<Contacts>`;
    soapData += `<Contact>`;
    soapData += `<EmailContact>`;
    soapData += `<Address>${data.org_email}</Address>`;
    soapData += `</EmailContact>`;
    soapData += `</Contact>`;
    soapData += `</Contacts>`;
    soapData += `<PseudoCity>1F8</PseudoCity>`;
    soapData += `<IATA_Number>${data.org_iata_no}</IATA_Number>`;
    soapData += `<AgencyID Owner="A3">${data.org_id}</AgencyID>`;
    soapData += `<AgentUser>`;
    soapData += `<Name>${data.user_first_name + ' ' + data.user_last_name}</Name>`;
    soapData += `<AgentUserID>${data.user_users_id}</AgentUserID>`;
    soapData += `<UserRole>Admin</UserRole>`;
    soapData += `</AgentUser>`;
    soapData += `</TravelAgencyParticipant>`;
    soapData += `</Participant>`;
    soapData += `</Participants>`;
    soapData += `</Party>`;
    return soapData;
}

function getBodyPartyReshop(data) {
    let soapData = `<Party>`;
    soapData += `<Sender><CorporateSender><ID>JV1212GB</ID></CorporateSender></Sender>`;
    soapData += `<Participants>`;
    soapData += `<Participant>`;
    soapData += `<TravelAgencyParticipant SequenceNumber="1">`;
    soapData += `<IATA_Number>${data.org_iata_no}</IATA_Number>`;
    soapData += `<AgencyID>${data.org_id}</AgencyID>`;
    soapData += `</TravelAgencyParticipant>`;
    soapData += `</Participant>`;
    soapData += `<Participant>`;
    soapData += `<AggregatorParticipant SequenceNumber="2">`;
    soapData += `<AggregatorID>00088944</AggregatorID>`;
    soapData += `</AggregatorParticipant>`;
    soapData += `</Participant>`;
    soapData += `</Participants>`;
    soapData += `</Party>`;
    return soapData;
}

function getBodyParameters(data) {
    let soapData = '';
    if (data.currency_code) {
        soapData += `<Parameters>`;
        soapData += `<Languages><LanguageCode ObjectKey="${soapConst.envelope.body.primaryLangID}">${soapConst.envelope.body.primaryLangID}</LanguageCode></Languages>`;
        soapData += `<CurrCodes><CurrCode>${data.currency_code}</CurrCode></CurrCodes>`;
        soapData += `</Parameters>`;
    }
    return soapData;
}

function getNodeStart(nodeName, echoToken) {
    let soapData = `<${nodeName} xmlns="${soapConst.envelope.attr_xmlns_iataIataEdis}" AltLangID="${soapConst.envelope.body.primaryLangID.toUpperCase()}" PrimaryLangID="${soapConst.envelope.body.primaryLangID.toUpperCase()}"`;
    if (echoToken) {
        soapData += ` EchoToken="${echoToken}"`;
    }
    soapData += `>`;
    return soapData;
}

function buildSOAPStart(nodeName, req, data) {
    let soapData = getStart();
    soapData += getHeader(data);
    soapData += `<soapenv:Body>`;
    soapData += getNodeStart(nodeName, req.body.EchoToken ? req.body.EchoToken : req.body.echoToken ? req.body.echoToken : undefined);
    soapData += getBodyPointOfSale(req);
    soapData += getBodyDocument(false, undefined, undefined);
    if (req.body.ShoppingResponseID && req.body.ShoppingResponseID !== '') {
        soapData += `<ShoppingResponseID><ResponseID>${req.body.ShoppingResponseID}</ResponseID></ShoppingResponseID>`;
    }
    soapData += getBodyParty(data);
    soapData += getBodyParameters(data);
    return soapData;
}

function buildSOAPQueryPassengers(paxFormList, anonymousTravelerList, paymentContact) {
    let tmpContactDetails = ``;
    if (paymentContact !== undefined) {
        tmpContactDetails += `<Contacts>`;
        tmpContactDetails += `<Contact>`;
        tmpContactDetails += `<EmailContact><Address>${paymentContact.cust_email}</Address></EmailContact>`;
        if (paymentContact.cust_origin_phone_code || paymentContact.cust_dest_phone_code) {
            tmpContactDetails += `<PhoneContact>`;
            tmpContactDetails += `<Application>Personal</Application>`;
            if (paymentContact.cust_origin_phone_code) {
                tmpContactDetails += `<Number CountryCode="${paymentContact.cust_origin_phone_code}">${paymentContact.cust_origin_phone_number}</Number>`;
            }
            if (paymentContact.cust_dest_phone_code) {
                tmpContactDetails += `<Number CountryCode="${paymentContact.cust_dest_phone_code}">${paymentContact.cust_dest_phone_number}</Number>`;
            }
            tmpContactDetails += `</PhoneContact>`;
        }
        tmpContactDetails += `</Contact>`;
        tmpContactDetails += `</Contacts>`;
    }
    let soapData = `<Passengers>`;
    paxFormList.map((pax, index) => {
        let paxNo = "PAX" + ++index;
        soapData += `<Passenger ObjectKey="${paxNo}">`;
        soapData += `<PTC`;
        if (anonymousTravelerList &&
            anonymousTravelerList[paxNo] &&
            anonymousTravelerList[paxNo].PTC &&
            anonymousTravelerList[paxNo].PTC.attributes &&
            anonymousTravelerList[paxNo].PTC.attributes.Quantity) {
            soapData += ` Quantity="${anonymousTravelerList[paxNo].PTC.attributes.Quantity}"`;
        }
        soapData += `>${pax.paxType}</PTC>`;
        if (paymentContact && paymentContact.country !== '') {
            soapData += `<ResidenceCode>${paymentContact.country}</ResidenceCode>`;
        }
        soapData += `<Age><BirthDate>${pax.dob}</BirthDate></Age>`;
        soapData += `<Name>`;
        soapData += `<Title>${pax.salutation}</Title>`;
        soapData += `<Surname>${pax.firstName}</Surname>`;
        soapData += `<Given>${pax.lastName}</Given>`;
        if (pax.middleName) {
            soapData += `<Middle>${pax.middleName}</Middle>`;
        }
        soapData += `</Name>`;
        soapData += `<ProfileID>00${index}</ProfileID>`;
        soapData += tmpContactDetails;
        soapData += `<Gender>${pax.sex}</Gender>`;
        if (pax.additionalRoles) {
            soapData += `<AdditionalRoles><PaymentContactInd>true</PaymentContactInd></AdditionalRoles>`;
        }
        if (pax.salutation) {
            soapData += `<Title>${pax.salutation}</Title>`;
        }
        if (pax.identification) {
            soapData += `<PassengerIDInfo>`;
            if (pax.freqFlyerVendorCode !== '') {
                soapData += `<FOID>`;
                soapData += `<Type>FF</Type>`;
                soapData += `<ID VendorCode="${pax.freqFlyerType}">${pax.freqFlyerVendorCode}</ID>`;
                soapData += `</FOID>`;
            }
            soapData += `<PassengerDocument>`;
            soapData += `<Type>${pax.identification}</Type>`;
            soapData += `<ID>${pax.passportNo}</ID>`;
            if (pax.expiryDate !== '') {
                soapData += `<DateOfExpiration>${pax.expiryDate}</DateOfExpiration>`;
            }
            soapData += `<CountryOfIssuance>${pax.issuingCountry}</CountryOfIssuance>`;
            soapData += `<CountryOfResidence>${pax.nationality}</CountryOfResidence>`;
            soapData += `</PassengerDocument>`;
            soapData += `</PassengerIDInfo>`;
        }
        soapData += `</Passenger>`;
    });
    soapData += `</Passengers>`;
    return soapData;
}

function buildSOAPQueryPassengersMinimized(paxFormList) {
    let tmpContactDetails = ``;
    if (paxFormList.length > 0 && paxFormList[0].Passenger && paxFormList[0].Passenger.Contacts) {
        let item = paxFormList[0].Passenger.Contacts.Contact;
        tmpContactDetails += `<Contacts>`;
        tmpContactDetails += `<Contact>`;
        tmpContactDetails += `<EmailContact><Address>${item.EmailContact.Address}</Address></EmailContact>`;
        if (item.PhoneContact && item.PhoneContact.Number) {
            tmpContactDetails += `<PhoneContact>`;
            tmpContactDetails += `<Application>Personal</Application>`;
            let myNumberList = convertToArray(item.PhoneContact.Number);
            myNumberList.map((tmpNumber, tmpNumberIndex) => {
                tmpContactDetails += `<Number CountryCode="${tmpNumber["@CountryCode"]}">${tmpNumber["#text"]}</Number>`;
            });
            tmpContactDetails += `</PhoneContact>`;
        }
        tmpContactDetails += `</Contact>`;
        tmpContactDetails += `</Contacts>`;
    }
    let soapData = `<Passengers>`;
    paxFormList.map((pax1, pax1Index) => {
        let pax1List = pax1.Passenger;
        let paxList = convertToArray(pax1List);
        paxList.map((pax, paxIndex) => {
            soapData += `<Passenger ObjectKey="${pax["@ObjectKey"]}">`;
            soapData += `<PTC>${pax.PTC["#text"]}</PTC>`;
            soapData += `<Age><BirthDate>${pax.Age.BirthDate}</BirthDate></Age>`;
            soapData += `<Name>`;
            soapData += `<Title>${pax.Name.Title}</Title>`;
            soapData += `<Surname>${pax.Name.Surname}</Surname>`;
            soapData += `<Given>${pax.Name.Given}</Given>`;
            if (pax.Name.Middlename) {
                soapData += `<Middle>${pax.Name.Middlename}</Middle>`;
            }
            soapData += `</Name>`;
            soapData += `<ProfileID>00${paxIndex}</ProfileID>`;
            soapData += tmpContactDetails;
            soapData += `<Gender>${pax.Gender}</Gender>`;
            if (pax.PassengerIDInfo) {
                soapData += `<PassengerIDInfo>`;
                if (pax.freqFlyerVendorCode !== undefined && pax.freqFlyerType !== undefined && pax.freqFlyerVendorCode !== undefined) {
                    soapData += `<FOID>`;
                    soapData += `<Type>FF</Type>`;
                    soapData += `<ID VendorCode="${pax.freqFlyerType}">${pax.freqFlyerVendorCode}</ID>`;
                    soapData += `</FOID>`;
                }
                soapData += `<PassengerDocument>`;
                soapData += `<Type>${pax.PassengerIDInfo.PassengerDocument.Type}</Type>`;
                soapData += `<ID>${pax.PassengerIDInfo.PassengerDocument.ID}</ID>`;
                if (pax.PassengerIDInfo.PassengerDocument.DateOfExpiration) {
                    soapData += `<DateOfExpiration>${pax.PassengerIDInfo.PassengerDocument.DateOfExpiration}</DateOfExpiration>`;
                }
                soapData += `<CountryOfIssuance>${pax.PassengerIDInfo.PassengerDocument.CountryOfIssuance}</CountryOfIssuance>`;
                soapData += `<CountryOfResidence>${pax.PassengerIDInfo.PassengerDocument.CountryOfResidence}</CountryOfResidence>`;
                soapData += `</PassengerDocument>`;
                soapData += `</PassengerIDInfo>`;
            }
            soapData += `</Passenger>`;
        });
    });
    soapData += `</Passengers>`;
    return soapData;
}

function buildRecognizedTravelerList(data) {

    let soapData = ``;
    if (data.DataLists.hasOwnProperty('RecognizedTravelerList') &&
        data.DataLists.RecognizedTravelerList.hasOwnProperty('RecognizedTraveler')) {
        let RecognizedTravelerList = convertToArray(data.DataLists.RecognizedTravelerList.RecognizedTraveler);
        soapData = buildRecognizedTravelerListFromPassengers(RecognizedTravelerList);
    }
    return soapData;
}

function buildSOAPAssociationsPassengerList(data) {
    let soapData = ``;
    if (data.DataLists.hasOwnProperty('RecognizedTravelerList') &&
        data.DataLists.RecognizedTravelerList.hasOwnProperty('RecognizedTraveler')) {
        let RecognizedTravelerList = convertToArray(data.DataLists.RecognizedTravelerList.RecognizedTraveler);
        if (RecognizedTravelerList.length > 0) {
            soapData += `<Associations><Passengers>`;
            RecognizedTravelerList.map((traveler, travelerIndex) => {
                soapData += `<Passenger refs="${traveler['@ObjectKey']}">`;
                soapData += `<Name>`;
                soapData += `<Surname>${traveler.Name.Surname}</Surname>`;
                soapData += `<Given>${traveler.Name.Given}</Given>`;
                soapData += `<Title>${traveler.Name.Title}</Title>`;
                soapData += `</Name>`;
                soapData += `</Passenger>`;
            });
            soapData += `</Passengers></Associations>`;
        }
    }
    return soapData;
}

function buildRecognizedTravelerListFromPassengers(paxList) {
    let soapData = ``;
    if (paxList.length > 0) {
        soapData += `<RecognizedTravelerList>`;
        paxList.map((traveler, travelerIndex) => {
            soapData += `<RecognizedTraveler ObjectKey="${traveler['@ObjectKey']}">`;
            soapData += `<PTC>${traveler.PTC}</PTC>`;
            soapData += `<Name>`;
            soapData += `<Surname>${traveler.Name.Surname}</Surname>`;
            soapData += `<Given>${traveler.Name.Given}</Given>`;
            soapData += `</Name>`;
            soapData += `</RecognizedTraveler>`;
        });
        soapData += `</RecognizedTravelerList>`;
    }
    return soapData;
}

function buildSOAPBookingReferences(tripID, refID, airlineID) {
    if (refID === undefined) refID = '1234';
    let soapData = `<BookingReferences><BookingReference>`;
    soapData += `<ID>${refID}</ID>`;
    if (airlineID !== undefined) {
        soapData += `<AirlineID>${airlineID}</AirlineID>`;
    }
    soapData += `<OtherID Name="TPC">${tripID}</OtherID>`;
    soapData += `</BookingReference></BookingReferences>`;
    return soapData;
}

function requestResponseWithSpecificCurrency(currency, numberOfDecimals) {
    if (numberOfDecimals === undefined) {
        numberOfDecimals = 2;
    }
    let soapData = `<Metadata>`;
    soapData += `<Other>`;
    soapData += `<OtherMetadata>`;
    soapData += `<CurrencyMetadatas>`;
    soapData += `<CurrencyMetadata MetadataKey="DisplayCurrency">`;
    soapData += `<Decimals>${numberOfDecimals}</Decimals>`;
    soapData += `<Name>${currency}</Name>`;
    soapData += `</CurrencyMetadata>`;
    soapData += `</CurrencyMetadatas>`;
    soapData += `</OtherMetadata>`;
    soapData += `</Other>`;
    soapData += `</Metadata>`;
    return soapData;
}

function requestResponseWithSpecificCurrencyOrderChange(currency, numberOfDecimals) {
    if (numberOfDecimals === undefined) {
        numberOfDecimals = 2;
    }
    let soapData = `<OrderChangeMetadata>`;
    soapData += `<Other>`;
    soapData += `<OtherMetadata>`;
    soapData += `<CurrencyMetadatas>`;
    soapData += `<CurrencyMetadata MetadataKey="DisplayCurrency">`;
    soapData += `<Decimals>${numberOfDecimals}</Decimals>`;
    soapData += `<Name>${currency}</Name>`;
    soapData += `</CurrencyMetadata>`;
    soapData += `</CurrencyMetadatas>`;
    soapData += `</OtherMetadata>`;
    soapData += `</Other>`;
    soapData += `</OrderChangeMetadata>`;
    return soapData;
}

function buildSOAPEnd(nodeName) {
    return `</${nodeName}></soapenv:Body></soapenv:Envelope>`;
}

module.exports = {
    soapConst,
    getHeader,
    getNodeStart,
    getBodyDocument,
    getBodyParty,
    getBodyPartyReshop,
    getBodyPointOfSaleMinified,
    buildSOAPQueryPassengers,
    buildRecognizedTravelerList,
    buildSOAPAssociationsPassengerList,
    buildRecognizedTravelerListFromPassengers,
    requestResponseWithSpecificCurrency,
    requestResponseWithSpecificCurrencyOrderChange,
    buildSOAPQueryPassengersMinimized,
    buildSOAPBookingReferences,
    getStart,
    buildSOAPStart,
    buildSOAPEnd,
    getBodyDocument
};