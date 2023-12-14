import React from "react";
import YIP_LINK from './Yip_Link'

export const KennelDropDown = (props) => {
    const { kennel, url } = props


    return (

        kennel.yips.map((yip, index) => {
            if (index === 0) {
                return <YIP_LINK content={{ name: 'Expand', appearance: 'expand', kennel: kennel }} key={Math.random() * 1000} />
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