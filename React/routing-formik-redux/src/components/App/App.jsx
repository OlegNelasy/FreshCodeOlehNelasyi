import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCoordinatesThunk,
  fetchCityThunk,
  fetchCountryThunk,
} from "../../store/slices/geoSlice";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./../Layout";
import Home from "./../../page/Home";
import About from "./../../page/About";
import Login from "./../../page/Login";
import NotFound from "./../../page/NotFound";
import Components from "./../../page/Components";
import Component1 from "./../Component1";
import Component2 from "./../Component2";
import TaskManager from "./../../page/TaskManager";

export default function App() {
  const { lat, lon, cityStatus, countryStatus } = useSelector(
    (state) => state.geo,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoordinatesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (lat && lon) {
      if (cityStatus === "idle") dispatch(fetchCityThunk());
      if (countryStatus === "idle") dispatch(fetchCountryThunk());
    }
  }, [lat, lon]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="components" element={<Components />}>
          <Route index element={<Navigate to="component_1" replace />} />

          <Route path="component_1" element={<Component1 />} />
          <Route path="component_2" element={<Component2 />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="task-manager" element={<TaskManager />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
