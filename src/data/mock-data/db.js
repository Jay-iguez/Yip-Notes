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