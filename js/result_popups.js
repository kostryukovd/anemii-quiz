




$(document).ready(function() {

/*$('.star-popup').magnificPopup.open({
type:'inline',
midClick:true
});*/


console.log('test');

function rate() {
    if (!$('.star').length) return;

    $('body').on('mousemove', '.star', function() {
        var x = Math.ceil((event.clientX - $(this).offset().left) / 30);
        if (x>0) {
            $('.my', this).css('width', x*30).data('value', x);
        }
    });
    $('.star').hover(function() {
        $(this).removeClass('selected');
    }, function() {
        var my=$('.my', this).data('select');
        if (!my) my=0;
        $('.my', this).css('width', my*30);
    });

    $('.star').click(function() {
        $(this).addClass('selected');
        var my = $('.my', this).data('value');
        $('.my', this).data('select', my);
        var form=$(this).closest('form')
        //form.find('[name="mark"]').val( my );
        form.find('[type="submit"]').removeAttr('disabled');
        form.find('[type="submit"]').removeClass('button-disabled');
    });
}





function open_star_popup() {
if(!rating_sent){

	$.magnificPopup.open({
  items: {
    src: '#star-popup', // can be a HTML string, jQuery object, or CSS selector
    type: 'inline'
  }
});
	rate();}
}

setTimeout(open_star_popup,3000);


$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true //,
  //closeBtnInside:true
});
});