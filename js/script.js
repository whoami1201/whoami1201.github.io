$(document).ready(function() {
	$("#content-wrapper > div").each(function(e){
		if (e!=0) {
			$(this).hide();
		}
	})
	$("#up-nav").click(function(){
		if ($("#content-wrapper > div:visible").prev().length != 0)
            $("#content-wrapper > div:visible").fadeOut(function(){
                $(this).prev().fadeIn();
            });
        return false;
    })
	$("#down-nav").click(function(){
		if ($("#content-wrapper > div:visible").next().length != 0)
            $("#content-wrapper > div:visible").fadeOut(function(){
                $(this).next().fadeIn();
            });
        return false;
    })
});