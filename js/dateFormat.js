/*formatting the date for display*/

var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
function formatDate(dateStr,format) {
    var date = new Date(dateStr);
    var DD = date.getDate();
    var MM = months[date.getMonth()];
    var YYYY = date.getFullYear();
    var day = days[date.getDay()];
    var time = date.getHours()+":"+date.getMinutes();
    if(format==null){format="DD-MM-YYYY day time"};
    var formattedDate = format.replace("DD",DD).replace("MM",MM).replace("YYYY",YYYY).replace("day",day).replace("time",time);
    return formattedDate;
}