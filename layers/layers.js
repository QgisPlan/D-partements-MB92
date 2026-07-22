
ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([911120.613507, 6232715.286063, 913882.863507, 6234414.969396]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 0.685000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Area_1 = new ol.format.GeoJSON();
var features_Area_1 = format_Area_1.readFeatures(json_Area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Area_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_1.addFeatures(features_Area_1);
var lyr_Area_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_1, 
                style: style_Area_1,
                popuplayertitle: 'Area',
                interactive: false,
    title: 'Area<br />\
    <img src="styles/legend/Area_1_0.png" /> Mer<br />\
    <img src="styles/legend/Area_1_1.png" /> Terre<br />' });
var format_Building_2 = new ol.format.GeoJSON();
var features_Building_2 = format_Building_2.readFeatures(json_Building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_2.addFeatures(features_Building_2);
var lyr_Building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_2, 
                style: style_Building_2,
                popuplayertitle: 'Building',
                interactive: false,
                title: '<img src="styles/legend/Building_2.png" /> Building'
            });
var format_Roadssite_3 = new ol.format.GeoJSON();
var features_Roadssite_3 = format_Roadssite_3.readFeatures(json_Roadssite_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Roadssite_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadssite_3.addFeatures(features_Roadssite_3);
var lyr_Roadssite_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadssite_3, 
                style: style_Roadssite_3,
                popuplayertitle: 'Roads site',
                interactive: false,
                title: '<img src="styles/legend/Roadssite_3.png" /> Roads site'
            });
var format_Productions_4 = new ol.format.GeoJSON();
var features_Productions_4 = format_Productions_4.readFeatures(json_Productions_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Productions_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Productions_4.addFeatures(features_Productions_4);
var lyr_Productions_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Productions_4, 
                style: style_Productions_4,
                popuplayertitle: 'Productions',
                interactive: false,
                title: '<img src="styles/legend/Productions_4.png" /> Productions'
            });
var format_Plannettoye_5 = new ol.format.GeoJSON();
var features_Plannettoye_5 = format_Plannettoye_5.readFeatures(json_Plannettoye_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Plannettoye_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plannettoye_5.addFeatures(features_Plannettoye_5);
var lyr_Plannettoye_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plannettoye_5, 
                style: style_Plannettoye_5,
                popuplayertitle: 'Plan nettoye',
                interactive: false,
    title: 'Plan nettoye<br />\
    <img src="styles/legend/Plannettoye_5_0.png" /> Batiment<br />\
    <img src="styles/legend/Plannettoye_5_1.png" /> Escalier<br />' });
var format_Acces_6 = new ol.format.GeoJSON();
var features_Acces_6 = format_Acces_6.readFeatures(json_Acces_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Acces_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acces_6.addFeatures(features_Acces_6);
var lyr_Acces_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acces_6, 
                style: style_Acces_6,
                popuplayertitle: 'Acces',
                interactive: false,
                title: '<img src="styles/legend/Acces_6.png" /> Acces'
            });
var format_Productions_7 = new ol.format.GeoJSON();
var features_Productions_7 = format_Productions_7.readFeatures(json_Productions_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Productions_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Productions_7.addFeatures(features_Productions_7);
var lyr_Productions_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Productions_7, 
                style: style_Productions_7,
                popuplayertitle: 'Productions',
                interactive: true,
    title: 'Productions<br />\
    <img src="styles/legend/Productions_7_0.png" /> Composite<br />\
    <img src="styles/legend/Productions_7_1.png" /> Mécanique<br />\
    <img src="styles/legend/Productions_7_2.png" /> Menuiserie<br />\
    <img src="styles/legend/Productions_7_3.png" /> Système<br />\
    <img src="styles/legend/Productions_7_4.png" /> Production Main Office<br />\
    <img src="styles/legend/Productions_7_5.png" /> Technical Office<br />' });
