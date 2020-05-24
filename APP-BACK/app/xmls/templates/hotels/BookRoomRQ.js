let {
  convertToArray, getOrgDetails
} = require("./../../../helpers/utils");

const BookRoomRQ = (req) => {
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
  soapData += `<hot:BookRooms>`;
  soapData += `<HotelSearchCriteria>`;
  soapData += `<browser_agent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</browser_agent>`;
  soapData += `<browser_ip>::1</browser_ip>`;
  if (data.ca) {
    soapData += `<ca>${data.ca}</ca>`;
  } else {
    soapData += `<ca/>`;
  }
  soapData += `<adults_per_room>${data.adults_per_room}</adults_per_room>`;
  soapData += `<checkInUnix>${Date.parse(data.check_in) / 1000}</checkInUnix>`;
  soapData += `<checkOutUnix>${Date.parse(data.check_out) / 1000}</checkOutUnix>`;
  soapData += `<check_in>${data.check_in}</check_in>`;
  soapData += `<check_out>${data.check_out}</check_out>`;
  soapData += `<children_per_room>${data.children_per_room}</children_per_room>`;
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

  let hotelData = data.hotel;
  let room = data.hotel.room;
  // console.log("hotel in room",room.hotel_id);
  // console.log("hotel room multiple===========",(Array.isArray(room)? room[0].hotel_id : room.hotel_id));
  soapData += `<Hotel>`;
  soapData += `<supplier_code>${hotelData.supplier_code}</supplier_code>`;
  if(Array.isArray(room)){
    soapData += `<hotel_id>${room[0].hotel_id}</hotel_id>`;
    soapData +=`<supplier_hotel_id>${room[0].hotel_id}</supplier_hotel_id>`;
  }else{
    soapData += `<hotel_id>${room.hotel_id}</hotel_id>`;
    soapData +=`<supplier_hotel_id>${room.hotel_id}</supplier_hotel_id>`;
  }
  soapData +=`<currency>${hotelData.currency}</currency>`;
  soapData +=`<bookingEmail>${hotelData.bookingEmail}</bookingEmail>`;
  soapData +=`<agentReference>${hotelData.agentReference}</agentReference>`;
  soapData +=`<bookingComment>${hotelData.bookingComment}</bookingComment>`;


  if(Array.isArray(room)) {
     room.map((room, entryIndex) => {
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
          soapData += `<quantity>1</quantity>`;
          soapData += `<timezone>${room.timezone}</timezone>`;
          soapData += `<booking_hotel_id>${room.booking_hotel_id}</booking_hotel_id>`;
          soapData += `<variables>`;

            // console.log("room entry", convertToArray(room.variables.entry));
            // room.variables.entry = convertToArray(room.variables.entry);

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

            soapData += `<originalSupplierRoomPrice>${room.originalSupplierRoomPrice}</originalSupplierRoomPrice>`;
            soapData += `<dynamicMarkup>${room.dynamicMarkup}</dynamicMarkup>`;
            soapData += `<supplierVAT>${room.supplierVAT}</supplierVAT>`;
            soapData += `<appliedCommissionTax>${room.appliedCommissionTax}</appliedCommissionTax>`;
            soapData += `<appliedTotalTax>${room.appliedTotalTax}</appliedTotalTax>`;
            soapData += `<isTaxInclusive>${room.isTaxInclusive}</isTaxInclusive>`;
            soapData += `<board_type>${room.board_type}</board_type>`;
            
            let cancelPolicyList = convertToArray(room.cancel_policy)
            if(Array.isArray(cancelPolicyList) && cancelPolicyList.length > 0 ){
             cancelPolicyList.map((cancelPolicy, cancelPolicyIndex) => {
              soapData += `<cancel_policy>`;
              if (cancelPolicy.hasOwnProperty("cancel_restriction") ) {
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
           }
           soapData += `<is_blocked>${room.is_blocked}</is_blocked>`;
            let inclusionList = convertToArray(room.inclusion)
            inclusionList.map((inclusion, inclusionIndex) => {
              soapData += `<inclusion>${inclusion}</inclusion>`;
            })
            if(room.room_occupancy) {
              let roomOccupancyList = convertToArray(room.room_occupancy)
              // console.log("roomOccupancyList",roomOccupancyList)         
              roomOccupancyList.map((roomOccupancy, roomOccupancyIndex) => {
                soapData += `<room_occupancy><age>${roomOccupancy.age}</age><category>${roomOccupancy.category}</category><first_name>${roomOccupancy.first_name}</first_name><last_name>${roomOccupancy.last_name}</last_name><salutation>${roomOccupancy.salutation}</salutation><custPhone>${roomOccupancy.phone}</custPhone></room_occupancy>`;
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
          });
      }else{

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

            // console.log("room entry", convertToArray(room.variables.entry));
            // room.variables.entry = convertToArray(room.variables.entry);

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

            soapData += `<originalSupplierRoomPrice>${room.originalSupplierRoomPrice}</originalSupplierRoomPrice>`;
            soapData += `<dynamicMarkup>${room.dynamicMarkup}</dynamicMarkup>`;
            soapData += `<supplierVAT>${room.supplierVAT}</supplierVAT>`;
            soapData += `<appliedCommissionTax>${room.appliedCommissionTax}</appliedCommissionTax>`;
            soapData += `<appliedTotalTax>${room.appliedTotalTax}</appliedTotalTax>`;
            soapData += `<isTaxInclusive>${room.isTaxInclusive}</isTaxInclusive>`;
            soapData += `<board_type>${room.board_type}</board_type>`;
   
            let cancelPolicyList = convertToArray(room.cancel_policy)
            if(Array.isArray(cancelPolicyList) && cancelPolicyList.length > 0 ){
             cancelPolicyList.map((cancelPolicy, cancelPolicyIndex) => {
              soapData += `<cancel_policy>`;
              if (cancelPolicy.hasOwnProperty("cancel_restriction") ) {
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
           }
           soapData += `<is_blocked>${room.is_blocked}</is_blocked>`;
            let inclusionList = convertToArray(room.inclusion)
            inclusionList.map((inclusion, inclusionIndex) => {
              soapData += `<inclusion>${inclusion}</inclusion>`;
            })
            if (room.room_occupancy) {
              let roomOccupancyList = convertToArray(room.room_occupancy)
              roomOccupancyList.map((roomOccupancy, roomOccupancyIndex) => {
                soapData += `<room_occupancy><age>${roomOccupancy.age}</age><category>${roomOccupancy.category}</category><first_name>${roomOccupancy.first_name}</first_name><last_name>${roomOccupancy.last_name}</last_name><salutation>${roomOccupancy.salutation}</salutation><custPhone>${roomOccupancy.phone}</custPhone></room_occupancy>`;
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
      }
          



    soapData += `</Hotel></hot:BookRooms></soapenv:Body></soapenv:Envelope>`;
    return soapData;
  }
  
  module.exports = {
    BookRoomRQ
  };
  