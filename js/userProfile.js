
/* to get user profile details */

function getUserDetails(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            createUserDetailsHTML(response);
            
        }
    }
    xhttp.open('GET','http://10.22.22.39:8081/userdetails',true);
    xhttp.send();

}

getUserDetails();

/* View details */

viewDetails.addEventListener('click',function(event){
	if(bookBorrowContainer.style.display=="block"){
		bookBorrowContainer.style.display="none";
	}
	else{
	bookBorrowContainer.style.display="block";
	}
})

/* Display of borrowed books  */

function createUserDetailsHTML(profileUserDetails){
     
    userDetailsHTML=`<div>
                        <h1>${profileUserDetails.Name}</h1>
                        <h4>${profileUserDetails.Designation}</h4>
                        <h4><i class="fas fa-envelope"></i> ${profileUserDetails.Email}</h4>
                        <div><i class="fas fa-phone"></i> ${profileUserDetails.PhoneNumber}</div>
                    </div>`;
    
    document.getElementsByClassName("profile-details-1")[0].innerHTML=userDetailsHTML;

    if(profileUserDetails.ImageUrl){
        document.getElementsByClassName("profile-img")[0].innerHTML=`<img src=${profileUserDetails.ImageUrl} >`;
    }

    var borrowedBookHTML=document.getElementsByClassName("book-borrow-table")[0].innerHTML;
    for(i=0;i<profileUserDetails.Books.length;i++){
        var bookDetails = profileUserDetails.Books[i];    
        borrowedBookHTML+= `<div class="book-borrow-row">
                            <div class="book-borrow-details">${bookDetails.SerialNo}</div>
                            <div class="book-borrow-details">${ bookDetails.Name}</div>
                            <div class="book-borrow-details">${ bookDetails.Author}</div>
                            <div class="book-borrow-details">${ formatDate(bookDetails.BorrowDate,"DD-MM-YYYY day time")}</div>
                            <div class="book-borrow-details">${ formatDate(bookDetails.ReturnDate,"YYYY/MM/DD day time")}</div>
                            <div class="book-borrow-details">${ bookDetails.Status}</div>
                        </div>`;
      
    }
    document.getElementsByClassName("book-borrow-table")[0].innerHTML=borrowedBookHTML;
}