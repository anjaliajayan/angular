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

//    supplierObject.is_flight = false;

    if( supplierObject.is_car && saleObject.is_car ){
        carMarkup = `
            <markupCar>
                <markupCarId>${cars.markup_car_id}</markupCarId>
                <markup_id>${cars.markup_id}</markup_id>
                <markupAmount>${cars.markup}</markupAmount>
                <markupMode>${cars.markup_mode}</markupMode>
                `;
        if(cars.max_markup)
            carMarkup = carMarkup+ `<maxMarkup>${cars.max_markup}</maxMarkup>`;
        if(cars.min_markup)
            carMarkup = carMarkup+ `<minMarkup>${cars.min_markup}</minMarkup>`;

        carMarkup = carMarkup+`</markupCar>`
    }

    if( supplierObject.is_hotel && saleObject.is_hotel){
        hotelMarkup = `
        
            <markupHotel>
                <markupHotelId>${hotel.markup_hotel_id}</markupHotelId>    
                <markup_id>${hotel.markup_id}</markup_id>
                <markupAmount>${hotel.markup}</markupAmount>
                <markupMode>${hotel.markup_mode}</markupMode>`
        if( hotel.max_markup )
            hotelMarkup = hotelMarkup + `<maxMarkup>${hotel.max_markup}</maxMarkup>`;
        if( hotel.min_markup )
            hotelMarkup = hotelMarkup + `<minMarkup>${hotel.min_markup}</minMarkup>`;
        hotelMarkup= hotelMarkup+ `</markupHotel>`
    }

    if(supplierObject.is_flight && saleObject.is_flight){
        flightMarkup = `
        
            <markupFlight>
                <calculationBasis>${flights.calculation_basis}</calculationBasis>
                <calculationType>${flights.calculation_type}</calculationType>
                <destinationAirport>${flights.destination_airport}</destinationAirport>
                <itineraryType>${flights.itinerary_type}</itineraryType>
                <marketingCarriers>${flights.marketing_carriers}</marketingCarriers>
                <markupAmount>${flights.markup}</markupAmount>
                <markupFlightId>${flights.markup_flight_id}</markupFlightId>
                <markupMode>${flights.markup_mode}</markupMode>
                <markupType></markupType>
                <maxMarkup></maxMarkup>
                <minMarkup></minMarkup>
                <orginAirport>${flights.orgin_airport}</orginAirport>
                <paxType>${flights.pax_types}</paxType>
                <serviceClass>${flights.service_class}</serviceClass>
            </markupFlight>

        `
    }

    if( supplierObject.is_activities && saleObject.is_activities){
        activityMarkup = `
        
            <markupActivities>
                <markupActivitiesId>${activities.markup_activitie_id}</markupActivitiesId>
                <markup_id>${activities.markup_id}</markup_id>
                <markupAmount>${activities.markup}</markupAmount>
                <markupMode>${activities.markup_mode}</markupMode>
                `
        if(activities.max_markup)
            activityMarkup = activityMarkup + `<maxMarkup>${activities.max_markup}</maxMarkup>`;
        if(activities.min_markup)
            activityMarkup = activityMarkup+ `<minMarkup>${activities.min_markup}</minMarkup>`
        activityMarkup = activityMarkup+ `</markupActivities>`
    }

    if( supplierObject.is_transfers && saleObject.is_transfers){
        transferMarkup = `
            <markupTransfer>
                <markupTransferId>${transfers.markup_transfer_id}</markupTransferId>
                <markup_id>${transfers.markup_id}</markup_id>
                <markupAmount>${transfers.markup}</markupAmount>
                <markupMode>${transfers.markup_mode}</markupMode>
            `
        if( transfers.max_markup )
            transferMarkup = transferMarkup+  `<maxMarkup>${transfers.max_markup}</maxMarkup>`
        if(transferMarkup.min_markup)
            transferMarkup = transferMarkup + `<minMarkup>${transfers.min_markup}</minMarkup>`
        transferMarkup = transferMarkup +`</markupTransfer>`
    }

    if( supplierObject.is_cruises && saleObject.is_cruises){
        cruiseMarkup = `
            <markupCruise>
                <markupCruiseId>${cruises.markup_cruise_id}</markupCruiseId>
                <markup_id>${cruises.markup_id}</markup_id>
                <markupAmount>${cruises.markup}</markupAmount>
                <markupMode>${cruises.markup_mode}</markupMode>
            `;
        if( cruises.max_markup )
            cruiseMarkup = cruiseMarkup +  `<maxMarkup>${cruises.max_markup}</maxMarkup>`;
        if(cruises.min_markup)
            cruiseMarkup = cruiseMarkup + `<minMarkup>${cruises.min_markup}</minMarkup>`
        cruiseMarkup = cruiseMarkup + `</markupCruise>`
    }

    if( supplierObject.is_insurance && saleObject.is_insurance){
        insuranceMarkup = `

            <markupInsurance>
                <markupInsuranceId>${insurances.markup_insurance_id}</markupInsuranceId>
                <markup_id>${insurances.markup_id}</markup_id>
                <markupAmount>${insurances.markup}</markupAmount>
                <markupMode>${insurances.markup_mode}</markupMode>
            `
        if( insurances.max_markup )
            insuranceMarkup = insuranceMarkup +  `<maxMarkup>${insurances.max_markup}</maxMarkup>`
        if(insuranceMarkup.min_markup)
            insuranceMarkup = insuranceMarkup + `<minMarkup>${insurances.min_markup}</minMarkup>`
        insuranceMarkup = insuranceMarkup + `</markupInsurance>`
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


var replaceAll = function(target, search, replacement) {
    return target.replace(new RegExp(search, 'g'), replacement);
};