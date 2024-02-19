import React, { useState, useContext, useEffect } from "react";
import * as Yup from 'yup'
import { kennel_name_schema, kennel_category_schema, yip_name_schema } from "../../utils/form_schema";
import { StyledConditionMessage, StyledConditionWrapper } from "../../styled-components/Styled";
import menu_screen_context from "../../context/menu_screen_context";

export default function Create(props) {

    const { dexie } = props

    const menu_screen_state = useContext(menu_screen_context)
    const [menu_screen, set_menu_screen] = menu_screen_state

    const single = (acc, current) => {                      // condense_values
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


    const [screen, set_screen] = useState(menu_screen.create)
    const [new_kennel, set_new_kennel] = useState({ kennel_name: '', kennel_category: '' })
    const [new_yip, set_new_yip] = useState({ yip_name: '', yips_id: '' })
    const [parent_kennel_selected, set_parent_kennel_selected] = useState(false)
    const [create_new, set_create_new] = useState(false)
    const [valid_kennel, set_valid_kennel] = useState({
        kennel_name: false,
        kennel_category: false
    })
    const [valid_yip, set_valid_yip] = useState({
        yip_name: false
    })

    const updater = () => {
        if (screen === 'Kennels') {
            dexie.updater({ action: 'create_kennel', payload: new_kennel })
        } else if (screen === 'Yips') {
            dexie.updater({ action: 'create_yip', payload: new_yip })
        }
    }

    useEffect(() => {
        Promise.all([
            kennel_name_schema.isValid(new_kennel.kennel_name),
            kennel_category_schema.isValid(new_kennel.kennel_category),
            yip_name_schema.isValid(new_yip.yip_name)
        ]).then(([name_valid, category_valid, yip_name_valid]) => {
            set_valid_kennel({
                kennel_name: name_valid,
                kennel_category: category_valid
            })
            set_valid_yip({
                yip_name: yip_name_valid
            })
        })
    }, [new_kennel, new_yip])

    const is_form_valid_kennel = Object.values(valid_kennel).every((valid) => valid)
    const is_form_valid_yip = Object.values(valid_yip).every((valid) => valid)

    return (
        <>
            <StyledConditionWrapper>
                <StyledConditionMessage>
                    Create -
                </StyledConditionMessage>
                <div className="select_container">
                    <select
                        defaultValue={screen}
                        className='button select_option'
                        onChange={(e) => {
                            set_menu_screen({ ...menu_screen, create: e.target.value })
                            set_screen(e.target.value)
                        }}
                    >
                        <option value=''>-- select --</option>
                        <option value='Kennels'>Kennels</option>
                        {
                            dexie.no_kennels === true ? null :

                                <option value='Yips'>Yips</option>
                        }

                    </select>
                </div>
            </StyledConditionWrapper>

            <form onSubmit={(e) => {
                e.preventDefault()
                updater()
            }}>
                {

                    screen === '' ?

                        <p className="option message">Select a Create option to continue</p>

                        :

                        screen === 'Kennels' ?

                            <>
                                <StyledConditionWrapper>
                                    <StyledConditionMessage>
                                        Kennel Name -
                                    </StyledConditionMessage>
                                    <div className="select_container">
                                        <input
                                            onChange={(e) => {
                                                set_new_kennel({ ...new_kennel, kennel_name: e.target.value })
                                            }}
                                            value={new_kennel.kennel_name}
                                            className="button select_option input"
                                            placeholder="Type Here..."
                                        />
                                    </div>
                                </StyledConditionWrapper>

                                <StyledConditionWrapper>
                                    <StyledConditionMessage>
                                        Kennel Category -
                                    </StyledConditionMessage>
                                    <div className="select_container">
                                        <select
                                            className="button select_option"
                                            value={new_kennel.kennel_category}
                                            onChange={(e) => {
                                                if (e.target.value === 'new category name') {
                                                    set_create_new(true)
                                                    set_new_kennel({ ...new_kennel, kennel_category: '' })

                                                } else {
                                                    set_create_new(false)
                                                    set_new_kennel({ ...new_kennel, kennel_category: e.target.value })
                                                }
                                            }}>
                                            <option value=''>-- select --</option>
                                            <option value={'new category name'}>Create New Category</option>
                                            {
                                                dexie.no_kennels === true ? null

                                                    :

                                                    typeof kennel_categories === 'object' ?

                                                        kennel_categories.map(value => {
                                                            return <option value={value}>{value}</option>
                                                        })

                                                        :

                                                        <option value={kennel_categories}>{kennel_categories}</option>
                                            }
                                        </select>
                                        {
                                            create_new === false ?

                                                null

                                                :


                                                <input
                                                    onChange={(e) => {
                                                        set_new_kennel({ ...new_kennel, kennel_category: e.target.value })
                                                    }}
                                                    className="button select_option input"
                                                    placeholder="Type Here..."
                                                />



                                        }
                                    </div>
                                </StyledConditionWrapper>



                            </>

                            :

                            <>
                                <StyledConditionWrapper>
                                    <StyledConditionMessage>
                                        Yip Name -
                                    </StyledConditionMessage>
                                    <div className="select_container">
                                        <input
                                            onChange={(e) => {
                                                set_new_yip({ ...new_yip, yip_name: e.target.value })
                                            }}
                                            className="button select_option input"
                                            value={new_yip.yip_name}
                                            placeholder="Type Here..."
                                        />
                                    </div>
                                </StyledConditionWrapper>
                                <StyledConditionWrapper>
                                    <StyledConditionMessage>
                                        Select Parent Kennel -
                                    </StyledConditionMessage>
                                    <div className="select_container">
                                        <select
                                            className="button select_option"
                                            value={new_yip.yips_id}
                                            onChange={(e) => {
                                                if (e.target.value === '') {
                                                    set_parent_kennel_selected(false)
                                                    set_new_yip({ ...new_yip, yips_id: '' })
                                                } else {
                                                    set_parent_kennel_selected(true)
                                                    set_new_yip({ ...new_yip, yips_id: parseInt(e.target.value) })
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
                                    </div>
                                </StyledConditionWrapper>
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
            </form>

        </>
    )
}