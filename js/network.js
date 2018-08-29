function ajax(method,URL,body,onSuccess,onFailure){
    
    var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange=function() {
			if(this.readyState==4 && this.status==200){
                console.log(this.responseText);
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
            xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            xhttp.send(JSON.stringify(body));
        }
		
        
}


function post(URL,body,onSuccess,onFailure){
    ajax('POST',URL,body,onSuccess,onFailure);
}

function get(URL,body,onSuccess,onFailure){
    ajax('GET',URL,body,onSuccess,onFailure);
}
       