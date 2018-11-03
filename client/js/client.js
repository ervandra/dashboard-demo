'use strict';

var jQvan = jQuery.noConflict();
jQvan(document).ready(function ($) {
  $('body').addClass('ready');
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var $header = $('#header');
  if (scrolled < 80) {
    $header.addClass('scrolled');
  } else {
    $header.removeClass('scrolled');
  }
  $(window).on('scroll', function (e) {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled < 80) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }
  });
  $('.btn-mobile-nav').on('click', function (e) {
    $header.toggleClass('opened');
  });
  $('.mainmenu ul li a').on('click', function (e) {
    if (this.hash !== "") {
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 120
      }, 1000);
    }
  });
  $('.mobilemenu ul li a').on('click', function (e) {
    if (this.hash !== "") {
      $('.mobilemenu ul li').removeClass('active');
      $(this).parent().addClass('active');
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 120
      }, 1000);
    }
  });
  // var $el, leftPos, newWidth,
  //   $mainNav = $(".mainmenu ul");

  // $mainNav.append("<li id='magic-line'></li>");
  // var $magicLine = $("#magic-line");

  // $magicLine
  //   .width($(".mainmenu li a.active").parent().width())
  //   .css("left", $(".mainmenu li a.active").parent().position().left)
  //   .data("origLeft", $magicLine.position().left)
  //   .data("origWidth", $magicLine.width());

  // $(".mainmenu li a").click(function() {
  //   $el = $(this);
  //   leftPos = $el.parent().position().left;
  //   newWidth = $el.parent().width();
  //   $magicLine.stop().animate({
  //     left: leftPos,
  //     width: newWidth
  //   });
  // });

  // date picker
});