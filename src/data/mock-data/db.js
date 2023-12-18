import Dexie from "dexie";

export const db = new Dexie('yip_db')

db.version(1).stores({ 
    yip: '++yip_id, yip_name, yip_content',
    yips: '++yips_id, yip_id',
    kennels: '++kennel_id, kennel_name, kennel_category, kennel_date, yips_id'
})

export default db