var MenuItems = document.getElementById("MenuItems");

            MenuItems.style.maxHeight = "0px";

            function menutoggle(){
                if(MenuItems.style.maxHeight == "0px")
                {
                    MenuItems.style.maxHeight = "200px"
                }
                else
                {
                    MenuItems.style.maxHeight = "0px"
                }
            }

            



var ProductImg = document.getElementById("ProductImg");
var smallimg = document.getElementsByClassName("small-img");
smallimg[0].onclick = function(){
    ProductImg.src = smallimg[0].src;
    }
smallimg[1].onclick = function(){
    ProductImg.src = smallimg[1].src;
    }
smallimg[2].onclick = function(){
    ProductImg.src = smallimg[2].src;
    }
smallimg[3].onclick = function(){
    ProductImg.src = smallimg[3].src;
    }