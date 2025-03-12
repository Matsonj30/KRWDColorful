function burgerMenu(scrollDiv = false){
    var checkbox = document.getElementById("hamburgerCheckbox");
    var menu = document.getElementById("menu");
    var burgerMenu = document.getElementsByClassName("hamburgerMenu");

    if(checkbox.checked == true){
        menu.style.transform = "none";
        burgerMenu[0].style.position = "fixed";
    }
    else{
        menu.style.transform = "translate(100%)";
        burgerMenu[0].style.position = "absolute";
    }
    if(scrollDiv == true){
        menu.style.transform = "translate(100%)";
        burgerMenu[0].style.position = "absolute";
        checkbox.checked = false;
    }
}

function scrollToDiv(location, pageURL = null){

    if(pageURL == null){
        document.getElementById(location).scrollIntoView({behavior: "smooth", block: "center"});
    } //On correct page
    else{
        window.location.href = '/' + '#' + location;
       // document.getElementById(location).scrollIntoView({behavior: "smooth", block: "center"});
    }
    burgerMenu(true)
}