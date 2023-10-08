import {NavLink} from "react-router-dom";
import {PATH} from "common/routes/Routes";

export const ErrorPage = () => {
    return (
        <div >
            <h1>404</h1>
            <p>What is wrong</p>
            <div>
                <NavLink to={PATH.home}>Вернуться на начальную страницу</NavLink>
            </div>
        </div>
    )
}
