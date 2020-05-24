const axios = require('axios');
const fastXmlParser = require('fast-xml-parser');
const JsonFind = require('json-find');
const _ = require('lodash');
const {insuranceBookings,Bookings, Op} = require('../../config/db');
const config = require('../../config/config');
let { makeResponse ,adminDebitOnDeposit,writeXmlFile} = require("../helpers/utils");
const xmlTemplates = require('../xmls/templates/insurance/search.xml');
const xmlTemplatesblock = require('../xmls/templates/insurance/block.xml');
const xmlTemplatesbook = require('../xmls/templates/insurance/book.xml');
const pdfHelper = require('../helpers/pdf.helper');

// const xmlTemplatescancel = require('../xmls/templates/insurance/cancel.xml');
// const xmlTemplatesorderretrieve = require('../xmls/templates/insurance/orderretrieve.xml');
// const xmlTemplatescorporatebook = require('../xmls/templates/insurance/corporatebook.xml');

const utilsHelper = require('../helpers/utils');

const moment = require('moment')


const logThis = 'insuranceDao';
// function searchInsurance(req, res) {
//     res.send('welcome to insurance from dao');
// }

// pattern to follow
// const searchHotels = async(req, res) => {
//     res.send('welcome to hotels from dao by es6');   
//     utilsHelper.makeResponse(res, true, 200, 'success', 'title', 'body');
// }


const headers = {
    headers: {'Content-Type': 'text/xml'},
    responseType: 'text/xml'
};

var options = {
    ignoreNameSpace: true,
    attributeNamePrefix: "",
    ignoreAttributes: false,
  };

  const getAttr = (k, data) => {
    const doc = JsonFind(data);
    const attr = doc.checkKey(k);
    return attr
  }  

 const searchInsurance = async(req, res) => {
    const logMethod = `${logThis}SearchInsurance`;
   // console.log(getAirports)
    try {
       

        const data = req.body;
       
         const body = {
            startDate: data.startDate,
            endDate: data.endDate,
            birthDate: data.birthDate,
            browserIp:  data.browserIp,
            browserAgent:  data.browserAgent,
            depart_country:  data.depart_country,
            country:  data.country,
            adult:  data.adult,
            child:  data.child,
            infant:  data.infant,
            product: data.product,
            plan:  data.plan,
            benefit:  data.benefit,
            currency:  data.currency,
            responseKey:  data.responseKey,
        }

      //  console.log('user...',req.user['organisation.currency_id'])
        const xml = xmlTemplates.searchTemplate(req);
        utilsHelper.writeXmlFile('insurance/SearchInsuranceRQ.xml',xml);
        const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/InsuranceConnect/', xml,headers);
        if(xmlData.data !='') {
           
          utilsHelper.writeXmlFile('insurance/SearchInsuranceRS.xml', xmlData.data);
          }
        const response = fastXmlParser.parse(xmlData.data, options);
        

        // console.log("response=============",response )
        
        const insuranceResult = getAttr("InsuranceResult", response);
        // console.log("InsuranceResult=============",insuranceResult )

        // const response = JSON.parse(parser.toJson(xmlData.data));
        // const insuranceResult = response['soapenv:Envelope']['soapenv:Body']['dlwmin:SearchInsuranceResponse']['InsuranceResult'];
        const result = {
                    // size: insuranceResult['size'],
                    // insurances : insuranceResult['Insurances']['Insurance']
                    insurances : insuranceResult
                };
       
        return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available insurance plans', result);
    }
    catch(err) {
        console.log(logMethod, err);
        return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
    }
    
}

