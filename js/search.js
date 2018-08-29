var search = {

    searchedText : '',
    result : [],
    bookNames : [],

    getBookNames : function() {
        for(i=0;i < bookList.allBooks.length;i++){
            var book = bookList.allBooks[i];
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
                search.result.push(bookList.allBooks[i]);            
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

        if(session.search != null){
            this.searchedText = session.search;
            elements.search.value = session.search;
            sessionStorage.removeItem('search');
            this.byName();
        }
    },
    finish : function(){
        bookList.createHTML(this.result);
        this.result = [];
    }
    
}