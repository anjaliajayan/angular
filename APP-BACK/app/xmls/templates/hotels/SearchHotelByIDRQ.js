let {
    convertToArray
  } = require("./../../../helpers/utils");
  
  const SearchHotelByIDRQ = (req) => {
    let data = req.body;
    let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hot="http://tpconnects.com/service/hotels">`;
    soapData += `<soapenv:Header><hot:SecurityHeader>`;
    soapData += `<agent>TPC</agent><apiKey>5ec8b2955d618a38232bd168870eca60</apiKey><secretKey>11ce6082-988a-11e7-abc4-cec278b6b50a</secretKey>`;
    soapData += `</hot:SecurityHeader></soapenv:Header>`;
    soapData += `<soapenv:Body>`;
    soapData += `<hot:SearchHotelById>`;
    soapData += `<HotelSearchCriteria>`;
    soapData += `<browser_agent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</browser_agent>`;
    soapData += `<browser_ip>::1</browser_ip>`;
    if (data.ca) {
      soapData += `<ca>${data.ca}</ca>`;
    } else {
      soapData += `<ca/>`;
    }
    soapData += `<adults_per_room>${data.adults_per_room}</adults_per_room>`;
    soapData += `<children_per_room>${data.children_per_room}</children_per_room>`;
    soapData += `<no_of_rooms>${data.no_of_rooms}</no_of_rooms>`;
    soapData += `<extra_bed>${data.extra_bed}</extra_bed>`;
    soapData += `<checkInUnix>${Date.parse(data.check_in) / 1000}</checkInUnix>`;
    soapData += `<checkOutUnix>${Date.parse(data.check_out) / 1000}</checkOutUnix>`;
    soapData += `<check_in>${data.check_in}</check_in>`;
    soapData += `<check_out>${data.check_out}</check_out>`;
    soapData += `<city>${data.city}</city>`;
    soapData += `<city_code>${data.city_code}</city_code>`;
    soapData += `<country>${data.country}</country>`;
    soapData += `<currency>${data.currency}</currency>`;

    soapData += `<hotel_info/>`;
    soapData += `<location>25.253175,55.365673</location>`;
    soapData += `<markupBy>${data.markupBy}</markupBy>`;
    soapData += `<nationality>${data.nationality}</nationality>`;

    soapData += `<resident>${data.resident}</resident>`;
    soapData += `<response_key>${data.response_key}</response_key>`;
    soapData += `<scr>b2b</scr>`;
    soapData += `</HotelSearchCriteria>`;
    soapData += `<hot:Hotels showRooms="false">`;
    let hotels = convertToArray(data.hotel);
    for(var i=0; i<hotels.length;i++ ){
        soapData += `<hotel>${hotels[i]}</hotel>`;
    }
    soapData += `</hot:Hotels></hot:SearchHotelById></soapenv:Body></soapenv:Envelope>`;
  
    return soapData;
  }
  
  module.exports = {
    SearchHotelByIDRQ
  };
  