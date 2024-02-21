import React from "react";
import YIP_LINK from './Yip_Link'

export const KennelDropDown = (props) => {
    const { kennel, url, yips_length } = props

    const expand_link = <YIP_LINK content={{ name: 'Open Kennel:', appearance: 'expand', kennel: kennel }} key={Math.random() * 1000} yips_length={yips_length} />

    const content_to_render = kennel.yips.slice(0, 10).map((yip) => {
            return <YIP_LINK content={{ name: yip.yip_name, id: yip.yip_id, text: yip.yip_content, appearance: 'drop-down' }} kennel_name={url} key={yip.yip_id} />
        })

    content_to_render.unshift(expand_link)

    return (   
        content_to_render
    )
}

export default KennelDropDown

/**
 * 
 * 
 */