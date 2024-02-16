import React, { useState, useContext, useEffect } from "react"
import { StyledConditionWrapper, StyledConditionMessage } from "../../styled-components/Styled"
import { kennel_name_schema, kennel_category_schema, yip_name_schema } from "../../utils/form_schema"
import menu_screen_context from "../../context/menu_screen_context"

export default function Edit(props) {
    const { dexie } = props

    const menu_screen_state = useContext(menu_screen_context)
    const [menu_screen, set_menu_screen] = menu_screen_state


    const single = (acc, current) => {
        let array = typeof acc !== 'object' ? [acc] : acc

        if (!(array.includes(current))) {
            array.push(current)
            return array
        } else {
            return acc
        }
    }

    const kennel_categories = dexie.dexie.map(value => {
        return value.kennel_category
    }).reduce(single)

    const kennel_names = dexie.dexie.map(value => {
        return { name: value.kennel_name, id: value.kennel_id }
    })

    const kennel_yips = dexie.dexie.map(value => {
        return { kennel_id: value.kennel_id, yips: value.yips }
    })

    const marry_kennels = dexie.marry.map(value => {
        return value
    })



    const [screen, set_screen] = useState(menu_screen.edit)
    const [kennel_to_update, set_kennel_to_update] = useState('')
    const [kennel_update, set_kennel_update] = useState({ kennel_name: '', kennel_category: '' })
    const [yip_to_update, set_yip_to_update] = useState('')
    const [yip_update, set_yip_update] = useState({ yip_name: '', yips_id: '', yip_id: '' })
    const [parent_kennel_selected, set_parent_kennel_selected] = useState(false)
    const [valid_kennel, set_valid_kennel] = useState({
        kennel_name: false,
        kennel_category: false
    })
    const [valid_yip, set_valid_yip] = useState({
        yip_name: false
    })


    const get_proper_kennel = (id) => {
        const kennel = dexie.dexie.filter(el => el.kennel_id === id)
        return kennel
    }

    const get_proper_yip = (id) => {
        const [kennel] = get_proper_kennel(yip_to_update)

        const [yip] = kennel.yips.filter(el => el.yip_id === id)

        return yip
    }

    const get_yips_id = (id) => {
        return [marry_kennels.filter(marry => marry.kennel_id === id)][0][0].yips_id
    }

    const updater = () => {
        if (screen === 'Kennels') {
            const [kennel] = get_proper_kennel(kennel_to_update)

            const modified_kennel = { 
                kennel_name: kennel.kennel_name, 
                kennel_category: kennel.kennel_category, 
                kennel_date: kennel.kennel_date, 
                kennel_id: kennel.kennel_id 
            }

            const payload = { ...modified_kennel, 
                kennel_name: kennel_update.kennel_name, 
                kennel_category: kennel_update.kennel_category === '' ? kennel.kennel_category : kennel_update.kennel_category 
            }

            dexie.updater({ action: 'update_kennel', payload: payload })

        } else if (screen === 'Yips') {
            const yip = get_proper_yip(yip_update.yip_id)

            const payload = { ...yip, 
                yip_name: yip_update.yip_name === '' ? yip.yip_name : yip_update.yip_name, 
                yips_id: !yip_update.yips_id ? yip.yips_id : yip_update.yips_id 
            }

            dexie.updater({ action: 'update_yip', payload: payload })
        }
    }

    useEffect(() => {
        Promise.all([
            kennel_name_schema.isValid(kennel_update.kennel_name),
            kennel_category_schema.isValid(kennel_update.kennel_category),
            yip_name_schema.isValid(yip_update.yip_name)
        ]).then(([name_valid, category_valid, yip_name_valid]) => {
            set_valid_kennel({
                kennel_name: name_valid,
                kennel_category: category_valid
            })
            set_valid_yip({
                yip_name: yip_name_valid
            })
        })
    }, [kennel_update, yip_update])

    const is_form_valid_kennel = Object.values(valid_kennel).every((valid) => valid)
    const is_form_valid_yip = Object.values(valid_yip).every((valid) => valid)

    return (
        <>
            <StyledConditionWrapper>
                <StyledConditionMessage>
                    Edit -
                </StyledConditionMessage>
                <select
                    defaultValue={screen}
                    className='option condition'
                    onChange={(e) => {
                        set_menu_screen({ ...menu_screen, edit: e.target.value })
                        set_screen(e.target.value)
                    }}
                >
                    <option value=''>-- select --</option>
                    <option value='Kennels'>Kennels</option>
                    <option value='Yips'>Yips</option>
                </select>
            </StyledConditionWrapper>

            <form onSubmit={(e) => {
                e.preventDefault()
                updater()
            }}>
                {

                    screen === '' ?

                        <p className="option message">Select an Edit option to continue</p>

                        :

                        screen === 'Kennels' ?

                            <>
                                <StyledConditionWrapper>
                                    <StyledConditionMessage>
                                        Select Parent Kennel -
                                    </StyledConditionMessage>
                                    <select
                                        className="option condition"
                                        value={kennel_to_update}
                                        onChange={(e) => {
                                            if (e.target.value === '') {
                                                set_kennel_to_update('')
                                                set_kennel_update({ ...kennel_update, kennel_name: '', kennel_category: '' })
                                            } else {
                                                const selected_option_content = e.target.options[e.target.selectedIndex].textContent
                                                set_kennel_to_update(parseInt(e.target.value))
                                                set_kennel_update({ ...kennel_update, kennel_name: selected_option_content })
                                            }
                                        }}>
                                        <option value=''>-- select --</option>
                                        {
                                            kennel_names.map(value => {
                                                return <option value={value.id}>{value.name}</option>
                                            })
                                        }
                                    </select>
                                </StyledConditionWrapper>
                                {
                                    kennel_to_update === '' ?

                                        null

                                        :

                                        <>
                                            <StyledConditionWrapper>
                                                <StyledConditionMessage>
                                                    Edit Kennel Name -
                                                </StyledConditionMessage>
                                                <input
                                                    onChange={(e) => {
                                                        set_kennel_update({ ...kennel_update, kennel_name: e.target.value })
                                                    }}
                                                    value={kennel_update.kennel_name}
                                                    className="option condition"
                                                />
                                            </StyledConditionWrapper>
                                            <StyledConditionWrapper>
                                                <StyledConditionMessage>
                                                    Edit Kennel Category -
                                                </StyledConditionMessage>
                                                <select
                                                    className="option condition"
                                                    value={kennel_update.kennel_category}
                                                    onChange={(e) => {
                                                        set_kennel_update({ ...kennel_update, kennel_category: e.target.value })
                                                    }}>
                                                    <option value=''>-- select --</option>
                                                    {
                                                        typeof kennel_categories === 'object' ?

                                                            kennel_categories.map(value => {
                                                                return <option value={value}>{value}</option>
                                                            })

                                                            :

                                                            <option value={kennel_categories}>{kennel_categories}</option>
                                                    }
                                                </select>
                                            </StyledConditionWrapper>
                                        </>
                                }

                            </>

                            :

                            <>
                                <StyledConditionWrapper>
                                    <StyledConditionMessage>
                                        Select Parent Kennel -
                                    </StyledConditionMessage>
                                    <select
                                        className="option condition"
                                        value={yip_to_update}
                                        onChange={(e) => {
                                            if (e.target.value === '') {
                                                set_yip_to_update('')
                                                set_yip_update({ ...yip_update, yip_id: '', yip_name: '' })
                                            } else {
                                                set_yip_to_update(parseInt(e.target.value))
                                            }
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
                                </StyledConditionWrapper>
                                {
                                    yip_to_update === '' ?

                                        null

                                        :

                                        <>
                                            <StyledConditionWrapper>
                                                <StyledConditionMessage>
                                                    Select Yip -
                                                </StyledConditionMessage>
                                                <select
                                                    className="option condition"
                                                    value={yip_update.yip_id}
                                                    onChange={(e) => {
                                                        if (e.target.value === '') {
                                                            set_yip_update({ ...yip_update, yip_id: '', yip_name: '' })
                                                        } else {
                                                            const selected_option_content = e.target.options[e.target.selectedIndex].textContent
                                                            set_yip_update({ ...yip_update, yip_id: parseInt(e.target.value), yip_name: selected_option_content })
                                                        }
                                                    }}>
                                                    <option value=''>-- select --</option>
                                                    {
                                                        [kennel_yips.filter(value => value.kennel_id === yip_to_update)][0][0] !== undefined ?

                                                            [kennel_yips.filter(value => value.kennel_id === yip_to_update)][0][0].yips.map(yip => <option value={yip.yip_id}>{yip.yip_name}</option>)

                                                            :

                                                            null
                                                    }
                                                </select>
                                            </StyledConditionWrapper>
                                            {
                                                yip_update.yip_id === '' ? null :
                                                    <>
                                                        <StyledConditionWrapper>
                                                            <StyledConditionMessage>
                                                                Edit Yip Name -
                                                            </StyledConditionMessage>
                                                            <input
                                                                onChange={(e) => {
                                                                    set_yip_update({ ...yip_update, yip_name: e.target.value })
                                                                }}
                                                                className="option condition"
                                                                value={yip_update.yip_name}
                                                            />
                                                        </StyledConditionWrapper>
                                                        <StyledConditionWrapper>
                                                            <StyledConditionMessage>
                                                                Edit Kennel Parent -
                                                            </StyledConditionMessage>
                                                            <select
                                                                className="option condition"
                                                                value={yip_update.yips_id}
                                                                onChange={(e) => {
                                                                    if (e.target.value === '') {
                                                                        set_parent_kennel_selected(false)
                                                                        set_yip_update({ ...yip_update, yips_id: '' })
                                                                    } else {
                                                                        set_parent_kennel_selected(true)
                                                                        set_yip_update({ ...yip_update, yips_id: parseInt(e.target.value) })
                                                                    }
                                                                }}>
                                                                <option value=''>-- select --</option>
                                                                {
                                                                    kennel_names.length !== 0 ?

                                                                        kennel_names.map(value => {
                                                                            return <option value={get_yips_id(value.id)}>{value.name}</option>
                                                                        })

                                                                        :

                                                                        null
                                                                }
                                                            </select>
                                                        </StyledConditionWrapper>
                                                    </>
                                            }

                                        </>
                                }
                            </>

                }
                {
                    screen === '' ?

                        null

                        :

                        <button
                            className={`button ${screen === 'Kennels' ? !is_form_valid_kennel ? 'disabled' : '' : (!is_form_valid_yip || !parent_kennel_selected) ? 'disabled' : ''}`}

                            
                            disabled={screen === 'Kennels' ? !is_form_valid_kennel : (!is_form_valid_yip || !parent_kennel_selected)}>Submit</button>
                }
            </form >

        </>
    )
}