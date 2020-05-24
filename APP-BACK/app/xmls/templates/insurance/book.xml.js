let {
    convertToArray
  } = require("./../../../helpers/utils");
  
  const bookTemplate = (body) => {
    let soapData = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/insurance">`;
    soapData += `<SOAP-ENV:Header>`;
    soapData += ` <ns1:SecurityHeader><agent>TSS</agent> `; 
    soapData += `<apiKey>5ec8b2955d618a38232bd168870eca60</apiKey>`;
    soapData += ` <secretKey>11ce6082-988a-11e7-abc4-cec278b6b50a</secretKey>`;
    soapData += ` </ns1:SecurityHeader></SOAP-ENV:Header><SOAP-ENV:Body>`;
    soapData += ` <ns1:BookInsurance>`;
    soapData += ` <InsuranceSearchCriteria>`;
    soapData += ` <adult>${body.adult}</adult>`;
    soapData += ` <benefit>${body.benefit}</benefit>`;
   // soapData += `<birthDate>${body.birthDate}</birthDate>`;
    soapData += `<browserAgent>${body.browserAgent}</browserAgent>`;
    soapData += ` <browserIp>${body.browserIp}</browserIp>`;
    soapData += ` <child>${body.child}</child>`;
    soapData += ` <country>${body.country}</country>`;
    soapData += `<currency>${body.currency}</currency>`;
    soapData += `<depart_country>${body.depart_country}</depart_country>`;
    soapData += `<endDate>${body.endDate}</endDate>`;
    soapData += ` <infant>${body.infant}</infant>`;
    soapData += `<plan>${body.plan}</plan>`;
    soapData += `<product>${body.product}</product>`;
    soapData += `<responseKey>${body.responseKey}</responseKey>`;
    soapData += `<startDate>${body.startDate}</startDate>`;
    soapData += `</InsuranceSearchCriteria>`;
    soapData += ` <Insurance>`;
    soapData += `<supplier_code>${body.supplier_code}</supplier_code>`;
    soapData += `<supplier_policy_id>${body.supplier_policy_id}</supplier_policy_id>`;
    soapData += `<supplierPrice>${body.supplierPrice}</supplierPrice>`;
    soapData += `<policy_name>${body.policy_name}</policy_name>`;
    soapData += `<policyType>${body.policyType}</policyType>`;
    soapData += `<policyCode>${body.policyCode}</policyCode>`;
    				
					
					
	soapData += `<description>
    &#13;
    &lt;ul&gt;&#13;
    &lt;li&gt;VIA CARE Travel Insurance&#13;
    As per company's standard Via-Care Travel Insurance policy wording, Covering Worldwide Travel Insurance with 24hrs Worldwide Emergency Medical Assistance Service for insureds.&lt;/li&gt;&#13;
    &lt;/ul&gt;&#13;
    &#13;
    &lt;table class="table table-striped"&gt;&#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Benefits &lt;/th&gt;&#13;
        &lt;th&gt;Schengen Complaint  (USD)&lt;/th&gt;&#13;
        &lt;th&gt;Multi Purpose (USD)&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Accidental Death &amp; Permanent Disability&lt;/th&gt;&#13;
        &lt;th&gt;15,000&lt;/th&gt;&#13;
        &lt;th&gt;10,000&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Medical Expenses &amp; Hospitalization Abroad&lt;/th&gt;&#13;
        &lt;th&gt;50,000&lt;/th&gt;&#13;
        &lt;th&gt;10,000&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Transport or Repatriation in case of illness or injury&lt;/th&gt;&#13;
        &lt;th&gt;50,000&lt;/th&gt;&#13;
        &lt;th&gt;15,000&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Emergency Dental Care&lt;/th&gt;&#13;
        &lt;th&gt;750&lt;/th&gt;&#13;
        &lt;th&gt;500&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Repatriation of Family Member Traveling with the Insured&lt;/th&gt;&#13;
        &lt;th&gt;3,000&lt;/th&gt;&#13;
        &lt;th&gt;1,500&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Repatriation of mortal remains&lt;/th&gt;&#13;
        &lt;th&gt;5,000&lt;/th&gt;&#13;
        &lt;th&gt;5,500&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Return of Dependant Children&lt;/th&gt;&#13;
        &lt;th&gt;5,000&lt;/th&gt;&#13;
        &lt;th&gt;5,500&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Travel and Stay Over of One Immediate Family Member&lt;/th&gt;&#13;
        &lt;th&gt;100/day for 10 days only&lt;/th&gt;&#13;
        &lt;th&gt;100/day for 10 days only&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Emergency Return Home Following Death of Close Family Member&lt;/th&gt;&#13;
        &lt;th&gt;5,000&lt;/th&gt;&#13;
        &lt;th&gt;5,000&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Loss of Passport&lt;/th&gt;&#13;
        &lt;th&gt;250&lt;/th&gt;&#13;
        &lt;th&gt;100&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Trip Cancellation&lt;/th&gt;&#13;
        &lt;th&gt;500&lt;/th&gt;&#13;
        &lt;th&gt;250&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Delayed Departure&lt;/th&gt;&#13;
        &lt;th&gt;500&lt;/th&gt;&#13;
        &lt;th&gt;250&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Loss of Checked-In Baggage&lt;/th&gt;&#13;
        &lt;th&gt;500&lt;/th&gt;&#13;
        &lt;th&gt;250&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &#13;
    &lt;tr&gt;&#13;
        &lt;th&gt;Compensation for delay in the arrival of luggage&lt;/th&gt;&#13;
        &lt;th&gt;250&lt;/th&gt;&#13;
        &lt;th&gt;100&lt;/th&gt;&#13;
    &lt;/tr&gt;&#13;
    &#13;
    &lt;/table&gt;&#13;
    &#13;
    &lt;ul&gt;&#13;
    &lt;li&gt;Medical Expenses &amp; Hospitalization: USD 100&lt;/li&gt;&#13;
    &lt;li&gt;Trip Cancellation: USD 35&lt;/li&gt;&#13;
    &lt;li&gt;Delayed Departure: 8 Hours&lt;/li&gt;&#13;
    &lt;/ul&gt;&#13;
    All Terms, Conditions &amp; Exclusions as per Jubilee General’s Via Care policy
    </description>`;
    soapData += `<policyFeeCode>${body.policyFeeCode}</policyFeeCode>`;
    soapData += `<currencyCode>${body.currencyCode}</currencyCode>`;
    soapData += `<markupPrice>${body.cancelMarkupPrice}</markupPrice>`;
    soapData += `<cancelMarkupPrice>${body.cancelMarkupPrice}</cancelMarkupPrice>`;
    soapData += `<cancelSupplierPrice>${body.cancelSupplierPrice}</cancelSupplierPrice>`;
    soapData += ` <inclusions size="0"><inclusion>Additional 4.0% tax on contribution is applicable for non tax filers </inclusion>`;
    soapData += ` <inclusion>The policy is applicable for pakistan residence only </inclusion>`;
    soapData += ` <inclusion>All Terms, Conditions &amp; Exclusions as per Jubilee General’s Via Care policy</inclusion>`;
    soapData += ` </inclusions>`;
    soapData += `<studentPlan>${body.studentPlan}</studentPlan>`;
    soapData += `<bookingDetail>`;
    soapData += ` <agentReference>${body.agentReference}</agentReference>`;
    soapData += `<arrivalairportcode>${body.arrivalairportcode}</arrivalairportcode>`;
    soapData += `<bookingAmount>${body.bookingAmount}</bookingAmount>`;
    soapData += ` <bookingCode>${body.bookingCode}</bookingCode>`;
    soapData += ` <bookingComments>${body.bookingComments}</bookingComments>`;
    soapData += ` <bookingCurrency>${body.bookingCurrency}</bookingCurrency>`;
    soapData += ` <bookingEmail>${body.bookingEmail}</bookingEmail>`;
    soapData += ` <bookingDate>${body.bookingDate}</bookingDate>`;
    soapData += ` <bookingReference>${body.bookingReference}</bookingReference>`;
    soapData += ` <bookingStatus>${body.bookingStatus}</bookingStatus>`;
    soapData += `<departureairportcode>${body.departureairportcode}</departureairportcode>`;
    soapData += `  <tripID>${body.tripID}</tripID>`;
    soapData += ` </bookingDetail>`;
    soapData += ` <booking_status>`;
    soapData += `</booking_status>`;
    soapData += ` <is_blocked>${body.is_blocked}</is_blocked>`;
   // soapData += ` <insuranceOccupancy>  ${body.insuranceOccupancy}</insuranceOccupancy>`
    if (body.insuranceOccupancy) {
        let insuranceOccupancylist = convertToArray(body.insuranceOccupancy)
        insuranceOccupancylist.map((insOccupancy, insOccupancyIndex) => {
          soapData += `<insuranceOccupancy>
          <address>
          <city>${insOccupancy.city}</city>
          <nationality>${insOccupancy.nationality}</nationality>
          <residence>${insOccupancy.residence}</residence>
          <street1>${insOccupancy.street1}</street1>
          </address> <beneficiary>${insOccupancy.beneficiary}</beneficiary> <birth_date>${insOccupancy.birth_date}</birth_date>
          <cnic>${insOccupancy.cnic}</cnic> <contact><email>${insOccupancy.email}</email></contact>
          <first_name>${insOccupancy.first_name}</first_name><gender>${insOccupancy.gender}</gender> <last_name>${insOccupancy.last_name}</last_name> 
          <relationship>${insOccupancy.relationship}</relationship>
          <passenger_type>${insOccupancy.passenger_type}</passenger_type>
          <passport>${insOccupancy.passport}</passport>
          <relativeCity>${insOccupancy.relativeCity}</relativeCity>
          <relativeName>${insOccupancy.relativeName}</relativeName>
          <relativePhone>${insOccupancy.relativePhone}</relativePhone>
          </insuranceOccupancy>`;
        })
      }


   
    soapData += ` <originalSupplierPrice>${body.originalSupplierPrice}</originalSupplierPrice>`;
    soapData += `<originalSupplierCurrency>${body.originalSupplierCurrency}</originalSupplierCurrency>`;
    soapData += ` <isPriceUpdated>${body.isPriceUpdated}</isPriceUpdated>`;
    soapData += ` <variables/>`;
    soapData += ` <appliedTotalTax>${body.appliedTotalTax}</appliedTotalTax>`;
    soapData += `<supplierTax>${body.supplierTax}</supplierTax>`;
    soapData += ` <isTaxInclusive>${body.isTaxInclusive}</isTaxInclusive>`;
    soapData += ` <taxCurrency>${body.taxCurrency}</taxCurrency>`;
    soapData += ` <sumInsured>${body.sumInsured}</sumInsured>`;
    soapData += `  <minAdultAge>${body.minAdultAge}</minAdultAge>`;
    soapData += `<maxAdultAge>${body.maxAdultAge}</maxAdultAge>`;
    soapData += `<booking_insurance_id>${body.booking_insurance_id}</booking_insurance_id>`;
    soapData += ` </Insurance>`;
    soapData += ` </ns1:BookInsurance>`;
    soapData += ` </SOAP-ENV:Body>`;
    soapData += ` </SOAP-ENV:Envelope>`;
    return soapData;
  }








  /////////////////////////////////////////////////////////////////////////////
                // const bookTemplate = (body) => {
                //     return `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/insurance">
                //     <SOAP-ENV:Header>
                //     <ns1:SecurityHeader><agent>TSS</agent>  
                //     <apiKey>5ec8b2955d618a38232bd168870eca60</apiKey>
                //     <secretKey>11ce6082-988a-11e7-abc4-cec278b6b50a</secretKey>
                //     </ns1:SecurityHeader></SOAP-ENV:Header><SOAP-ENV:Body>
                //     <ns1:BookInsurance>
                //     <InsuranceSearchCriteria>
                //     <adult>${body.adult}</adult>
                //     <benefit>${body.benefit}</benefit>
                //     <birthDate>${body.birthDate}</birthDate>
                //     <browserAgent>${body.browserAgent}</browserAgent>
                //     <browserIp>${body.browserIp}</browserIp>
                //     <child>${body.child}</child>
                //     <country>${body.country}</country>
                //     <currency>${body.currency}</currency>
                //     <depart_country>${body.depart_country}</depart_country>
                //     <endDate>${body.endDate}</endDate>
                //     <infant>${body.infant}</infant>
                //     <plan>${body.plan}</plan>
                //     <product>${body.product}</product>
                //     <responseKey>${body.responseKey}</responseKey>
                //     <startDate>${body.startDate}</startDate>
                //     </InsuranceSearchCriteria>
                //     <Insurance>
                //     <supplier_code>${body.supplier_code}</supplier_code>
                //     <supplier_policy_id>${body.supplier_policy_id}</supplier_policy_id>
                //     <supplierPrice>${body.supplierPrice}</supplierPrice>
                //     <policy_name>${body.policy_name}</policy_name>
                //     <policyType>${body.policyType}</policyType>
                //     <policyCode>${body.policyCode}</policyCode>
                    
                //     <policyFeeCode>${body.policyFeeCode}</policyFeeCode>
                //     <currencyCode>${body.currencyCode}</currencyCode>
                //     <markupPrice>${body.cancelMarkupPrice}</markupPrice>
                //     <cancelMarkupPrice>${body.cancelMarkupPrice}</cancelMarkupPrice>
                //     <cancelSupplierPrice>${body.cancelSupplierPrice}</cancelSupplierPrice>
                //     <inclusions size="0"><inclusion>Additional 4.0% tax on contribution is applicable for non tax filers </inclusion>
                //     <inclusion>The policy is applicable for pakistan residence only </inclusion>
                //     <inclusion>All Terms, Conditions &amp; Exclusions as per Jubilee General’s Via Care policy</inclusion>
                //     </inclusions>
                //     <studentPlan>${body.studentPlan}</studentPlan>
                //     <bookingDetail>
                //     <agentReference>${body.agentReference}</agentReference>
                //     <arrivalairportcode>${body.arrivalairportcode}</arrivalairportcode>
                //     <bookingAmount>${body.bookingAmount}</bookingAmount>
                //     <bookingCode>${body.bookingCode}</bookingCode>
                //     <bookingComments>${body.bookingComments}</bookingComments>
                //     <bookingCurrency>${body.bookingCurrency}</bookingCurrency>
                //     <bookingDate>${body.bookingDate}</bookingDate>
                //     <bookingReference>${body.bookingReference}</bookingReference>
                //     <bookingStatus>${body.bookingStatus}</bookingStatus>
                //     <departureairportcode>${body.departureairportcode}</departureairportcode>
                //     <tripID>${body.tripID}</tripID>
                //     </bookingDetail>
                //     <booking_status>
                //     </booking_status>
                //     <is_blocked>${body.is_blocked}</is_blocked>
                //     <insuranceOccupancy>
                //     ${body.insuranceOccupancy}
                //     </insuranceOccupancy>
                //     <originalSupplierPrice>${body.originalSupplierPrice}</originalSupplierPrice>
                //     <originalSupplierCurrency>${body.originalSupplierCurrency}</originalSupplierCurrency>
                //     <isPriceUpdated>${body.isPriceUpdated}</isPriceUpdated>
                //     <variables/>
                //     <appliedTotalTax>${body.appliedTotalTax}</appliedTotalTax>
                //     <supplierTax>${body.supplierTax}</supplierTax>
                //     <isTaxInclusive>${body.isTaxInclusive}</isTaxInclusive>
                //     <taxCurrency>${body.taxCurrency}</taxCurrency>
                //     <sumInsured>${body.sumInsured}</sumInsured>
                //     <minAdultAge>${body.minAdultAge}</minAdultAge>
                //     <maxAdultAge>${body.maxAdultAge}</maxAdultAge>
                //     <booking_insurance_id>${body.booking_insurance_id}</booking_insurance_id>
                //     </Insurance>
                //     </ns1:BookInsurance>
                //     </SOAP-ENV:Body>
                //     </SOAP-ENV:Envelope>`;
                // }







                module.exports = {
                    bookTemplate
                };