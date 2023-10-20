import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-55, -10, -10],
        center: [10, 30],
        scale: 500,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#b08fe4"
        stroke="indigo"
        strokeWidth={0.9}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[76.6191, 28.192]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          style={{
            fontFamily: "McLaren",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          alignmentBaseline="middle"
          fill="white"
        >
          {"Rewari"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
