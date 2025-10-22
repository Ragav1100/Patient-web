"use client";

import { useEffect, useRef } from "react";

import "leaflet/dist/leaflet.css";

export default function SmallMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current, {
      center: [13.0827, 80.2707], // Chennai coordinates
      zoom: 13,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.marker([13.0827, 80.2707]).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shadow-md border border-gray-200">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
