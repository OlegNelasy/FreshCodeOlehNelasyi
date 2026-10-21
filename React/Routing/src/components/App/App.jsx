import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./../Layout";
import Home from "./../../page/Home";
import About from "./../../page/About";
import NotFound from "./../../page/NotFound";
import Components from "./../../page/Components";
import Component1 from "./../Component1";
import Component2 from "./../Component2";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="components" element={<Components />}>
            <Route index element={<Navigate to="component_1" replace />} />

            <Route path="component_1" element={<Component1 />} />
            <Route path="component_2" element={<Component2 />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
