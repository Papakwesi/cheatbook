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
  var msg = "Cheatbook updated with Investment Calculator";
  msg += newLine;
  msg += "Find at: cheatbook/Investment Calculator";
  msg += newLine;
  msg += newLine;
  msg += "LOAN REPRICING FAQ's added to the loan section of the cheatbook";
  msg += newLine;
  msg += "Find at: cheatbook/pages/loans/loan repricing FAQ's";
  msg += newLine;
  msg += newLine;
  msg += "Search must be in lower case";
  msg += newLine;
  msg += newLine 
  alert(msg);
}

// search

// document.querySelector("#submit").addEventListener("click", function() {
//   var searchId = document.getElementById("search-link")
//   var searchValue = document.getElementById("search-link").innerHTML;
//   var searchLink =  document.getElementById("search-link").getAttribute("href")
//   var inputValue = document.getElementById("myInput").value; 

//     if (searchValue.includes(inputValue)) {
//       open(searchLink)
//     } else {
//       alert(inputValue + " cannot be found")
//     }
  
// })



document.querySelector("#submit").addEventListener("click", function() {
  var inputValue = document.getElementById("myInput").value; 
  var url = "https://papakwesi.github.io/cheatbook/"

  switch(inputValue){
    case "t-bill":
        window.open(url +"t-bill.html")
        break;
    case "bm":
        window.open(url +"pages/contacts/BM.pdf","_self")
        break;
    case "bom":
        window.open(url +"pages/contacts/BOM.pdf")
        break;
    case "cso":
        window.open(url +"pages/contacts/CSO.pdf")
        break;
    case "tariff guide":
        window.open(url +"pages/tarrif-guide/tariff.pdf")
        break;
    case "ach":
        window.open(url +"pages/tarrif-guide/ACH.pdf")
        break;
    case "card":
        window.open(url +"pages/tarrif-guide/cards.pdf")
        break;
    case "card limit":
        window.open(url +"pages/tarrif-guide/card limit.jpg")
        break;
    case "cheque":
        window.open(url +"pages/tarrif-guide/cheque-book.pdf.pdf")
        break;
    case "e-xperience bundle":
        window.open(url +"pages/tarrif-guide/e-xperience.pdf")
        break;
    case "international tade":
        window.open(url +"pages/tarrif-guide/ITP.pdf")
        break;
    case "payment order":
        window.open(url +"pages/tarrif-guide/PO.pdf")
        break;
    case "transaction fees":
        window.open(url +"pages/tarrif-guide/other-transaction.pdf")
        break;
    case "account requirement":
        window.open(url +"pages/products/acc-opening-req.pdf")
        break;
    case "current account":
        window.open(url +"pages/products/current.pdf")
        break;
    case "savings account":
        window.open(url +"pages/products/savings.pdf")
        break;
    case "hybrid account":
        window.open(url +"pages/products/hybrid.pdf")
        break;
    case "investment account":
        window.open(url +"pages/products/investment.pdf")
        break;
    case "controller loan":
        window.open(url +"pages/products/controller.pdf")
        break;
    case "solo smart loan":
        window.open(url +"pages/products/solo-smart.jpg")
        break;
    case "vodafone overdraft loan":
        window.open(url +"pages/products/voda-overdraft.pdf")
        break;
    case "vodafone readycash loan":
        window.open(url +"pages/products/voda-readyloan.pdf")
        break;
    case "loan repricing":
        window.open(url +"pages/repricing.pdf")
        break;
    case "persa loan":
        window.open(url +"pages/products/loans.pdf")
        break;
    case "dreamlife loan":
        window.open(url +"pages/products/loans.pdf")
        break;
    case "Scheme loan":
        window.open(url +"pages/products/loans.pdf")
        break;
    case "app signup":
        window.open(url +"pages/cbg-app.pdf")
        break;
    case "ussd signup":
        window.open(url +"pages/ussd-signup.pdf")
        break;
    case "*924# signup":
        window.open(url +"pages/ussd-signup.pdf")
        break;
    case "remittance":
        window.open(url +"pages/remittance.png")
        break;
    case "daily bank rates":
        window.open("https://cbg.com.gh/rates.html")
        break;
    case "saturday banking":
        window.open(url +"pages/sat-bank.jpg")
        break;
    case "standard settlement instruction":
        window.open(url +"pages/SSI.pdf")
        break;
    case "tertiary institutions":
        window.open(url +"pages/sch-forms.pdf")
        break;
    case "vendor list":
        window.open(url +"pages/vendor.pdf")
        break;
    case "sortcode":
        window.open(url +"pages/sortcode.pdf")
        break;
    case "BM":
        window.open(url +"pages/contacts/BM.pdf")
        break;
    case "BM":
        window.open(url +"pages/contacts/BM.pdf")
        break;
    case "BM":
        window.open(url +"pages/contacts/BM.pdf")
        break;
    case "BM":
        window.open(url +"pages/contacts/BM.pdf")
        break;
    case "BM":
        window.open(url +"pages/contacts/BM.pdf")
        break;
    case "BM":
        window.open(url +"pages/contacts/BM.pdf")
        break;
    case "BM":
        window.open(url +"pages/contacts/BM.pdf")
        break;
    case "BM":
        window.open(url +"pages/contacts/BM.pdf")
        break;
    default:
    alert(inputValue + " cannot be found");
  }
})