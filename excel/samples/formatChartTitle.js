var ctx = new Excel.ExcelClientContext();
var chart = ctx.workbook.worksheets.getItem("Charts").charts.getByName("Chart1");	

chart.title.font.bold = true; 
chart.title.font.color = "#FF0000";

ctx.executeAsync().then(function () {
		logComment("Title Format Updated");
});