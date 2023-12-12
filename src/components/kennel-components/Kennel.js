import React from "react";
import { StyledKennelContainer, StyledKennelContentBox} from "../../styled-components/Styled";
import * as Helper from '../../utils/helper_functions'
import YIP_LINK from "./Yip_Link";
import KENNEL_DROP_DOWN from '../../styled-components/Kennel_Drop_Down'

export const Kennel = (props) => {

    const { kennel } = props

    const formatted_kennel_name = Helper.format_to_url(kennel.kennel)

    return (
        <>
            <StyledKennelContainer>
                <StyledKennelContentBox>
                    <div className="kennel_information">
                        <div>
                            <h3>{kennel.kennel}</h3>
                            <h3>{kennel.category}</h3>
                        </div>
                        <button className="button edit_kennel">Edit Kennel</button>
                    </div>
                </StyledKennelContentBox>
                {kennel.yips.length <= 5 ?
                    kennel.yips.map(yip => {
                        return <YIP_LINK content={{ name: yip.yip, id: yip.id, text: yip.text, appearance: '' }} kennelName={formatted_kennel_name} key={yip.id} />
                    })

                    : kennel.yips.length < 12 ?
                        kennel.yips.map(yip => {
                            return <YIP_LINK content={{ name: yip.yip, id: yip.id, text: yip.text, appearance: 'smash' }} kennelName={formatted_kennel_name} key={yip.id} />
                        })

                        : <KENNEL_DROP_DOWN kennel={kennel} url={formatted_kennel_name} />

                }
            </StyledKennelContainer>
        </>
    )
}

export default Kennel