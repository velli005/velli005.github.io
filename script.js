require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "00f73cf8f8f44dd9a835859ae2e9cd58"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
