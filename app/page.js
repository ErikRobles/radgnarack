"use client"
import Head from "next/head";
import Hero from "./components/Hero";
// import Slider from "../components/Slider";
// import { SliderData } from "../components/SliderData";
import Products from "./components/Products";


export default function Home() {
  return (
    <div>
    <Head>
      <title>Radgnarack Electric Bike Racks</title>
      <meta name="description" content="Radgnarack Electric Bike Racks" />
      <link rel=" shortcut icon" href="/favicon.ico" />
    </Head>
    <Hero
      heading=""
      message="Experience the convenience and simplicity of the Radgnarack Electric Bike Rack"
    />
    {/* <Slider slides={SliderData} /> */}
    <Products />
  </div>
  )
}
