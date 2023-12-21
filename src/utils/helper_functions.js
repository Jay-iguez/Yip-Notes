import { Route } from "react-router-dom"

export const kennel_routes_creator = (state, setState, Component) => {
    
    let result = []

    state.forEach(kennel => {

        const splitKennelName = format_to_url(kennel.kennel)

        kennel.yips.forEach(yip => {
            result.push(<Route path={`/${splitKennelName}/${yip.id}`} element={<Component yip={yip} />} />) 
        })
    })

    setState(result)

}

export const format_to_url = (value) => {
    return value.split(" ").join("-")
}

export const dummy_function_to_test = (...args) => {
    return args.reduce((acc, e) => {
        return acc + e
    })
}