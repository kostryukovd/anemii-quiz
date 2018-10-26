


function expand_menu() {

console.log("test");

$('.header-menu__lines').toggleClass("header-menu__lines-rotate");

$('.hidden-menu').toggleClass("hidden-menu__show");

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