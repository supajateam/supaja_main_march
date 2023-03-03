//jQuery Start
$(document).ready(() => {

  const subHeader = $('#sub-header')
  let scrollPosition = 0

  // sub-header sticky
  const targetPosition = subHeader.offset().top;

  // sub-header
  const Position2 = $('#sub-header-target2').offset().top;
  const Position3 = $('#sub-header-target3').offset().top;

  const tab1 = $('#sub-header-sec1')
  const tab2 = $('#sub-header-sec2')
  const tab3 = $('#sub-header-sec3')

  const mainHeaderHeight = $('#main-header').outerHeight(true)
  const subHeaderHeight = subHeader.outerHeight(true)
  const allowedExcept = subHeaderHeight * 5/4
  let SumOfHeaders = mainHeaderHeight + subHeaderHeight + allowedExcept

  $(window).scroll(() => {
    scrollPosition = $(window).scrollTop()
    
    if (scrollPosition >= targetPosition - mainHeaderHeight) {
      subHeader.addClass('fixed-top top-60')
    } else {
      subHeader.removeClass('fixed-top top-60')
    }

    if (scrollPosition <= Position2 - (SumOfHeaders + 1)) {
      // sec1 active
      tab1.addClass('sec-active')
      tab2.removeClass('sec-active')
      tab3.removeClass('sec-active')
    } else if (scrollPosition <= Position3 - (SumOfHeaders + 1)) {
      // sec2 active
      tab2.addClass('sec-active')
      tab1.removeClass('sec-active')
      tab3.removeClass('sec-active')
    } else {
      // sec3 active
      tab3.addClass('sec-active')
      tab1.removeClass('sec-active')
      tab2.removeClass('sec-active')
    }
  })

  tab1.on('click', () => {
    $('html, body').animate({scrollTop: targetPosition - mainHeaderHeight}, 1000)
  })
  tab2.on('click', () => {
    $('html, body').animate({scrollTop: Position2 - SumOfHeaders}, 1000)
  })
  tab3.on('click', () => {
    $('html, body').animate({scrollTop: Position3 - SumOfHeaders}, 1000)
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
