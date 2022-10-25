import React, {FC} from 'react';
import CountriesList from "../pages/CountriesList";
import Country from "../pages/Country";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import {Route, Routes} from "react-router-dom";

interface pageI {
    key: number;
    element: React.ReactNode;
    path: string;
}

const pages: pageI[] = [
    {
        key: 1,
        element: <CountriesList />,
        path: "/",
    },
    {
        key: 2,
        element: <Country />,
        path: "/country/:name",
    },
    {
        key: 3,
        element: <SignIn />,
        path: "/login",
    },
    {
        key: 4,
        element: <SignUp />,
        path: "/register",
    },
];

const RoutesApp:FC = () => {
    return (
      <Routes>
        {pages.map((page: pageI) => (
          <Route {...page} />
        ))}
      </Routes>
    );
};

export default RoutesApp;