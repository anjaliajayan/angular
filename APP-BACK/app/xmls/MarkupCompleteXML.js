let getMarkupXML = function( agent, apiKey, secretKey, markup, editions, supplierObject, saleObject )  {

    let carMarkup='', 
    hotelMarkup='', 
    flightMarkup='', 
    activityMarkup='', 
    transferMarkup='', 
    cruiseMarkup='', 
    insuranceMarkup='';
    let hotel = editions.hotels,
    cars = editions.cars,
    flights= editions.flights,
    activities=editions.activities,
    transfers = editions.transfers,
    cruises = editions.cruises,
    insurances = editions.insurances;

    if( supplierObject.is_car && saleObject.is_car ){
        carMarkup = `
            <markupCar>
                <bookFrom>?</bookFrom>
                <bookTo>?</bookTo>
                <calculationBasis>?</calculationBasis>
                <calculationType>?</calculationType>
                <checkinFrom>?</checkinFrom>
                <checkinTo>?</checkinTo>
                <countryCode>?</countryCode>
                <currencyId>?</currencyId>
                <customerType>?</customerType>
                <fareCode>?</fareCode>
                <fareRange>?</fareRange>
                <fareType>?</fareType>
                
                <markupAmount>?</markupAmount>
                <markupCarId>?</markupCarId>
                <markupMode>?</markupMode>
                <markupType>?</markupType>
                <markup_id>?</markup_id>
                
                <maxAdvancePurchase>?</maxAdvancePurchase>
                <maxMarkup>?</maxMarkup>
                <maxStayDuration>?</maxStayDuration>
                <minAdvancePurchase>?</minAdvancePurchase>
                <minMarkup>?</minMarkup>
                <minStayDuration>?</minStayDuration>
                <roundingOff>?</roundingOff>
        </markupCar>
        `
    }

    if(supplierObject.is_hotel && saleObject.is_hotel){
        hotelMarkup = `
        
            <markupHotel>
                <bookFrom>?</bookFrom>
                <bookTo>?</bookTo>
                <calculationBasis>?</calculationBasis>
                <calculationType>?</calculationType>
                <checkinFrom>?</checkinFrom>
                <checkinTo>?</checkinTo>
                <countryCode>?</countryCode>
                <currencyId>?</currencyId>
                <customerType>?</customerType>
                <fareCode>?</fareCode>
                <fareRange>?</fareRange>
                <fareType>?</fareType>
                <hotelChain>?</hotelChain>
                <hotelFrom>?</hotelFrom>
                <hotelId>?</hotelId>
                <markupAmount>?</markupAmount>
                <markupHotelId>?</markupHotelId>
                <markupMode>?</markupMode>
                <markupType>?</markupType>
                <markup_id>?</markup_id>
                <maxAdvancePurchase>?</maxAdvancePurchase>
                <maxMarkup>?</maxMarkup>
                <maxStayDuration>?</maxStayDuration>
                <minAdvancePurchase>?</minAdvancePurchase>
                <minMarkup>?</minMarkup>
                <minStayDuration>?</minStayDuration>
                <roundingOff>?</roundingOff>
            </markupHotel>
        
        `
    }

    if(supplierObject.is_flight && saleObject.is_flight){
        flightMarkup = `
        
            <markupFlight>
                <advanceMax>?</advanceMax>
                <advanceMin>?</advanceMin>
                <bookFrom>?</bookFrom>
                <bookTo>?</bookTo>
                <cabinType>?</cabinType>
                <calculationBasis>?</calculationBasis>
                <calculationType>?</calculationType>
                <checkinFrom>?</checkinFrom>
                <checkinTo>?</checkinTo>
                <countryCode>?</countryCode>
                <currency>?</currency>
                <currencyId>?</currencyId>
                <customerType>?</customerType>
                <destinationAirport>?</destinationAirport>
                <destinationCountry>?</destinationCountry>
                <fareCode>?</fareCode>
                <fareRange>?</fareRange>
                <fareType>?</fareType>
                <itineraryType>?</itineraryType>
                <marketingCarriers>?</marketingCarriers>
                <markup/>
                <markupAmount>?</markupAmount>
                <markupFlightId>?</markupFlightId>
                <markupMode>?</markupMode>
                <markupType>?</markupType>
                <maxAdvancePurchase>?</maxAdvancePurchase>
                <maxMarkup>?</maxMarkup>
                <minAdvancePurchase>?</minAdvancePurchase>
                <minMarkup>?</minMarkup>
                <orginAirport>?</orginAirport>
                <orginCountry>?</orginCountry>
                <paxType>?</paxType>
                <roundingOff>?</roundingOff>
                <serviceClass>?</serviceClass>
                <travelFrom>?</travelFrom>
                <travelTo>?</travelTo>
                <tripType>?</tripType>
            </markupFlight>

        `
    }

    if(supplierObject.is_activities && saleObject.is_activities){
        activityMarkup = `
        
            <markupActivities>
                <bookFrom>?</bookFrom>
                <bookTo>?</bookTo>
                <calculationBasis>?</calculationBasis>
                <calculationType>?</calculationType>
                <checkinFrom>?</checkinFrom>
                <checkinTo>?</checkinTo>
                <countryCode>?</countryCode>
                <currencyId>?</currencyId>
                <customerType>?</customerType>
                <fareCode>?</fareCode>
                <fareRange>?</fareRange>
                <fareType>?</fareType>
                <markup/>
                <markupActivitiesId>?</markupActivitiesId>
                <markupAmount>?</markupAmount>
                <markupMode>?</markupMode>
                <markupType>?</markupType>
                <maxAdvancePurchase>?</maxAdvancePurchase>
                <maxMarkup>?</maxMarkup>
                <maxStayDuration>?</maxStayDuration>
                <minAdvancePurchase>?</minAdvancePurchase>
                <minMarkup>?</minMarkup>
                <minStayDuration>?</minStayDuration>
                <roundingOff>?</roundingOff>
            </markupActivities>

        `
    }

    if(supplierObject.is_transfers && saleObject.is_transfers){
        transferMarkup = `
        
            <markupTransfer>
                <bookFrom>?</bookFrom>
                <bookTo>?</bookTo>
                <calculationBasis>?</calculationBasis>
                <calculationType>?</calculationType>
                <checkinFrom>?</checkinFrom>
                <checkinTo>?</checkinTo>
                <countryCode>?</countryCode>
                <currencyId>?</currencyId>
                <customerType>?</customerType>
                <fareCode>?</fareCode>
                <fareRange>?</fareRange>
                <fareType>?</fareType>
                <markupAmount>?</markupAmount>
                <markupMode>?</markupMode>
                <markupTransferId>?</markupTransferId>
                <markupType>?</markupType>
                <markup_id>?</markup_id>
                <maxAdvancePurchase>?</maxAdvancePurchase>
                <maxMarkup>?</maxMarkup>
                <maxStayDuration>?</maxStayDuration>
                <minAdvancePurchase>?</minAdvancePurchase>
                <minMarkup>?</minMarkup>
                <minStayDuration>?</minStayDuration>
                <roundingOff>?</roundingOff>
            </markupTransfer>

        `
    }

    if(supplierObject.is_cruises && saleObject.is_cruises){
        cruiseMarkup = `
        
            <markupCruise>
                <bookFrom>?</bookFrom>
                <bookTo>?</bookTo>
                <calculationBasis>?</calculationBasis>
                <calculationType>?</calculationType>
                <checkinFrom>?</checkinFrom>
                <checkinTo>?</checkinTo>
                <countryCode>?</countryCode>
                <currencyId>?</currencyId>
                <customerType>?</customerType>
                <fareCode>?</fareCode>
                <fareRange>?</fareRange>
                <fareType>?</fareType>
                <markupAmount>?</markupAmount>
                <markupCruiseId>?</markupCruiseId>
                <markupMode>?</markupMode>
                <markupType>?</markupType>
                <markup_id>?</markup_id>
                <maxAdvancePurchase>?</maxAdvancePurchase>
                <maxMarkup>?</maxMarkup>
                <maxStayDuration>?</maxStayDuration>
                <minAdvancePurchase>?</minAdvancePurchase>
                <minMarkup>?</minMarkup>
                <minStayDuration>?</minStayDuration>
                <roundingOff>?</roundingOff>
            </markupCruise>

        `
    }

    if(supplierObject.is_insurance && saleObject.is_insurance){
        insuranceMarkup = `

            <markupInsurance>
                <bookFrom>?</bookFrom>
                <bookTo>?</bookTo>
                <calculationBasis>?</calculationBasis>
                <calculationType>?</calculationType>
                <checkinFrom>?</checkinFrom>
                <checkinTo>?</checkinTo>
                <countryCode>?</countryCode>
                <currencyId>?</currencyId>
                <customerType>?</customerType>
                <fareCode>?</fareCode>
                <fareRange>?</fareRange>
                <fareType>?</fareType>
                <markupAmount>?</markupAmount>
                <markupInsuranceId>?</markupInsuranceId>
                <markupMode>?</markupMode>
                <markupType>?</markupType>
                <markup_id>?</markup_id>
                <maxAdvancePurchase>?</maxAdvancePurchase>
                <maxMarkup>?</maxMarkup>
                <maxStayDuration>?</maxStayDuration>
                <minAdvancePurchase>?</minAdvancePurchase>
                <minMarkup>?</minMarkup>
                <minStayDuration>?</minStayDuration>
                <roundingOff>?</roundingOff>
            </markupInsurance>

        `
    }


    let mainMarkup = `
        <soapenv:Envelope
        xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:com="http://tpconnects.com/service/comission"
        xmlns:save="http://tpconnects.com/service/markup/save">
        <soapenv:Header>
            <com:SecurityHeader>
            <agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>
            </com:SecurityHeader>
        </soapenv:Header>
        <soapenv:Body>
            <com:SaveMarkup>
            <save:Markup>
                <created>${markup.created}</created>
                <createdBy>${markup.created_by}</createdBy>
                <markupId>${markup.markup_id}</markupId>
                <organisationId>${markup.organisation_id}</organisationId>
                <priority>${markup.priority}</priority>
                <saleId>${markup.sale_id}</saleId>
                <status>${markup.status}</status>
                <supplierId>${markup.supplier_id}</supplierId>
                <title>${markup.title}</title>
                
                ${carMarkup}
                ${hotelMarkup}
                ${flightMarkup}
                ${activityMarkup}
                ${transferMarkup}
                ${cruiseMarkup}
                ${insuranceMarkup}

            </save:Markup>
            </com:SaveMarkup>
        </soapenv:Body>
        </soapenv:Envelope>
	`;

    return mainMarkup;
}
module.exports = getMarkupXML;