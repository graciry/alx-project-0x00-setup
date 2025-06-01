// components/Card.tsx
import Image from "next/image";
import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-full">
      <div className="relative w-full h-48 mb-4">
        <Image
          src="/assets/house.png"
          alt="House"
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <div className="mb-2">
        <Pill title="New Listing" />
        <Pill title="Luxury" />
        <Pill title="Family Home" />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-1">Beautiful House</h2>
        <p className="text-gray-600">Lagos, Nigeria</p>
        <div className="flex items-center mt-2">
          <Image
            src="/assets/star.png"
            alt="Rating"
            width={16}
            height={16}
          />
          <span className="ml-1 text-sm">4.5</span>
        </div>
        <p className="mt-2 font-bold text-lg">$250,000</p>
      </div>
    </div>
  );
};

export default Card;
