import React from "react";
import { RouteObject } from "react-router-dom";
import Frame from "./frame";
import Home from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { LogIn } from "./pages/LogIn/LogIn";
import Products from "./pages/Products/Products";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blogs from "./pages/Blogs/Blogs";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import Confirmation from "./pages/Confirmation/Confirmation";
export const Routes: RouteObject[] = [
    {
        path: "",
        element: <Frame />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/aboutUs",
                element: <AboutUs />,
            },
            {
                path: "/confirmation",
                element: <Confirmation />,
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "/contactUs",
                element: <ContactUs />,
            }
        ]
    },
    {
        path: "/logIn",
        element: <LogIn></LogIn>,

    },
    {
        path: "/signIn",
        element: <SignIn />,
    }
]