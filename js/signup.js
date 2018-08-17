var signup = {

	fullname : '',
	designation : '',
	phone : '',
	username : '',
	password : '',


	show : function(){
		
		elements.signupModal.style.display = "block";
		elements.signupFullName.focus();
				
	},

	hide : function(){

		elements.signupModal.style.display = "none";
		elements.signupMsg.style.display = "none";
	},

	set : function(){
		this.fullname = document.querySelector('.modal-body-signup-form-input input[name="fullName"]').value;
		this.password = document.querySelector('.modal-body-signup-form-input input[name="designation"]').value;
		this.password = document.querySelector('.modal-body-signup-form-input input[name="phone"]').value;
		this.username = document.querySelector('.modal-body-signup-form-input input[name="userName"]').value;
		this.password = document.querySelector('.modal-body-signup-form-input input[name="passWord"]').value;
	},

	clear : function(){
		elements.signupUserName.value = "";
		elements.designation.value = "";
		elements.phone.value = "";
		elements.signupFullName.value = "";
		elements.signupPassWord.value = "";
    },
    
    close : function(){

		signup.hide();
		signup.clear();
		
	},

	bind : function(){

		
		elements.login.addEventListener('click',function(){
			signin.show();
			signup.clear();
			signup.hide();
        });
        
        elements.signupClose.addEventListener("click",signup.close);

		elements.signupBtn.addEventListener('click',function(){
			if(signup.requiredChecks()){
				signup.set();
				signup.getResponse();
			}
		});

		elements.signupUserName.addEventListener('keyup',function(event){
			if (event.keyCode == 13){
				if( signup.requiredChecks()){
					signup.set();
					signup.getResponse();
				}				
			}
			else{
				elements.signupUserName.style.borderBottom = "solid 1px #ccc";
				elements.signupMsg.style.display = "none";
			}
		});

		elements.signupFullName.addEventListener('keyup',function(event){
			if (event.keyCode == 13){
				if( signup.requiredChecks()){
					signup.set();
					signup.getResponse();
				}				
			}
			else{
				elements.signupFullName.style.borderBottom = "solid 1px #ccc";
				elements.signupMsg.style.display = "none";
			}
		});

		elements.signupPassWord.addEventListener('keyup',function(event){
			if (event.keyCode == 13){
				if( signup.requiredChecks()){
					signup.set();
					signup.getResponse();
				}
			}
			else{
				elements.signupPassWord.style.borderBottom = "solid 1px #ccc";
				elements.signupMsg.style.display = "none";
				
			}
		});
	},	
	
	requiredChecks : function(){

		var err = [];
		if(elements.signupUserName.value ==''){
			err.push(elements.signupUserName);					
		}
		if(elements.signupFullName.value==''){
			err.push(elements.signupFullName);			
		}
		if(elements.signupPassWord.value==''){
			err.push(elements.signupPassWord);			
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

	getResponse : function(){

		var credential = {
			"fullName" : signup.fullname,
			"designation" : signup.designation,
			"phone" : signup.phone,
			"userName":signup.username,
			"passWord":signup.password			
		} ; 

		post("http://10.22.22.43:8081/signup",credential,this.validateSignup,this.log)
		
	},
	validateSignup :function(response){
		
		if(response.status==true){
						
			//sessionStorage.setItem('userName', signin.username);
			elements.signupMsg.innerHTML = "Signed up successfully !!";
			elements.signupMsg.style.display = "block";
			elements.login.style.display = "none";

			sessionStorage.setItem('userName', signup.username);
			sessionStorage.setItem('fullName', signup.fullname);
			signin.start();
			
						
		}
		else if(response.errorMessage == "User Already exists "){
			elements.signupMsg.style.display = "block";
			
		}
	},
	log : function(response){
        console.log("reponse is :"+response);

    },	

};

signup.bind();