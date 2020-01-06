function configureTortaReserva(salario){
    return {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    (salario * 0.5).toFixed(2),
                    (salario * 0.4).toFixed(2),
                    (salario * 0.05).toFixed(2),
                    (salario * 0.05.toFixed(2))
                ],
                backgroundColor: [
                    window.chartColors.egg_yellow,
                    window.chartColors.aqua_blue,
                    window.chartColors.light_pink,
                    window.chartColors.nature_green
                ],
                label: 'Dataset 0'
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            }
        }
    };
}

function configureTortaAposentada(salario){
    return {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    (salario * 0.5).toFixed(2),
                    (salario * 0.3).toFixed(2),
                    (salario * 0.1).toFixed(2),
                    (salario * 0.1).toFixed(2),
                ],
                backgroundColor: [
                    window.chartColors.navy,
                    window.chartColors.chocolate,
                    window.chartColors.magenta,
                    window.chartColors.cyan,
                ],
                label: 'Dataset 1'
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            }
        }
    };
}

function configureTortaRica(salario){
    return { 
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    (salario * 0.50).toFixed(2),
                    (salario * 0.35).toFixed(2),
                    (salario * 0.10).toFixed(2),
                    (salario * 0.05).toFixed(2),
                ],
                backgroundColor: [
                    window.chartColors.teal,
                    window.chartColors.cornflowerBlue,
                    window.chartColors.violet,
                    window.chartColors.orange
                ],
                label: 'Dataset 2'
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            }
        }
    };
}

function configureTortaEmpreendedora(salario){ 
    return {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    (salario * 0.50).toFixed(2),
                    (salario * 0.05).toFixed(2),
                    (salario * 0.25).toFixed(2),
                    (salario * 0.15).toFixed(2),
                    (salario * 0.05).toFixed(2),
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.green,
                    window.chartColors.gold,
                    window.chartColors.indigo,
                    window.chartColors.lime,
                ],
                label: 'Dataset 3'
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            }
        }
    };
}

function configureLabelsTortaReserva(salario){
    $('#trEssencial').text((salario * 0.5).toFixed(2));
    $('#trReserva').text((salario * 0.4).toFixed(2));
    $('#trEducacao').text((salario * 0.05).toFixed(2));
    $('#trDiversao').text((salario * 0.05).toFixed(2));
}

function configureLabelsTortaAposentada(salario){
    $('#taEssencial').text((salario * 0.5).toFixed(2));
    $('#taReserva').text((salario * 0.1).toFixed(2));
    $('#taObjetivos').text((salario * 0.2).toFixed(2));
    $('#taDiversao').text((salario * 0.05).toFixed(2));
}

function configureLabelsTortaRica(salario){
    $('#trEssencial').text((salario * 0.50).toFixed(2));
    $('#trInvestimento').text((salario * 0.35).toFixed(2));
    $('#trEducacao').text((salario * 0.10).toFixed(2));
    $('#trDiversao').text((salario * 0.05).toFixed(2));
}

function configureLabelsTortaEmpresaria(salario){
    $('#teEssencial').text((salario * 0.5).toFixed(2));
    $('#teInvestimentosP').text((salario * 0.05).toFixed(2));
    $('#teInvestimentoN').text((salario * 0.25).toFixed(2));
    $('#teEducacao').text((salario * 0.15).toFixed(2));
    $('#teDiversao').text((salario * 0.05).toFixed(2));
}


function drawChart(idGrafico, salario){
    var ctx = document.getElementById(idGrafico).getContext('2d');
    var config;
    if(idGrafico == "tortaReserva"){
        config = configureTortaReserva(salario);
    } else if(idGrafico == "tortaAposentada"){
        config = configureTortaAposentada(salario);
    }else if(idGrafico == "tortaRica"){
        config = configureTortaRica(salario);
    }else{
        config = configureTortaEmpreendedora(salario);
    }
    window.myPie = new Chart(ctx, config);
    window.myPie.update();
}

function updateChartsColorLabels(){
    //Labels torta Reserva
    $('#cortrees').css('background-color', window.chartColors.egg_yellow);
    $('#cortrer').css('background-color', window.chartColors.aqua_blue);
    $('#cortredi').css('background-color', window.chartColors.nature_green);
    $('#cortreed').css('background-color', window.chartColors.light_pink);
    //Labels torta Aposentada
    $('#cortaes').css('background-color', window.chartColors.navy);
    $('#cortar').css('background-color', window.chartColors.chocolate);
    $('#cortao').css('background-color', window.chartColors.magenta);
    $('#cortad').css('background-color', window.chartColors.cyan);
    // Labels torta Rica
    $('#cortres').css('background-color', window.chartColors.teal);
    $('#cortri').css('background-color', window.chartColors.cornflowerBlue);
    $('#cortred').css('background-color', window.chartColors.violet);
    $('#cortrd').css('background-color', window.chartColors.orange);
    //Labels torta Empresária
    $('#cortees').css('background-color', window.chartColors.red);
    $('#corterp').css('background-color', window.chartColors.green);
    $('#cortep').css('background-color', window.chartColors.gold);
    $('#corteed').css('background-color', window.chartColors.indigo);
    $('#corted').css('background-color', window.chartColors.lime);
}

function scrollTo(elementId){
    $('html, body').stop().animate({
        scrollTop: $(elementId).offset().top
    }, 1000, 'linear');
}

function displayCharts(){
    $('#graficos a[href="#reserva"]').tab('show');
}

function updateCharts(){
    var salario_string = ($('#receita-bruta').val()).replace(/,/g, ' ');
    var salario = Number(salario_string.replace(/\s/g, ''));
    $('#graficos').css("display","block");
    drawChart('tortaReserva', salario);
    drawChart('tortaRica', salario);
    drawChart('tortaAposentada', salario);
    drawChart('tortaEmpresaria', salario);
    configureLabelsTortaReserva(salario);
    configureLabelsTortaAposentada(salario);
    configureLabelsTortaRica(salario);
    configureLabelsTortaEmpresaria(salario);
    displayCharts();
    updateChartsColorLabels();
    scrollTo("#graficos");
}

