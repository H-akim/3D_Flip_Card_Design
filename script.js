var product_box = document.getElementById("product_box");
var front_img = document.getElementById("front_img");
var back_img = document.getElementById("back_img");


var flipright = document.getElementById("flip_right").addEventListener("click", ()=>{
    product_box.style.transform = "rotateY(180deg)";
    front_img.style.left = "650px";
    back_img.style.left = "20px";
    front_img.style.transform = "rotate(-30deg)";
    back_img.style.transform = "rotate(0deg)";
})
var flipleft = document.getElementById("flip_left").addEventListener("click", ()=>{
    product_box.style.transform = "rotateY(0deg)";
    front_img.style.left = "20px";
    back_img.style.left = "-650px";
    front_img.style.transform = "rotate(0deg)";
    back_img.style.transform = "rotate(-30deg)";
})