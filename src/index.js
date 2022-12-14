import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SearchWeatherProvider } from "./Providers/SearchWeather";
import { ForecastProvider } from "./Providers/Forecast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchWeatherProvider>
      <ForecastProvider>
        <App />
      </ForecastProvider>
    </SearchWeatherProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
