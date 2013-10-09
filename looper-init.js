var myLooper = $('#controlLooper');

myLooper.looper('loop');

myLooper.on('shown', function (e) {    
    if ($(e.relatedTarget).hasClass('last-item')) {   
        myLooper.looper('pause');
        myLooper.data('looperjs').options.interval = false;
    }
});