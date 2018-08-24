
/* to get user profile details */
var profile = {
    code :'',

    bind : function(){
        elements.viewDetails.addEventListener('click',function(event){
            if(elements.bookBorrowContainer.style.display=="block"){
                elements.bookBorrowContainer.style.display="none";
            }
            else{
            elements.bookBorrowContainer.style.display="block";
            }
        });
    },


    createUserDetailsHTML : function(details){
        var html =`<div>
                        <h1>${details.fullName}</h1>
                        <h4>${details.designation}</h4>
                        <h4><i class="fas fa-envelope"></i> ${details.userName}</h4>
                        <div><i class="fas fa-phone"></i> ${details.phone}</div>
                    </div>`;

        if(details.ImageUrl){
            document.querySelector(".profile-img img").src=details.ImageUrl;
        }    
         
        elements.profile.innerHTML=html;
    },

    createBookDetailsHTML : function(details){        
        var html = "";
        for(i=0;i<details.Books.length;i++){
            var bookDetails = details.Books[i];    
            html+= `<div class="book-borrow-row">
                                <div class="book-borrow-details">${bookDetails.SerialNo}</div>
                                <div class="book-borrow-details">${ bookDetails.Name}</div>
                                <div class="book-borrow-details">${ bookDetails.Author}</div>
                                <div class="book-borrow-details">${ formatDate(bookDetails.BorrowDate,"DD-MM-YYYY day time")}</div>
                                <div class="book-borrow-details">${ formatDate(bookDetails.ReturnDate,"YYYY/MM/DD day time")}</div>
                                <div class="book-borrow-details">${ bookDetails.Status}</div>
                            </div>`;
         }
         elements.bookBorrowTable.innerHTML += html;
    },

    getUserDetails :function(){

        var credential = {"userName":sessionStorage.getItem('userName')} ; 
        post("http://10.22.22.43:8081/userdetails",credential,this.createHTML,this.log)        
    },

    createHTML : function(details){
        profile.createUserDetailsHTML(details);
        profile.createBookDetailsHTML();
    },
    log : function(response){
        console.log("reponse is :"+response);

    }, 
    init :function(){
        this.bind();
        this.getUserDetails()
    }
};

profile.init();