var format_ProjectManagementAdministration_8 = new ol.format.GeoJSON();
var features_ProjectManagementAdministration_8 = format_ProjectManagementAdministration_8.readFeatures(json_ProjectManagementAdministration_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ProjectManagementAdministration_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectManagementAdministration_8.addFeatures(features_ProjectManagementAdministration_8);
var lyr_ProjectManagementAdministration_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectManagementAdministration_8, 
                style: style_ProjectManagementAdministration_8,
                popuplayertitle: 'Project Management & Administration',
                interactive: true,
    title: 'Project Management & Administration<br />\
    <img src="styles/legend/ProjectManagementAdministration_8_0.png" /> Project Admin<br />\
    <img src="styles/legend/ProjectManagementAdministration_8_1.png" /> PM Office 300T<br />\
    <img src="styles/legend/ProjectManagementAdministration_8_2.png" /> PM Office 2000T<br />\
    <img src="styles/legend/ProjectManagementAdministration_8_3.png" /> PM Office Dry Dock<br />\
    <img src="styles/legend/ProjectManagementAdministration_8_4.png" /> PM Office Atlas<br />' });
var format_Operation_9 = new ol.format.GeoJSON();
var features_Operation_9 = format_Operation_9.readFeatures(json_Operation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Operation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Operation_9.addFeatures(features_Operation_9);
var lyr_Operation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Operation_9, 
                style: style_Operation_9,
                popuplayertitle: 'Operation',
                interactive: true,
    title: 'Operation<br />\
    <img src="styles/legend/Operation_9_0.png" /> Dockage<br />\
    <img src="styles/legend/Operation_9_1.png" /> Eléctricité<br />\
    <img src="styles/legend/Operation_9_2.png" /> Logistique<br />\
    <img src="styles/legend/Operation_9_3.png" /> Maintenance<br />\
    <img src="styles/legend/Operation_9_4.png" /> Plomberie<br />\
    <img src="styles/legend/Operation_9_5.png" /> Waste management<br />\
    <img src="styles/legend/Operation_9_6.png" /> Operation Main Office<br />' });
var format_SalesCustomerRelations_10 = new ol.format.GeoJSON();
var features_SalesCustomerRelations_10 = format_SalesCustomerRelations_10.readFeatures(json_SalesCustomerRelations_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_SalesCustomerRelations_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SalesCustomerRelations_10.addFeatures(features_SalesCustomerRelations_10);
var lyr_SalesCustomerRelations_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SalesCustomerRelations_10, 
                style: style_SalesCustomerRelations_10,
                popuplayertitle: 'Sales & Customer Relations',
                interactive: true,
    title: 'Sales & Customer Relations<br />\
    <img src="styles/legend/SalesCustomerRelations_10_0.png" /> Commercial<br />\
    <img src="styles/legend/SalesCustomerRelations_10_1.png" /> Communication & Team Care<br />\
    <img src="styles/legend/SalesCustomerRelations_10_2.png" /> Contract<br />\
    <img src="styles/legend/SalesCustomerRelations_10_3.png" /> Customer care<br />\
    <img src="styles/legend/SalesCustomerRelations_10_4.png" /> pre-project/ quotation<br />' });
var format_CommunicationMarketing_11 = new ol.format.GeoJSON();
var features_CommunicationMarketing_11 = format_CommunicationMarketing_11.readFeatures(json_CommunicationMarketing_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_CommunicationMarketing_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunicationMarketing_11.addFeatures(features_CommunicationMarketing_11);
var lyr_CommunicationMarketing_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunicationMarketing_11, 
                style: style_CommunicationMarketing_11,
                popuplayertitle: 'Communication & Marketing',
                interactive: true,
    title: 'Communication & Marketing<br />\
    <img src="styles/legend/CommunicationMarketing_11_0.png" /> Communication & Marketing<br />' });
