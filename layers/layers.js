ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3035").setExtent([5190917.902495, 2579605.918858, 5195025.054299, 2581574.668858]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Puncterecepie_1 = new ol.format.GeoJSON();
var features_Puncterecepie_1 = format_Puncterecepie_1.readFeatures(json_Puncterecepie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_Puncterecepie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puncterecepie_1.addFeatures(features_Puncterecepie_1);
var lyr_Puncterecepie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puncterecepie_1,
maxResolution:2.8004466152261966,
 
                style: style_Puncterecepie_1,
                interactive: true,
    title: 'Puncte recepție<br />\
    <img src="styles/legend/Puncterecepie_1_0.png" /> Fără recepție<br />\
    <img src="styles/legend/Puncterecepie_1_1.png" /> Recepție foarte slabă<br />\
    <img src="styles/legend/Puncterecepie_1_2.png" /> Recepție slabă<br />\
    <img src="styles/legend/Puncterecepie_1_3.png" /> Recepție bună<br />\
    <img src="styles/legend/Puncterecepie_1_4.png" /> Recepție foarte bună<br />'
        });
var format_Antena_2 = new ol.format.GeoJSON();
var features_Antena_2 = format_Antena_2.readFeatures(json_Antena_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_Antena_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antena_2.addFeatures(features_Antena_2);
var lyr_Antena_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Antena_2,
maxResolution:4.200669922839294,
 
                style: style_Antena_2,
                interactive: true,
                title: '<img src="styles/legend/Antena_2.png" /> Antena'
            });
var lyr_Rasteracoperire_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Raster acoperire",
                            
maxResolution:28004.466152261964,

                            minResolution:2.8007266598877187,

                            source: new ol.source.ImageStatic({
                               url: "./layers/Rasteracoperire_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2314513.643738, 5690995.806524, 2411822.048563, 5789077.705047]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Puncterecepie_1.setVisible(true);lyr_Antena_2.setVisible(true);lyr_Rasteracoperire_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Puncterecepie_1,lyr_Antena_2,lyr_Rasteracoperire_3];
lyr_Puncterecepie_1.set('fieldAliases', {'id': 'id', 'dist_antena': 'Distanță față de antenă[m]', 'unghiantpct': 'Azimut[grade]', 'prx': 'prx[dBm]', 'dif_inaltime_max': 'dif_inaltime_max', 'dist_obst_max': 'dist_obst_max', 'los_andrei': 'LOS', 'los_int': 'los_int', });
lyr_Antena_2.set('fieldAliases', {'id': 'id', 'nume': 'nume', 'geom_polygon': 'geom_polygon', 'ptx': 'ptx[dBm]', 'frecventa': 'Frecvența[MHz]', 'gtx': 'gtx[dB]', 'inaltime': 'Înălțime[m]', });
lyr_Puncterecepie_1.set('fieldImages', {'id': 'Hidden', 'dist_antena': 'TextEdit', 'unghiantpct': 'TextEdit', 'prx': 'TextEdit', 'dif_inaltime_max': 'Hidden', 'dist_obst_max': 'Hidden', 'los_andrei': 'CheckBox', 'los_int': 'Hidden', });
lyr_Antena_2.set('fieldImages', {'id': 'Hidden', 'nume': 'Hidden', 'geom_polygon': 'Hidden', 'ptx': 'TextEdit', 'frecventa': 'TextEdit', 'gtx': 'TextEdit', 'inaltime': 'TextEdit', });
lyr_Puncterecepie_1.set('fieldLabels', {'dist_antena': 'inline label', 'unghiantpct': 'inline label', 'prx': 'inline label', 'los_andrei': 'inline label', });
lyr_Antena_2.set('fieldLabels', {'ptx': 'inline label', 'frecventa': 'inline label', 'gtx': 'inline label', 'inaltime': 'inline label', });
lyr_Antena_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});