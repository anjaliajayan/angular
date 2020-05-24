let {
    convertToArray,getOrgDetails
  } = require("./../../../helpers/utils");
  
  const CancelRoomRQ = (req) => {
    let data = req.body;
    let userDetail = getOrgDetails(req);
    let agent = userDetail.agent;
    let apiKey = userDetail.api_key;
    let secret_key =userDetail.secret_key;
    let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hot="http://tpconnects.com/service/hotels">`;
    soapData += `<soapenv:Header><hot:SecurityHeader>`;
    soapData+=`<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secret_key}</secretKey>`;
    // soapData+=`<agent>TPC</agent><apiKey>654e4dc5b90b7478671fe6448cab3f32</apiKey><secretKey>22b684e2-9bb5-11e7-abc4-cec278b6b50a</secretKey>`;
    soapData += `</hot:SecurityHeader></soapenv:Header>`;
    soapData += `<soapenv:Body>`;
    soapData += `<hot:CancelRooms>`;
   
    let hotelData = data.hotel.bookings_hotel;
    soapData += `<Hotel>`;
    soapData += `<supplier_code>${hotelData.supplier_code}</supplier_code>`;
    soapData += `<supplier_hotel_id>${hotelData.hotel_id}</supplier_hotel_id>`;
    soapData += `<hotel_name>${hotelData.hotel_name}</hotel_name>`;
    soapData += `<latitute>${hotelData.hotel_latitude}</latitute>`;
    soapData += `<tripId>${hotelData.trip_id}</tripId>`;

    let room = JSON.parse(data.hotel.bookings_hotel.room_info);
    room  =  Array.isArray(room)? room : Array(room);
    // console.log("room===================", room);
    room.map((room, key) => {   
    soapData += `<room>`;
    soapData += `<room_code>${room.room_code}</room_code>`;
    soapData += `<room_description>${room.room_description}</room_description>`;
    soapData += `<booking_code>${room.booking_code}</booking_code>`;
    soapData += `<currency_code>${room.currency_code}</currency_code>`;
    soapData += `<base_rate>${room.base_rate}</base_rate>`;
    soapData += `<supplier_price>${room.supplier_price}</supplier_price>`;
    soapData += `<adult_max>${room.adult_max}</adult_max>`;
    soapData += `<child_max>${room.child_max}</child_max>`;
    soapData += `<extra_bed>${room.extra_bed}</extra_bed>`;
    soapData += `<adult>${room.adult}</adult>`;
    soapData += `<child>${room.child}</child>`;
    soapData += `<beds>${room.beds}</beds>`;
    soapData += `<quantity>${room.quantity}</quantity>`;
    soapData += `<timezone>${room.timezone}</timezone>`;
    soapData += `<booking_hotel_id>${room.booking_hotel_id}</booking_hotel_id>`;
    soapData += `<variables>`;

    room.variables.entry.map((entry, entryIndex) => {
      if(typeof entry.value == 'object'){
        entry.value = JSON.stringify(entry.value);
      }
      soapData += `<entry><key>${entry.key}</key><value>${entry.value}</value></entry>`;
    })
    soapData += `</variables>`;

    if (room.policies) {
      soapData += `<policies>${room.policies}</policies>`;
    } else {
      soapData += `<policies/>`;
    }

    soapData += `<dynamicMarkup>${room.dynamicMarkup}</dynamicMarkup>`;
    soapData += `<supplierVAT>${room.supplierVAT}</supplierVAT>`;
	soapData += `<appliedCommissionTax>${room.appliedCommissionTax}</appliedCommissionTax>`;
	soapData += `<appliedTotalTax>${room.appliedTotalTax}</appliedTotalTax>`;
    soapData += `<isTaxInclusive>${room.isTaxInclusive}</isTaxInclusive>`;
    soapData += `<booking_status>${room.booked}</booking_status>`;
    soapData += `<reference_number>${room.reference_number}</reference_number>`;
	soapData += `<trip_id>${hotelData.trip_id}</trip_id>`;
    soapData += `<board_type>${room.board_type}</board_type>`;
    
    let cancelPolicyList = convertToArray(room.cancel_policy)
    cancelPolicyList.map((cancelPolicy, cancelPolicyIndex) => {
      soapData += `<cancel_policy>`;
      if (cancelPolicy.hasOwnProperty("cancel_restriction")) {
        soapData += `<cancel_restriction>${cancelPolicy.cancel_restriction}</cancel_restriction>`;
      }
      if (cancelPolicy.hasOwnProperty("currencyCode")) {
        soapData += `<currencyCode>${cancelPolicy.currencyCode}</currencyCode>`;
      }
      if (cancelPolicy.hasOwnProperty("dynamicMarkUp")) {
        soapData += `<dynamicMarkUp>${cancelPolicy.dynamicMarkUp}</dynamicMarkUp>`;
      }
      if (cancelPolicy.hasOwnProperty("fromUnix")) {
        soapData += `<fromUnix>${cancelPolicy.fromUnix}</fromUnix>`;
      }
      if (cancelPolicy.hasOwnProperty("markup_price")) {
        soapData += `<markup_price>${cancelPolicy.markup_price}</markup_price>`;
      }
      if (cancelPolicy.hasOwnProperty("original_cancellation_supplier_price")) {
        soapData += `<original_cancellation_supplier_price>${cancelPolicy.original_cancellation_supplier_price}</original_cancellation_supplier_price>`;
      }
      if (cancelPolicy.hasOwnProperty("supplier_price")) {
        soapData += `<supplier_price>${cancelPolicy.supplier_price}</supplier_price>`;
      }
      if (cancelPolicy.hasOwnProperty("toUnix")) {
        soapData += `<toUnix>${cancelPolicy.toUnix}</toUnix>`;
      }
      soapData += `</cancel_policy>`;
    })
    
    let inclusionList = convertToArray(room.inclusion)
    inclusionList.map((inclusion, inclusionIndex) => {
      soapData += `<inclusion>${inclusion}</inclusion>`;
    })
    soapData += `<is_blocked>${room.is_blocked}</is_blocked>`;
    soapData += `<is_booked>${room.booked}</is_booked>`;

    if (room.room_occupancy) {
      let roomOccupancyList = convertToArray(room.room_occupancy)
      roomOccupancyList.map((roomOccupancy, roomOccupancyIndex) => {
        soapData += `<room_occupancy><age>${roomOccupancy.age}</age><category>${roomOccupancy.category}</category><first_name>${roomOccupancy.first_name}</first_name><last_name>${roomOccupancy.first_name}</last_name><salutation>${roomOccupancy.salutation}</salutation></room_occupancy>`;
      })
    }
    soapData += `<hotel_name>${room.hotel_name}</hotel_name>`;
    soapData += `<hotel_id>${room.hotel_id}</hotel_id>`;
    soapData += `<supplier_name>${room.supplier_name}</supplier_name>`;
    

    if (room.markups) {
      soapData += `<markups>`;
      if (room.markups.rateKey) {
          soapData += `<rateKey>${room.markups.rateKey}</rateKey>`;
      }
      if (room.markups.markupHotel) {
        if(typeof room.markups.markupHotel == 'object'){
            room.markups.markupHotel = JSON.stringify(room.markups.markupHotel);
          }
          soapData += `<markupHotel>${room.markups.markupHotel}</markupHotel>`;
      }
      if (room.markups.markupPrice) {
          soapData += `<markupPrice>${room.markups.markupPrice}</markupPrice>`;
      }
      soapData += `</markups>`;
    }
    soapData += `<markup_price>${room.markup_price}</markup_price>`;
    soapData += `</room>`;
   })
    soapData += `</Hotel></hot:CancelRooms></soapenv:Body></soapenv:Envelope>`;
    return soapData;
  }
  
  module.exports = {
    CancelRoomRQ
  };
  