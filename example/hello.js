
class HelloWorld {
    constructor() {
        this.init()
    }
    async init() {
        const viewer = new Cesium.Viewer('cesiumContainer', {
            terrain: Cesium.Terrain.fromWorldTerrain(),
        });

        // // 设置相机位置 flyTo 会有动画效果
        // viewer.camera.flyTo({
        //     destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        //     orientation: {
        //         heading: Cesium.Math.toRadians(0.0),
        //         pitch: Cesium.Math.toRadians(-15.0),
        //     }
        // });

        // // 创建一个OSM建筑物 
        // const buildingTileset = await Cesium.createOsmBuildingsAsync();
        // viewer.scene.primitives.add(buildingTileset);

    }
}

class HelloBlank {
    constructor() {
        this.init()
    }
    async init() {
        const viewer = new Cesium.Viewer('cesiumContainer', {
            terrain: Cesium.Terrain.fromWorldTerrain(),
            geocoder: false, // 是否显示地名查找控件
            homeButton: false, // 是否显示Home按钮
            sceneModePicker: false, // 是否显示3D/2D选择器
            baseLayerPicker: false, // 是否显示图层选择器
            navigationHelpButton: false, // 是否显示帮助信息控件
            animation: false, // 是否显示动画控件
            timeline: false, // 是否显示时间线控件
            fullscreenButton: false, // 是否展示全屏
        });

    }
}

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


export {
    HelloWorld,
    HelloBlank,
    Line
}