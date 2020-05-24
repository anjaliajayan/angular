
const blockTemplate = (body) => {
    return `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/insurance">
    <SOAP-ENV:Header><ns1:SecurityHeader>
    <agent>TSS</agent>
    <apiKey>5ec8b2955d618a38232bd168870eca60</apiKey>
    <secretKey>11ce6082-988a-11e7-abc4-cec278b6b50a</secretKey>
    </ns1:SecurityHeader>
    </SOAP-ENV:Header>
    <SOAP-ENV:Body>
    <ns1:BlockInsurance>
    <InsuranceSearchCriteria>
    <adult>${body.adult}</adult>
    <benefit>${body.benefit}</benefit>
    <birthDate>${body.birthDate}</birthDate>
    <browserAgent>${body.browserAgent}</browserAgent>
    <browserIp>${body.browserIp}</browserIp>
    <child>${body.child}</child>
    <country>${body.country}</country>
    <currency>${body.currency}</currency>
    <depart_country>${body.depart_country}</depart_country>
    <endDate>${body.endDate}</endDate>
    <infant>${body.infant}</infant>
    <plan>${body.plan}</plan>
    <product>${body.product}</product>
    <responseKey>${body.responseKey}</responseKey>
    <startDate>${body.startDate}</startDate>
    </InsuranceSearchCriteria>
    <Insurance>
    <supplier_code>${body.supplier_code}</supplier_code>
    <supplier_policy_id>${body.supplier_policy_id}</supplier_policy_id>
    <supplierPrice>${body.supplierPrice}</supplierPrice>
    <policy_name>${body.policy_name} </policy_name>
    <policyType>${body.policyType}</policyType>
    <policyCode>${body.policyCode}</policyCode>
    <description>&#13;
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
    All Terms, Conditions &amp; Exclusions as per Jubilee General’s Via Care policy</description>
    <policyFeeCode>${body.policyFeeCode}</policyFeeCode>
    <currencyCode>${body.currencyCode}</currencyCode>
    <markupPrice>${body.markupPrice}</markupPrice>
    <cancelMarkupPrice>${body.cancelMarkupPrice}</cancelMarkupPrice>
    <cancelSupplierPrice>${body.cancelSupplierPrice}</cancelSupplierPrice>
    <inclusions size="0">
    <inclusion>Additional 4.0% tax on contribution is applicable for non tax filers </inclusion>
    <inclusion>The policy is applicable for pakistan residence only </inclusion>
    <inclusion>All Terms, Conditions &amp; Exclusions as per Jubilee General’s Via Care policy</inclusion>
    </inclusions>
    <studentPlan>${body.studentPlan}</studentPlan>
    <originalSupplierPrice>${body.originalSupplierPrice}</originalSupplierPrice>
    <originalSupplierCurrency>${body.originalSupplierCurrency}</originalSupplierCurrency>
    <isPriceUpdated>${body.isPriceUpdated}</isPriceUpdated>
    <variables/>
    <appliedTotalTax>${body.appliedTotalTax}</appliedTotalTax>
    <supplierTax>${body.supplierTax}</supplierTax>
    <isTaxInclusive>${body.isTaxInclusive}</isTaxInclusive>
    <taxCurrency>${body.taxCurrency}</taxCurrency>
    <sumInsured>${body.sumInsured}</sumInsured>
    <minAdultAge>${body.minAdultAge}</minAdultAge>
    <maxAdultAge>${body.maxAdultAge}</maxAdultAge>
    <booking_insurance_id>${body.booking_insurance_id}</booking_insurance_id>
    </Insurance></ns1:BlockInsurance>
    </SOAP-ENV:Body></SOAP-ENV:Envelope>`;
}



// console.log("blockTemplate==================== ", blockTemplate)



module.exports = {
    blockTemplate
};