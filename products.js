//Selecting side navbar
var sidenav= document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

//Selecting close navbar X
var closenav=document.getElementById("close-nav")

closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})

//Product Search functionality
var productcontainer=document.getElementById("product-container")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredvalue=event.target.value.toUpperCase() 
    for(count=0; count<productlist.length;count++)
    {
        var productname=productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none";
        }
        else{
            productlist[count].style.display="block";
        }
        
    }
})