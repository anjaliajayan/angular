export interface CarsSearchLog{
car_search_logs_id:number,
user_id:number,
agent_code:string,
organisation_id:number,
browserIp:string,
browserAgent:string,
startDate:Date,
startTime:{},
endDate:Date,
endTime:{},
tripType:string,
pickUp:string,
dropOff:string,
pickUpLocation:string,
dropOffLocation:string,
adultCount:number,
childCount:number,
childAges:number,
country:string,
currency:string,
responseKey:{},
driversAge:number,
vehicleType:string,
transmissionType:string,
created_at:Date,
}