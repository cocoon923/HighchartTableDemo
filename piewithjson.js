/**
 * Created by chenmm on 9/15/2014.
 */
$(function () {

    $.getJSON('pie.json', function(data) {
        var chart = new Highcharts.Chart(data.records[0]);
    });

});