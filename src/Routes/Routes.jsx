import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import Director from "../pages/Director/Director";
import Certification from "../pages/Certification/Certification";
import AllProduct from "../pages/AllProduct/AllProduct";
import LatestNewsDetails from "../pages/LatestNewsDetails/LatestNewsDetails";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/director",
                element: <Director />
            },
            {
                path: "/certification",
                element: <Certification />

            },
            {
                path: "/products-catalogues",
                element: <AllProduct />

            },
            {
                path: "/latest-news-details",
                element: <LatestNewsDetails />

            },
            {
                path: "/contact",
                element: <Contact />

            }
        ]
    },
]);