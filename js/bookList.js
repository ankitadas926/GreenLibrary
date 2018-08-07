
/* to get list of books*/

var bookList = {
    
    code : '',
    allBooks : '',

    createHTML :function(books){

        for (i=0;i<books.length;i++){
            var book = books[i]; 
            
            this.code +=`<div class="row">
                            <div>
                                <div class="image">
                                    <img src="`+bookImageSrc[i]+`">
                                </div>
                                <div class='text'>
                                    <h3 class='book-title'>`+book.title+`</h3>
                                    <h4 class='book-subtitle'>`+book.subtitle+`</h4>
                                    <div class='book-author'>Author : `+book.author +`</div>
                                    <div class='book-published'>Published on : `+dateFormat.display(book.published, "DD-MM-YYYY")+`</div>
                                    <div class='book-publisher'>Publisher : `+book.publisher+`</div>
                                    <div class='book-pages'>Pages : `+book.pages+`</div>
                                    <div class='book-description'>Description  : `+book.description+`</div>
                                    <div class='book-website'>website : <a href=`+book.website+`>`+book.website+`</a></div>
                                </div>
                            </div>
                        </div>`;
        }
        
        this.finish();
        
    },

    getBookList :function(onSuccess,onFailure){

        get("GET","http://10.22.22.43:8081/list_books","",onSuccess,onFailure)
        // var xhttp= new XMLHttpRequest();
        // xhttp.onreadystatechange=function() {
        //     if(this.readyState==4 && this.status==200){
                
        //         onSuccess(JSON.parse(this.responseText));
               
        //     }
        // }
        // xhttp.open('GET','http://10.22.22.43:8081/list_books',true);
        // xhttp.send();
    
    },
    log : function(response){
        console.log("reponse is :"+response);

    },    
    
    init : function(){
        this.getBookList(function(result){
            bookList.allBooks = result;
            bookList.createHTML(result.books);
            search.init();
        },this.log);
    },

    finish : function(){
        elements.books.innerHTML = bookList.code;
        this.code = '';
    }
           
       
}

var search = {

    searchedText : '',
    result : [],
    bookNames : [],

    getBookNames : function() {
        for(i=0;i < bookList.allBooks.books.length;i++){
            var book = bookList.allBooks.books[i];
            this.bookNames.push(book.title.toLowerCase());
        }
    },

    bind : function(){

        elements.search.addEventListener("keyup", function (event) {
            search.searchedText = elements.search.value.toLowerCase().trim();
            search.byName();
        });
    },

    byName : function(){

        if(search.searchedText !=null){
            for(var i=0; i<this.bookNames.length;i++){
                if(this.bookNames[i].indexOf(search.searchedText)!= -1){
                search.result.push(bookList.allBooks.books[i]);            
            }                 
         }   
       }
       else{
           search.result = search.bookList.books;
       }
    this.finish();
  
    },
    init : function(){
        this.getBookNames();
        this.bind();
    },
    finish : function(){
        bookList.createHTML(this.result);
        this.result = [];
    }
    
}

bookList.init();



