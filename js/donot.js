var publicSpreadsheetUrl =
    "https://docs.google.com/spreadsheets/d/1dsfUtFJ6hu6Fvou9TcerGb6zlcD3TJ_axdATEUGSdcM/edit?usp=sharing";

function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true,
    });
}

function showInfo(data, tabletop) {
    // alert("Successfully processed!");
    // console.log(data);
    renderData(data);
}

window.addEventListener("DOMContentLoaded", init);

function renderData(data) {

    let reqLists = data.map(x => [x.Product, parseInt(x.Sale)]);

    console.log(reqLists);

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Petroleum Product', 'Sale of petroleum in KL'],            
        ].concat(reqLists));

        var options = {
            title: "Sales of Petroleum Products in Nepal 2014/2015 A.D.",
            pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }
}


