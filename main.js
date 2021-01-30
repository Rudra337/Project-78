function add_item(){
    var htmldata;
    var item=document.getElementById("add_item");
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata= "<section class='cards'>"
    for (var i=0;i<menu_list_array.length;i++) {
        
        htmldata=htmldata+'<div class= "card">' + "<img src='images/pizzaImg.png'/> " + menu_list_array[i] + '</div>'
        
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addmenu").innerHTML = htmldata;
};
menu_list_array = [
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"];

function getmenu() {
    var htmldatas;
    htmldatas="<ol class='mennulist'"
    menu_list_array.sort();
    for (var i=0;i<menu_list_array.length;i++) {
        htmldatas=htmldatas+ '<1i>' + menu_list_array[i] + '</1i>'
        
    }
    htmldatas=htmldatas+ "</ol>"
    document.getElementById("display_menu").innerHTML = htmldatas;
};
console.log(menu_list_array);