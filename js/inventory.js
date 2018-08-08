

var carouselImageSrc = [
    "Images/lib1.jpg",
    "Images/lib2.jpg",
    "Images/lib3.jpg",
    "Images/lib4.jpg"
];

var bookImageSrc = [
    "Images/books1.png",
    "Images/books2.jpg",
    "Images/books3.jpg",
    "Images/books4.jpg",
    "Images/books5.jpg",
    "Images/books6.jpg",
    "Images/books7.jpg",
    "Images/books8.jpg"    
];

var elements = {
    slide : document.querySelector(".my-slides"),
    dot : document.querySelectorAll(".dot"),
    prev_btn : document.querySelector(".prev"),
    next_btn :  document.querySelector(".next"),
    dot : document.querySelector(".dot-container"),

    openLogin : document.querySelector(".open-login"),
    userProfile : document.querySelector(".user"),
    
    loginLink : document.querySelector(".open-login-link"),

    userName : document.querySelector(".modal-body-loginform-input input[name = 'userName']"),
    passWord :  document.querySelector(".modal-body-loginform-input input[name = 'passWord']"),
    loginBtn : document.querySelector (".login-btn"),
    logoutBtn : document.querySelector(".logout"),
 
    modal : document.querySelector("#loginModal"),
    close : document.querySelector(".close"),

    failMsg : document.querySelector(".modal-body-failmsg"),
    forgetPwd : document.querySelector(".modal-body-forgetpwd"),

    viewDetails : document.querySelector(".book-details-link"),
    bookBorrowContainer : document.querySelector(".book-borrow-container"),
    bookBorrowTable : document.querySelector(".book-borrow-table"),
    profile : document.querySelector(".profile-details-1"),

    search : document.querySelector(".search input"),
    books : document.querySelector(".book-container"),

    signup : document.querySelector(".modal-body-signup"),    
    signupBtn : document.querySelector (".signup-btn"),
    login : document.querySelector(".modal-body-login a"),
    header : document.querySelector(".modal-header"),
    headerText :  document.querySelector(".modal-header h2")
};

var session = {
    userName : sessionStorage.getItem('userName')
};