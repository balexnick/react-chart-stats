const options = {
  chart: {
    type: "area",
    spacing: [0, 0, 0, 0],
    margin: [60, 0, 0, 0],
    height: 309
  },  
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  trackByArea: true,
  visible: true,
  plotOptions: {
    series: {
      fillOpacity: 0.25
    },
    area: {
      pointStart: 0,
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
}
export default options
