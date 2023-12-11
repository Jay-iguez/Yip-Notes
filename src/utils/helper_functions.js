import { Route } from "react-router-dom"

export const kennel_routes_creator = (state, setState, Component) => {
    
    const routes = state.map(kennel => {

        const splitKennelName = kennel.kennel.split(" ").join("-")

        return kennel.yips.map(yip => {
            return <Route path={`${splitKennelName}/${yip.id}`} element={<Component yip={yip} />} />
        })
    })

    const array_of_routes = routes.map(route => {

        for (let i = 0; i < route.length; i++) {
            return route[i]
        }

    })

    setState(array_of_routes)

}