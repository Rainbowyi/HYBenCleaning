(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Dropdown on mouse hover
  // $(document).ready(function () {
  //     function toggleNavbarMethod() {
  //         if ($(window).width() > 992) {
  //             $('.navbar .dropdown').on('mouseover', function () {
  //                 $('.dropdown-toggle', this).trigger('click');
  //             }).on('mouseout', function () {
  //                 $('.dropdown-toggle', this).trigger('click').blur();
  //             });
  //         } else {
  //             $('.navbar .dropdown').off('mouseover').off('mouseout');
  //         }
  //     }
  //     toggleNavbarMethod();
  //     $(window).resize(toggleNavbarMethod);
  // });

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // add event listener for the submit button
  // 1. read value from the input box
  // 2. Add validation for each value (
  // 3. call email js with those value
  emailjs.init("Cz-O_QhzJOkSTsSHq");
  $("#form-quote").submit(function (e) {
    e.preventDefault()

    //get each field and check
    var errorCount = 0;
    //get name
    var customerName = $('#txt-name').val();
    if(customerName == '') {
      $('#txt-name').addClass('is-invalid');
      $('#txt-name').focus()
      errorCount++;
    }
    if(errorCount > 0 ) {
      return;
    }
    emailjs.sendForm("service_ag3bl9w","template_rmq4hor", this)
     .then(() => {
       
       alert('Sent!');
     }, (err) => {
       alert(JSON.stringify(err));
     });
  });
})(jQuery);
