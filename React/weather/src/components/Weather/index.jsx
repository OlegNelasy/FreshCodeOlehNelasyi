import { Component } from "react";
import styles from "./Weather.module.scss";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatureUnit: "celsius",
      windSpeedUnit: "ms",
      weatherData: null,
      isLoading: null,
      error: null,
    };
  }

  fetchWeather = () => {
    this.setState({ isLoading: true, error: null });

    const { temperatureUnit, windSpeedUnit } = this.state;
    // Тернополь
    const lat = 49.55;
    const lon = 25.59;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&temperature_unit=${temperatureUnit}&wind_speed_unit=${windSpeedUnit}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          weatherData: {
            temperature: data.current.temperature_2m,
            windSpeed: data.current.wind_speed_10m,
            tempUnitSymbol: data.current_units.temperature_2m,
            windUnitSymbol: data.current_units.wind_speed_10m,
          },
        }),
      )
      .catch((error) => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.fetchWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.temperatureUnit !== this.state.temperatureUnit ||
      prevState.windSpeedUnit !== this.state.windSpeedUnit
    ) {
      this.fetchWeather();
    }
  }

  handleWindUnitChange = (e) => {
    this.setState({ windSpeedUnit: e.target.value });
  };

  handleTempUnitChange = (e) => {
    this.setState({ temperatureUnit: e.target.value });
  };

  render() {
    const { temperatureUnit, windSpeedUnit, weatherData, isLoading, error } =
      this.state;

    return (
      <div className={styles.weatherContainer}>
        <div className={styles.weatherCard}>
          <div className={styles.settingsSection}>
            <div className={styles.inputGroup}>
              <label>Wind speed unit:</label>
              <select
                value={windSpeedUnit}
                onChange={this.handleWindUnitChange}
              >
                <option value="ms">M/s</option>
                <option value="kmh">Km/h</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Temperature unit:</label>
              <select
                value={temperatureUnit}
                onChange={this.handleTempUnitChange}
              >
                <option value="celsius">°C</option>
                <option value="fahrenheit">°F</option>
              </select>
            </div>
          </div>

          <div className={styles.displaySection}>
            <h2>Current Weather</h2>
            {isLoading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error}</p>}
            {!isLoading && !error && weatherData && (
              <div className={styles.weatherInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.icon}>🌡️</span>
                  <span>
                    {weatherData.temperature} {weatherData.tempUnitSymbol}
                  </span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.icon}>🌬️</span>
                  <span>
                    {weatherData.windSpeed} {weatherData.windUnitSymbol}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
