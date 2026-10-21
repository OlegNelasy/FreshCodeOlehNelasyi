import { useEffect } from "react";
import {
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";

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

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Components() {
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <div>
      <ol>
        <li>
          <Link to="component_1">Component 1</Link>
        </li>
        <li>
          <Link to="component_2">Component 2</Link>
        </li>
      </ol>
      <Outlet />
    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return <div>Not Found 404</div>;
}

function Component1() {
  return <div>Component 1</div>;
}

function Component2() {
  return <div>Component 2</div>;
}
