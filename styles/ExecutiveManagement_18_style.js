var size = 0;
var placement = 'point';
function categories_ExecutiveManagement_18(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Group CEO':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(250,118,106,0.6745098039215687)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'LCT CEO COO':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(250,118,106,0.6745098039215687)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_ExecutiveManagement_18 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Service");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("Service") !== null) {
        labelText = String(feature.get("Service"));
    }
    
    var style = categories_ExecutiveManagement_18(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
