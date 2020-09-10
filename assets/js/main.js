$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(1000)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});

$(document).on("ready", function () {
  // console.log(window.screen.width);
  // if (window.screen.width < 640) {
  //   $(".regular").slick({
  //     prevArrow: false,
  //     nextArrow: false,
  //     dots: false,
  //     infinite: false,
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //     // variableWidth: true,
  //     vertical: true,
  //   });
  // } else {
  // $(".regular").slick({
  //   prevArrow: false,
  //   nextArrow: false,
  //   dots: false,
  //   infinite: false,
  //   slidesToShow: 5,
  //   slidesToScroll: 2,
  //   variableWidth: true,
  // });
  // }

  // mobile view
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
  } else {
    $(".regular").slick({
      prevArrow: true,
      nextArrow: true,
      dots: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 2,
      variableWidth: true,
    });
  }

  $("#countdown").countdown({
    date: "Sep 10 2020",
    render: function (data) {
      var el = $(this.el);
      el.empty()
        //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
        .append(
          "<div>" +
            this.leadingZeros(data.days, 2) +
            " <span>days &nbsp;</span></div>"
        )
        .append(
          "<div>" +
            this.leadingZeros(data.hours, 2) +
            " <span>hrs &nbsp;</span></div>"
        )
        .append(
          "<div>" +
            this.leadingZeros(data.min, 2) +
            " <span>min &nbsp;</span></div>"
        )
        .append(
          "<div>" +
            this.leadingZeros(data.sec, 2) +
            " <span>sec &nbsp;</span></div>"
        );
    },
  });
});
