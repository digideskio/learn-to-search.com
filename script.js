var $slides = $('section.item');
var $slidesContainer = $('.container');

var currentSlide = 0;
var slideIndex = 0;
var slideLength = $slides.length;

var hash = document.location.hash;
var btnPrev = $('#js-prev-btn');
var btnNext = $('#js-next-btn');

var wufooContainer = $('#wufoo-zohx3rg069j5eu');

/* Assign IDs to each slide */
$slides.each(function(index) {
	var slide = $(this);
	this.id = 'slide-' + index; 
});


/* Show the correct element if URL refers to it */
if (hash != '') {	
	slideIndex = +(/^#slide\-(.+)/g.exec(hash)[1]);
	displaySlide(slideIndex);		
} else {
	displaySlide(slideIndex);
	updateURL(slideIndex);
}

$('.control button').click(function() {	
	if(this.id == 'js-prev-btn') {
		slideIndex = (slideIndex == 0 ? slideLength - 1 : slideIndex - 1);
	} else {
		slideIndex = (slideIndex + 1) % slideLength;
	}

	displaySlide(slideIndex);
	updateURL(slideIndex);
	
});


function displaySlide(slideId) {	
	$('#slide-' + currentSlide).removeClass('active');
	
	$('#slide-' + slideId).addClass('active');

	$slidesContainer.attr('data-bg', '');
	$slidesContainer.attr('data-bg', $('#slide-' + slideId).data('bg'));	

	if(currentSlide === 0 || currentSlide != slideId) {
		currentSlide = slideId;
	} 	
};

function updateURL (slideId) {
	if(document.location.hash !== '#slide-' + slideId) {
		document.location.hash = '#slide-' + slideId;
	}
}

/* Update the URL when the next slide is going to be shown 
myLooper.on('show', function (e) {
	
	if(document.location.hash !== e.relatedTarget.id) {
		document.location.hash = e.relatedTarget.id;	
	}
});

/* Stop the looping once last slide is reached - like a proper slide show. 
myLooper.on('shown', function (e) {    	
	var $slide = $(e.relatedTarget);
    if ($slide.hasClass('last-item')) {   
    	$slide.parent().parent().addClass('last-item-parent');    
    }
}); */

/* Wufoo form set up */
var zohx3rg069j5eu;(function(d, t) {
var s = d.createElement(t), options = {
'userName':'learntosearch', 
'formHash':'zohx3rg069j5eu', 
'autoResize':true,
'height':'260',
'async':true,
'host':'wufoo.com',
'header':'show', 
'ssl':true};
s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
try { zohx3rg069j5eu = new WufooForm();zohx3rg069j5eu.initialize(options);zohx3rg069j5eu.display(); } catch (e) {}};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');


/* Show the wufoo form */
$('#js-teach-button').click(function(e) {
	wufooContainer.addClass('show-container');
	e.stopPropagation();
});

/* Dont hide the form when form modal is shown */
wufooContainer.click(function(e) {
	e.stopPropagation();
});

/* Clicking outside of wufoo container will hide the form */
$('html').click(function() {
	if(wufooContainer.hasClass('show-container')) {
		wufooContainer.removeClass('show-container');
	}
});