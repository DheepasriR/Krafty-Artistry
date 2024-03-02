$(document).ready(function () {
  const navbarHeightPrimary = $(".navbar").outerHeight();
  const navbarHeightSec = $(".navbar-secondary").outerHeight();
  // slick function parameters definition
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
  });

  // OnClick product categories in secondary navbar autoscroll functionality
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      var offset_nav = target.offset().top - (navbarHeightPrimary + navbarHeightSec);
        if (offset_nav < $(window).scrollTop()) {
          offset_nav -= navbarHeightPrimary + navbarHeightSec;
        }
        $("html, body").animate(
          {
            scrollTop: offset_nav
          },
          800
        ); 
    }
  });

  // search button click functionality
  $("#searchButton").on("click", function() {
    var searchTerm = $("#search-bar").val();
    console.log(searchTerm);
    searchAndHighlight(searchTerm);
  });

  // highlighting text on search functionality implementation
  function searchAndHighlight(searchTerm) {
    if (searchTerm) {
      var paragraphs = $(".product-name");
      var firstHighlightedParagraph = null;
      paragraphs.each(function() {
        var paragraph = $(this);
        var text = paragraph.text();
        
        var regex = new RegExp(searchTerm, "gi"); 
        var match = text.match(regex);
        console.log(match)

        if (match) {
          var highlightedText = text.replace(regex, function(match) {
            return '<span class="highlight">' + match + '</span>';
          });
          paragraph.html(highlightedText);
          if (!firstHighlightedParagraph) {
            firstHighlightedParagraph = paragraph;
          }
        } else {
          paragraph.html(text);
        }
      });
    
    if (firstHighlightedParagraph) {
        var offset = firstHighlightedParagraph.offset().top - (navbarHeightPrimary + navbarHeightSec);
        if (offset < $(window).scrollTop()) {
          offset -= navbarHeightPrimary + navbarHeightSec;
        }
        $("html, body").animate(
          {
            scrollTop: offset
          },
          800
        );
          }
        } else {
          $(".product-name").html(function(index, text) {
            return text;
          });
        }
  }

  

  
});