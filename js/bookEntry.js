var bookEntry = {

	title : '',
	subtitle : '',
	author : '',
	published : '',
	publisher : '',
    pages : '',
    description : '',
    website : '',
    image : '',


	set : function(){
		this.title = document.querySelector('.entry input[name="Title"]').value;
		this.subtitle = document.querySelector('.entry input[name="Subtitle"]').value;
		this.author = document.querySelector('.entry input[name="Author"]').value;
		this.published = document.querySelector('.entry input[name="Published"]').value;
		this.publisher = document.querySelector('.entry input[name="Publisher"]').value;
        this.pages = document.querySelector('.entry input[name="Pages"]').value;
        this.description = document.querySelector('.entry input[name="Description"]').value;
        this.website = document.querySelector('.entry input[name="Website"]').value;
        this.image = document.querySelector('.entry input[name="Image"]').value;
	},
	clear : function(){
		document.querySelector('.entry input[name="Title"]').value = "";
		document.querySelector('.entry input[name="Subtitle"]').value = "";
		document.querySelector('.entry input[name="Author"]').value = "";
		document.querySelector('.entry input[name="Published"]').value = "";
		document.querySelector('.entry input[name="Publisher"]').value = "";
        document.querySelector('.entry input[name="Pages"]').value = "";
        document.querySelector('.entry input[name="Description"]').value = "";
        document.querySelector('.entry input[name="Website"]').value = "";
        document.querySelector('.entry input[name="Image"]').value = "";
	},
	bind : function(){

		document.querySelector(".save").addEventListener('click',function(){
            bookEntry.set();
            bookEntry.getResponse();
		});
		
		document.querySelector(".clear").addEventListener('click',bookEntry.clear);
    },

	getResponse : function(){

		var details = {
			"title" : this.title,
			"subtitle" : this.subtitle,
            "author" : this.author ,
            "published" : this.published,
            "publisher" : this.publisher ,
            "pages":this.pages,
            "description" :this.description,
            "website": this.website,
            "image":this.image		
		} ; 

		post("http://10.22.22.43:8081/addbook",details,bookEntry.validateSave,bookEntry.log);
		
	},
	validateSave :function(response){
		
		if(response==true){

			document.querySelector(".save-msg").style.display = "block";
									
		}
		
	},
	log : function(response){
        console.log("reponse is :"+response);

    },	

};

bookEntry.bind();