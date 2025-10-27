$(document).ready(function() {
  console.log("jQuery is ready!");


// Task 4 (Scroll Progress Bar)
$(window).on("scroll", function() {
  let scrollTop = $(window).scrollTop();
  let docHeight = $(document).height() - $(window).height();
  let scrollPercent = (scrollTop / docHeight) * 100;
  $("#scrollBar").css("width", scrollPercent + "%");
});



// Task 5 (Animated Number Counter)
$(window).on("scroll", function() {
  $(".counter").each(function() {
    const $this = $(this);
    const target = +$this.attr("data-target");
    const top = $this.offset().top;
    const bottomOfWindow = $(window).scrollTop() + $(window).height();

    if (bottomOfWindow > top && !$this.hasClass("counted")) {
      $this.addClass("counted");

      $({ countNum: 0 }).animate(
        { countNum: target },
        {
          duration: 2000,
          easing: "swing",
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum.toLocaleString());
          }
        }
      );
    }
  });
});




// Task 1-3 (Searching bar)
  const destinations = [
    "Paris",
    "Maldives",
    "Japan",
    "Egypt",
    "Italy",
    "Peru",
    "Bali",
    "Patagonia"
  ];

  $("#searchInput").on("keyup", function() {
    const value = $(this).val().toLowerCase();
    const regex = new RegExp("(" + value + ")", "gi");

    $("#tourList li").each(function() {
      const text = $(this).text();
      if (text.toLowerCase().includes(value)) {
        $(this).show();

        const highlighted = text.replace(regex, '<span class="highlight">$1</span>');
        $(this).html(highlighted);
      } else {
        $(this).hide();
      }
    });

    $("#suggestions").empty();
    if (value.length > 0) {
      const matches = destinations.filter(dest =>
        dest.toLowerCase().startsWith(value)
      );
      matches.forEach(match => {
        $("#suggestions").append(`<li class="suggestion">${match}</li>`);
      });
    }
  });

  // Click suggestion → fill input
  $(document).on("click", ".suggestion", function() {
    const text = $(this).text();
    $("#searchInput").val(text);
    $("#suggestions").empty();
    $("#searchInput").trigger("keyup"); // re-run filter with selected suggestion
  });

  // Hide suggestions when clicking outside
  $(document).click(function(e) {
    if (!$(e.target).closest(".search-container").length) {
      $("#suggestions").empty();
    }
  });
});



// Task 8: Copy to Clipboard Button
$(document).ready(function() {
  $(".copy-btn").on("click", function() {
    const targetSelector = $(this).data("copy-target");
    const textToCopy = $(targetSelector).text();
    const $button = $(this);

    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalHTML = $button.html();
      $button.html('<i class="fa fa-check"></i> Copied');

      $button.addClass("show-tooltip");

      setTimeout(() => {
        $button.html(originalHTML);
        $button.removeClass("show-tooltip");
      }, 2000);
    });
  });

  $(document).on('copy', function() {
    console.log("Text copied to clipboard!");
  });
});



// Task 6: Loading Spinner on Submit for Register Form
$(document).ready(function() {
  $("#registerForm").on("submit", function(e) {
    e.preventDefault();

    const $button = $("#register-btn");

    $button.prop("disabled", true);
    $button.addClass("loading");
    $button.html('<span class="spinner"></span> Please wait...');

    setTimeout(function() {
      $button.prop("disabled", false);
      $button.removeClass("loading");
      $button.html("Register");

      $("#toast").addClass("show");

      setTimeout(() => $("#toast").removeClass("show"), 3000);

      $("#registerForm")[0].reset();

    }, 2000);
  });
});
