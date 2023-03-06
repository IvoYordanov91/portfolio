$(document).ready(main);
var width = $(window).width();
function main() {
    $('.header_menu').click(function(){
        $('nav').toggle();
    });
}
