/*formatting the date for display*/

var dateFormat = {

    months : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    days : ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    display : function(dateStr,format) {
        if(new Date(dateStr) != "Invalid Date")
        {
            var date = new Date(dateStr);
            var DD = date.getDate();
            var MM = dateFormat.months[date.getMonth()];
            var YYYY = date.getFullYear();
            var day = dateFormat.days[date.getDay()];
            var time = date.getHours()+":"+date.getMinutes()
    
            if(format==null){
                format="DD-MM-YYYY"
            };
            var formattedDate = format.replace("DD",DD).replace("MM",MM).replace("YYYY",YYYY);
            return formattedDate;
        }
         return '';
    }

}

