




function expand_menu() {

console.log("test");

$('.header-menu__lines').toggleClass("header-menu__lines-rotate");

$('.hidden-menu').toggleClass("hidden-menu__show");

}

function answerClicked(n) {

    if($('#input'+n).prop('checked') == false) {
        $('#input'+n).prop('checked',true)
    }

    for(i=1;i<=5;i++) {
        if (i!=n) {
            $('#input'+i).prop('checked',false);
        }
    }
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function resetQuiz() {
	for(i=1;i<=6;i++) {
		for(j=1;j<=5;j++) {
			document.cookie = i + '_' + j + '=0';
		}
	}
}


$(document).ready(function() {

$('.medical-tests').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{enabled:true}
  // other options
});

$('.question-table').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{enabled:true}
  // other options
});
});