//manual slide show//

var carousel = {

    create : function(){
        var html = `<div class="slide-show-container">
                        <div class="slide-container"></div>
                        <button class="prev" >&#10094;</button>
                        <button class="next" >&#10095;</button>
                        <div class = "dot-container"></div>
                    </div>`;
        
        carousel.element.innerHTML = html;
    },
    createSlides : function(){

        var html = ``;
        for(i=0;i<this.count;i++){
            html += `<div class = "slides">
                        <img src =`+carouselImageSrc[i]+`>
                    </div>`;
        }
        document.querySelector(".slide-container").innerHTML = html;
      
    },
    styles : function(){

        var slideDiv = elements.slideDiv();
        document.querySelector(".slide-container").style.width = window.innerWidth * this.count;
        for(var i = 0;i < slideDiv.length ; i++){
            slideDiv[i].style.width = window.innerWidth;
        }
        
        carousel.element.style.width = window.innerWidth;
    },

    createDots : function(){
        var dotHtml = ``;
        for (i = 0; i < carousel.count; i++){
            dotHtml += 
            `<span class="dot-circle"></span>` ;
        }
        
        document.querySelector(".dot-container").innerHTML = dotHtml;
    },

    bind : function(){

        var allDots =  document.querySelectorAll(".dot-circle");
        for(var i=0; i < carousel.count;i++){
            allDots[i].addEventListener("click",function(index){
                return function(){
                    carousel.slideIndex = index;
                    carousel.start();
                }
            }(i));
        }

        document.querySelector(".prev").addEventListener("click",function(){
            carousel.changeSlide(-1);
            }
        );
        document.querySelector(".next").addEventListener("click",function(){
            carousel.changeSlide(1);
            } 
        );
        
    },

    changeSlide : function(n) {
        carousel.slideIndex += n; 
        carousel.start();
    },

    showSlides :function() {

        var xAxis = 0;
        if (carousel.slideIndex >= carousel.count) {
            carousel.slideIndex = 0;
        } 
        if (carousel.slideIndex < 0) {
            carousel.slideIndex = carousel.count - 1;
        } 

        document.querySelector(".slide-container").style.transform = `translateX(${-(this.slideIndex * window.innerWidth)}px)`;
    },    

    showDots :function() {
        var allDots =  document.querySelectorAll(".dot-circle");
        for(var i=0; i < carousel.count;i++){
            allDots[i].className = "dot-circle" ;
         }
        allDots[carousel.slideIndex].className += " current";
        	   
    },

    init : function(data){

        carousel.slideIndex = data.startIndex || 0;
        carousel.images = data.images;
        carousel.count = data.images.length;
        carousel.element = data.element;
        carousel.elementClass = this.element.className;
        


        carousel.create();
        carousel.createSlides();
        carousel.createDots();
        carousel.styles();
        
        carousel.bind();
        carousel.start();
       
    },

    start : function(){
        carousel.showSlides();
        carousel.showDots();
    },
    
}

// initializing Carousel


carousel.init(
        {
            element : elements.slideShow,
            startIndex : 0,
            images : carouselImageSrc
            
        }       

);

window.addEventListener('resize',function(){
    carousel.init(
        {
            element : elements.slideShow,
            startIndex : 0,
            images : carouselImageSrc
            
        }     
    )
}); 

