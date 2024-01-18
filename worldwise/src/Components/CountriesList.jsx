import React from "react";
import styles from "./CountriesList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
export default function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on a city" />;
  // console.log(cities);
  return (
    <ul className={styles.CountriesList}>
      {cities.map((city) => (
        <CityItem
          city={city}
          key={city.id}
        />
      ))}
    </ul>
  );
}
