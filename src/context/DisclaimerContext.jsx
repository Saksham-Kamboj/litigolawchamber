import { createContext, useContext, useState, useEffect } from "react";

const DisclaimerContext = createContext();

export { DisclaimerContext };

export function DisclaimerProvider({ children }) {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(() => {
    // Check local storage on initial load
    const stored = localStorage.getItem("disclaimerAccepted");
    return stored === "true";
  });

  const acceptDisclaimer = () => {
    setDisclaimerAccepted(true);
    localStorage.setItem("disclaimerAccepted", "true");
  };

  useEffect(() => {
    // Save to local storage whenever state changes
    localStorage.setItem("disclaimerAccepted", disclaimerAccepted.toString());
  }, [disclaimerAccepted]);

  const value = {
    disclaimerAccepted,
    acceptDisclaimer,
  };

  return (
    <DisclaimerContext.Provider value={value}>
      {children}
    </DisclaimerContext.Provider>
  );
}

export function useDisclaimer() {
  const context = useContext(DisclaimerContext);
  if (!context) {
    throw new Error("useDisclaimer must be used within a DisclaimerProvider");
  }
  return context;
}
