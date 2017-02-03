$('.search').on('focus', function () {
  $(this).parents('.menu').addClass('active')
})

$('.search').on('blur', function () {
  $(this)
    .val('')
    .parents('.menu').removeClass('active')
})

function hideArrows () {
  let isOpen = $('.plus.root').hasClass('active')
  let arrows = $('.slick-arrow')
  isOpen ? arrows.addClass('hidden') : arrows.removeClass('hidden')
}

$('.side-nav .category').on('click', function () {
  let target = $(this).attr('data-target')

  $(this).toggleClass('active')
  $('#' + target).slideToggle(300, 'swing')
  $('#plus-' + target).toggleClass('active')

  hideArrows()
})

$('#menu').on('click', function () {
  $('.off-canvas-menu').addClass('active')
  $('.mask').addClass('active')
})

$('.mask, .gly-close').on('click', function () {
  $('.off-canvas-menu, .off-canvas-search').removeClass('active')
  $('.mask').removeClass('active')
})

$('#search').on('click', function () {
  $('.off-canvas-search input').val('').focus()
  $('.off-canvas-search').addClass('active')
  $('.mask').addClass('active')
})

// SLIDER
// --------------------------------
let options = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  speed: 700
}

function loadSlider () {
  let windowWidth = $(window).width()

  if (windowWidth > 600) {
    $(document).ready(function () {
      $('.slider').slick(options)
    })
  } else {
    options.fade = false
    $('.slider').slick(options)
  }
}

$(document).ready(() => {
  loadSlider()
})

