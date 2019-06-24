$(document).ready(function(){
    
     $("#loading").show();
     $("#rem").hide();
     $("body").css("background-image","");

});

$(document).ready(function(){
//    $("#skipbutton").click(function(){
    
//      $("#loading").hide();
//      $("#rem").show();
//      $("body").css("background-image","url(images/smartcity.jpeg)");
// });
});
$(window).on('load', function() { 
    // $("#loading").hide();
    $('#loading').fadeOut('slow');
     $("#rem").show();


});
$(document).ready(function(){
$('.navbar-nav .nav-link').click(function(){
	console.log($('.navbar-nav .nav-link'));
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
});

});
document.querySelectorAll('.dropdown.nav-item').forEach(el => {
	el.addEventListener('mouseleave', async() => {
          await el.querySelector('.dropdown-menu.show')
          await el.classList.remove('show')

	});
});