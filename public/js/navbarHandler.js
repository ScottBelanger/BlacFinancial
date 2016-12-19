(function ($) {
  $(document).ready(function(){

    $('#navbarSolid').fadeOut();
    $(function () {
        $(window).scroll(function () {
        console.log("working");
            var scroll = $(window).scrollTop();
            
            if (scroll > 600) {
                $('#navbarSolid').fadeIn();
            } else {
                $('#navbarSolid').fadeOut();
            }
        });
    });

});
  }(jQuery));