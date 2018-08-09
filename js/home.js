var homeSearch = {

    searchedText : '',
    result : [],
    bookNames : [],

    bind : function(){
        elements.homeSearch.addEventListener("keyup", function (event) {
            if(event.keyCode == 13){
               homeSearch.start();
            }
        });

        elements.searchIcon.addEventListener("click",this.start);
    },
    start : function(){
        this.searchedText = elements.homeSearch.value ;
        sessionStorage.setItem('search',this.searchedText);
        window.location.replace("/catalogue.html");
    },
    init : function(){
       
        this.bind();
    }
    
}

homeSearch.init();