import { Navigate } from "react-router-dom";
import { useDisclaimer } from "../context/DisclaimerContext";

export default function ProtectedRoute({ children }) {
  const { disclaimerAccepted } = useDisclaimer();

  if (!disclaimerAccepted) {
    return <Navigate to="/litigolawchamber/disclaimer" replace />;
  }

  return children;
}
