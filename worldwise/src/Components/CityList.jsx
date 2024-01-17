import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  console.log(cities);
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem
          city={city}
          key={city.id}
        />
      ))}
    </ul>
  );
}
