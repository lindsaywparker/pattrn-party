$('.tab-name').on('click', function() {
  $('.tab-name').removeClass('active-tab');
  $('.tab-content-container').removeClass('active-tab');
  $(this).addClass('active-tab');
  $(this).siblings().addClass('active-tab');
});


$('.menu-button').on('click', function() {
  $('.nav-links-search').toggleClass('open-menu');
})