import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCityThunk, fetchCountryThunk } from "../../store/slices/geoSlice";
import { fetchWeatherThunk } from "../../store/slices/weatherSlice";
import styles from "./WeatherWidget.module.scss";

export default function WeatherWidget() {
  const dispatch = useDispatch();

  const {
    lat,
    lon,
    city,
    country,
    cityStatus,
    countryStatus,
    status: geoStatus,
  } = useSelector((state) => state.geo);

  const {
    temperature,
    condition,
    status: weatherStatus,
  } = useSelector((state) => state.weather);

  useEffect(() => {
    if (lat && lon) {
      // if (cityStatus === "idle") dispatch(fetchCityThunk());
      // if (countryStatus === "idle") dispatch(fetchCountryThunk());

      if (weatherStatus === "idle") {
        dispatch(fetchWeatherThunk());
      }
    }
  }, [lat, lon]);

  if (geoStatus === "failed" || weatherStatus === "failed") {
    return null;
  }

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.countryText}>
        {countryStatus === "succeeded" ? country : "Поиск страны..."}
      </div>

      <div className={styles.cityText}>
        {cityStatus === "succeeded" ? city : "Поиск локации..."}
      </div>

      <div className={styles.detailsText}>
        {weatherStatus === "succeeded"
          ? `${temperature} • ${condition}`
          : "Загрузка погоды..."}
      </div>
    </div>
  );
}
