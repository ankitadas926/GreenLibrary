//manual slide show//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	slideIndex += n; 
    showSlides(slideIndex);
}
function plusDots(n) {
    slideIndex = n;
	showSlides(slideIndex);
}
function showSlides(n) {
    var i;
    var x = document.getElementsByClassName("my-slides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
	showDots(slideIndex);
	console.log('slideIndex = '+ slideIndex);
	console.log('slideIndex-1 = '+ (slideIndex-1));
	console.log('n = '+ n);
}
//dots show//
function showDots(n) {
    var x = document.getElementsByClassName("dot");
	 for (i = 0; i < x.length; i++) {
        x[i].style["background-color"] = "#839192"; 
    }
    x[n-1].style["background-color"] = "#334455"; 		   
}

