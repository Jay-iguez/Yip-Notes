import React, { useState, useEffect } from "react";
import APP_INTRO from './components/intro-screen/App_Intro'
import CONTEXT_STORE from './utils/Context_Store'
import db from './data/mock-data/db'

function App() {

  const [dexie, set_dexie] = useState()

  const update_yip_state = async (new_state) => {
    const { yip } = await db.yip.toArray()
    return yip
  }

  const fetch_data = async () => {
    try {
      const data = await db.marry_kennels.toArray()
      return data
    } catch (err) {
      console.error(err)
    }
  }

  const query_data = async (data) => {
    try {
      const processed_data = await Promise.all(
        data.map(async (marry) => {
          const kennels = await db.kennels.where('kennel_id').equals(marry.kennel_id).first()
          const yip = await db.yip.where('yips_id').equals(marry.yips_id).toArray()

          const formatted_kennels = { ...kennels, yips: yip }
          return formatted_kennels
        })
      )
      set_dexie(processed_data)
    } catch (err) {
      console.error(err)
    }

  }

  useEffect(() => {
    fetch_data()
      .then(res => {
        query_data(res)
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <CONTEXT_STORE>
      <APP_INTRO state={'placeholder'} />
    </CONTEXT_STORE>
  );
}

export default App;
