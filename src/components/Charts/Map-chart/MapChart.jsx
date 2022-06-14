import React  from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import './map-chart.css'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};
const MapChart = ({setTooltipContent}) => {
		return (
			<div className="map">
			  <ComposableMap data-tip="" width={300} height={150} projectionConfig={{scale: 100}}>
				 <ZoomableGroup>
					<Geographies geography={geoUrl}>
					  {({ geographies }) =>
						 geographies.map(geo => (
							<Geography
							  key={geo.rsmKey}
							  geography={geo}
							  onMouseEnter={() => {
								 const { NAME, POP_EST } = geo.properties;
								 setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
							  }}
							  onMouseLeave={() => {
								 setTooltipContent("");
							  }}
							  style={{
								 default: {
									fill: "#272727e1",
									outline: "none"
								 },
								 hover: {
									fill: "#fb7938c8",
									outline: "none"
								 },
								 pressed: {
									fill: "#fb7938c8",
									outline: "none"
								 }
							  }}
							/>
						 ))
					  }
					</Geographies>
				 </ZoomableGroup>
			  </ComposableMap>
			</div>
	);
}

export default MapChart;
