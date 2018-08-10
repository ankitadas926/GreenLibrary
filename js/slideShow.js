//manual slide show//

var carousel = {

    createImages : function(){
        var html = '';
        for(i=0;i<this.count;i++){
            html += `<div>
                        <img src =`+carouselImageSrc[i]+`>
                    </div>`;
        }
        elements.slideContainer.innerHTML = html;
    },
    styles : function(){

        var slideDiv = elements.slideDiv();
        elements.slideContainer.style.width = window.innerWidth * this.count;
        for(var i = 0;i < slideDiv.length ; i++){
            slideDiv[i].style.width = window.innerWidth;
        }
        
        elements.slide.style.width = window.innerWidth;
    },

    createDots : function(){
        var dotHtml = ``;
        for (i = 0; i < carousel.count; i++){
            dotHtml += 
            `<span class="dot-circle"></span>` ;
        }
        
        elements.dot.innerHTML = dotHtml;
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

        elements.prev_btn.addEventListener("click",function(){
            carousel.changeSlide(-1);
            }
        );
        elements.next_btn.addEventListener("click",function(){
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

        elements.slideContainer.style.transform = `translateX(${-(this.slideIndex * window.innerWidth)}px)`;
    },    

    showDots :function() {
        var allDots =  elements.dot.querySelectorAll(".dot-circle");
        for(var i=0; i < carousel.count;i++){
            allDots[i].className = "dot-circle" ;
         }
        allDots[carousel.slideIndex].className += " current";
        	   
    },

    init : function(data){

        carousel.slideIndex = data.startIndex || 0;
        carousel.images = data.images;
        carousel.count = data.images.length;
        carousel.slideEl = data.slide;
        carousel.dotEl = data.dot;


        carousel.createImages();
        carousel.styles();
        carousel.createDots();
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
            slide : elements.slide,
            dot : elements.dot,
            startIndex : 1,
            images : carouselImageSrc
            
        }       

);

