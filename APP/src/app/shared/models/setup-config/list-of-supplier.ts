export interface ListOfSupplers{
    supplier_id:number,
    organisation_id:number,
    supplier_code:string,
    is_active:boolean,
    status:boolean,
    country_id:number,
    currency_id:number,
    configuration:{},
    name:string,
    name_ar:string,
    email:string,
    contact:string,
    business_id:number,
    username:string,
    password:string,
    website:string,
    notes:{},
    about:{},
    timezone_id:number,
    credit_limit:string,
    credit_days:number,
    is_hotel:boolean,
    is_flight:boolean,
    is_holidays:boolean,
    is_activities:boolean,
    is_car:boolean,
    is_transfers:boolean,
    is_cruises:boolean,
    is_visa:boolean,
    is_insurance:boolean,
    additional_contact:{},
    settings:{},
    created:Date,
    api_key:string,
    short_code:string,
    supplier_class:{},
    Gds_code:string,
    reissue:boolean,
    revalidate:boolean,
    refund:boolean,
    refund_sametiny:boolean,
    void_all:boolean,
    void_single:boolean,
    split:boolean,
    reterive:boolean,
    cancel:boolean,
    hold:boolean,
    free_servicetiny:boolean,
    paid_servicetiny:boolean,
    seats:boolean,
    fare_rules:boolean,
    is_directconnect:boolean,
    queue_management:boolean,
    iata_card:boolean,
    seats_after:boolean,
    service_after:boolean

}