// pages/landing.tsx

import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Landing Page</h1>

      {/* Card usage wrapped in rounded-lg */}
      <div className="flex flex-wrap gap-6 justify-center bg-gray-100 p-4 rounded-lg">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Button variations - horizontal row */}
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        <Button title="Small Rounded" styles="text-sm rounded-sm bg-blue-500 text-white px-4 py-2" />
        <Button title="Medium Rounded" styles="text-base rounded-md bg-green-500 text-white px-5 py-2.5" />
        <Button title="Large Fully Rounded" styles="text-lg rounded-full bg-red-500 text-white px-6 py-3" />
      </div>
    </div>
  );
};

export default Landing;
