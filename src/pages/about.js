import Breadcrumb from "@/components/Breadcrumb";
import AboutUs from "@/parts/About/AboutUs";
import OurTeam from "@/parts/About/OurTeam";
import Footer from "@/parts/Footer";
import Header from "@/parts/Header";
import SiteMap from "@/parts/SiteMap";
import Head from "next/head";
import React from "react";

export default function about() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Breadcrumb title="About us" url={"/about"} />
        <AboutUs />
        <OurTeam />
        <Footer />
        <SiteMap />
      </main>
    </>
  );
}
