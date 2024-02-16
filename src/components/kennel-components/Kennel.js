import React from "react";
import { StyledKennelContainer, StyledKennelContentBox } from "../../styled-components/Styled";
import * as Helper from '../../utils/helper_functions'
import YIP_LINK from "./Yip_Link";
import KENNEL_DROP_DOWN from './Kennel_Drop_Down'

export const Kennel = (props) => {

    const { kennel, render_status } = props

    const formatted_kennel_name = Helper.format_to_url(kennel.kennel_name)

    return (
        <>
            <StyledKennelContainer>
                <StyledKennelContentBox>
                    <div className="kennel_information">
                        <p className="option value">{kennel.kennel_name}</p>
                        <p className="option value">{kennel.kennel_category}</p>
                    </div>
                </StyledKennelContentBox>
                {
                    kennel.yips.length === 0 ?

                        <p className="option condition value">This kennel is rather empty -</p>

                        :

                        render_status !== 'complete' ?
                            kennel.yips.length <= 6 ?
                                kennel.yips.map(yip => {
                                    return <YIP_LINK content={{ name: yip.yip_name, id: yip.yip_id, text: yip.yip_content, appearance: '' }} kennel_name={formatted_kennel_name} key={yip.yip_id} />
                                })

                                : kennel.yips.length < 11 ?
                                    kennel.yips.map(yip => {
                                        return <YIP_LINK content={{ name: yip.yip_name, id: yip.yip_id, text: yip.yip_content, appearance: 'smash' }} kennel_name={formatted_kennel_name} key={yip.yip_id} />
                                    })

                                    : <KENNEL_DROP_DOWN kennel={kennel} url={formatted_kennel_name} yips_length={kennel.yips.length} />

                            :

                            kennel.yips.map(yip => {
                                return <YIP_LINK content={{ name: yip.yip_name, id: yip.yip_id, text: yip.yip_content, appearance: '' }} kennel_name={formatted_kennel_name} key={yip.yip_id} />
                            })
                }
            </StyledKennelContainer>
        </>
    )
}

export default Kennel