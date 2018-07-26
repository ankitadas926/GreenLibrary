//manual slide show//

var carousel = {

    nextslide : function(n) {
        slideIndex += n; 
        showSlides(slideIndex)},

    nextdot : function(n) {
        slideIndex = n;
        showSlides(slideIndex)},

    showSlides :function() {
        
         if (carousel.slideIndex >carousel.slideCount) {
            carousel.slideIndex = 1;
        } 
        if (carousel.slideIndex < 1) {
            carousel.slideIndex = carousel.slideCount;
        } 
        carousel.slideEl.src = carouselImageSrc[slideIndex];
            
    },

    showDots :function() {
      
        for (i = 0; i < dotElement.length; i++) {
            dotElement[i].style["background-color"] = "#839192"; 
        }
        dotElement[slideIndex-1].style["background-color"] = "#334455"; 		   
    },

    init : function(el,data){

        slideIndex = data.index ||1;
        slideCount = data.count;
        slideEl = el.slide;
        dotEl = el.dot;

        carousel.showSlides();
        carousel.showDots();

    }
    
}

// initializing Carousel


carousel.init(
        {
            slide : elements.slide,
            dot : elements.dot
        },
        {
            index : 1,
            count : carouselImageSrc.length
        }       

);
