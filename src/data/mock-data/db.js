import Dexie from "dexie";

export const db = new Dexie('yip_db')

db.version(1).stores({
  yip: '++yip_id, yips_id, yip_name, yip_content', // 3
  yips: '++yips_id', // 2
  kennels: '++kennel_id, kennel_name, kennel_category, kennel_date', // 1
  marry_kennels: '++marry_id, kennel_id, yips_id' // 4
})
db.on('populate', (tx) => {
  const yip_records = [{ yip_id: 1, yips_id: 1, yip_name: 'Big ol doggos', yip_content: 'stuff about dogs and other things. Did you know that they can be big dogs and small dogs? Amazing huh?' },
  { yip_id: 2, yips_id: 1, yip_name: 'Can canines think not food', yip_content: 'Dogs tend to only think about food and nothing else, i think its funny but also sad because im not as important to them as food and stuff' },
  { yip_id: 3, yips_id: 1, yip_name: 'Dog tricks', yip_content: 'Dogs can learn many tricks, but for some reason they cannot learn how to play video games with me, How saddening.' }]
  tx.yip.bulkAdd(yip_records)

  tx.yips.add({ yips_id: 1})
  tx.kennels.add({ kennel_id: 1, kennel_name: 'THe kennels of fortune', kennel_category: 'canines', kennel_date: `${Date.now()}` })
  tx.marry_kennels.add({ marry_id: 1, kennel_id: 1, yips_id: 1 })
})
db.open()

export default db