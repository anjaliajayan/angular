const {
  buildSOAPStart,
  buildSOAPEnd
} = require('../../config/soap_const')
var moment = require('moment');
let {
  convertToArray,
  getUserDetails,
  getOrgDetails
} = require("./../helpers/utils");
let AirDocIssue = async (req) => {
  if (req.body.bookingFor === null) {
    console.log("Check one")
    resultOrgDetails = getOrgDetails(req)
    if (!resultOrgDetails.auth) {
      return '';
    }
  } else {
    
    resultOrgDetails = await getUserDetails(req.body.bookingFor);
    console.log("Check two",resultOrgDetails)
  }
  if (!resultOrgDetails.auth) {
    console.log("Auth error")
    return '';
  }
  let soapData = buildSOAPStart("AirDocIssueRQ", req, resultOrgDetails);
  let airDocIssueData = req.body
 
  soapData += `<Query>`;
  let passengers = convertToArray(airDocIssueData.Passengers);
  soapData += `<TicketDocQuantity>${passengers.length}</TicketDocQuantity>`;
  passengers.map((obj, index) => {
    // let pax1 = obj.Passenger;
    let paxs = convertToArray(obj.Passenger);
    paxs.forEach(pax => {
      soapData += `<TicketDocInfo>`;
      soapData += `<TravelerInfo ObjectKey="PAX${++index}">`;
      soapData += `<Surname>${pax.Name.hasOwnProperty('Surname') ? pax.Name.Surname : ''}</Surname>`;
      soapData += `<Given>${pax.Name.hasOwnProperty('Given') ? pax.Name.Given : ''}</Given>`;
      soapData += `<Title>${pax.Name.hasOwnProperty('Title') ? pax.Name.Title : ''}</Title>`;
      soapData += `<Middle>${pax.Name.hasOwnProperty('Middle') ? pax.Name.Middle : ''}</Middle>`;
      soapData += `<PTC>${pax.Name.hasOwnProperty('PTC') ? pax.Name.PTC["#text"] : ''}</PTC>`;
      soapData += `<BirthDate>${moment(pax.Age.BirthDate).format("YYYY-MM-DD")}</BirthDate>`;
      soapData += `<EmailContact>`;
      soapData += `<Address>${pax.Contacts.Contact.hasOwnProperty('EmailContact') ? pax.Contacts.Contact.EmailContact.Address : ''}</Address>`;
      soapData += `</EmailContact>`;
      if (pax.Contacts.Contact.hasOwnProperty('PhoneContact')) {
        let myPhoneContact = pax.Contacts.Contact.PhoneContact;
        soapData += `<PhoneContact>`;
        soapData += `<Application>${myPhoneContact.Application}</Application>`;
        let numbers = convertToArray(myPhoneContact.Number);
        numbers.map((item, itemIndex) => {
          soapData += `<Number CountryCode="${item['@CountryCode']}">${item['#text']}</Number>`;
        });
        soapData += `</PhoneContact>`;
      }
      soapData += `</TravelerInfo><OrderReference>`;
      let orderItems = convertToArray(airDocIssueData.Order.OrderItems.OrderItem);
      orderItems.forEach(orderItem => {
        soapData += `<OrderID Owner="${airDocIssueData.Order.OrderID["@Owner"]}">${airDocIssueData.Order.OrderID["#text"]}</OrderID>`;
        soapData += `<OrderItemID Owner="${orderItem.OrderItemID["@Owner"]}">${
          orderItem.OrderItemID["#text"]
          }</OrderItemID>`;
      })
      console.log(airDocIssueData.Order.BookingReferences.BookingReference);
      soapData += `<BookingReference>
                            <OtherID Name="${airDocIssueData.Order.BookingReferences.BookingReference.OtherID["@Name"]}">${
        airDocIssueData.Order.BookingReferences.BookingReference.OtherID["#text"]
        }</OtherID>`
      if (airDocIssueData.Order.BookingReferences.BookingReference.AirlineID["@Name"] == undefined) {
        soapData += `<AirlineID>${
          airDocIssueData.Order.BookingReferences.BookingReference.AirlineID
          }</AirlineID>`
      } else {
        soapData += `<AirlineID Name="${airDocIssueData.Order.BookingReferences.BookingReference.AirlineID["@Name"]}">${
          airDocIssueData.Order.BookingReferences.BookingReference.AirlineID["#text"]
          }</AirlineID>`
      }
      if(airDocIssueData.Order.BookingReferences.BookingReference.ID){
        soapData += `<ID>${airDocIssueData.Order.BookingReferences.BookingReference.ID}</ID>`;
      }else{
        soapData += `<ID></ID>`;
      }
      soapData += `     </BookingReference>
                    </OrderReference>
                    <Payments>
                        <Payment>
                            <Type>
                                <Code>CA</Code>
                            </Type>
                            <Amount Code="${airDocIssueData.Order.TotalOrderPrice.DetailCurrencyPrice.Total['@Code']}">${airDocIssueData.Order.TotalOrderPrice.DetailCurrencyPrice.Total['#text']}</Amount>
                        </Payment>
                    </Payments>
                    <Commission>
                        <Percentage>1</Percentage>
                    </Commission>
                </TicketDocInfo>`;
    });
  });
  soapData += `<DataLists>
                    <FlightSegmentList>`;
  let flightSegmentList = convertToArray(airDocIssueData.DataLists.FlightSegmentList.FlightSegment);
  flightSegmentList.map((fltSeg, index) => {
    soapData += `<FlightSegment SegmentKey="${fltSeg["@SegmentKey"]}">
                            <Departure>
                                <AirportCode>${fltSeg.Departure.AirportCode}</AirportCode>
                                <Date>${fltSeg.Departure.Date}</Date>
                                <Time>${fltSeg.Departure.Time}</Time>
                                <AirportName>${fltSeg.Departure.AirportName}</AirportName>`;
    if (fltSeg.Departure.Terminal !== undefined && fltSeg.Departure.Terminal.Name !== undefined) {
      soapData += `<Terminal><Name>${fltSeg.Departure.Terminal.Name}</Name></Terminal>`;
    }
    soapData += `</Departure>
                            <Arrival>
                            <AirportCode>${fltSeg.Arrival.AirportCode}</AirportCode>
                            <Date>${fltSeg.Arrival.Date}</Date>
                            <Time>${fltSeg.Arrival.Time}</Time>
                            <AirportName>${fltSeg.Arrival.AirportName}</AirportName>`;
    if (fltSeg.Arrival.Terminal !== undefined && fltSeg.Arrival.Terminal.Name !== undefined) {
      soapData += `<Terminal><Name>${fltSeg.Arrival.Terminal.Name}</Name></Terminal>`;
    }
    console.log("AIRLINE ID",fltSeg.MarketingCarrier.AirlineID);

    
    if(fltSeg.MarketingCarrier.AirlineID['#text']){
      soapData += `</Arrival>
      <MarketingCarrier>
          <AirlineID>${fltSeg.MarketingCarrier.AirlineID['#text']}</AirlineID>
          <Name>${fltSeg.MarketingCarrier.Name}</Name>
          <FlightNumber>${fltSeg.MarketingCarrier.FlightNumber}</FlightNumber>
      </MarketingCarrier>`
    }else{
      soapData += `</Arrival>
      <MarketingCarrier>
          <AirlineID>${fltSeg.MarketingCarrier.AirlineID}</AirlineID>
          <Name>${fltSeg.MarketingCarrier.Name}</Name>
          <FlightNumber>${fltSeg.MarketingCarrier.FlightNumber}</FlightNumber>
      </MarketingCarrier>`
    }

    if (fltSeg.OperatingCarrier.FlightNumber == undefined) {
      if(fltSeg.OperatingCarrier.AirlineID['#text']){
        soapData += `<OperatingCarrier>
        <AirlineID>${fltSeg.OperatingCarrier.AirlineID['#text']}</AirlineID>
        <Name>${fltSeg.OperatingCarrier.Name}</Name>
        </OperatingCarrier>`;
      
      }else{
        soapData += `<OperatingCarrier>
        <AirlineID>${fltSeg.OperatingCarrier.AirlineID}</AirlineID>
        <Name>${fltSeg.OperatingCarrier.Name}</Name>
        </OperatingCarrier>`;
        
      }
      
    } else {
      if(fltSeg.OperatingCarrier.AirlineID['#text']){
      soapData += `<OperatingCarrier>
      <AirlineID>${fltSeg.OperatingCarrier.AirlineID['#text']}</AirlineID>
      <Name>${fltSeg.OperatingCarrier.Name}</Name>
      <FlightNumber>${fltSeg.OperatingCarrier.FlightNumber}</FlightNumber>
      </OperatingCarrier>`;
     
      }else{
        soapData += `<OperatingCarrier>
        <AirlineID>${fltSeg.OperatingCarrier.AirlineID}</AirlineID>
        <Name>${fltSeg.OperatingCarrier.Name}</Name>
        <FlightNumber>${fltSeg.OperatingCarrier.FlightNumber}</FlightNumber>
        </OperatingCarrier>`;
        
      }
    }
    if(fltSeg.Equipment.AircraftCode['#text']){
      soapData += `<Equipment>
      <AircraftCode>${fltSeg.Equipment.AircraftCode['#text']}</AircraftCode>
      <Name>${fltSeg.Equipment.AircraftCode['#text']}</Name>
      </Equipment>`;
    }else{
      soapData += `<Equipment>
        <AircraftCode>${fltSeg.Equipment.AircraftCode}</AircraftCode>
        <Name>${fltSeg.Equipment.AircraftCode}</Name>
        </Equipment>`;
    }

    if (fltSeg.ClassOfService !== undefined) {
      soapData += `<ClassOfService>`;
      if (fltSeg.ClassOfService.Code !== undefined && fltSeg.ClassOfService.Code.hasOwnProperty('#text')) {
        soapData += `<Code SeatsLeft="${fltSeg.ClassOfService.Code['@SeatsLeft']}">${fltSeg.ClassOfService.Code['#text']}</Code>`;
      } else {
        soapData += `<Code>${fltSeg.ClassOfService.Code}</Code>`;
      }
      if (fltSeg.ClassOfService.MarketingName !== undefined) {
        soapData += `<MarketingName`;
        if (fltSeg.ClassOfService.MarketingName.hasOwnProperty('@CabinDesignator')) {
          soapData += ` CabinDesignator="${fltSeg.ClassOfService.MarketingName.hasOwnProperty('CabinDesignator') ? fltSeg.ClassOfService.MarketingName['@CabinDesignator'] : ''}">${fltSeg.ClassOfService.MarketingName['#text']}</MarketingName>`;
        } else {
          soapData += `>${fltSeg.ClassOfService.MarketingName}</MarketingName>`;
        }
      }
      soapData += `</ClassOfService>`;
    }
    if (fltSeg.FlightDetail) {
      soapData += `<FlightDetail>`;
      if (fltSeg.FlightDetail.FlightDuration && fltSeg.FlightDetail.FlightDuration.Value) {
        soapData += `<FlightDuration><Value>${fltSeg.FlightDetail.FlightDuration.Value}</Value></FlightDuration>`;
      }
      if (fltSeg.FlightDetail.hasOwnProperty('Stops')) {
        soapData += `<Stops><StopQuantity>${fltSeg.FlightDetail.Stops.StopQuantity}</StopQuantity><StopLocations/></Stops>`;
      }
      soapData += `</FlightDetail>`;
    }
    soapData += `</FlightSegment>`;
  });
  soapData += `</FlightSegmentList>
                    <FlightList>`;
  let flightList = airDocIssueData.DataLists.FlightList.Flight.length > 0 ? airDocIssueData.DataLists.FlightList.Flight : convertToArray(airDocIssueData.DataLists.FlightList.Flight);
  flightList.map((flt, index) => {
    if (flt["@refs"] == undefined) {
      soapData += `<Flight FlightKey="${flt["@FlightKey"]}">`;
    } else {
      soapData += `<Flight FlightKey="${flt["@FlightKey"]}" refs="${flt["@refs"]}">`;
    }
    if (flt.Journey !== undefined && flt.Journey.Time !== undefined) {
      soapData += `<Journey><Time>${flt.Journey.Time}</Time></Journey>`;
    }
    console.log(flt.SegmentReferences)
    if(flt.SegmentReferences['#text']){
      soapData += `<SegmentReferences>${flt.SegmentReferences['#text']}</SegmentReferences>
      </Flight>`;
    }else{
    soapData += `<SegmentReferences>${flt.SegmentReferences}</SegmentReferences>
                        </Flight>`;
                      }
  });
  soapData += `</FlightList>
                    <OriginDestinationList>`;
  let originDestinationList = airDocIssueData.DataLists.OriginDestinationList.OriginDestination.length > 0 ? airDocIssueData.DataLists.OriginDestinationList.OriginDestination : convertToArray(airDocIssueData.DataLists.OriginDestinationList.OriginDestination);
  originDestinationList.map((od, index) => {
    if (od["@refs"] == undefined) {
      soapData += `<OriginDestination OriginDestinationKey="${od["@OriginDestinationKey"]}">
      <DepartureCode>${od.DepartureCode}</DepartureCode>
      <ArrivalCode>${od.ArrivalCode}</ArrivalCode>
      <FlightReferences>${od.FlightReferences}</FlightReferences>
    </OriginDestination>`;
    } else {
      soapData += `<OriginDestination OriginDestinationKey="${od["@OriginDestinationKey"]}" refs="${od["@refs"]}">
      <DepartureCode>${od.DepartureCode}</DepartureCode>
      <ArrivalCode>${od.ArrivalCode}</ArrivalCode>
      <FlightReferences>${od.FlightReferences}</FlightReferences>
    </OriginDestination>`;
    }
  });

  soapData += `</OriginDestinationList>`
  if (airDocIssueData.DataLists.PenaltyList !== undefined) {
    soapData += `
    <PenaltyList>
						<Penalty ObjectKey="Rule1" refs="FS1">
							<Details>
								<Detail>
									<Type>Change</Type>
									<Amounts>
										<Amount>
											<CurrencyAmountValue Code="GBP">0.00</CurrencyAmountValue>
											<ApplicableFeeRemarks>
												<Remark>Time/date changes permitted at any time for the difference in fare. Changes subject to availability</Remark>
											</ApplicableFeeRemarks>
										</Amount>
									</Amounts>
								</Detail>
							</Details>
						</Penalty>
						<Penalty ObjectKey="Rule2" refs="FS1">
							<Details>
								<Detail>
									<Type>Upgrade</Type>
									<Amounts>
										<Amount>
											<CurrencyAmountValue Code="GBP">0.00</CurrencyAmountValue>
											<ApplicableFeeRemarks>
												<Remark>Time/date changes permitted at any time for the difference in fare. Changes subject to availability</Remark>
											</ApplicableFeeRemarks>
										</Amount>
									</Amounts>
								</Detail>
							</Details>
						</Penalty>
						<Penalty ObjectKey="Rule3" refs="FS1">
							<Details>
								<Detail>
									<Type>Cancellation</Type>
									<Amounts>
										<Amount>
											<CurrencyAmountValue Code="GBP">0.00</CurrencyAmountValue>
											<ApplicableFeeRemarks>
												<Remark>If you cancel a refund is permitted, subject to recalculation of the fare for any journey flown. There are no cancellation fees.</Remark>
											</ApplicableFeeRemarks>
										</Amount>
									</Amounts>
								</Detail>
							</Details>
						</Penalty>
						<Penalty ObjectKey="Rule4" refs="FS2">
							<Details>
								<Detail>
									<Type>Change</Type>
									<Amounts>
										<Amount>
											<CurrencyAmountValue Code="GBP">0.00</CurrencyAmountValue>
											<ApplicableFeeRemarks>
												<Remark>Time/date changes permitted at any time for the difference in fare. Changes subject to availability</Remark>
											</ApplicableFeeRemarks>
										</Amount>
									</Amounts>
								</Detail>
							</Details>
						</Penalty>
						<Penalty ObjectKey="Rule5" refs="FS2">
							<Details>
								<Detail>
									<Type>Upgrade</Type>
									<Amounts>
										<Amount>
											<CurrencyAmountValue Code="GBP">0.00</CurrencyAmountValue>
											<ApplicableFeeRemarks>
												<Remark>Time/date changes permitted at any time for the difference in fare. Changes subject to availability</Remark>
											</ApplicableFeeRemarks>
										</Amount>
									</Amounts>
								</Detail>
							</Details>
						</Penalty>
						<Penalty ObjectKey="Rule6" refs="FS2">
							<Details>
								<Detail>
									<Type>Cancellation</Type>
									<Amounts>
										<Amount>
											<CurrencyAmountValue Code="GBP">0.00</CurrencyAmountValue>
											<ApplicableFeeRemarks>
												<Remark>If you cancel a refund is permitted, subject to recalculation of the fare for any journey flown. There are no cancellation fees.</Remark>
											</ApplicableFeeRemarks>
										</Amount>
									</Amounts>
								</Detail>
							</Details>
						</Penalty>
					</PenaltyList>
    `;
    soapData += `<PriceDetail>`;
    let orderItemList = convertToArray(airDocIssueData.Order.OrderItems.OrderItem);
    let paxList = convertToArray(airDocIssueData.Passengers.Passenger);
    let myTotal = 0;
    let myTaxes = 0;
    let myBaseAmount = 0;
    paxList.map((pax, paxIdx) => {
      soapData += `<PassengerFares>`;
      soapData += `<type>${pax.PTC['#text']}</type>`;
      soapData += `<quantity>${pax.PTC['@Quantity']}</quantity>`;
      soapData += `<surcharge>0</surcharge>`;
      let orderItem = orderItemList.filter(e => e.Associations.Passengers.PassengerReferences.includes(pax.PTC["@ObjectKey"]));
      if (orderItem.length === 1) {
        myTotal += parseInt(orderItem[0].FlightItem.Price.Fees.Total['#text']);
        myTaxes += parseInt(orderItem[0].FlightItem.Price.Taxes.Total['#text']);
        myBaseAmount += parseInt(orderItem[0].FlightItem.Price.BaseAmount['#text']);
        soapData += `<total>${orderItem[0].FlightItem.Price.Fees.Total['#text']}</total>`;
        soapData += `<taxes>${orderItem[0].FlightItem.Price.Taxes.Total['#text']}</taxes>`;
        soapData += `<baseamount>${orderItem[0].FlightItem.Price.BaseAmount['#text']}</baseamount>`;
      }
      soapData += `</PassengerFares>`;
    });
    soapData += `<baggageArr>`;

    ONG = Array.isArray(airDocIssueData.DataLists.OriginDestinationList.OriginDestination) ? airDocIssueData.DataLists.OriginDestinationList.OriginDestination : [airDocIssueData.DataLists.OriginDestinationList.OriginDestination]
    if (typeof (airDocIssueData.DataLists.OriginDestinationList.OriginDestination) == "object") {
      ONG.forEach(element => {
        soapData += `<ADT>
        <type>${element.DepartureCode}-${element.ArrivalCode}</type>
        <checkInBag>1 piece(s) 23 Kilogram</checkInBag>
        </ADT>`
      });
    }
    soapData += `</baggageArr>
                  <OfferPrice>
                    <FarebaseCode/>
                    <total>${myTotal}</total>
                    <taxes>${myTaxes}</taxes>
                    <baseamount>${myBaseAmount}</baseamount>
                  </OfferPrice>
                </PriceDetail>`;
  }
  soapData += `<ServiceList/></DataLists><Metadata><Other>`;

  let otherMetadataList = airDocIssueData.Metadata.Other.OtherMetadata.length > 0 ? airDocIssueData.Metadata.Other.OtherMetadata : convertToArray(airDocIssueData.Metadata.Other.OtherMetadata);
  otherMetadataList.map((otherMeta, index) => {
    if (otherMeta.CurrencyMetadatas !== undefined && otherMeta.CurrencyMetadatas.CurrencyMetadata.Decimals !== undefined) {
      soapData += `<OtherMetadata>
      <CurrencyMetadatas>
          <CurrencyMetadata MetadataKey="${otherMeta.CurrencyMetadatas.CurrencyMetadata["@MetadataKey"]}">
              <Decimals>${otherMeta.CurrencyMetadatas.CurrencyMetadata.Decimals}</Decimals>`;
      if (otherMeta.CurrencyMetadatas.CurrencyMetadata.hasOwnProperty('Name')) {
        soapData += `<Name>${otherMeta.CurrencyMetadatas.CurrencyMetadata.Name}</Name>`;
      }
      soapData += `</CurrencyMetadata></CurrencyMetadatas></OtherMetadata>`;
    }
  });
  soapData += `</Other></Metadata></Query>`;
  soapData += buildSOAPEnd("AirDocIssueRQ");
  console.log('soapData',soapData);
  return soapData;
};

module.exports = AirDocIssue;