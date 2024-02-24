import { Route } from "react-router-dom"

// Misc helper functions for many components to use

export const kennel_routes_creator = (state, setState, Component, func) => {
    
    let result = []

    state.forEach(kennel => {

        const split_kennel_name = format_to_url(kennel.kennel_name)

        kennel.yips.forEach(yip => {
            result.push(<Route key={yip.yip_id} path={`/${split_kennel_name}/${yip.yip_id}`} element={<Component yip={yip} kennel_name={kennel.kennel_name} updater={func}/>} />) 
        })
    })

    setState(result)

}

export const format_to_url = (value) => {
    return value.split(" ").join("-")
}

export const condense_values = (acc, current) => {
    let array = typeof acc !== 'object' ? [acc] : acc

    if (!(array.includes(current))) {
        array.push(current)
        return array
    } else {
        return acc
    }
}
