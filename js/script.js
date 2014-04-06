// Script made for Bao Nguyen's personal page
// By Bao Nguyen
// March 2014

$(document).ready(function(){
  	// Navigation Bar
  	var _contents = $(".content")
  	var _element = $(".navigation-bar li a")
  	$(_element).click(function(){
  		_element.each(function() {
  			if ($(this).hasClass("selected")) {
  				$("#" + $(this).data("target")).fadeOut(300);
  			}	
  		});
  		_element.removeClass("selected");
  		$(this).addClass("selected");	
  		$("#" + $(this).data("target")).delay(300).fadeIn(300);
  	});

    // Photography pictures - FancyBox
    $(".fancybox").fancybox({
      prevEffect    : 'fade',
      nextEffect    : 'fade',
      openEffect : 'fade',
      closeEffect : 'fade',
      helpers: {        
        title: {
          type: 'over'
        }
      }
    });
});