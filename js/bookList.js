
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

        get("http://10.22.22.43:8081/list_books","",this.start,this.log);
        
    },

    start :function(result){
        bookList.allBooks = result;
        bookList.createHTML(result.books);
        search.init();
    },

    log : function(response){
        console.log("reponse is :"+response);

    },    
    finish : function(){
        elements.books.innerHTML = bookList.code;
        this.code = '';
    },

    init : function(){
        this.getBookList();
    }
           
       
}



bookList.init();



