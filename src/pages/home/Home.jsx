import React from "react";
import Hero from "../../components/hero/Hero";
import Service from "../../components/services/Service";
import FeauredProducts from "../../components/featuredProducts/FeatureProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <FeauredProducts />
    </div>
  );
}
