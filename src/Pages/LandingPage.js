import React from "react";
import Header from "../components/Header";
import LandingPageBody from "../components/LandingPageBody";
import "../Styles/Landingstyles.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../components/ParticleConfig";

export default function LandingPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(" ");
  }, []);
  return (
    <div className="Landingpage__container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticleConfig}
      />
      <Header />
      <LandingPageBody />
    </div>
  );
}
