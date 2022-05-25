// HEADER
$(document).ready(function() {
  $('.menu__icon').click(function(event) {
    $('.menu__icon,.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
  })
});
// HEADER

// ibg 
function ibg(){

  $.each($('.ibg'), function(index, val) {
  if($(this).find('img').length>0){
  $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
  }
  });
  }
  
  ibg();
// ibg 


// add class on scroll 
let scrollpos = window.scrollY

const header = document.getElementById("header")
const scrollChange = 50

const add_class_on_scroll = () => header.classList.add("header-shadow")
const remove_class_on_scroll = () => header.classList.remove("header-shadow")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})
// add class on scroll 

// add class on scroll 
let scrollposm = window.scrollY

const menu = document.getElementById("menu")
const scrollChangem = 50

const add_class_on_scroll_min = () => menu.classList.add("menu-min")
const remove_class_on_scroll_min = () => menu.classList.remove("menu-min")

window.addEventListener('scroll', function() { 
  scrollposm = window.scrollY;

  if (scrollposm >= scrollChangem) { add_class_on_scroll_min() }
  else { remove_class_on_scroll_min() }
  
})
// add class on scroll 


// details 
$(document).ready(function () {
  $(".details__title").click(function (event) {
    if ($(".details").hasClass("one")) {
      $(".details__title").not($(this)).removeClass("active");
      $(".details__text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
// details 


// add class on scroll iQuery
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.back-to-top').addClass('back-to-top-on');
  } else {
     $('.back-to-top').removeClass('back-to-top-on');
  }
});
$(window).scroll(function(){
  if ($(this).scrollTop() > 51) {
     $('.back-to-top').addClass('back-to-top-on-op');
  } else {
     $('.back-to-top').removeClass('back-to-top-on-op');
  }
});
// add class on scroll iQuery