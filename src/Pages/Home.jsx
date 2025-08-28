import React from "react";
import Highlights from "../Components/Highlights";
import Floorplan from "../Components/Floorplans";
import ScheduleVisit from "../Components/SechduleVisit";
import Video from "../Components/Video";
import DiscoverRoom from "../Components/Discover";
import Overview from "../Components/Overview";
import Gallery from "../Components/Gallery";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Overview Section */}
      <section id="overview">
        <Overview />
      </section>

      {/* Rooms Section */}
      <section id="rooms">
        <DiscoverRoom />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Floorplan Section */}
      <section id="floorplan">
        <Floorplan />
      </section>

      {/* Highlights Section */}
      <section id="highlights">
        <Highlights />
      </section>

      {/* Video Section */}
      <section id="video">
        <Video />
      </section>

      {/* Contact / Schedule Visit Section */}
      <section id="contact">
        <ScheduleVisit />
      </section>
    </div>
  );
};

export default Home;
