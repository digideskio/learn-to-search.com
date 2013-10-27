var $slides = $('section.item');
var myLooper = $('#controlLooper');
var wufooContainer = $('#wufoo-zohx3rg069j5eu');

/* Assign IDs to each slide */
$slides.each(function(index) {
	var slide = $(this);
	this.id = 'js-slide|' + index; 
});

var hash = document.location.hash;

if (hash != '') {
	var slideIndex = +(/^#js-slide\|(.+)/g.exec(hash)[1]) + 1;
	myLooper.looper('to', slideIndex);
}


/* Check if the slide is being referred */

myLooper.looper('loop');


myLooper.on('show', function (e) {
	if(document.location.hash !== e.relatedTarget.id) {
		document.location.hash = e.relatedTarget.id;	
	}
	console.log(e.relatedTarget.id, document.location.hash); 
});

myLooper.on('shown', function (e) {    	
    if ($(e.relatedTarget).hasClass('last-item')) {   
        myLooper.looper('pause');
        myLooper.data('looperjs').options.interval = false;
    }
});

/* Wufoo */
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


$('#js-teach-button').click(function(e) {
	wufooContainer.addClass('show-container');
	e.stopPropagation();
});

wufooContainer.click(function(e) {
	e.stopPropagation();
});

$('html').click(function() {
	if(wufooContainer.hasClass('show-container')) {
		wufooContainer.removeClass('show-container');
	}
});