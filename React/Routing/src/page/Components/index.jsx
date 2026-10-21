import { Link, useLocation, Outlet } from "react-router-dom";

export default function Components() {
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
