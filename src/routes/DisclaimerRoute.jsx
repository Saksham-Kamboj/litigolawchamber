import { Navigate } from "react-router-dom";
import { useDisclaimer } from "../context/DisclaimerContext";

export default function DisclaimerRoute({ children }) {
  const { disclaimerAccepted } = useDisclaimer();

  if (disclaimerAccepted) {
    return <Navigate to="/litigolawchamber/home" replace />;
  }

  return children;
}
