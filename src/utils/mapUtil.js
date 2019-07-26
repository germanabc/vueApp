import L from 'leaflet';
import {tiandituTileLayer} from '@supermap/iclient-leaflet/dist/iclient9-leaflet.js';


// 全局地图对象
let map;

const MapUrl = {
    "codePosition":"/project/engInfoCtl/getTgtdTttd"
};

let CENTER_LTTD = 35.563611;
let CENTER_LGTD = 103.388611;

var mapUrlLayerProvince = "http://113.240.224.29:8990/iserver/services/map-ssx/rest/maps/%E7%9C%81%E5%B8%82%E5%8E%BF";   //省市县地图底图
var mapUrlLayerRiver = "http://113.240.224.29:8990/iserver/services/map-liuyuMap20190701/rest/maps/LiuYuRiver"    //流域地图底图
let supermapLayerObj = {
    province:L.supermap.tiledMapLayer(mapUrlLayerProvince),
    river:L.supermap.tiledMapLayer(mapUrlLayerRiver)
};



const createMap = function (mapId) {

    map = L.map(mapId, {
        preferCanvas: true,
        crs: L.CRS.EPSG4326,
        center: [CENTER_LTTD, CENTER_LGTD],
        maxZoom: 18,
        minZoom: 3,
        zoom: 4,
    });

    //天地图底图
    let tianditu_img =  L.supermap.tiandituTileLayer({
        url: "http://t0.tianditu.gov.cn/img_c/wmts?tk=c8508547dc61a56d168aa8179ccc4496",
        layerType: "img"
    }).addTo(map);

    // let tianditu2_vec =     L.supermap.tiandituTileLayer({
    //     url: "http://t0.tianditu.gov.cn/vec_c/wmts?tk=c8508547dc61a56d168aa8179ccc4496",
    //     layerType: "vec"
    // });

    // let tianditu_annotation =   L.supermap.tiandituTileLayer({
    //     url: "http://t0.tianditu.gov.cn/cva_c/wmts?tk=c8508547dc61a56d168aa8179ccc4496",
    //     layerType: "cva"
    // });

    // let tianditu = {
    //     '影像图': tianditu_img,
    //     '矢量图': tianditu2_vec
    // };
    // let overlays = {
    //     '注记':tianditu_annotation
    // };


    // L.supermap.tiledMapLayer("http://210.72.227.199:8008/iserver/services/map-liuyumap/rest/maps/liuyumap").addTo(map);


    //流域图层等级设置
    supermapLayerObj.province.setZIndex(18);

    //默认加载一个图层
    // supermapCheckedLayerArr.map(function (value , index) {
    //     map.addLayer(supermapLayerObj[value]);
    // });


    // L.control.layers(tianditu, overlays).addTo(map);



    // handlerMapChangeMarkers(testData);
    // mapGenerateRandomMarker();
    // mapMakerAddClickEvent();
    // L.supermap.tiledMapLayer(supermapUrl,{layersID:"[6,11,13]"}).addTo(map);



    //地图移动结束后的监听方法
    // map.on('moveend',function(ev){
    //     mapZoom = map.getZoom();

    //     _redux_map_zoom_change(mapZoom);

    //     mapBounds = getMapBounds(map.getBounds());
    //     console.log(mapZoom);
    //     console.log(mapBounds);
    //     searchLayerLoadControl(map,mapZoom,layerStationSearch);
    //     // alert(modalKeyUnique);
    //     let projectArr = ["home01","base0101","base0201","base0301"];   //与工程相关的
    //     if(projectArr.includes(modalKeyUnique)){
    //         projectLayerLoadControl(mapStation,map,mapZoom,mapBounds, modalKeyUnique , layerStationPrj ,layerStatistic , _redux_map_click_modal , _redux_map_modal_visible);  //初始化加载图层

    //     }else{
    //         //处理其他类型站点的缩放控制
    //         commonLayerLoadControl(mapStation,map,mapZoom,mapBounds, modalKeyUnique , layerStation,layerStatistic , _redux_map_click_modal , _redux_map_modal_visible);    //初始化加载图层
    //     }
    // });
    //测试地图高亮居中
    // mapHighlightByProvinceChange("430900");

    return map;
};

export default {
    createMap
}