import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import Profile from "../pages/Profile";
import WishList from "../pages/WishList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Cart from "../pages/Cart";
import InputField from "../pages/InputField";
import { Contacts } from "../pages/Contacts";
import AccountMenu from "../pages/AccountMenu";
import { ProDetails } from "../pages/ProDetails";
import Shopping from "../pages/Shopping";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/Home" element={<Profile />} />
          <Route path="/Wishlist" element={<WishList />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Check" element={<InputField />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/My Account" element={<AccountMenu />} />
          <Route path="/Pro" element={<ProDetails />} />
          <Route path="/Shop" element={<Shopping />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
