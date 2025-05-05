// components/LocationMap.js
import React from "react";

export default function LocationMap() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-semibold mb-6">Location</h2>
      <div className="w-full h-72">
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_URL"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
