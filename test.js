$(document).ready(function() {
  console.log("jQuery is ready!");

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

  // --- Task 1 & 3: Real-time Filter + Highlight ---
  $("#searchInput").on("keyup", function() {
    const value = $(this).val().toLowerCase();
    const regex = new RegExp("(" + value + ")", "gi");

    // Filter tour list items
    $("#tourList li").each(function() {
      const text = $(this).text();
      if (text.toLowerCase().includes(value)) {
        $(this).show();

        // Highlight matched word
        const highlighted = text.replace(regex, '<span class="highlight">$1</span>');
        $(this).html(highlighted);
      } else {
        $(this).hide();
      }
    });

    // --- Task 2: Autocomplete Suggestions ---
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
