import React, { useState, useEffect } from "react";
import { StyledKennelContainer, StyledKennelContentBox } from "../../styled-components/Styled";
import * as Helper from '../../utils/helper_functions'
import YIP_LINK from "./Yip_Link";
import KENNEL_DROP_DOWN from './Kennel_Drop_Down'

export const Kennel = (props) => {

    // Creates a view-box of our kennel data containing the kennel name, category, and children yips.

    const { kennel, render_status, set_condition } = props
    const [viewport_width_assertion, set_viewport_width_assertion] = useState(window.innerWidth)

    useEffect(() => {

        set_viewport_width_assertion(window.innerWidth)

    })


    const formatted_kennel_name = Helper.format_to_url(kennel.kennel_name)


    return (
        <>
            {
                kennel.kennel_name === 'Bleu' && kennel.kennel_category === 'Lettuce' ? <button onClick={() => {set_condition('bleu')}} className="button">OH WHAT'S THIS :D</button> :


                    <StyledKennelContainer>
                        <StyledKennelContentBox margin_right={0} max_on_query={viewport_width_assertion <= 1250 ? true : false}>
                            <div className="kennel_information">
                                <div className="value kennel_values">{kennel.kennel_name}</div>
                                <div className="value kennel_values">{kennel.kennel_category}</div>
                            </div>
                        </StyledKennelContentBox>
                        {
                            kennel.yips.length === 0 ?

                                <div className="value">
                                    <p>This kennel is rather empty -</p>
                                </div>

                                :

                                // Essentially whats happening here is depending on length of yips of the kennel - it will change the size of the box it is in. If it gets too much - it will pass down logic to Kennel_Drop_Down component.


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

                                    // If render_state === 'complete' then it will render ONLY kennels of that kennel without any special styles added to them.


                                    kennel.yips.map(yip => {
                                        return <YIP_LINK content={{ name: yip.yip_name, id: yip.yip_id, text: yip.yip_content, appearance: '' }} kennel_name={formatted_kennel_name} key={yip.yip_id} />
                                    })
                        }
                    </StyledKennelContainer>

            }
        </>
    )
}

export default Kennel