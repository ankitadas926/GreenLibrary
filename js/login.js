
var signin ={

	username : '',
	password : '',
	fullname : '',

	show : function(){
		elements.loginModal.style.display ="block";
		elements.loginUserName.focus();
	},

	hide : function(){
		elements.loginModal.style.display ="none";
		elements.loginMsg.style.display = "none";
		elements.forgetPwd.style.display = "none";
	},
	
	close : function(){
		signin.hide();
		signin.clear();	
		
	},

	set : function(){
		signin.username = elements.loginUserName.value;
		signin.password = elements.loginPassWord.value;
	},
	clear : function(){
		elements.loginUserName.value = '';
		elements.loginPassWord.value ='';
		elements.loginUserName.style.borderBottom = "solid 1px #ccc";
		elements.loginPassWord.style.borderBottom = "solid 1px #ccc";
	},
	requiredChecks : function(){

		var err = [];
		if(elements.loginUserName.value ==''){
			err.push(elements.loginUserName);
					
		}

		if(elements.loginPassWord.value==''){
			err.push(elements.loginPassWord);			
		}

		if(err.length == 0){
			return true;
		}
		else {
			for( var i = 0; i< err.length; i++){
				err[i].style.borderBottom = "solid 1px red";
			}
			return false;
		}		
	},

	bind : function(){

		elements.openLogin.addEventListener("click",signin.show);

		elements.loginClose.addEventListener("click",signin.close);
		
		elements.loginBtn.addEventListener('click',function(event){
			
			if(signin.requiredChecks()){
				signin.set();
				signin.getResponse();
			}
		});
		
		
		elements.loginUserName.addEventListener('keyup',function(event){
			if (event.keyCode == 13 ){
				if( signin.requiredChecks()){
					signin.set();
					signin.getResponse();
				}
				
			}
			else{
				elements.loginUserName.style.borderBottom = "solid 1px #ccc";
				elements.loginMsg.style.display = "none";
				elements.forgetPwd.style.display = "none";
			}
		});

		elements.loginPassWord.addEventListener('keyup',function(event){
			if (event.keyCode == 13 ){
				if( signin.requiredChecks()){
					signin.set();
					signin.getResponse();
				}
				
			}
			else{
				elements.loginPassWord.style.borderBottom = "solid 1px #ccc";
				elements.loginMsg.style.display = "none";
				elements.forgetPwd.style.display = "none";

			}
		});

		elements.signup.addEventListener('click',function(){
			signup.show();
			signin.hide();
			signin.clear();
		});

		elements.logoutBtn.addEventListener('click',function(event){
			signin.logout();
		
		});

	},


	getResponse : function(){

		var credential = {"userName":signin.username,"passWord":signin.password} ; 

		post("http://10.22.22.43:8081/login",credential,this.validateCredential,this.log)

		
	},
	
	validateCredential :function(response){
		
		if(response.authenticated==true){

			signin.fullname = response.fullName;
			sessionStorage.setItem('userName', signin.username);
			sessionStorage.setItem('fullName', signin.fullname);
			signin.success();
			signin.close();
			
		}
		else {
			elements.loginMsg.style.display = "block";
			elements.forgetPwd.style.display = "block";
		}
	},

	success : function(){
		
		elements.loginLink.innerHTML = signin.fullname;		
		elements.openLogin.className +=  ' logged-in';
		elements.openLogin.removeEventListener("click",signin.show)
	},

	log : function(response){
        console.log("reponse is :"+response);

    }, 
	
	logout : function(){
	
		sessionStorage.removeItem('userName');
		sessionStorage.removeItem('fullName');
		location.reload();
		if(window.location.pathname == "/Profile.html"){
			window.location.replace("/index.html");
		}
		document.querySelector(".logged-in").className = "open-login";
	},

	start : function(){		
		
		if(sessionStorage.getItem('userName')!=null){
			signin.fullname = sessionStorage.getItem('userName');
			signin.username = sessionStorage.getItem('fullName');
			signin.success ();
		}

	},
	finish : function(){
		signin.userName = '';
		signin.password = '';
		signin.fullname = '';

	},
	init : function(){
		signin.bind();
		signin.start();
	}

};

signin.init();

