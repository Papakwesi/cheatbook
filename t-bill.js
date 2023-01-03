// nav

$('<form action="#"><select /></form>').appendTo("#nav");
$("<option />",{selected:"selected",value:"",text:"MENU"}).appendTo("#nav select");
$("#nav a").each(function(){var e=$(this);
if($(e).parents("ul ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"> > "+e.text()}).appendTo("#nav select")}
	else if($(e).parents("ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#nav select")}
		else if($(e).parents("ul").length>=1){$("<option />",{value:e.attr("href"),text:"|| "+e.text()+" ||"}).appendTo("#nav select")}
			else{$("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#nav select")}});
$("#nav select").change(function(){if($(this).find("option:selected").val()!=="#"){window.location=$(this).find("option:selected").val()}})


// calculation
document.querySelector(".submit").addEventListener("click", function() {

	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var time = document.getElementById("time").value;
	var interest = principal*(rate/100)*(time/364)

	var results = parseInt(principal) + parseInt(interest)

	document.getElementById("myresults").innerHTML = "Interest = " + interest + " || Results = " + results;
})
