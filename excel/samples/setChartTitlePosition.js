var ctx = new Excel.ExcelClientContext();
var chart = ctx.workbook.worksheets.getItem("Charts").charts.getByName("Chart1");	

chart.title.position = "top";
chart.title.overlay=true;

ctx.executeAsync().then(function () {
		logComment("Char Title Position Changed");
});