let {
    convertToArray
  } = require("./../../../helpers/utils");
  
  const HotelInfoRQ = (req) => {
    let data = req.body;
    let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hot="http://tpconnects.com/service/hotelinformation">
                       <soapenv:Header>
                          <hot:SecurityHeader>
                             <!--Optional:-->
                             <agent>GRT</agent>
                             <!--Optional:-->
                             <apiKey>0755468cc9d9a99693604b932d7d5fdc</apiKey>
                             <!--Optional:-->
                             <secretKey>5608c9b4-6bbe-11e8-adc0-fa7ae01bbebc</secretKey>
                          </hot:SecurityHeader>
                       </soapenv:Header>
                       <soapenv:Body>
                          <hot:GetHotelDetails>
                             <!--Optional:-->
                             <hotelId>81905</hotelId>
                             <!--Optional:-->
                             <supplierCode>inhouse</supplierCode>
                             <!--Optional:-->
                             <language>EN</language>
                             <!--Optional:-->
                             <currency>MUR</currency>
                          </hot:GetHotelDetails>
                       </soapenv:Body>
                    </soapenv:Envelope>`;
    return soapData;
  }
  
  module.exports = {
    HotelInfoRQ
  };
  