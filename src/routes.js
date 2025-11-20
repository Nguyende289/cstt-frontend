import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import TrafficAccidents from "./pages/TrafficAccidents";
import VehicleRegistration from "./pages/VehicleRegistration";
import EventsPage from "./pages/EventsPage";
import OCRPage from "./pages/OCRPage";
import VerificationPage from "./pages/VerificationPage";
import ReportsPage from "./pages/ReportsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tngt" element={<TrafficAccidents />} />
        <Route path="/dangky" element={<VehicleRegistration />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/ocr" element={<OCRPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