function scrollToCharts(){
    scrollTo("#graficos");
}

function selectionLabel(canvasId, labelColor){
    if(canvasId == "tortaReserva"){
        if(labelColor == "rgb(255, 186, 10)"){
            $('#cortrees').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#cortrer').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortreed').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortredi').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(0, 203, 230)"){
            $('#cortrees').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortrer').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#cortreed').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortredi').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(255, 46, 116)"){
            $('#cortrees').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortrer').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortreed').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#cortredi').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(46, 178, 50)"){
            $('#cortrees').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortrer').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortreed').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortredi').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
        }
    }else if(canvasId == "tortaAposentada"){
        if(labelColor == "rgb(0, 0, 117)"){
            $('#cortaes').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#cortar').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortao').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortad').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(214, 89, 0)"){
            $('#cortaes').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortar').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#cortao').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortad').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(230, 0, 229)"){
            $('#cortaes').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortar').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortao').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#cortad').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(255, 194, 51)"){
            $('#cortaes').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortar').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortao').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortad').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(5, 155, 255)"){
            $('#cortaes').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortar').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortao').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortai').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortaed').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#cortad').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(0, 229, 230)"){
            $('#cortaes').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortar').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortao').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortai').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortaed').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortad').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
        }
    }else if(canvasId == "tortaRica"){
        if(labelColor == "rgb(0, 117, 117)"){
            $('#cortres').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#cortri').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortred').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortrd').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(46, 123, 255)"){
            $('#cortres').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortri').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#cortred').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortrd').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(255, 77, 255)"){
            $('#cortres').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortri').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortred').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#cortrd').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(255, 145, 36)"){
            $('#cortres').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortri').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortred').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortrd').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
        }
    }else if(canvasId == "tortaEmpresaria"){
        if(labelColor == "rgb(255, 61, 103)"){
            $('#cortees').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#corterp').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortep'). parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corteed').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corted'). parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(34, 206, 206)"){
            $('#cortees').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corterp').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#cortep').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corteed').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corted').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(230, 195, 0)"){
            $('#cortees').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corterp').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortep').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#corteed').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corted').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(68, 0, 117)"){
            $('#cortees').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corterp').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortep').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corteed').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
            $('#corted').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        }else if(labelColor == "rgb(99, 230, 0)"){
            $('#cortees').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corterp').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#cortep').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corteed').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
            $('#corted').parent().parent().css({'border':'1px solid black', 'box-shadow': '2px 4px 12px #888888', 'padding':'5px'});
        }
    }
}

function clearLabelSelection(canvasId){
    if(canvasId == "tortaReserva"){
        $('#cortres').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#cortrr').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#cortred').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#cortrd').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
    }else if(canvasId == "tortaAposentada"){
        $('#cortaes').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#cortar').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#cortao').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#cortad').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
    }else if(canvasId == "tortaRica"){
        $('#cortres').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#cortri').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#cortred').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#cortrd').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
    }else if(canvasId == "tortaEmpresaria"){
        $('#cortees').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#corterp').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#cortep').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#cortei').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#corteed').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});
        $('#corted').parent().parent().css({'border':'none', 'box-shadow': 'none', 'padding':'0'});  
    }
}

function chartSectionSelection(instance, event){
    var activePoints = instance.getElementsAtEvent(event);
    var chartId = activePoints[0]['_chart'].canvas.id;
    if (activePoints.length > 0) {
        if(activePoints[0]['_model'].innerRadius > 0){
            clearLabelSelection(chartId);
            activePoints[0]['_model'].innerRadius = activePoints[0]['_model'].innerRadius - 5;
            activePoints[0]['_model'].outerRadius = activePoints[0]['_model'].outerRadius - 5;
        } else{
            var background = activePoints[0]['_view'].backgroundColor;
            console.log("Background: "+background)
            selectionLabel(chartId, background);
            activePoints[0]['_model'].innerRadius = activePoints[0]['_model'].innerRadius + 5;
            activePoints[0]['_model'].outerRadius = activePoints[0]['_model'].outerRadius + 5;
        }
    }     
    instance.render(300, false);
}

function emptyInput(){
    return $("#receita-bruta").val() != 0.00;
}

function validate() {
    var total = parseFloat($('#receita-bruta').val());
    if (total > 0.00) {
      $("#botao-receita").prop("disabled", false);
    } else {
      $("#botao-receita").prop("disabled", true);
    }
  }


$(function(){
    $('#receita-bruta').maskMoney();
});

$("#tortaReserva").on('click', function(event) {
    Chart.helpers.each(Chart.instances, function(instance){
        if(instance.canvas.id == "tortaReserva"){
            chartSectionSelection(instance, event)
        }
    });
});

$("#tortaAposentada").on('click', function(event) {
    Chart.helpers.each(Chart.instances, function(instance){
        if(instance.canvas.id == "tortaAposentada"){
            chartSectionSelection(instance, event)
        }
    });
});

$("#tortaRica").on('click', function(event) {
    Chart.helpers.each(Chart.instances, function(instance){
        if(instance.canvas.id == "tortaRica"){
            chartSectionSelection(instance, event)
        }
    });
});

$("#tortaEmpresaria").on('click', function(event) {
    Chart.helpers.each(Chart.instances, function(instance){
        if(instance.canvas.id == "tortaEmpresaria"){
            chartSectionSelection(instance, event)
        }
    });
});