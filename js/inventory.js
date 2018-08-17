

var carouselImageSrc = [
    "Images/library1.jpeg",
    "Images/library2.jpg",
    "Images/library3.jpg",
    "Images/library4.jpg",
    "Images/library5.jpg"
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
    slideContainer : document.querySelector(".slide-container"),
    slideDiv : function(){return document.querySelectorAll(".slide-container div")},
    slideShow : document.querySelector(".slide-show"),
    prev_btn : document.querySelector(".prev"),
    next_btn :  document.querySelector(".next"),
    dot : document.querySelector(".dot-container"),

    loginModal :document.querySelector("#loginModal"),
    signupModal : document.querySelector("#signupModal"),
    loginClose : document.querySelector(".login-close"),
    signupClose : document.querySelector(".signup-close"),

    openLogin : document.querySelector(".open-login"),
    userProfile : document.querySelector(".user"),
    
    loginLink : document.querySelector(".open-login-link"),

    loginUserName : document.querySelector(".modal-body-login-form-input input[name = 'userName']"),
    loginPassWord :  document.querySelector(".modal-body-login-form-input input[name = 'passWord']"),
    signupUserName : document.querySelector(".modal-body-signup-form-input input[name = 'userName']"),
    signupPassWord :  document.querySelector(".modal-body-signup-form-input input[name = 'passWord']"),
    signupFullName :  document.querySelector(".modal-body-signup-form-input input[name = 'fullName']"),
    loginBtn : document.querySelector (".login-btn"),
    signupBtn : document.querySelector (".signup-btn"),
    logoutBtn : document.querySelector(".logout"),
 
    
    loginMsg : document.querySelector(".login-modal-body-msg"),
    signupMsg : document.querySelector(".signup-modal-body-msg"),
    forgetPwd : document.querySelector(".modal-body-forgetpwd"),

    viewDetails : document.querySelector(".book-details-link"),
    bookBorrowContainer : document.querySelector(".book-borrow-container"),
    bookBorrowTable : document.querySelector(".book-borrow-table"),
    profile : document.querySelector(".profile-details-1"),

    search : document.querySelector(".search input"),
    books : document.querySelector(".book-container"),
    homeSearch : document.querySelector(".search-unit input"),
    searchIcon : document.querySelector(".search-unit div i"),

    signup : document.querySelector(".modal-body-signup-link"),    
    login : document.querySelector(".modal-body-login-link")
    
};

var session = {
     search : sessionStorage.getItem('search')
};