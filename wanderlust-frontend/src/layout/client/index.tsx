import React from "react";
import { Outlet } from "react-router";
import TopBar from "./topBar";
import Header from "./header";
import Footer from "./footer";

const ClientLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientLayout;
