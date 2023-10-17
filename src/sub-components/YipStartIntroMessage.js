import { Link } from "react-router-dom"

export default function YipIntroInfo() {

    return (
        <>
            <h1>Hello there welcome to my app!</h1>
            <Link to={`home/info`}>Go to the app!</Link>
        </>
    )
}