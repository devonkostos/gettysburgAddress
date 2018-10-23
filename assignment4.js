$(document).ready(function() {
	$("#area1").offset({left:500, 
						top:275});
	$("#area2").offset({left:650, 
						top:285});
	$("#area3").offset({left:605, 
						top:355});
	$("#moveUp").offset({left:1025, 
						top:400});
	$("#moveDown").offset({left:1025, 
						   top:425});
	$("#changeText").offset({left:1025, 
							 top:545});
	$("button").css({"font-size": "16px", 
					 "color": "white", 
					 "background-color": "blue"});
	var scrollPos=$("#area3").scrollTop();
	$("#moveDown").click(function() {
		scrollPos=scrollPos+50;
		$("#area3").scrollTop(scrollPos);
	});
	$("#moveUp").click(function() {
		scrollPos=scrollPos-50;
		$("#area3").scrollTop(scrollPos);
	});
	$("#changeText").click(function() {
		$("#area3").toggleClass("newFont");
	});
});