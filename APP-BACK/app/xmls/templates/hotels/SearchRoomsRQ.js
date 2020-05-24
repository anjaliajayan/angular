let {getOrgDetails } = require("./../../../helpers/utils");

const SearchRoomsRQ = (req) => {
let data = req.body;
let userDetail = getOrgDetails(req);
let agent = userDetail.agent;
let apiKey = userDetail.api_key;
let secret_key =userDetail.secret_key;

let soapData = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/hotels">
<SOAP-ENV:Header>
<ns1:SecurityHeader>`;
soapData+=`<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secret_key}</secretKey>`;
// soapData+=`<agent>TPC</agent><apiKey>654e4dc5b90b7478671fe6448cab3f32</apiKey><secretKey>22b684e2-9bb5-11e7-abc4-cec278b6b50a</secretKey>`;
soapData+=`
</ns1:SecurityHeader>
</SOAP-ENV:Header>
<SOAP-ENV:Body>
<ns1:SearchRooms>
<HotelSearchCriteria>
<browser_agent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</browser_agent>
<browser_ip>::1</browser_ip>`;
  if (data.ca.length > 0) {
    soapData += `<ca>${data.ca}</ca>`;
  } else {
    soapData += `<ca/>`;
  }
  soapData += `
<adults_per_room>${data.adults_per_room}</adults_per_room>
<checkInUnix>${Date.parse(data.check_in) / 1000}</checkInUnix>
<checkOutUnix>${Date.parse(data.check_out) / 1000}</checkOutUnix>
<check_in>${data.check_in}</check_in>
<check_out>${data.check_out}</check_out>`;
let childString = '';
if(data.children_per_room === ''){
  if(data.no_of_rooms == 2){
    childString="0,0";
  }else if(data.no_of_rooms== 3){
    childString="0,0,0";
  }else if(data.no_of_rooms== 4){
    childString="0,0,0,0";
  }else if(data.no_of_rooms== 5){
    childString="0,0,0,0,0";
  }else{
    childString="0";
  }
}

if(data.children_per_room === ''){
  soapData += `<children_per_room>${childString}</children_per_room>`;
}else{
  soapData += `<children_per_room>${data.children_per_room}</children_per_room>`;
}

soapData += `
<city>${data.city}</city>
<city_code>${data.city_code}</city_code>
<country>${data.country}</country>
<currency>${data.currency}</currency>
<extra_bed>${data.extra_bed}</extra_bed>
<hotel_info/>
<location/>
<markupBy>${data.markupBy}</markupBy>
<nationality>${data.nationality}</nationality>
<no_of_rooms>${data.no_of_rooms}</no_of_rooms>
<resident>${data.resident}</resident>
<response_key>${data.response_key}</response_key>
<scr>b2b</scr>
</HotelSearchCriteria>
<Hotel>
<supplier_code>${data.hotel.supplier_code}</supplier_code>
<hotel_id>${data.hotel.hotel_id}</hotel_id>
</Hotel>
</ns1:SearchRooms>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`;
  return soapData;
}

module.exports = {
  SearchRoomsRQ
};
