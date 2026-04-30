import { createContext, useContext, useState, useEffect } from "react";

const WelcomeModalContext = createContext();

export function WelcomeModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const showWelcomeModal = () => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (hasSeenWelcome !== "true") {
      // Add 2.5 second delay before showing modal
      setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("hasSeenWelcome", "true");
      }, 2500);
    }
  };

  useEffect(() => {
    // Check if this is the first visit after accepting disclaimer
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    const disclaimerAccepted = localStorage.getItem("disclaimerAccepted");

    // Only show modal if disclaimer is accepted AND user hasn't seen welcome modal
    if (disclaimerAccepted === "true" && hasSeenWelcome !== "true") {
      setIsOpen(true);
      localStorage.setItem("hasSeenWelcome", "true");
    }
  }, []);

  const closeWelcomeModal = () => {
    setIsOpen(false);
  };

  const value = {
    isOpen,
    closeWelcomeModal,
    showWelcomeModal,
  };

  return (
    <WelcomeModalContext.Provider value={value}>
      {children}
    </WelcomeModalContext.Provider>
  );
}

export function useWelcomeModal() {
  const context = useContext(WelcomeModalContext);
  if (!context) {
    throw new Error(
      "useWelcomeModal must be used within a WelcomeModalProvider",
    );
  }
  return context;
}

export { WelcomeModalContext };
