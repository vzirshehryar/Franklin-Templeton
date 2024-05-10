"use client";

import { CLAIMS, Dashboard, OnBoarding, XAuthProvider } from "0xuath-sdk-react";
import React from "react";

const OxAuth = () => {
  return (
    <XAuthProvider
      primaryBgColor="#EAEDED"
      primaryColor="#121713"
      companyName="Franklin Templeton"
      logoUrl="https://www.franklintempleton.com/assets/images/logos/FT_logo_pos_RGB@2x.png"
      clientId="663a12cfc3725258e208c9fb"
      // clientId="662a2971af44e01757d26a70"
      claimsRequired={[CLAIMS.Identity, CLAIMS.AccreditedInvestor]}
      onLogin={(user: any) => {
        // console.log("helo ducky", user);
      }}
      onLogout={(user: any) => {
        // console.log("helo ducky logout", user);
      }}
    >
      <OnBoarding buttonLabel="Continue with 0xAuth" />

      <Dashboard />
    </XAuthProvider>
  );
};

export default OxAuth;
