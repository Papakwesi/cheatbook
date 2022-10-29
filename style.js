// nav

$('<form action="#"><select /></form>').appendTo("#nav");
$("<option />",{selected:"selected",value:"",text:"MENU"}).appendTo("#nav select");
$("#nav a").each(function(){var e=$(this);
if($(e).parents("ul ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"> > "+e.text()}).appendTo("#nav select")}
	else if($(e).parents("ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#nav select")}
		else if($(e).parents("ul").length>=1){$("<option />",{value:e.attr("href"),text:"|| "+e.text()+" ||"}).appendTo("#nav select")}
			else{$("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#nav select")}});
$("#nav select").change(function(){if($(this).find("option:selected").val()!=="#"){window.location=$(this).find("option:selected").val()}})


// update

function DisplayAlert() {
  var newLine = "\r\n"
  var msg = "Staff contacts (Reg.mgrs Clus.Mgrs BMs) updated"
  msg += newLine;
  msg += "Find at: cheatbook >> contacts >> BMs";
  msg += newLine;
  alert(msg);
}
