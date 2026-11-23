var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BCA_1 = new ol.format.GeoJSON();
var features_BCA_1 = format_BCA_1.readFeatures(json_BCA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BCA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BCA_1.addFeatures(features_BCA_1);
var lyr_BCA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BCA_1, 
                style: style_BCA_1,
                popuplayertitle: 'BCA',
                interactive: true,
                title: '<img src="styles/legend/BCA_1.png" /> BCA'
            });
var format_ULS_2 = new ol.format.GeoJSON();
var features_ULS_2 = format_ULS_2.readFeatures(json_ULS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ULS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULS_2.addFeatures(features_ULS_2);
var lyr_ULS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULS_2, 
                style: style_ULS_2,
                popuplayertitle: 'ULS',
                interactive: true,
                title: '<img src="styles/legend/ULS_2.png" /> ULS'
            });
var format_KCP_3 = new ol.format.GeoJSON();
var features_KCP_3 = format_KCP_3.readFeatures(json_KCP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KCP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KCP_3.addFeatures(features_KCP_3);
var lyr_KCP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KCP_3, 
                style: style_KCP_3,
                popuplayertitle: 'KCP',
                interactive: true,
                title: '<img src="styles/legend/KCP_3.png" /> KCP'
            });
var format_Pusat_4 = new ol.format.GeoJSON();
var features_Pusat_4 = format_Pusat_4.readFeatures(json_Pusat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pusat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pusat_4.addFeatures(features_Pusat_4);
var lyr_Pusat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pusat_4, 
                style: style_Pusat_4,
                popuplayertitle: 'Pusat',
                interactive: true,
                title: '<img src="styles/legend/Pusat_4.png" /> Pusat'
            });
var format_KCU_5 = new ol.format.GeoJSON();
var features_KCU_5 = format_KCU_5.readFeatures(json_KCU_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KCU_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KCU_5.addFeatures(features_KCU_5);
var lyr_KCU_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KCU_5, 
                style: style_KCU_5,
                popuplayertitle: 'KCU',
                interactive: true,
                title: '<img src="styles/legend/KCU_5.png" /> KCU'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BCA_1.setVisible(true);lyr_ULS_2.setVisible(true);lyr_KCP_3.setVisible(true);lyr_Pusat_4.setVisible(true);lyr_KCU_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BCA_1,lyr_ULS_2,lyr_KCP_3,lyr_Pusat_4,lyr_KCU_5];
lyr_BCA_1.set('fieldAliases', {'Nama': 'Nama', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ULS_2.set('fieldAliases', {'Kode': 'Kode', 'Nama': 'Nama', 'Induk': 'Induk', 'Jenis': 'Jenis', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_KCP_3.set('fieldAliases', {'Kode': 'Kode', 'Nama': 'Nama', 'Induk': 'Induk', 'Jenis': 'Jenis', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Pusat_4.set('fieldAliases', {'Kode': 'Kode', 'Nama': 'Nama', 'Induk': 'Induk', 'Jenis': 'Jenis', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_KCU_5.set('fieldAliases', {'Kode': 'Kode', 'Nama': 'Nama', 'Induk': 'Induk', 'Jenis': 'Jenis', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BCA_1.set('fieldImages', {'Nama': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ULS_2.set('fieldImages', {'Kode': 'TextEdit', 'Nama': 'TextEdit', 'Induk': 'TextEdit', 'Jenis': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_KCP_3.set('fieldImages', {'Kode': 'TextEdit', 'Nama': 'TextEdit', 'Induk': 'TextEdit', 'Jenis': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Pusat_4.set('fieldImages', {'Kode': 'TextEdit', 'Nama': 'TextEdit', 'Induk': 'TextEdit', 'Jenis': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_KCU_5.set('fieldImages', {'Kode': 'TextEdit', 'Nama': 'TextEdit', 'Induk': 'TextEdit', 'Jenis': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BCA_1.set('fieldLabels', {'Nama': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ULS_2.set('fieldLabels', {'Kode': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Induk': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_KCP_3.set('fieldLabels', {'Kode': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Induk': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Pusat_4.set('fieldLabels', {'Kode': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Induk': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_KCU_5.set('fieldLabels', {'Kode': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Induk': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_KCU_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});