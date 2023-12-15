import { Route } from "react-router-dom"

export const kennel_routes_creator = (state, setState, Component) => {
    
    const routes = state.map(kennel => {

        const splitKennelName = kennel.kennel.split(" ").join("-")

        return kennel.yips.map(yip => {
            return <Route path={`/${splitKennelName}/${yip.id}`} element={<Component yip={yip} />} />
        })
    })

    const array_of_routes = routes.map(route_array => {
        let list_of_routes = []
        for (let i = 0; i < route_array.length; i++) {
            list_of_routes.push(route_array[0])
        }
        return list_of_routes

    })

    let result = []

    for (let i = 0; i < array_of_routes.length; i++) {
        array_of_routes[i].forEach(route => {
            result.push(route)
        })
    }

    setState(result)

}

export const format_to_url = (value) => {
    return value.split(" ").join("-")
}