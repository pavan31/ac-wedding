import BackgroundMusic from "@/components/BackgroundMusic";
import ContactInfo from "@/components/ContactInfo";
import CoupleDetails from "@/components/CoupleDetails";
import EventSchedule from "@/components/EventSchedule";
import Gallery from "@/components/Gallery";
import InvitationSection from "@/components/InvitationSection";
import LocationMap from "@/components/LocationMap";
import ThemeToggle from "@/components/ThemeToggle";
import WatchLiveButton from "@/components/WatchLiveButton";
import React from "react";

const page = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen box-border overflow-x-hidden"
      style={{ padding: "20px" }}
    >
      <BackgroundMusic />
      <InvitationSection />
      <CoupleDetails />
      <EventSchedule />
      <Gallery />
      <ContactInfo />
      <ThemeToggle />
      <WatchLiveButton />
    </div>
  );
};

export default page;