const blockInsurance = async(req, res) => {
    const logMethod = `${logThis}BlockInsurance`;
    try {
       
        
const data = req.body;



//console.log(data)
        const body = {
            startDate: data.sc.startDate,
            endDate: data.sc.endDate,
            birthDate: data.sc.birthDate,
            browserIp: data.sc.browserIp,
            browserAgent: data.sc.browserAgent,
            depart_country: data.sc.depart_country,
            country: data.sc.country,
            adult: data.sc.adult,
            child: data.sc.child,
            infant: data.sc.infant,
            product: data.sc.product,
            plan: data.sc.plan,
            benefit: data.sc.benefit,
            currency: data.sc.currency,
            responseKey: data.sc.responseKey,
            supplier_code: data.bi.supplier_code,
            supplier_policy_id: data.bi.supplier_policy_id,
            supplierPrice: data.bi.supplierPrice,
            policy_name: data.bi.policy_name,
            policyType: data.bi.policyType,
            policyCode: data.bi.policyCode,
            policyFeeCode: data.bi.policyFeeCode,
            currencyCode: data.bi.currencyCode,
            markupPrice: data.bi.markupPrice,
            cancelMarkupPrice: data.bi.cancelMarkupPrice,
            cancelSupplierPrice: data.bi.cancelSupplierPrice,
            studentPlan: data.bi.studentPlan,
            originalSupplierPrice: data.bi.originalSupplierPrice,
            originalSupplierCurrency: data.bi.originalSupplierCurrency,
            isPriceUpdated: data.bi.isPriceUpdated,
            appliedTotalTax: data.bi.appliedTotalTax,
            supplierTax: data.bi.supplierTax,
            isTaxInclusive: data.bi.isTaxInclusive,
            taxCurrency: data.bi.taxCurrency,
            sumInsured: data.bi.sumInsured,
            minAdultAge: data.bi.minAdultAge,
            maxAdultAge: data.bi.maxAdultAge,
            booking_insurance_id: data.bi.booking_insurance_id,
      
        }
        //console.log("body:::::::",body)
        const xml = xmlTemplatesblock.blockTemplate(body);
       // console.log("xml:::::::",xml);
       utilsHelper.writeXmlFile('insurance/BlockInsuranceRQ.xml',xml);
        const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/InsuranceConnect/', xml,headers);
        //  console.log(xmlData);
    //    return
        // const response = JSON.parse(parser.toJson(xmlData.data));
        if(xmlData.data !='') {
           
            utilsHelper.writeXmlFile('insurance/BlockInsuranceRS.xml', xmlData.data);
            }
        const response = fastXmlParser.parse(xmlData.data, options);

        console.log("responsess=============",response );
        const insuranceResult = getAttr("InsuranceResult", response);
        //const insuranceResult = response['soapenv:Envelope']['soapenv:Body']['dlwmin:BlockInsuranceResponse']['InsuranceResult'];
        // console.log(insuranceResult);
        const result = {
                   
                    insurances : insuranceResult
                       };
       
        return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'Blocked insurance plan Details', result);
         }
        catch(err) {
        console.log(logMethod, err);
        return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
                   }
    
                   }

