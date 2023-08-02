
function closeBtn(){

    document.getElementById("btnClose").style.display="none";
    document.getElementById("btnOpen").style.display="block";
    document.querySelector(".mobileMenu").style.display="none"
    document.querySelector(".illustration").style.display="block"
    document.body.style.backgroundColor = "transparent";
}
function openBtn(){

    document.getElementById("btnClose").style.display="block";
    document.getElementById("btnOpen").style.display="none";
    document.querySelector(".mobileMenu").style.display="block"
    document.querySelector(".illustration").style.display="none"
    document.body.style.backgroundColor = "#fafafa";
}

