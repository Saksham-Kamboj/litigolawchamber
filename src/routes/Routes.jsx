import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import DisclaimerRoute from "./DisclaimerRoute";
import Disclaimer from "../components/Disclaimer";
import AppContent from "../components/Layout/AppContent";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import PracticeArea from "../pages/PracticeArea";
import KnowledgeGateway from "../pages/KnowledgeGateway";
import OurTeam from "../pages/OurTeam";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/litigolawchamber/home"
        element={
          <ProtectedRoute>
            <AppContent>
              <Home />
            </AppContent>
          </ProtectedRoute>
        }
      />
      <Route
        path="/litigolawchamber/about-us"
        element={
          <ProtectedRoute>
            <AppContent>
              <AboutUs />
            </AppContent>
          </ProtectedRoute>
        }
      />
      <Route
        path="/litigolawchamber/practice-area"
        element={
          <ProtectedRoute>
            <AppContent>
              <PracticeArea />
            </AppContent>
          </ProtectedRoute>
        }
      />
      <Route
        path="/litigolawchamber/knowledge-gateway"
        element={
          <ProtectedRoute>
            <AppContent>
              <KnowledgeGateway />
            </AppContent>
          </ProtectedRoute>
        }
      />
      <Route
        path="/litigolawchamber/our-team"
        element={
          <ProtectedRoute>
            <AppContent>
              <OurTeam />
            </AppContent>
          </ProtectedRoute>
        }
      />
      <Route
        path="/litigolawchamber/contact"
        element={
          <ProtectedRoute>
            <AppContent>
              <Contact />
            </AppContent>
          </ProtectedRoute>
        }
      />
      <Route
        path="/litigolawchamber/disclaimer"
        element={
          <DisclaimerRoute>
            <Disclaimer />
          </DisclaimerRoute>
        }
      />
      <Route
        path="*"
        element={<Navigate to="/litigolawchamber/home" replace />}
      />
    </Routes>
  );
}
