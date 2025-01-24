import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./ui-kit/tokens/primitives.css";
import "./ui-kit/tokens/company-brand.css";
import "./index.css";
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
