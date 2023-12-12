import React, { useContext } from "react";
import YIP_LINK from '../components/kennel-components/Yip_Link'
import KENNEL_VIEW from "../components/kennel-components/Kennel_View";
import toggle_view from "../context/view_context";

export const KennelDropDown = (props) => {
    const { kennel, url } = props

    const views = useContext(toggle_view)

    return (

        views.view === false ?
            kennel.yips.map((yip, index) => {
                if (index === 0) {
                    return <YIP_LINK content={{ name: 'Expand', appearance: 'expand' }} key={Math.random() * 1000} />
                } else if (index <= 10) {
                    return <YIP_LINK content={{ name: yip.yip, id: yip.id, text: yip.text, appearance: 'drop-down' }} kennelName={url} key={yip.id} />
                }
            })

            :

            <KENNEL_VIEW />
    )
}

export default KennelDropDown

/**
 * 
 * 
 */