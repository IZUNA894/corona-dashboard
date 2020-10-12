import React, { Component } from "react";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";

import { getHeatMapData } from "./k-file2";
import INDIA from "./assets/india.topo.json";
//import {onMouseEnter} from './mapUtility'

class RenderMap extends Component {
  PROJECTION_CONFIG = {
    scale: 450, // How big is map
    center: [83, 25], //[left-right, up-down]
  };

  geographyStyle = {
    default: {
      outline: "none",
    },
    hover: {
      fill: "#ccc",
      transition: "all 250ms",
      outline: "none",
    },
    pressed: {
      outline: "none",
    },
  };

  data = getHeatMapData();

  COLOR_RANGE = [
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618",
  ];
  colorScale = scaleQuantile()
    .domain(this.data.map((d) => d.value))
    .range(this.COLOR_RANGE);
  DEFAULT_COLOR = "#EEE";

  render() {
    console.log(this.data);
    return (
      <div>
        <div className="ratio-container">
          <div className="ratio-container-content">
            <ComposableMap
              projectionConfig={this.PROJECTION_CONFIG}
              projection="geoMercator"
              data-tip=""
              width={300}
              height={238}
            >
              <Geographies geography={INDIA}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    //console.log(this.data.value);
                    const current = this.data.find((ele) => ele.id === geo.id);
                    //console.log(current)
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={
                          current
                            ? this.colorScale(current.value)
                            : this.DEFAULT_COLOR
                        }
                        style={this.geographyStyle}
                        //onMouseEnter={onMouseEnter(geo, current)}
                        //onMouseLeave={onMouseLeave}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>
      </div>
    );
  }
}

export default RenderMap;
