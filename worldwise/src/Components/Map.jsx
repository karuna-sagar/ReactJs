import React from "react";
import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

export default function Map() {
  const [searchParams, setSearchParam] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h1>
        Position : {lat} , {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParam({ lat: 28, lng: 50 });
        }}
      >
        Change Post
      </button>
    </div>
  );
}
