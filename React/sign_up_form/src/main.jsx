import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import SignUp from "./components/SignUp";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SignUp />
  </StrictMode>,
);
