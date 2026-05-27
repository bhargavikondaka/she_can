let joinUsButton=document.getElementById("joinUsButton");
let contactSection=document.getElementById("contact");
joinUsButton.addEventListener("click",function(){
    joinUsButton.href="#contact";
    contactSection.scrollIntoView({ behavior: "smooth" });
});