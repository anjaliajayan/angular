let {
  convertToArray,getOrgDetails
} = require("./../../../helpers/utils");

const BlockRoomsRQ = (req) => {
  let data = req.body;
  let userDetail = getOrgDetails(req);
  let agent = userDetail.agent;
  let apiKey = userDetail.api_key;
  let secret_key = userDetail.secret_key;
 
    
  let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hot="http://tpconnects.com/service/hotels">`;
  soapData += `<soapenv:Header><hot:SecurityHeader>`;
  soapData+=`<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secret_key}</secretKey>`;
  // soapData+=`<agent>TPC</agent><apiKey>654e4dc5b90b7478671fe6448cab3f32</apiKey><secretKey>22b684e2-9bb5-11e7-abc4-cec278b6b50a</secretKey>`;
  soapData += `</hot:SecurityHeader></soapenv:Header>`;
  soapData += `<soapenv:Body>`;
  soapData += `<hot:BlockRooms>`;
  soapData += `<HotelSearchCriteria>`;
  soapData += `<browser_agent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</browser_agent>`;
  soapData += `<browser_ip>::1</browser_ip>`;
if(data.ca.length>0){
  soapData += `<ca>${data.ca}</ca>`;
}else{
  soapData += `<ca/>`;
}
  soapData += `<adults_per_room>${data.adults_per_room}</adults_per_room>`;
  soapData += `<checkInUnix>${Date.parse(data.check_in) / 1000}</checkInUnix>`;
  soapData += `<checkOutUnix>${Date.parse(data.check_out) / 1000}</checkOutUnix>`;
  soapData += `<check_in>${data.check_in}</check_in>`;
  soapData += `<check_out>${data.check_out}</check_out>`;

  // console.log("children_per_room",data.children_per_room);
  // console.log("children_per_room",Object.keys(data.children_per_room).length);

  if(data.children_per_room != null || data.children_per_room != undefined){
     soapData += `<children_per_room>${data.children_per_room}</children_per_room>`;
  }else{
    soapData += `<children_per_room>0</children_per_room>`;
  }
 
  soapData += `<city>${data.city}</city>`;
  soapData += `<city_code>${data.city_code}</city_code>`;
  soapData += `<country>${data.country}</country>`;
  soapData += `<currency>${data.currency}</currency>`;
  soapData += `<extra_bed>${data.extra_bed}</extra_bed>`;
  soapData += `<hotel_info/>`;
  soapData += `<location/>`;
  soapData += `<markupBy>${data.markupBy}</markupBy>`;
  soapData += `<nationality>${data.nationality}</nationality>`;
  soapData += `<no_of_rooms>${data.no_of_rooms}</no_of_rooms>`;
  soapData += `<resident>${data.resident}</resident>`;
  soapData += `<response_key>${data.response_key}</response_key>`;
  soapData += `<scr>b2b</scr>`;
  soapData += `</HotelSearchCriteria>`;
  soapData += `<Hotel>`;
  let room = data.hotel.room;
  soapData += `<supplier_code>${room.supplier_name}</supplier_code>`;
  soapData += `<hotel_id>${data.hotel.hotel_id}</hotel_id>`;
  soapData += `<room>`;
  soapData += `<room_code>${room.room_code}</room_code>`;
  if (room.room_type_code) {
    soapData += `<room_type_code>${room.room_type_code}</room_type_code>`;
  }
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
    if (typeof entry.value == 'object') {
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
  soapData += `<originalSupplierRoomPrice>${room.originalSupplierRoomPrice}</originalSupplierRoomPrice>`;
  soapData += `<dynamicMarkup>${room.dynamicMarkup}</dynamicMarkup>`;
  if (room.sPSupplierCurrency) {
    soapData += `<sPSupplierCurrency>${room.sPSupplierCurrency}</sPSupplierCurrency>`;
  }
  if (room.sCsupplierCurrency) {
    soapData += `<sCsupplierCurrency>${room.sCsupplierCurrency}</sCsupplierCurrency>`;
  }
  soapData += `<board_type>${room.board_type}</board_type>`;
  if (room.special_offer) {
    soapData += `<special_offer>${room.special_offer}</special_offer>`;
  }


  let cancelPolicyList = [];
  if( room.cancel_policy ) {
    cancelPolicyList = convertToArray(room.cancel_policy);
  }
  // else {
  //   cancelPolicy.cancel_restriction = '';
  //   cancelPolicy.currencyCode = '';
  //   cancelPolicy.dynamicMarkUp = '';
  //   cancelPolicy.fromUnix = '';
  //   cancelPolicy.markup_price = '';
  //   cancelPolicy.original_cancellation_supplier_price = '';
  //   cancelPolicy.supplier_price = '';
  //   cancelPolicy.toUnix = '';
  // }

  cancelPolicyList.map((cancelPolicy, cancelPolicyIndex) => {
    soapData += `<cancel_policy>`;
    if (cancelPolicy.hasOwnProperty("cancel_restriction")) {
      soapData += `<cancel_restriction>${cancelPolicy.cancel_restriction || ''}</cancel_restriction>`;
    }
    if (cancelPolicy.hasOwnProperty("currencyCode")) {
      soapData += `<currencyCode>${cancelPolicy.currencyCode || ''}</currencyCode>`;
    }
    if (cancelPolicy.hasOwnProperty("dynamicMarkUp")) {
      soapData += `<dynamicMarkUp>${cancelPolicy.dynamicMarkUp || ''}</dynamicMarkUp>`;
    }
    if (cancelPolicy.hasOwnProperty("fromUnix")) {
      soapData += `<fromUnix>${cancelPolicy.fromUnix || ''}</fromUnix>`;
    }
    if (cancelPolicy.hasOwnProperty("markup_price")) {
      soapData += `<markup_price>${cancelPolicy.markup_price || ''}</markup_price>`;
    }
    if (cancelPolicy.hasOwnProperty("original_cancellation_supplier_price")) {
      soapData += `<original_cancellation_supplier_price>${cancelPolicy.original_cancellation_supplier_price || ''}</original_cancellation_supplier_price>`;
    }
    if (cancelPolicy.hasOwnProperty("supplier_price")) {
      soapData += `<supplier_price>${cancelPolicy.supplier_price || ''}</supplier_price>`;
    }
    if (cancelPolicy.hasOwnProperty("toUnix")) {
      soapData += `<toUnix>${cancelPolicy.toUnix || ''}</toUnix>`;
    }
    soapData += `</cancel_policy>`;
  })

  let inclusionList = [];
  if( room.inclusion )
    inclusionList = convertToArray(room.inclusion)
  else {
    inclusionList.inclusion = '';
  }


  inclusionList.map((inclusion, inclusionIndex) => {
    soapData += `<inclusion>${inclusion}</inclusion>`;
  })

  if (room.room_occupancy) {
    let roomOccupancyList = convertToArray(room.room_occupancy)
    roomOccupancyList.map((roomOccupancy, roomOccupancyIndex) => {
      soapData += `<room_occupancy><age>${roomOccupancy.age}</age><category>${roomOccupancy.category}</category><salutation>${roomOccupancy.salutation}</salutation></room_occupancy>`;
    })
  }
  soapData += `<hotel_name>${room.hotel_name}</hotel_name>`;
  soapData += `<hotel_id>${room.hotel_id}</hotel_id>`;
  soapData += `<supplier_name>${room.supplier_name}</supplier_name>`;
  soapData += `<markup_price>${room.markup_price}</markup_price>`;

  if (room.markups) {
    soapData += `<markups>`;
    if (room.markups.rateKey) {
      soapData += `<rateKey>${room.markups.rateKey}</rateKey>`;
    }
    if (room.markups.markupHotel) {
      soapData += `<markupHotel>${room.markups.markupHotel}</markupHotel>`;
    }
    if (room.markups.markupPrice) {
      soapData += `<markupPrice>${room.markups.markupPrice}</markupPrice>`;
    }
    soapData += `</markups>`;
  }
  soapData += `</room>`;
  soapData += `</Hotel></hot:BlockRooms></soapenv:Body></soapenv:Envelope>`;

  return soapData;
}

module.exports = {
  BlockRoomsRQ
};
