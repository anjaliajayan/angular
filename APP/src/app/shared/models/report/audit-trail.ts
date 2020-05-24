export interface AuditTrail{
id:number,
platform:string,
module:string,
model:string,
event:string,
browser_ip:string,
browser_agent:{},
object:{},
description:{},
user_id:{},
created_at:Date
}