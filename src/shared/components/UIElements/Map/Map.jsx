import React, { useRef, useEffect } from "react";

import "./Map.scss";

const Map = ({ className, styles, center, zoom }) => {
  const mapRef = useRef();
  //useRef survives rerender

  useEffect(() => {
    // const map = new window.google.maps.Map(mapRef.current, {
    //   center,
    //   zoom
    // });
    // new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div ref={mapRef} className={`map ${className}`} styles={styles}></div>
  );
};

export default Map;
