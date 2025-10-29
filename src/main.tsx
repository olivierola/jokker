import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { SessionProvider } from "./contexts/SessionProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <SessionProvider>
    <App />
  </SessionProvider>,
);