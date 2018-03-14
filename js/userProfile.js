
/* to get user profile details */

function getUserDetails(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            
        }
    }
    xhttp.open('GET','http://10.22.22.39:8081/userdetails',true);
    xhttp.send();

}

getUserDetails();

viewDetails.addEventListener('click',function(event){
	if(bookBorrowContainer.style.display=="block"){
		bookBorrowContainer.style.display="none";
	}
	else{
	bookBorrowContainer.style.display="block";
	}
})