var format_Finance_12 = new ol.format.GeoJSON();
var features_Finance_12 = format_Finance_12.readFeatures(json_Finance_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Finance_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Finance_12.addFeatures(features_Finance_12);
var lyr_Finance_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Finance_12, 
                style: style_Finance_12,
                popuplayertitle: 'Finance',
                interactive: true,
    title: 'Finance<br />\
    <img src="styles/legend/Finance_12_0.png" /> Finance<br />\
    <img src="styles/legend/Finance_12_1.png" /> Accounting<br />' });
var format_Procurement_13 = new ol.format.GeoJSON();
var features_Procurement_13 = format_Procurement_13.readFeatures(json_Procurement_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Procurement_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Procurement_13.addFeatures(features_Procurement_13);
var lyr_Procurement_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Procurement_13, 
                style: style_Procurement_13,
                popuplayertitle: 'Procurement',
                interactive: true,
    title: 'Procurement<br />\
    <img src="styles/legend/Procurement_13_0.png" /> Achat<br />\
    <img src="styles/legend/Procurement_13_1.png" /> Magasin/Store<br />' });
var format_Facilities_14 = new ol.format.GeoJSON();
var features_Facilities_14 = format_Facilities_14.readFeatures(json_Facilities_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Facilities_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Facilities_14.addFeatures(features_Facilities_14);
var lyr_Facilities_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Facilities_14, 
                style: style_Facilities_14,
                popuplayertitle: 'Facilities',
                interactive: true,
    title: 'Facilities<br />\
    <img src="styles/legend/Facilities_14_0.png" /> Accueil et access<br />\
    <img src="styles/legend/Facilities_14_1.png" /> Facilities Director<br />' });
var format_IT_15 = new ol.format.GeoJSON();
var features_IT_15 = format_IT_15.readFeatures(json_IT_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_IT_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IT_15.addFeatures(features_IT_15);
var lyr_IT_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IT_15, 
                style: style_IT_15,
                popuplayertitle: 'IT',
                interactive: true,
    title: 'IT<br />\
    <img src="styles/legend/IT_15_0.png" /> IT<br />' });
var format_HSE_16 = new ol.format.GeoJSON();
var features_HSE_16 = format_HSE_16.readFeatures(json_HSE_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_HSE_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HSE_16.addFeatures(features_HSE_16);
var lyr_HSE_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HSE_16, 
                style: style_HSE_16,
                popuplayertitle: 'HSE',
                interactive: true,
    title: 'HSE<br />\
    <img src="styles/legend/HSE_16_0.png" /> HSE Office<br />\
    <img src="styles/legend/HSE_16_1.png" /> HSE  Director<br />' });
var format_HumanResourcesLearning_17 = new ol.format.GeoJSON();
var features_HumanResourcesLearning_17 = format_HumanResourcesLearning_17.readFeatures(json_HumanResourcesLearning_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_HumanResourcesLearning_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HumanResourcesLearning_17.addFeatures(features_HumanResourcesLearning_17);
var lyr_HumanResourcesLearning_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HumanResourcesLearning_17, 
                style: style_HumanResourcesLearning_17,
                popuplayertitle: 'Human Resources & Learning',
                interactive: true,
    title: 'Human Resources & Learning<br />\
    <img src="styles/legend/HumanResourcesLearning_17_0.png" /> MB92 academy<br />\
    <img src="styles/legend/HumanResourcesLearning_17_1.png" /> RH<br />\
    <img src="styles/legend/HumanResourcesLearning_17_2.png" /> Team Care<br />' });
var format_ExecutiveManagement_18 = new ol.format.GeoJSON();
var features_ExecutiveManagement_18 = format_ExecutiveManagement_18.readFeatures(json_ExecutiveManagement_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ExecutiveManagement_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExecutiveManagement_18.addFeatures(features_ExecutiveManagement_18);
var lyr_ExecutiveManagement_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExecutiveManagement_18, 
                style: style_ExecutiveManagement_18,
                popuplayertitle: 'Executive Management',
                interactive: true,
    title: 'Executive Management<br />\
    <img src="styles/legend/ExecutiveManagement_18_0.png" /> Group CEO<br />\
    <img src="styles/legend/ExecutiveManagement_18_1.png" /> LCT CEO COO<br />' });
