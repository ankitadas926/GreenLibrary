var bookEntry = {

	name : '',
	author : '',
	published : '',
	publisher : '',
    pages : '',
    description : '',
    website : '',
    image : '',


	set : function(){
		this.name = document.querySelector('.entry input[name="Name"]').value;
		this.author = document.querySelector('.entry input[name="Author"]').value;
		this.published = document.querySelector('.entry input[name="Published"]').value;
		this.publisher = document.querySelector('.entry input[name="Publisher"]').value;
        this.pages = document.querySelector('.entry input[name="Pages"]').value;
        this.description = document.querySelector('.entry input[name="Description"]').value;
        this.website = document.querySelector('.entry input[name="Website"]').value;
        this.image = document.querySelector('.entry input[name="Image"]').value;
	},

	clear : function(){
		elements.signupUserName.value = "";
		elements.designation.value = "";
		elements.phone.value = "";
		elements.signupFullName.value = "";
		elements.signupPassWord.value = "";
    },
    
   
	bind : function(){

		document.querySelector(".save").addEventListener('click',function(){
            this.set();
            getResponse();
        });
    },

	getResponse : function(){

		var details = {
            "name" : this.name,
            "author" : this.author ,
            "published" : this.published,
            "publisher" : this.publisher ,
            "pages":this.pages,
            "description" :this.description,
            "website": this.website,
            "image":this.image		
		} ; 

		post("http://10.22.22.43:8081/signup",details,this.validateSave,this.log)
		
	},
	validateSave :function(response){
		
		if(response.status==true){

			document.querySelector(".save-msg").style.display = "block";
									
		}
		
	},
	log : function(response){
        console.log("reponse is :"+response);

    },	

};

bookEntry.bind();