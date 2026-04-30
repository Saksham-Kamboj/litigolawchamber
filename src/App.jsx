import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { DisclaimerProvider } from "./context/DisclaimerContext";
import { WelcomeModalProvider } from "./context/WelcomeModalContext";
import AppRoutes from "./routes/Routes";

export default function App() {
  return (
    <ThemeProvider>
      <DisclaimerProvider>
        <WelcomeModalProvider>
          <Router>
            <AppRoutes />
          </Router>
        </WelcomeModalProvider>
      </DisclaimerProvider>
    </ThemeProvider>
  );
}
