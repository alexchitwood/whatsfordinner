$(function() {
  $('a[href="#search"]').on('click', function(event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
  });
  $('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27 || event.target.className == 'btn btn-primary' || $('#myRecipe').val() == '') {
      $(this).removeClass('open');
    }
  });
  //Do not include! This prevents the form from submitting for DEMO purposes only!
  // $('form').submit(function (event) {
  //     if ($('#myRecipe').val() == '') {
  //         alert('Input can not be left blank');
  //     }
  //     else {
  //         window.location.href = '#!/search';
  //         return true;
  //     }
  // })
});
$(window).scroll(function() {
  $(".bottomTitle").css("opacity", 1 - $(window).scrollTop() / 100);
});