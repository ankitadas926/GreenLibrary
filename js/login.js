//session user name check//
var login=document.getElementsByClassName("open-login")[0];
var userProfile=document.getElementsByClassName("user")[0];
var sessionUserName = sessionStorage.getItem('userName');
var loginLink=login.getElementsByTagName("a")[0];

var userName = document.getElementsByName("userName")[0];
var passWord =  document.getElementsByName("passWord")[0];
var loginBtn = document.getElementsByClassName("submit-btn")[0];
var logoutBtn = document.getElementsByClassName("logout")[0];
 
var modal = document.getElementById('loginModal');
var close = document.getElementsByClassName("close")[0];

var failMsg = document.getElementsByClassName("modal-body-failmsg")[0];
var forgetPwd=document.getElementsByClassName("modal-body-forgetpwd")[0];

var viewDetails=document.getElementsByClassName("book-details-link")[0];
var bookBorrowContainer = document.getElementsByClassName("book-borrow-container")[0];

if(sessionUserName!=null){
	loginLink.innerHTML= sessionUserName;
	login.className +=  ' logged-in';
}
//Login Modal//

// When the user clicks the button, open the modal 
login.addEventListener("click",loginDisplay);
function loginDisplay() {
	if(sessionUserName==null){
		modal.style.display ="block";
		userName.focus();
	}
	/*else{
		modal.style.display ="none";
		userProfile.style.display="block";
	}*/
}

// When the user clicks on (x), close the modal
function closeModal() {
	 modal.style.display ="none";
}

//When username and/or password is incorrect
function credential(value,userName){
	failMsg.style.display= value ? "none" : "inline-block";
	forgetPwd.style.display= value ? "none" : "inline-block";
	if(value==true){
		closeModal();
		loginLink.innerHTML=userName;
		sessionStorage.setItem('userName', userName);
		sessionUserName=userName;
		login.className +=  ' logged-in';
	}
}

//validating credentials and login to user


passWord.addEventListener('keyup',function(event){
	if (event.keyCode == 13){
		validateCredential(userName.value,passWord.value);
	}
});
loginBtn.addEventListener('click',function(event){
	validateCredential(userName.value,passWord.value);
});

logoutBtn.addEventListener('click',function(event){
	logoutUser();

});


function validateCredential(userName,passWord){
	var creden = {"userName":userName,"passWord":passWord}  
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
		if(this.readyState==4 && this.status==200){
			console.log(this.responseText);
			var response=JSON.parse(this.responseText)
			credential(response,creden.userName);
        }
    }
	xhttp.open('POST','http://10.22.22.43:8081/login',true);
	xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    xhttp.send(JSON.stringify(creden));

 }

 // logout function

 function logoutUser(){
	sessionStorage.removeItem('userName');
	location.reload();
	if(window.location == "file:///D:/Library/Profile.html"){
		window.location.replace("/D:/Library/library.html");
	}
	
 }