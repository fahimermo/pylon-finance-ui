$(document).on("ready", function () {
  $(".regular").slick({
    prevArrow: false,
    nextArrow: false,
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  });

  $("#countdown").countdown({
    date: "Sep 11 2020",
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