const bookInsurance = async(req, res) => {
//     console.log("res:::::::",res)
     //console.log("req:::::::",req)
//console.log('user...',req.user)
let userDetail = JSON.stringify(req.user); 
    let orgCurrency = JSON.parse(userDetail)['organisation.currency.code'];
    let orgCurrencyId = JSON.parse(userDetail)['organisation.currency.currency_id'];
    let organisation_id = JSON.parse(userDetail)['organisation_id'];
    let available_deposit = JSON.parse(userDetail)['organisation.organisation_account.available_deposit'];
    let credit_limit = JSON.parse(userDetail)['organisation.organisation_account.total_credit_limit'];
    const logMethod = `${logThis}bookInsurance`;
    const agentCode = req.user.agent_code;
    const userId = JSON.parse(userDetail)['users_id'];
    const agent_reference = JSON.parse(userDetail)['organisation.agent'];
    let transaction_id = null;
    try {
       
        const data = req.body;
            //  if(data.cl.email=''){
            // book_mail=data.cl.booking_email;
            //  } else{
            // book_mail=data.cl.email;
            //  }
           // console.log('body.........',data.cl.booking_email);
        const body = {
            adult: data.isc.adult,
            benefit: data.isc.benefit,
          //  birthDate: data.isc.birthDate,
            browserAgent: data.isc.browserAgent,
            browserIp: data.isc.browserIp,
            child: data.isc.child,
            country: data.isc.country,
            currency: data.isc.currency,
            depart_country:data.isc.depart_country,
            endDate: data.isc.endDate,
            infant: data.isc.infant,
            plan: data.isc.plan,
            product: data.isc.product,
            responseKey:data.isc.responseKey,
            startDate: data.isc.startDate,
            supplier_code: data.il.supplier_code,
            supplier_policy_id: data.il.supplier_policy_id,
            supplierPrice: data.il.supplierPrice,
            policy_name: data.il.policy_name,
            policyType: data.il.policyType,
            policyCode: data.il.policyCode,
            policyFeeCode: data.il.policyFeeCode,
            currencyCode: data.il.currencyCode,
            markupPrice: data.il.markupPrice,
            cancelMarkupPrice: data.il.cancelMarkupPrice,
            cancelSupplierPrice: data.il.cancelSupplierPrice,
            studentPlan: data.cl.studentPlan,
            agentReference: data.cl.agent_reference,
            arrivalairportcode: data.cl.arrivalairportcode,
            bookingAmount: data.cl.bookingAmount,
            bookingCode: data.cl.bookingCode, 
            bookingComments: data.cl.booking_comments,
            bookingEmail: data.cl.booking_email,
            bookingCurrency: data.cl.bookingCurrency,
            bookingDate: data.cl.bookingDate,
            bookingReference: data.cl.bookingReference,
            bookingStatus: data.cl.bookingStatus,
            departureairportcode: data.cl.departureairportcode,
            tripID: data.cl.tripID,
            booking_status: data.cl.booking_status,
            is_blocked: data.cl.is_blocked,
            city: data.cl.city,
            nationality: data.cl.nationality,
            residence: data.cl.residence,
            street1: data.cl.street1,
            cnic: data.cl.cnic,
            email: data.cl.email,
            relativeCity: data.cl.relativeCity,
            relativeName: data.cl.relativeName,
            relativePhone: data.cl.relativePhone,
            originalSupplierPrice: data.il.originalSupplierPrice,
            originalSupplierCurrency: data.il.originalSupplierCurrency,
            isPriceUpdated: data.cl.isPriceUpdated,
            appliedTotalTax: data.il.appliedTotalTax,
            supplierTax: data.il.supplierTax,
            isTaxInclusive: data.il.isTaxInclusive,
            taxCurrency: data.il.taxCurrency,
            sumInsured: data.il.sumInsured,
            minAdultAge: data.il.minAdultAge,
            maxAdultAge: data.il.maxAdultAge,
            booking_insurance_id: data.il.booking_insurance_id,
            insuranceOccupancy :  data.il.insuranceOccupancy,
           
            
           
        }
       // console.log('body.........',body);
        const xml = xmlTemplatesbook.bookTemplate(body);
        //console.log('xml.........',xml);
       utilsHelper.writeXmlFile('insurance/BookInsuranceRQ.xml',xml);
        const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/InsuranceConnect/', xml,headers);
        // const response = JSON.parse(parser.toJson(xmlData.data));
        // const insuranceResult = response['soapenv:Envelope']['soapenv:Body']['dlwmin:BookInsuranceResponse']['InsuranceResult'];
        if(xmlData.data !='') {
           
            utilsHelper.writeXmlFile('insurance/BookInsuranceRQ.xml', xmlData.data);
            }
        const response = fastXmlParser.parse(xmlData.data, options);

        const insuranceResult = getAttr("InsuranceResult", response);
        
        const result =
         { 
             insurances : insuranceResult  
        };
      
        
       
        //console.log("responseResult:::::::::::",insuranceResult.Insurance.currencyCode);
        // Array.isArray(Flights.Cabin)? Flights.Cabin : [Flights.Cabin]
    //  let   obj= JSON.stringify(result.insurances.Insurance.insuranceOccupancy);
    //  let   oobj=Array.isArray(obj)? obj : obj[0];
    //     let fullname= [];
    //     oobj.map(o => {
    //     fullname.push(`${o.first_name} ${o.last_name}`)
    //     });



        let other = []; // your other array...
        if(result.insurances.Insurance.insuranceOccupancy.length){
            result.insurances.Insurance.insuranceOccupancy.map(item => {
            return {
                first_namefor: item.first_name,
                last_namefor: item.last_name,
               
            }
        }).forEach(item => other.push(item));
        
        }


        let qname=Array.isArray(result.insurances.Insurance.insuranceOccupancy)?other :result.insurances.Insurance.insuranceOccupancy.first_name +' '+result.insurances.Insurance.insuranceOccupancy.last_name  ;
   
        console.log("allname:::::::::",JSON.stringify(qname));

   
           var status= "";
          if (insuranceResult.Insurance.bookingDetail.bookingStatus == 'Booked') {
            status =  "confirm"  ; 
          }
          else {
            status = "failed";
          }
         // console.log("booking status", status);

         if(status == "confirm"){            
            var req =  {
              user_id:userId,
              selectType : 1, 
              organisation_id:organisation_id,
              trip_id:insuranceResult.Insurance.bookingDetail.tripID,
              payment_type:"credit",
              currency_id:orgCurrencyId,
              transaction_type:"credit",
              amount: insuranceResult.Insurance.markupPrice, 
              available_deposit:available_deposit,
              transaction_comments:"Insurance Booking Confirmed",
              credit_limit:credit_limit
            };
            let transactionData = await adminDebitOnDeposit(req);                
            transaction_id = transactionData.transaction_id;   
                           
          }




                    bookformObj = {}
                    bookformObj.agent_code = agentCode
                    
                    // bookformObj.transaction_id = body.supplier_code
                    bookformObj.trip_id = insuranceResult.Insurance.bookingDetail.tripID
                    bookformObj.users_id = userId
                    bookformObj.booking_email =insuranceResult.Insurance.bookingDetail.bookingEmail
                    bookformObj.booking_comments =insuranceResult.Insurance.bookingDetail.bookingComments
                    bookformObj.booking_currency = insuranceResult.Insurance.currencyCode
                    bookformObj.booking_status = status
                    bookformObj.agent_reference = insuranceResult.Insurance.bookingDetail.agentReference
                    bookformObj.amount = insuranceResult.Insurance.bookingDetail.bookingAmount
                    bookformObj.payment_type = 'Credit';
                    bookformObj.supplier_price =insuranceResult.Insurance.supplierPrice
                    bookformObj.markup_price =insuranceResult.Insurance.markupPrice
                    bookformObj.status= 1
                    bookformObj.has_insurance =1
                    bookformObj.supplier =insuranceResult.Insurance.supplier_code
                    bookformObj.created= moment(new Date)
                   

                    const resultsBook = await Bookings.create(bookformObj)
                    if(!resultsBook){
                    return makeResponse(res, false, 200, 'danger', 'Organisation Branches', 'Branch not created.')
                    }
                    // return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'Booked insurance plans', resultsBook);

///////////////////////////////////////////////////////table--bookings_insurance/////////////////////////////////////////////////////////////////////
                    formObj = {}
                    formObj.booking_id = resultsBook.booking_id
                    formObj.start_date = body.startDate
                    formObj.supplier_code = result.insurances.Insurance.supplier_code
                  
                    formObj.country = body.country
                    formObj.destination =body.depart_country
                    formObj.start_date =body.startDate
                    formObj.end_date = body.endDate
                    formObj.adult = body.adult
                    formObj.child = body.child
                    formObj.supplier_code = body.supplier_code
                    formObj.booking_code = body.bookingCode
                    formObj.reference_number =body.bookingReference
                    formObj.search_criteria =JSON.stringify(data.isc)
                    formObj.room_info =JSON.stringify(result.insurances.Insurance)
                    formObj.hotel_name = JSON.stringify(result.insurances.Insurance.policy_name)
                    formObj.booking_currency =insuranceResult.Insurance.currencyCode
                    formObj.booking_amount= body.bookingAmount
                    formObj.supplier_price = body.supplierPrice
                    formObj.markup_price = body.markupPrice
                    formObj.cancel_supplier_price =body.cancelSupplierPrice
                    formObj.cancel_markup_price =body.cancelMarkupPrice
                    formObj.created= moment(new Date)
                    formObj.status = 1
                  



               // console.log("formoblects,,,,,,,,,,,,,,,,,,,",formObj)
                const results = await insuranceBookings.create(formObj)
                // console.log('booking_status,,,,,,,,,,,',result.insurances.TransactionLog.error['code'])
                // console.log('booking_error,,,,,,,,,,,',result.insurances.TransactionLog.error['message'])
                if(result.insurances.TransactionLog.status==="Failure"){
                 //   return makeResponse(res, false, result.insurances.TransactionLog.error['code'], 'danger', 'Booking failed', result.insurances.TransactionLog.error['message'])
                    return utilsHelper.makeResponse(res, false, result.insurances.TransactionLog.error['code'], 'danger', 'Booking failed', result.insurances.TransactionLog.error['message']);
                }
                //return makeResponse(res, true, 200, 'success', 'Organisation Branches', 'Branch created successfully.', results)
                
                
      

       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       try {
       

        const pdfData = {
            Trip_ID: insuranceResult.Insurance.bookingDetail.tripID,
            Booking_Reference: body.bookingReference,
            Policy_Name: JSON.stringify(result.insurances.Insurance.policy_name),
            
            // Guest_Name: qname,
            Guest_Name: " Guest_Name",
            Policy_Type: JSON.stringify(result.insurances.Insurance.policyType),
            Policy_Code: JSON.stringify(result.insurances.Insurance.policyCode),
            Amount: 'invoice_id',
           
          
        };
        // const pdfData = {
        //     purchase_date: 'purchase_date',
        //     due_date: 'due_date',
        //     name: 'name',
        //     total: 'total',
        //     due_date: 'due_date',
        //     action_url: 'action_url',
        //     invoice_id: 'invoice_id',
        //     date: 'date',
        //     total: 'total',
        //     support_url: 'support_url',
        //     invoice_details: [{
        //             description: 'description 1',
        //             amount: 'amount 1'
        //         }, {
        //             description: 'description 2',
        //             amount: 'amount 2'
        //         }, {
        //             description: 'description 3',
        //             amount: 'amount 3'
        //         }, {
        //             description: 'description 4',
        //             amount: 'amount 4'
        //         }]
        // };
        
        const fileBuffer = await pdfHelper.generateVoucherPdf('insurance-voucher', pdfData);
        await pdfHelper.saveVoucherPdf(fileBuffer,insuranceResult.Insurance.bookingDetail.tripID);

      

  }
  catch(err) {
      console.log(err)
      return false;
  }  
  return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'Booked insurance plans', result);
  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
    catch(err) {
        console.log(logMethod, err);
        return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
    }
    
}

