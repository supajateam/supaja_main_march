"use strict";

// initialize
let targetPosition;
let scrollPosition;
let mainHeaderHeight = 60;
let subHeader;

//jQuery Start
$(document).ready(() => {

  // subheader scroll position
  subHeader = $('#sub-header')
  targetPosition = subHeader.offset().top;

  $(window).scroll(() => {
    scrollPosition = $(window).scrollTop()
    
    if (scrollPosition >= targetPosition - mainHeaderHeight) {
      subHeader.addClass('fixed-top top-60')
    } else {
      subHeader.removeClass('fixed-top top-60')
    }

    // bootstrap scrollspy
    if ($('#menu_tab1').hasClass('active')) {
      $('.sec1_tab_ui').css('background-color', 'white');
      $('.sec2_tab_ui').css('background-color', '#EBEBEB');
      $('.sec3_tab_ui').css('background-color', '#EBEBEB');

      $('#menu_tab1').css('color', '#1c3efe');
      $('#menu_tab2').css('color', 'black');
      $('#menu_tab3').css('color', 'black');
    }
    if ($('#menu_tab2').hasClass('active')) {
      $('.sec2_tab_ui').css('background-color', '#f7f7fc');
      $('.sec1_tab_ui').css('background-color', '#EBEBEB');
      $('.sec3_tab_ui').css('background-color', '#EBEBEB');

      $('#menu_tab2').css('color', '#1c3efe');
      $('#menu_tab1').css('color', 'black');
      $('#menu_tab3').css('color', 'black');
    }
    if ($('#menu_tab3').hasClass('active')) {
      $('.sec3_tab_ui').css('background-color', 'white');
      $('.sec1_tab_ui').css('background-color', '#EBEBEB');
      $('.sec2_tab_ui').css('background-color', '#EBEBEB');

      $('#menu_tab3').css('color', '#1c3efe');
      $('#menu_tab2').css('color', 'black');
      $('#menu_tab1').css('color', 'black');
    }
  })

  // step trigger
  $('#step1-btn').on('click', () => {
    // slide control
    $('#step1-slide').addClass('step-active')
    $('#step2-slide').removeClass('step-active')
    $('#step3-slide').removeClass('step-active')

    //btn control
    $('#step1-btn').addClass('text-primary')
    $('#step2-btn').removeClass('text-primary')
    $('#step3-btn').removeClass('text-primary')
  })
  $('#step2-btn').on('click', () => {
    // slide control
    $('#step2-slide').addClass('step-active')
    $('#step1-slide').removeClass('step-active')
    $('#step3-slide').removeClass('step-active')

    //btn control
    $('#step2-btn').addClass('text-primary')
    $('#step1-btn').removeClass('text-primary')
    $('#step3-btn').removeClass('text-primary')
  })
  $('#step3-btn').on('click', () => {
    // slide control
    $('#step3-slide').addClass('step-active')
    $('#step1-slide').removeClass('step-active')
    $('#step2-slide').removeClass('step-active')

    //btn control
    $('#step3-btn').addClass('text-primary')
    $('#step1-btn').removeClass('text-primary')
    $('#step2-btn').removeClass('text-primary')
  })
})
