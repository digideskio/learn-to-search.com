var $slides = $('section.item');
var myLooper = $('#controlLooper');
var wufooContainer = $('#wufoo-zohx3rg069j5eu');
var hash = document.location.hash;


/* Assign IDs to each slide */
$slides.each(function(index) {
	var slide = $(this);
	this.id = 'js-slide|' + index; 
});


/* Show the correct element if URL refers to it */
if (hash != '') {
	/* Because looper slides start with 1 and not 0 like every respectable web element should */
	var slideIndex = +(/^#js-slide\|(.+)/g.exec(hash)[1]) + 1;
	myLooper.looper('to', slideIndex);
}


/* Start the slide show */
myLooper.looper('loop');


/* Update the URL when the next slide is going to be shown */
myLooper.on('show', function (e) {
	/* Check if the slide is being referred */
	if(document.location.hash !== e.relatedTarget.id) {
		document.location.hash = e.relatedTarget.id;	
	}
});

/* Stop the looping once last slide is reached - like a proper slide show. */
myLooper.on('shown', function (e) {    	
    if ($(e.relatedTarget).hasClass('last-item')) {   
        myLooper.looper('pause');
        myLooper.data('looperjs').options.interval = false;
    }
});

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