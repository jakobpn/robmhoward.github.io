var ctx = new Excel.ExcelClientContext();
var chart = ctx.workbook.worksheets.getItem("Charts").charts.getByName("Chart1");	

chart.top =200;
chart.left=200;
ctx.executeAsync().then(function () {
		logComment("Chart Moved");
});