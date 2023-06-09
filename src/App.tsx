import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Study from "./pages/Study";
import Test from "./pages/Test";
import Account from "./pages/Account";
import Login from "./pages/Login";

const MyTheme = React.createContext(null);

export default function App():JSX.Element
{
    
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="study" element={<Study />} />
            <Route path="test" element={<Test />} />
            <Route path="account" element={<Account />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

