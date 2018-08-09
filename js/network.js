function get(method,URL,body,onSuccess,onFailure){
    
    var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange=function() {
			if(this.readyState==4 && this.status==200){
				onSuccess(JSON.parse(this.responseText));
            }
            else if(this.readyState==4 && this.status!=200){
                onFailure(this.status);
                }
            
            }
           
        if(method == "GET"){
            xhttp.open('GET',URL,true);
            xhttp.send();
        }
        else if(method == "POST"){
            xhttp.open('POST',URL,true);
            xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8")
            xhttp.send(JSON.stringify(body));
        }
		
        
}

       