import {createHashRouter} from "react-router-dom";
import App from "app/App";
import {Beer} from "features/components/Beer/Beer";
import {Souvenirs} from "features/components/Souvenir/Souvenirs";
import {Snacks} from "features/components/Snacks/Snacks";
import {Shops} from "features/components/Shops/Shops";
import {Fish} from "features/components/Fish/Fish";
import {Drinks} from "features/components/Drinks/Drinks";
import {Cart} from "features/Cart/Cart";
import {Homepage} from "features/components/Homepage/Homepage";
import {ErrorPage} from "common/components/ErrorPage/ErrorPage";

export const PATH = {
    home: '/',
    beer: '/beer',
    shops: '/shops',
    shacks: '/snacks',
    cart: '/cart',
    souvenirs: '/souvenirs',
    fish: '/fish',
    drinks: '/drinks',
}

const router = createHashRouter([
    {
        path: PATH.home,
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                errorElement: <ErrorPage/>,
                children: [
                    {path: PATH.beer, element: <Beer/>,},
                    {path: '//', element: <Homepage/>},
                    {path: PATH.souvenirs, element: <Souvenirs/>},
                    {path: PATH.shacks, element: <Snacks/>},
                    {path: PATH.fish, element: <Fish/>},
                    {path: PATH.drinks, element: <Drinks/>},
                    {path: PATH.shops, element: <Shops/>},
                    {path: PATH.cart, element: <Cart/>}
                ]
            }
        ]
    },
]);
export default router