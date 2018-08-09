//manual slide show//

var carousel = {

    images : function(){
        var html = '';
        for(i=0;i<this.count;i++){
            html += `<div>
                        <img src =`+carouselImageSrc[i]+`>
                    </div>`;
        }
        elements.slideContainer.innerHTML += html;
    },

    createDots : function(){
        var dotHtml = '';
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
        
         if (carousel.slideIndex >= carousel.count) {
            carousel.slideIndex = 0;
        } 
        if (carousel.slideIndex < 0) {
            carousel.slideIndex = carousel.count - 1;
        } 
       // carousel.slideEl.src = carouselImageSrc[carousel.slideIndex];
            
    },
    

    showDots :function() {
        var allDots =  elements.dot.querySelectorAll(".dot-circle");
        for(var i=0; i < carousel.count;i++){
            allDots[i].className = "dot-circle" ;
         }
        allDots[carousel.slideIndex].className += " current";
        	   
    },

    init : function(el,data){

        carousel.slideIndex = data.index || 0;
        carousel.count = data.count;
        carousel.slideEl = el.slide;
        carousel.dotEl = el.dot;

        carousel.images();
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
            dot : elements.dot
        },
        {
            index : 0,
            count : carouselImageSrc.length
        }       

);

