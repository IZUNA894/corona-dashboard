import { ResponsiveChoropleth } from "./nivo-geo-custom";
import React, { Component } from "react";
import worldMapData from "../../components/assets/worldMap.json";
import geo from "../../components/assets/india.topo.json";
import datrum from "../../components/assets/datrum";

import { feature } from "topojson-client";

var myData = feature(geo, geo.objects.states).features;
export default class indiaMap extends Component {
  render() {
    return (
      <ResponsiveChoropleth
        data={datrum}
        features={myData}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    );
  }
}
