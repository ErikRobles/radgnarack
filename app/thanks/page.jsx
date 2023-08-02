"use client";
import HeroTwo from "../components/HeroTwo";
import { useRouter } from "next/navigation";

const Thanks = () => {
  const router = useRouter();
  return (
    <div>
      <HeroTwo heading="Thank You" />
      <div className="min-h-[50vh] p-6 custom-container">
        <div className="flex flex-col justify-center gap-y-7">
          <h1 className="text-2xl mb-3 uppercase">Thank You</h1>
          <p className="text-lg">
            Thank you for purchasing a Radgnarack Electric Bike Rack. 
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Thanks;