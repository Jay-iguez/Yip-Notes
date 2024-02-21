import Dexie from "dexie";

export const db = new Dexie('yip_db')

db.version(3).stores({
  yip: '++yip_id, yips_id, yip_name, yip_content', // 3
  yips: '++yips_id', // 2
  kennels: '++kennel_id, kennel_name, kennel_category, kennel_date', // 1
  marry_kennels: '++marry_id, kennel_id, yips_id', // 4
  color_schema: '++color_schema_id, color_main, color_sub, color_accent, color_font'
})

db.on('populate', (tx) => {
  const css_values = [
    {
      color_schema_id: 1,
      color_main: '#1D1F21',
      color_sub: '#373943',
      color_accent: '#2a2b34',
      color_font: '#FFFFFF'
    }
  ]

  tx.color_schema.bulkAdd(css_values)
})

db.open()

export default db


/***
 * 
 * 
 * db.on('populate', (tx) => {
  const yip_records = [
    { yip_id: 1, yips_id: 1, yip_name: 'Big ol doggos', yip_content: 'stuff about dogs and other things. Did you know that they can be big dogs and small dogs? Amazing huh?' },
    { yip_id: 2, yips_id: 1, yip_name: 'Can canines think not food', yip_content: 'Dogs tend to only think about food and nothing else, i think its funny but also sad because im not as important to them as food and stuff' },
    { yip_id: 3, yips_id: 1, yip_name: 'Dog tricks', yip_content: 'Dogs can learn many tricks, but for some reason they cannot learn how to play video games with me, How saddening.' },
    { yip_id: 4, yips_id: 1, yip_name: 'Big ol doggos', yip_content: 'stuff about dogs and other things. Did you know that they can be big dogs and small dogs? Amazing huh?' },
    { yip_id: 5, yips_id: 2, yip_name: 'Can canines think not food', yip_content: 'Dogs tend to only think about food and nothing else, i think its funny but also sad because im not as important to them as food and stuff' },
    { yip_id: 6, yips_id: 2, yip_name: 'Dog tricks', yip_content: 'Dogs can learn many tricks, but for some reason they cannot learn how to play video games with me, How saddening.' },
    { yip_id: 7, yips_id: 2, yip_name: 'Big ol doggos', yip_content: 'stuff about dogs and other things. Did you know that they can be big dogs and small dogs? Amazing huh?' },
    { yip_id: 8, yips_id: 2, yip_name: 'Can canines think not food', yip_content: 'Dogs tend to only think about food and nothing else, i think its funny but also sad because im not as important to them as food and stuff' },
    { yip_id: 9, yips_id: 2, yip_name: 'Dog tricks', yip_content: 'Dogs can learn many tricks, but for some reason they cannot learn how to play video games with me, How saddening.' },
    { yip_id: 10, yips_id: 2, yip_name: 'Big ol doggos', yip_content: 'stuff about dogs and other things. Did you know that they can be big dogs and small dogs? Amazing huh?' },
    { yip_id: 11, yips_id: 2, yip_name: 'Can canines think not food', yip_content: 'Dogs tend to only think about food and nothing else, i think its funny but also sad because im not as important to them as food and stuff' },
    { yip_id: 12, yips_id: 2, yip_name: 'Dog tricks', yip_content: 'Dogs can learn many tricks, but for some reason they cannot learn how to play video games with me, How saddening.' },
    { yip_id: 13, yips_id: 2, yip_name: 'Big ol doggos', yip_content: 'stuff about dogs and other things. Did you know that they can be big dogs and small dogs? Amazing huh?' },
    { yip_id: 14, yips_id: 3, yip_name: 'Can canines think not food', yip_content: 'Dogs tend to only think about food and nothing else, i think its funny but also sad because im not as important to them as food and stuff' },
    { yip_id: 15, yips_id: 3, yip_name: 'Dog tricks', yip_content: 'Dogs can learn many tricks, but for some reason they cannot learn how to play video games with me, How saddening.' },
    { yip_id: 16, yips_id: 3, yip_name: 'Big ol doggos', yip_content: 'stuff about dogs and other things. Did you know that they can be big dogs and small dogs? Amazing huh?' },
    { yip_id: 17, yips_id: 3, yip_name: 'Can canines think not food', yip_content: 'Dogs tend to only think about food and nothing else, i think its funny but also sad because im not as important to them as food and stuff' },
    { yip_id: 18, yips_id: 3, yip_name: 'Dog tricks', yip_content: 'Dogs can learn many tricks, but for some reason they cannot learn how to play video games with me, How saddening.' },
    { yip_id: 19, yips_id: 3, yip_name: 'Big ol doggos', yip_content: 'stuff about dogs and other things. Did you know that they can be big dogs and small dogs? Amazing huh?' },
    { yip_id: 20, yips_id: 2, yip_name: 'Can canines think not food', yip_content: 'Dogs tend to only think about food and nothing else, i think its funny but also sad because im not as important to them as food and stuff' },
    { yip_id: 21, yips_id: 2, yip_name: 'Dog tricks', yip_content: 'Dogs can learn many tricks, but for some reason they cannot learn how to play video games with me, How saddening.' }
  ]
  tx.yip.bulkAdd(yip_records)

  const yips_records = [
    { yips_id: 1 },
    { yips_id: 2 },
    { yips_id: 3 }
  ]
  tx.yips.bulkAdd(yips_records)

  const kennels_records = [
    { kennel_id: 1, kennel_name: 'THe kennels of fortune', kennel_category: 'canines', kennel_date: `${Date.now()}` },
    { kennel_id: 2, kennel_name: 'Breeds of dogs I like', kennel_category: 'canines', kennel_date: `${Date.now()}` },
    { kennel_id: 3, kennel_name: 'Why Arch Linux is hard lol', kennel_category: 'linux', kennel_date: `${Date.now()}` }
  ]
  tx.kennels.bulkAdd(kennels_records)

  const marry_records = [
    { marry_id: 1, kennel_id: 1, yips_id: 1 },
    { marry_id: 2, kennel_id: 2, yips_id: 2 },
    { marry_id: 3, kennel_id: 3, yips_id: 3 }
  ]
  tx.marry_kennels.bulkAdd(marry_records)

})
 * 
 * 
 */