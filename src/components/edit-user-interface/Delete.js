import React, { useState, useContext } from "react"
import { StyledConditionWrapper, StyledConditionMessage } from "../../styled-components/Styled"
import menu_screen_context from "../../context/menu_screen_context"

export default function Delete(props) {
    const { dexie } = props

    const menu_screen_state = useContext(menu_screen_context)
    const [menu_screen, set_menu_screen] = menu_screen_state


    const kennel_names = dexie.dexie.map(value => {
        return { name: value.kennel_name, id: value.kennel_id }
    })

    const kennel_yips = dexie.dexie.map(value => {
        return { kennel_id: value.kennel_id, yips: value.yips }
    })

    const marry_kennels = dexie.marry.map(value => {
        return value
    })



    const [screen, set_screen] = useState(menu_screen.delete)
    const [kennel_to_update, set_kennel_to_update] = useState('')
    const [yip_to_update, set_yip_to_update] = useState('')
    const [yip_update, set_yip_update] = useState({ yip_id: '', yip_name: '' })
    const [confirm, set_confirm] = useState(false)

    const get_proper_kennel = (id) => {
        const kennel = dexie.dexie.filter(el => el.kennel_id === id)
        return kennel
    }

    const get_marry_id = (id) => {
        return marry_kennels.filter(marry => marry.kennel_id === id)
    }

    const updater = () => {
        if (screen === 'Kennels') {
            const [marry] = get_marry_id(kennel_to_update)

            const payload = {
                yips_id: marry.yips_id,
                kennel_id: kennel_to_update,
                marry_id: marry.marry_id
            }

            dexie.updater({ action: 'delete_kennel', payload: payload })

        } else if (screen === 'Yips') {

            dexie.updater({ action: 'delete_yip', payload: yip_update.yip_id })

        }
    }


    return (
        <>
            <StyledConditionWrapper>
                <StyledConditionMessage>
                    Delete
                </StyledConditionMessage>
                <div className="select_container">
                    <select
                        defaultValue={screen}
                        className='button select_option'
                        onChange={(e) => {
                            set_menu_screen({ ...menu_screen, delete: e.target.value })
                            set_yip_update({...yip_update, yip_name: '', yip_id: ''})
                            set_screen(e.target.value)
                            set_confirm(false)
                        }}
                    >
                        <option value=''>-- select --</option>
                        <option value='Kennels'>Kennels</option>
                        <option value='Yips'>Yips</option>
                    </select>
                </div>
            </StyledConditionWrapper>

            <form onSubmit={(e) => {
                e.preventDefault()
                updater()
            }}>
                {

                    screen === '' ?

                        <div className="value">
                            <p>Select a Delete option continue</p>
                        </div>

                        :

                        screen === 'Kennels' ?

                            <>
                                <StyledConditionWrapper>
                                    <StyledConditionMessage>
                                        Select Kennel To Delete
                                    </StyledConditionMessage>
                                    <div className="select_container">
                                        <select
                                            className="button select_option"
                                            value={kennel_to_update}
                                            onChange={(e) => {
                                                if (e.target.value === '') {
                                                    set_kennel_to_update(e.target.value)
                                                } else {
                                                    set_kennel_to_update(parseInt(e.target.value))
                                                }

                                                set_confirm(false)
                                            }}>
                                            <option value={''}>-- select --</option>
                                            {
                                                kennel_names.length !== 0 ?

                                                    kennel_names.map(value => {
                                                        return <option value={value.id}>{value.name}</option>
                                                    })

                                                    :

                                                    null
                                            }
                                        </select>
                                    </div>
                                </StyledConditionWrapper>
                                {
                                    kennel_to_update === '' ?

                                        null

                                        :

                                        <>
                                        <div className="value alert">
                                              <p>Warning: Understand all Yips of "{get_proper_kennel(kennel_to_update)?.[0]?.kennel_name}" will also be deleted - modify the Parent Kennel of any/all Yips you wish to save before deleting the Kennel.</p>
                                        </div>
                                        </>
                                }

                            </>

                            :

                            <>
                                <StyledConditionWrapper>
                                    <StyledConditionMessage>
                                        Select Parent Kennel
                                    </StyledConditionMessage>
                                    <div className="select_container">
                                        <select
                                            className="button select_option"
                                            value={yip_to_update}
                                            onChange={(e) => {
                                                if (e.target.value === '') {
                                                    set_yip_to_update(e.target.value)
                                                } else {
                                                    set_yip_to_update(parseInt(e.target.value))
                                                }
                                                set_yip_update({...yip_update, yip_id: '', yip_name: ''})
                                                set_confirm(false)
                                            }}>
                                            <option value=''>-- select --</option>
                                            {

                                                kennel_names.length !== 0 ?

                                                    kennel_names.map(value => {
                                                        return <option value={value.id}>{value.name}</option>
                                                    })

                                                    :

                                                    null
                                            }
                                        </select>
                                    </div>
                                </StyledConditionWrapper>
                                {
                                    yip_to_update === '' ?

                                        null

                                        :

                                        <>
                                            <StyledConditionWrapper>
                                                <StyledConditionMessage>
                                                    Select Yip To Delete
                                                </StyledConditionMessage>
                                                <div className="select_container">
                                                    <select
                                                        className="button select_option"
                                                        onChange={(e) => {
                                                            if (e.target.value === '') {
                                                                set_yip_update({ ...yip_update, yip_id: '', yip_name: '' })
                                                            } else {
                                                                const selected_option_content = e.target.options[e.target.selectedIndex].textContent
                                                                set_yip_update({ ...yip_update, yip_id: parseInt(e.target.value), yip_name: selected_option_content })
                                                            }
                                                            set_confirm(false)
                                                        }}>
                                                        <option value=''>-- select --</option>
                                                        {
                                                            [kennel_yips.filter(value => value.kennel_id === yip_to_update)][0][0].yips.map(yip => yip).length !== 0 ?

                                                                [kennel_yips.filter(value => value.kennel_id === yip_to_update)][0][0].yips.map(yip => <option value={yip.yip_id}>{yip.yip_name}</option>)

                                                                :

                                                                null
                                                        }
                                                    </select>
                                                </div>

                                            </StyledConditionWrapper>
                                            {
                                                yip_update.yip_name === '' ? null : <div className="value alert"><p>The Yip "{yip_update.yip_name}" will be deleted.</p></div>
                                            }
                                        </>
                                }
                            </>

                }
                {
                    screen === '' ?

                        null

                        :

                        <>
                            <button
                                className={`button ${screen === 'Kennels' ? kennel_to_update === '' ? 'disabled'
                                    : '' : yip_update.yip_id === '' ? 'disabled' : ''} submit`}
                                disabled={screen === 'Kennels' ? kennel_to_update === '' ? 'disabled' : ''
                                    : yip_update.yip_id === '' ? 'disabled' : ''}
                                onClick={(e) => {
                                    if (confirm === false) {
                                        e.preventDefault()
                                        set_confirm(true)
                                    }
                                }}>Submit</button>

                            {
                                confirm === false ? null :

                                    <p className="option message">Are you sure?</p>
                            }
                        </>
                }
            </form>

        </>
    )
}