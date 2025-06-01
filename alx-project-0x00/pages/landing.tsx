// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";

const LandingPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Landing Page</h1>

      {/* Render multiple Card components */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default LandingPage;