// const cancelInsurance = async(req, res) => {
//     const logMethod = `${logThis}cancelInsurance`;
//     try {
        

//         const xml = xmlTemplatescancel.cancelTemplate();
//         const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/InsuranceConnect/', xml,headers);
//         const response = JSON.parse(parser.toJson(xmlData.data));
//         const insuranceResult = response['soapenv:Envelope']['soapenv:Body']['dlwmin:SearchInsuranceResponse']['InsuranceResult'];
//         const result = {
                
//                     insurances : insuranceResult
//                        };
       
//         return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available insurance plans', result);
//     }
//     catch(err) {
//         console.log(logMethod, err);
//         return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
//                }
    
// }


// const orderretrieveInsurance = async(req, res) => {
//     const logMethod = `${logThis}orderretrieveInsurance`;
//     try {
       
//         const xml = xmlTemplatesorderretrieve.orderretrieveTemplate();
//         const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/InsuranceConnect/', xml,headers);
//         const response = JSON.parse(parser.toJson(xmlData.data));
//         const insuranceResult = response['soapenv:Envelope']['soapenv:Body']['dlwmin:SearchInsuranceResponse']['InsuranceResult'];
//         const result = {
                  
//                     insurances : insuranceResult
//                        };
       
//         return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available insurance plans', result);
//     }
//     catch(err) {
//         console.log(logMethod, err);
//         return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
//                }
    
// }



// const corporatebookInsurance = async(req, res) => {
//     const logMethod = `${logThis}corporatebookInsurance`;
//     try {
     
//         const xml = xmlTemplatescorporatebook.corporatebookTemplate();
//         const xmlData = await axios.post('http://merchandising.tpconnects.com/TpConnectsLatestV7/services/InsuranceConnect/', xml,headers);
//         const response = JSON.parse(parser.toJson(xmlData.data));
//         const insuranceResult = response['soapenv:Envelope']['soapenv:Body']['dlwmin:SearchInsuranceResponse']['InsuranceResult'];
//         const result = {
                 
//                     insurances : insuranceResult
//                        };
       
//         return utilsHelper.makeResponse(res, true, 200, 'success', 'Your request is successful', 'List of available insurance plans', result);
//     }
//     catch(err) {
//         console.log(logMethod, err);
//         return utilsHelper.makeResponse(res, false, 400, 'error', 'INTERNAL SERVER ERROR', 'INTERNAL SERVER ERROR');
//                }
    
// }


const getAirports = async (req, res) => {
    

}


module.exports = {
    searchInsurance,blockInsurance,bookInsurance, getAirports
};
  