var group_CorporateServices = new ol.layer.Group({
                                layers: [lyr_CommunicationMarketing_11,lyr_Finance_12,lyr_Procurement_13,lyr_Facilities_14,lyr_IT_15,lyr_HSE_16,lyr_HumanResourcesLearning_17,],
                                fold: 'open',
                                title: 'Corporate Services'});
var group_0Fonddecarte = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_Area_1,lyr_Building_2,lyr_Roadssite_3,lyr_Productions_4,lyr_Plannettoye_5,lyr_Acces_6,],
                                fold: 'open',
                                title: ''});

lyr_OSMStandard_0.setVisible(true);lyr_Area_1.setVisible(true);lyr_Building_2.setVisible(true);lyr_Roadssite_3.setVisible(true);lyr_Productions_4.setVisible(true);lyr_Plannettoye_5.setVisible(true);lyr_Acces_6.setVisible(true);lyr_Productions_7.setVisible(false);lyr_ProjectManagementAdministration_8.setVisible(false);lyr_Operation_9.setVisible(false);lyr_SalesCustomerRelations_10.setVisible(false);lyr_CommunicationMarketing_11.setVisible(false);lyr_Finance_12.setVisible(false);lyr_Procurement_13.setVisible(false);lyr_Facilities_14.setVisible(false);lyr_IT_15.setVisible(false);lyr_HSE_16.setVisible(false);lyr_HumanResourcesLearning_17.setVisible(false);lyr_ExecutiveManagement_18.setVisible(false);
var layersList = [group_0Fonddecarte,lyr_Productions_7,lyr_ProjectManagementAdministration_8,lyr_Operation_9,lyr_SalesCustomerRelations_10,group_CorporateServices,lyr_ExecutiveManagement_18];
lyr_Area_1.set('fieldAliases', {'id': 'id', 'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Building_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Roadssite_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Productions_4.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', 'IND': 'IND', });
lyr_Plannettoye_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Acces_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Productions_7.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_ProjectManagementAdministration_8.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_Operation_9.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_SalesCustomerRelations_10.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_CommunicationMarketing_11.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_Finance_12.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_Procurement_13.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_Facilities_14.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_IT_15.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_HSE_16.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_HumanResourcesLearning_17.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_ExecutiveManagement_18.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_Area_1.set('fieldImages', {'id': 'TextEdit', 'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Building_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Roadssite_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Productions_4.set('fieldImages', {'Service': '', 'Groupe': '', 'Level': '', 'IND': '', });
lyr_Plannettoye_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Acces_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Productions_7.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_ProjectManagementAdministration_8.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_Operation_9.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_SalesCustomerRelations_10.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_CommunicationMarketing_11.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_Finance_12.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_Procurement_13.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_Facilities_14.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_IT_15.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_HSE_16.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_HumanResourcesLearning_17.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_ExecutiveManagement_18.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_Area_1.set('fieldLabels', {'id': 'no label', 'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Building_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Roadssite_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Productions_4.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', 'IND': 'no label', });
lyr_Plannettoye_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Acces_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Productions_7.set('fieldLabels', {'Service': 'no label', 'Groupe': 'hidden field', 'Level': 'no label', });
lyr_ProjectManagementAdministration_8.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_Operation_9.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_SalesCustomerRelations_10.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_CommunicationMarketing_11.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_Finance_12.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_Procurement_13.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_Facilities_14.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_IT_15.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_HSE_16.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_HumanResourcesLearning_17.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_ExecutiveManagement_18.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_ExecutiveManagement_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});