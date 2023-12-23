import Dexie from "dexie";

export const db = new Dexie('yip_db')

db.version(1).stores({ 
    yip: '++yip_id, yip_name, yip_content',
    yips: '++yips_id, yip_id',
    kennels: '++kennel_id, kennel_name, kennel_category, kennel_date',
    marry_kennels: '++marry_id, kennel_id, yips_id'
})
db.on('populate', (tx) => {
    tx.yip.add({yip_id: '1', yip_name: 'Big ol doggos', yip_content: 'stuff about dogs'})
    tx.yips.add({yips_id: '1', yip_id: '1'})
    tx.kennels.add({kennel_id: '1', kennel_name: 'THe kennels of fortune', kennel_category: 'canines', kennel_date: `${Date.now()}`})
    tx.marry_kennels.add({marry_id: '1', kennel_id: '1', yips_id: '1'})
  })
  db.open()

export default db