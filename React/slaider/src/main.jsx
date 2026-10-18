import { createRoot } from "react-dom/client";
import planets from "./data/planetsData.json";
import Slaider from "./components/Slaider";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <Slaider data={planets} delay={3000} />,
);
