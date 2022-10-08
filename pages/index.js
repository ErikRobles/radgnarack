import Head from "next/head";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Radgnarack Electric Bike Racks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading=""
        message="Experience the convenience and simplicity of the Radgnarack Electric Bike Rack"
      />
      <Slider slides={SliderData} />
    </div>
  );
}
