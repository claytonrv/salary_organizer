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
            },
            hover: {
                onHover: function(e) {
                    try {
                        var slice = this.getElementAtEvent(e);
                        var indicatorId = slice[0]['_index'] + 1
                        if(slice.length){
                            $('#chart_labels').children('div').removeClass('indicators')
                            $('#chart_labels .row:nth-child('+indicatorId+')').addClass('indicators');
                        }
                    } catch (error) {
                        $('#chart_labels').children('div').removeClass('indicators');
                        console.log("No chart identified.")
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
            },hover: {
                onHover: function(e) {
                    try {
                        var slice = this.getElementAtEvent(e);
                        console.log(slice)
                        var indicatorId = slice[0]['_index'] + 1
                        if(slice.length){
                            $('#chart_labels_aposentadoria').children('div').removeClass('indicators')
                            $('#chart_labels_aposentadoria .row:nth-child('+indicatorId+')').addClass('indicators');
                        }
                    } catch (error) {
                        $('#chart_labels_aposentadoria').children('div').removeClass('indicators');
                        console.log("No chart identified.")
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
            },hover: {
                onHover: function(e) {
                    try {
                        var slice = this.getElementAtEvent(e);
                        var indicatorId = slice[0]['_index'] + 1
                        if(slice.length){
                            $('#chart_labels').children('div').removeClass('indicators')
                            $('#chart_labels .row:nth-child('+indicatorId+')').addClass('indicators');
                        }
                    } catch (error) {
                        $('#chart_labels').children('div').removeClass('indicators');
                        console.log("No chart identified.")
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
            },hover: {
                onHover: function(e) {
                    try {
                        var slice = this.getElementAtEvent(e);
                        var indicatorId = slice[0]['_index'] + 1
                        if(slice.length){
                            $('#chart_labels').children('div').removeClass('indicators')
                            $('#chart_labels .row:nth-child('+indicatorId+')').addClass('indicators');
                        }
                    } catch (error) {
                        $('#chart_labels').children('div').removeClass('indicators');
                        console.log("No chart identified.")
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

$(function () {
    $('[data-toggle="popover"]').popover()
})

$(document).ready(function () {
    $('.nav-toggle').click(function () {
        console.log($(this)["0"].children["0"].children["0"].id)
        var arrowId = $(this)["0"].children["0"].children["0"].id
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {
                //toggle_switch.html('Read More');
                $('#'+arrowId).css('transform', 'rotate(0deg)');
                scrollToCharts()
            } else {
                //toggle_switch.css('display', 'none');
                $('#'+arrowId).css('transform', 'rotate(180deg)');
                scrollTo('#'+$(this)[0]['id'])
            }
        });
    });

});