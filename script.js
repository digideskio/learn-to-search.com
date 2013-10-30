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

if(Modernizr.flexbox || Modernizr.flexboxlegacy) {
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
} else {
	$slides.addClass('active');
}

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
    $('#wufooFormzohx3rg069j5eu').height('260px');
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