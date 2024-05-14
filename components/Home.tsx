"use client";
// export const dynamic = "force-dynamic";

import { CLAIMS, Dashboard, XAuthProvider } from "@0xauth/sdk-react";
import { useState } from "react";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  const [isLoggedin, setLoggedin] = useState(false);

  return (
    <XAuthProvider
      primaryBgColor="#EAEDED"
      primaryColor="#121713"
      companyName="Franklin Templeton"
      logoUrl="https://www.franklintempleton.com/assets/images/logos/FT_logo_pos_RGB@2x.png"
      clientId="663e4488760f350c8d4bfe7b"
      // clientId="662a2971af44e01757d26a70"
      claimsRequired={[CLAIMS.Identity, CLAIMS.AccreditedInvestor]}
      onLogin={(user: any) => {
        console.log("helo", user);
        setLoggedin(true);
      }}
      onLogout={(user: any) => {
        setLoggedin(false);
      }}
    >
      {!isLoggedin ? (
        <>
          <Navbar />
          <Hero />
          <Explore />
          <Footer />
        </>
      ) : (
        <>
          <h1>{`You're Logged in`}</h1>
          <Dashboard />
        </>
      )}
    </XAuthProvider>
  );
}
