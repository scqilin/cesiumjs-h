class Line {
    constructor() {
        this.init()
    }
    init() {
        const viewer = new Cesium.Viewer('cesiumContainer', {
            terrain: Cesium.Terrain.fromWorldTerrain(),
        });
        
        // 沿着赤道方向 绘制一圈的线 红色
        viewer.entities.add({
            polyline: {
                positions: Cesium.Cartesian3.fromDegreesArray([
                    0, 0,
                    90, 0,
                    180, 0,
                    270, 0,
                    0, 0
                ]),
                width: 2,
                material: Cesium.Color.RED
            }
        });
    }
}

export default Line;