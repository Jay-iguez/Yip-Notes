import React, { useState } from "react";
import YIP_LINK from '../components/kennel-components/Yip_Link'

export const KennelDropDown = (props) => {
    const { kennel, url } = props
    const [is_open, set_is_open] = useState(false)

    return (
        kennel.yips.map((yip, index) => {
            if (index === 0) {
                return <YIP_LINK content={{ name: 'Expand', appearance: 'expand' }} key={Math.random() * 1000} />
            } else if (index <= 10) {
                return <YIP_LINK content={{ name: yip.yip, id: yip.id, text: yip.text, appearance: 'drop-down' }} kennelName={url} key={yip.id} />
            } 
        })
    )
}

export default KennelDropDown

/**
 * 
 * 
 */