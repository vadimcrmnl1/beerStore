import {createHashRouter} from "react-router-dom";
import App from "app/App";

export const PATH = {
    beer: '/beer',
    shops: '/shops',
    shacks: '/snacks',
    cart: '/cart',
}

const router = createHashRouter([
    {
        path: '/',
        element: <App/>
    },
]);
export default router