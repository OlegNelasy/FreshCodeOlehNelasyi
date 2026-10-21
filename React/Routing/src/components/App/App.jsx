import { Link, Routes, Route } from "react-router-dom";
import Home from "../../page/Home";
import About from "../../page/About";
import NotFound from "../../page/NotFound";
import Components from "../../page/Components";
import Component1 from "../Component1";
import Component2 from "../Component2";

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/components" element={<Components />}>
          <Route path="component_1" element={<Component1 />} />
          <Route path="component_2" element={<Component2 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
