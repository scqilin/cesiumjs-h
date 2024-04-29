class HelloWorld {
    constructor() {
        this.init()
    }
    async init() {
        const viewer = new Cesium.Viewer('cesiumContainer', {
            terrain: Cesium.Terrain.fromWorldTerrain(),
        });

        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-15.0),
            }
        });

        const buildingTileset = await Cesium.createOsmBuildingsAsync();
        viewer.scene.primitives.add(buildingTileset);

    }
}

export default HelloWorld;