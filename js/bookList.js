
/* to get list of books*/

function getBookList(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            createBookListHTML(response.books);
        }
    }
    xhttp.open('GET','http://10.22.22.43:8081/list_books',true);
    xhttp.send();

}

getBookList();

function createBookListHTML(books){
    var bookHtml = "";
    for (i=0;i<books.length;i++)
    {
        var book = books[i];
        bookHtml +=`<div class="book-container">
                        <div class="book-container-image">
                            <img src="Images/bookcover1.png" >
                         </div>
                        <div class='book-container-text'>
                        <h3 class='book-title'>`+book.title+`</h3>
                        <h4 class='book-subtitle'>`+book.subtitle+`</h4>
                        <div class='book-author'>Author : `+book.author +`</div>
                        <div class='book-published'>Published on : `+dateFormat.display(book.published, "DD-MM-YYYY")+`</div>
                        <div class='book-publisher'>Publisher : `+book.publisher+`</div>
                        <div class='book-pages'>Pages : `+book.pages+`</div>
                        <div class='book-description'>Description  : `+book.description+`</div>
                        <div class='book-website'>website : <a href=`+book.website+`>`+book.website+`</a></div>
                        </div>
                    </div>`;
    }
        
        
    document.getElementById("test").innerHTML=bookHtml;

}




