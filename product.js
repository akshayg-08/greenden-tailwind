var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menuicon")
menu.addEventListener("click",function(){
  sidenav.style.right=0
})
var closenav = document.getElementById("closenav")
closenav.addEventListener("click",function(){
  sidenav.style.right="-50%"
})

var search = document.getElementById("search")
var productContainer = document.getElementById("product-container")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){

  var enteredValue = event.target.value.toUpperCase()

  for(count=0; count<productlist.length; count=count+1)
  {
     var productname = productlist[count].querySelector("p").textContent

     if(productname.toUpperCase().indexOf(enteredValue)<0)
     {
      productlist[count].style.display="none"
     }
     else{
      productlist[count].style.display="block"
     }
  }
})