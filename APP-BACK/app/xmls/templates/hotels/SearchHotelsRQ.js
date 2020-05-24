
let {getOrgDetails } = require("./../../../helpers/utils");
  
const SearchHotelsRQ = (req) => {
let data = req.body;
let userDetail = getOrgDetails(req);
let agent = userDetail.agent;
let apiKey = userDetail.api_key;
let secret_key =userDetail.secret_key;
let orgCurrency = userDetail.currency_code;
// console.log("userDetail=========================",JSON.parse(userDetail));

let soapData = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/hotels">
<SOAP-ENV:Header>
<ns1:SecurityHeader>`;
soapData+=`<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secret_key}</secretKey>`;
// soapData+=`<agent>TPC</agent><apiKey>654e4dc5b90b7478671fe6448cab3f32</apiKey><secretKey>22b684e2-9bb5-11e7-abc4-cec278b6b50a</secretKey>`;
soapData+=`</ns1:SecurityHeader>
</SOAP-ENV:Header>
<SOAP-ENV:Body>
<ns1:SearchHotels>
<HotelSearchCriteria>
<browser_agent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</browser_agent>
<browser_ip>::1</browser_ip>`;

	if(data.children_per_room.length>0){
	soapData += `<ca>${data.child_age}</ca>`;
	}else{
	soapData += `<ca/>`;
	}
soapData +=`	
<adults_per_room>${data.adults_per_room}</adults_per_room>
<checkInUnix>${Date.parse(data.check_in) / 1000}</checkInUnix>
<checkOutUnix>${Date.parse(data.check_out) / 1000}</checkOutUnix>
<check_in>${data.check_in}</check_in>
<check_out>${data.check_out}</check_out>`;
if(data.children_per_room.length>0){
soapData += `<children_per_room>${data.children_per_room}</children_per_room>`;
}else{
soapData += `<children_per_room>0</children_per_room>`;
}
soapData +=`<city>${data.city}</city>
<city_code>${data.city_code}</city_code>
<country>${data.country}</country>
<currency>${orgCurrency}</currency>
<extra_bed>${data.extra_bed}</extra_bed>
<hotel_info/>
<location/>
<markupBy>${data.markupBy}</markupBy>
<nationality>${data.nationality}</nationality>
<no_of_rooms>${data.no_of_rooms}</no_of_rooms>
<resident>${data.resident}</resident>
<response_key/>
<scr>b2b</scr>
</HotelSearchCriteria>
</ns1:SearchHotels>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`;
return soapData;
}

module.exports = {
  SearchHotelsRQ
};
