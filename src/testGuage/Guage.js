﻿var time = 0;
//百分比
var pet = Math.random() * 100;
var pec = Math.round(pet);
//var match = Math.min((window.innerWidth / 200), window.innerHeight / 20);
var match = Math.min((230 / 260), 230 / 260); //找尋螢幕最小邊
var num = (1350 / 3600 + 27 / 3600 * pec) * 2 * Math.PI;
var center = { "x": 130* match, "y": 130 * match };
var radius = 115* match;
var total = 100;
var degrees = 0;
var new_degrees = 0;
var canvasName;
//var animation_loop;
var guageData;
function createGaugeChart(guageData, initValue) {
    var testData = guageData;
    //this.canvasName = canvasNameId;
    //this.unit = unit;
    //this.minValue = minValue;
    //this.maxValue  = maxValue;
    //this.title = title;
    guageData.animation_loop = window.setInterval(function() {init(guageData)}, 1000);
    displayValue = 0;
    startChange(initValue, guageData);
}

function init(guageData) {  
    //guageData.colorHex_One guageData.colorHex_Two guageData.colorHex_Three guageData.colorHex_Four
    //#FFFF00 yellow 
    //#FF0000 red 
    //#0000FF blue 
    //#00FF00 green 
    var quadrants = [
        {
            "angleStart": Math.PI * -0.5,
            "angleEnd": 0,
            "x1": center.x,
            "y1": center.y - radius,
            "x2": center.x + radius,
            "y2": center.y,
            "colorStops": [
                { "stop": 0, "color": guageData.colorHex_Three },
                { "stop": 1, "color": guageData.colorHex_Four }
            ]
        },
        {
            "angleStart": 0,
            "angleEnd": Math.PI * 470 / 3600 *2,
            "x1": center.x + radius,
            "y1": center.y,
            "x2": center.x,
            "y2": center.y + radius,
            "colorStops": [
                { "stop": 0, "color": guageData.colorHex_Four },
                { "stop": 1, "color": guageData.colorHex_One }
            ]
        },
        {
            "angleStart": Math.PI * 1340 / 3600 * 2 ,
            "angleEnd": Math.PI,
            "x1": center.x,
            "y1": center.y + radius,
            "x2": center.x - radius,
            "y2": center.y,
            "colorStops": [
                { "stop": 0, "color": guageData.colorHex_One },
                { "stop": 1, "color": guageData.colorHex_Two }
            ]
        },
        {
            "angleStart": Math.PI,
            "angleEnd": Math.PI * 1.5,
            "x1": center.x - radius,
            "y1": center.y,
            "x2": center.x,
            "y2": center.y - radius,
            "colorStops": [
                { "stop": 0, "color": guageData.colorHex_Two },
                { "stop": 1, "color": guageData.colorHex_Three }
            ]
        }
    ];

    var c = document.getElementById(guageData.canvasNameId);
    var ctx = c.getContext("2d");     
    ctx.clearRect(0, 0, 260 * match, 260 * match);
    // Draw arc quadrants.
    for (var i = 0; i < quadrants.length; ++i) {
        var quad = quadrants[i];
        var grad = ctx.createLinearGradient(quad.x1, quad.y1, quad.x2, quad.y2);
        // Color stops.
        for (var j = 0; j < quad.colorStops.length; ++j) {
            var cs = quad.colorStops[j];
            grad.addColorStop(cs.stop, cs.color);
        }
        // Draw arc.
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, quad.angleStart, quad.angleEnd, false);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 20;
        ctx.stroke();

    }
    drawPoint(ctx, 100, guageData);
    setPointer(ctx, 100, guageData);
    setText(ctx, guageData);
}
//var colorCount = 0;
//var resetFlag = 0;
function setText(ctx, guageData) {
    //中間字體

    //degrees / 4 第一區塊需+1且從20%的部分開始，最後一階段在最後20%結束
    if (guageData.degrees <= total / 3.2 * 0.6) {
        if (guageData.resetFlag != 0) { guageData.resetFlag = 0; guageData.colorCount = 0 }
        //ctx.fillStyle = "rgba(0, 173, 239, 1)";
        ctx.fillStyle = gradientColors(guageData.colorHex_One, guageData.colorHex_Two, total / 3.2 * 1, guageData.colorCount + total / 3.2 * 0.4);
        guageData.colorCount++;
    }
    else if (guageData.degrees <= total / 3.2 * 1.6 && guageData.degrees > total / 3.2 * 0.6) {
        if (guageData.resetFlag != 1) { guageData.resetFlag = 1; guageData.colorCount = 0 }
        //ctx.fillStyle = "rgba(102, 204, 154, 1)";
        ctx.fillStyle = gradientColors(guageData.colorHex_Two, guageData.colorHex_Three, total / 3.2 * 1, guageData.colorCount);
        guageData.colorCount++;
    }
    else if (guageData.degrees <= total / 3.2 * 2.6 && guageData.degrees > total / 3.2 * 1.6) {
        if (guageData.resetFlag != 2) { guageData.resetFlag = 2; guageData.colorCount = 0 }
        //ctx.fillStyle = "rgba(59, 89, 152, 1)";
        ctx.fillStyle = gradientColors(guageData.colorHex_Three, guageData.colorHex_Four, total / 3.2 * 1, guageData.colorCount);
        guageData.colorCount++;
    }
    else if (guageData.degrees > total / 3.2 * 2.6) {
        if (guageData.resetFlag != 3) { guageData.resetFlag = 3; guageData.colorCount = 0 }
        //ctx.fillStyle = "rgba(59, 89, 152, 1)";
        ctx.fillStyle = gradientColors(guageData.colorHex_Four, guageData.colorHex_One, total / 3.2 * 1, guageData.colorCount);
        guageData.colorCount++;
    }
    ctx.lineWidth = 10;
    ctx.textAlign = "center";
    ctx.fillStyle = "#999999"; 
    ctx.font = 20 * match + "pt oblique";
    // ctx.fillText(degrees + "%", center.x, center.y * 1.7); 
    ctx.fillText(Math.round(guageData.displayValue) + guageData.unit , 130 * match, 230 * match)
    //下方字體
    ctx.textAlign = "center";
    ctx.fillStyle = "#999999";
    ctx.font = 10 * match + "pt oblique ";
    //  ctx.fillText("指数", center.x, center.y * 1.9); 
    ctx.fillText(guageData.title, 130 * match, 250 * match);
    ctx.stroke();
    ctx.beginPath();
    ctx.save();
}
//漸層計算
let gradientColors = function (start, end, steps, index, gamma) {
    // 顏色漸變算法
    // convert #hex notation to rgb array
    let parseColor = function (hexStr) {
        return hexStr.length === 4 ? hexStr.substr(1).split('').map(function (s) {
            return 0x11 * parseInt(s, 16);
        }) : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(function (s) {
            return parseInt(s, 16);
        })
    };

    // zero-pad 1 digit to 2
    let pad = function (s) {
        return (s.length === 1) ? '0' + s : s;
    };

    let i, j, ms, me, output = [],
        so = [];
    gamma = gamma || 1;
    let normalize = function (channel) {
        return Math.pow(channel / 255, gamma);
    };
    start = parseColor(start).map(normalize);
    end = parseColor(end).map(normalize);
    //for (i = 0; i < steps; i++) {
    //    ms = i / (steps - 1);
    //    me = 1 - ms;
    //    for (j = 0; j < 3; j++) {
    //        so[j] = pad(Math.round(Math.pow(start[j] * me + end[j] * ms, 1 / gamma) * 255).toString(16));
    //    }
    //    output.push('#' + so.join(''));
    //}
    ms = index / (steps);
    me = 1 - ms;
    for (j = 0; j < 3; j++) {
        so[j] = pad(Math.round(Math.pow(start[j] * me + end[j] * ms, 1 / gamma) * 255).toString(16));
    }
    output.push('#' + so.join(''));
    return output;
};
//繪製刻度
function drawPoint(ctx, count, guageData) { 
    var flag = false
    //繪製小點
    for (var i = 0; i <= count; i++) {
        ctx.save();
        ctx.translate(130 * match, 130 * match);
        var colorVal = (1350 / 3600 + 27 / 3600 * i) * 2 * Math.PI - Math.PI * 3 / 4;
        if (count / 3.2 * 0.6 > i && i >= 0 ) {
            ctx.strokeStyle = gradientColors(guageData.colorHex_One, guageData.colorHex_Two, count / 3.2, i + count / 3.2 * 0.4)
        }
        else if (count / 3.2 * 1.6 > i && i >= count / 3.2 * 0.6 ) {
            ctx.strokeStyle = gradientColors(guageData.colorHex_Two, guageData.colorHex_Three, count / 3.2, i - count / 3.2 * 0.6)// - 0.8011061266653967 + 0.1 * Math.PI)
        }
        else if (count / 3.2 * 2.6 > i && i >= count / 3.2 * 1.6) {
            ctx.strokeStyle = gradientColors(guageData.colorHex_Three, guageData.colorHex_Four, count / 3.2, i - count / 3.2 * 1.6)// - 2.356194490192345 + 0.1 * Math.PI)
        }
        else if (count > i / 3.2 * 2.6) {
            ctx.strokeStyle = gradientColors(guageData.colorHex_Four, guageData.colorHex_One, count / 3.2, i - count / 3.2 * 2.6)// - 3.9584067435231383 + 0.1 * Math.PI)
        }
            if (i == 0 || i % 10 == 0) {
                ctx.lineWidth = 2 * match;
                ctx.beginPath();
                ctx.rotate((1350 / 3600 + 27 / 3600 * i) * 2 * Math.PI - Math.PI * 3 / 4);
                ctx.moveTo(-68 * match, 66 * match);
                ctx.lineTo(-72 * match, 71 * match);
                ctx.fillText(i, 58, 175);
                ctx.stroke();
            } else {
                ctx.lineWidth = 1 * match;
                ctx.beginPath();
                ctx.rotate((1350 / 3600 + 27 / 3600 * i) * 2 * Math.PI - Math.PI * 3 / 4);
                ctx.moveTo(-70 * match, 68 * match);
                ctx.lineTo(-72 * match, 71 * match);
                ctx.stroke();
            }
        ctx.restore();
    }
    ctx.beginPath();
}
function setPointer(ctx, count, guageData) {
    ctx.save();
    ctx.translate(129 * match, 136 * match);
    var eachPoint = (guageData.maxValue - guageData.minValue) / 10;
    for (var i = guageData.minValue; i <= guageData.maxValue; i += eachPoint) {
        //var b = 2 * Math.PI / 360 * (-45 - 27 * i)
        var b = -(1350 / 3600 + 27.2 / 3600 * (i * 10/guageData.maxValue) * 10) * 2 * Math.PI + Math.PI * 2 / 4;
        var r = 89 * match;
        var x = Math.sin(b) * r;
        var y = Math.cos(b) * r ;
        ctx.textAlign = "center";
        ctx.font = 10 * match + "pt oblique ";
        ctx.fillText(i, x, y);
    }
    //ctx.arc(0*match, 0*match, 2 * match, 0, Math.PI * 2, true);
    //ctx.fill();
   
    ctx.textAlign = "center";
    ctx.font = 10 * match + "pt oblique ";
    ctx.stroke();
    //ctx.translate(130 * match, 130 * match);
    ctx.scale(0.4, 0.4);
    //degrees++;
    //console.log(degrees)
    var se = ((guageData.degrees - 1) * 27 + 1350) / 3600;
    //if (se * 2 * Math.PI >= num) {
      //animation_loop = window.clearInterval(animation_loop);
      //  設定停止條件
    //}
    ctx.rotate(se * 2 * Math.PI); 
    //指針顏色
    var colorVal = (1350 / 3600 + 27 / 3600 * i) * 2 * Math.PI - Math.PI * 3 / 4;
    if (count / 3.2 * 0.6 > guageData.degrees && guageData.degrees >= 0) {
        ctx.strokeStyle = gradientColors(guageData.colorHex_One, guageData.colorHex_Two, count / 3.2, guageData.degrees + count / 3.2 * 0.4)
    }
    else if (count / 3.2 * 1.6 > guageData.degrees && guageData.degrees >= count / 3.2 * 0.6) {
        ctx.strokeStyle = gradientColors(guageData.colorHex_Two, guageData.colorHex_Three, count / 3.2, guageData.degrees - count / 3.2 * 0.6)// - 0.8011061266653967 + 0.1 * Math.PI)
    }
    else if (count / 3.2 * 2.6 > guageData.degrees && guageData.degrees >= count / 3.2 * 1.6) {
        ctx.strokeStyle = gradientColors(guageData.colorHex_Three, guageData.colorHex_Four, count / 3.2, guageData.degrees - count / 3.2 * 1.6)// - 2.356194490192345 + 0.1 * Math.PI)
    }
    else if (count > guageData.degrees / 3.2 * 2.6) {
        ctx.strokeStyle = gradientColors(guageData.colorHex_Four, guageData.colorHex_One, count / 3.2, guageData.degrees - count / 3.2 * 2.6)// - 3.9584067435231383 + 0.1 * Math.PI)
    }
    ctx.lineWidth = 2 * match;
    ctx.beginPath();
    //指針指向與大小控制
    for (var i = 0; i <= 16; i++) {
        ctx.lineTo(0 * match, (-16 + i) * match);
        ctx.lineTo(260 * match, 0 * match);
    }
    for (var i = 0; i <= 16; i++) {
        ctx.lineTo(0, (16 - i) * match);
        ctx.lineTo(260 * match, 0);
    }
    ctx.lineTo(-30 * match, 0);
    for (var i = 0; i <= 16; i++) {
        ctx.lineTo(0, (16 - i) * match);
        ctx.lineTo(-30 * match, 0);
    }
    for (var i = 0; i <= 16; i++) {
        ctx.lineTo(0, (-16 + i) * match);
        ctx.lineTo(-30 * match, 0);
    }
    ctx.stroke();
    ctx.beginPath();
    ////中心圓圈
    ctx.arc(0, 0, 5 * match, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
    //上限，歸零條件，若不需要則拿掉
    //if (degrees >= pec){
        //animation_loop = window.clearInterval(animation_loop);
    //}
}
function startChange(num, guageData){
    if(typeof guageData.animation_loop != undefined)
        clearInterval(guageData.animation_loop);
    guageData.newdisplayValue = num;
    guageData.new_degrees = Math.round((num - guageData.minValue) / (guageData.maxValue - guageData.minValue) * 100);
    var dif = guageData.new_degrees - guageData.degrees; //差距多少
    guageData.valueGap = -((guageData.displayValue - num) / dif); //實際數值每隔的差距
    guageData.animation_loop = setInterval(function(){animation_to(guageData) }, 1000/ Math.abs(dif));
}
function animation_to(guageData){
    //判斷是否已到達要變更的數值
    if(guageData.degrees == guageData.new_degrees)
        clearInterval(guageData.animation_loop);
    
    if(guageData.degrees < guageData.new_degrees){
        guageData.degrees++;
        guageData.displayValue += guageData.valueGap;
    }
    else if (guageData.degrees > guageData.new_degrees)
    {
        guageData.degrees--;
        guageData.displayValue -= guageData.valueGap;
    }

    init(guageData);
}


function GuageConstructor(canvasNameId, title, unit, minValue, maxValue, displayValue, colorHex_One, colorHex_Two, colorHex_Three, colorHex_Four){
    this.canvasNameId = canvasNameId;
    this.title = title;
    this.unit = unit;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.displayValue = displayValue;
    this.colorHex_One = colorHex_One;
    this.colorHex_Two = colorHex_Two;
    this.colorHex_Three = colorHex_Three;
    this.colorHex_Four = colorHex_Four;
    this.newdisplayValue = 0;
    this.valueGap = 0;
    this.degrees = 0;
    this.new_degrees = 0;
    this.animation_loop;
    this.colorCount = 0;
    this.resetFlag = 0;
}