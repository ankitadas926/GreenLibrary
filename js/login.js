
var signin ={

	username : '',
	password : '',

	show : function(){
		elements.modal.style.display ="block";
		elements.userName.focus();
	},
	close : function(){
		elements.modal.style.display ="none";
		elements.failMsg.style.display = "none";
		elements.forgetPwd.style.display = "none";
		elements.userName.value = '';
		elements.passWord.value ='';
		elements.userName.style.borderBottom = "solid 1px #ccc";
		elements.passWord.style.borderBottom = "solid 1px #ccc";
		signup.close();
	},
	set : function(){
		signin.username = elements.userName.value;
		signin.password = elements.passWord.value;
	},
	bind : function(){

		elements.openLogin.addEventListener("click",signin.show);

		elements.close.addEventListener("click",signin.close);

		elements.loginBtn.addEventListener('click',function(event){
			if(elements.userName.value ==''){
				elements.userName.style.borderBottom = "solid 1px red";
				
			}
			else if(elements.passWord.value==''){
				elements.passWord.style.borderBottom = "solid 1px red";
			}
			else{
				signin.set();
				signin.getResponse();
			}
			
		});

		elements.userName.addEventListener('keyup',function(event){
			if (event.keyCode == 13){
				signin.set();
				signin.getResponse();
			}
			else{
				elements.userName.style.borderBottom = "solid 1px #ccc";
			}
		});

		elements.passWord.addEventListener('keyup',function(event){
			if (event.keyCode == 13){
				signin.set();
				signin.getResponse();
			}
			else{
				elements.passWord.style.borderBottom = "solid 1px #ccc";
			}
		});

		elements.logoutBtn.addEventListener('click',function(event){
			signin.logout();
		
		});

	},


	getResponse : function(){

		var credential = {"userName":signin.username,"passWord":signin.password} ; 

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange=function() {
			if(this.readyState==4 && this.status==200){
				console.log(this.responseText);
				signin.validateCredential(JSON.parse(this.responseText));
				}
			}
		xhttp.open('POST','http://10.22.22.43:8081/login',true);
		xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8")
		xhttp.send(JSON.stringify(credential));
	},
	
	validateCredential :function(response){
		
		if(response==true){
						
			sessionStorage.setItem('userName', signin.username);
			signin.success();
			signin.close();
			
		}
		else {
			elements.failMsg.style.display = "block";
			elements.forgetPwd.style.display = "block";
		}
	},

	success : function(){

		elements.loginLink.innerHTML = signin.username;		
		elements.openLogin.className +=  ' logged-in';
		elements.openLogin.removeEventListener("click",signin.show)
	},
	
	logout : function(){
	
		sessionStorage.removeItem('userName');
		location.reload();
		if(window.location == "file:///D:/Library/Profile.html"){
			window.location.replace("/D:/Library/library.html");
		}
		document.querySelector(".logged-in").className = "open-login";
	},

	start : function(){
		
		signin.bind();
		if(session.userName!=null){
			signin.username = session.userName;
			signin.success ();
		}

	},
	finish : function(){
		signin.userName = '';
		signin.password = '';

	}

};


var signup = {
	username : '',
	password : '',
	mode : "login",

	bind : function(){
		elements.signup.addEventListener('click',function(event){
			if(signup.mode == "login"){
				signup.signupDisplay();
			}
			else {
				signup.loginDisplay();
			}
			
		});
		
	},
	signupDisplay : function(){
		this.mode = "signup";
		elements.headerText.innerHTML = "Sign Up";
		elements.signupBtn.style.display = "block";
		elements.loginBtn.style.display = "none";
		elements.header.style.backgroundColor = "#e4e453";
		elements.signup.innerHTML = `Already have an account ? <a  href="javascript:void(0);">Login</a>`;

	},
	loginDisplay : function (){
		this.mode = "login";
		elements.headerText.innerHTML = "Login";
		elements.header.style.backgroundColor = "#5cb85c";
		elements.loginBtn.style.display = "block";
		elements.signupBtn.style.display = "none";
		elements.signup.innerHTML = `Don't have an account ?<a  href="javascript:void(0);"> Signup</a>`;
		
	},
	close :function(){
		mode : "login";
		signup.loginDisplay();
	}
};

signin.start();
signup.bind();

