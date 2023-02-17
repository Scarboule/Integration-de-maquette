const burger = document.getElementById("nav-menu");
const profil = document.getElementById("profil-menu");
const nav = document.getElementById("nav");
const rightBar = document.getElementById("right-bar");
const main = document.getElementById("main-content");
const close = document.getElementById("profil-close");


addEventListener("resize", (event) => {
    if(window.innerWidth >= 1400){
        nav.style ="";
        rightBar.style ="";
        main.style ="";
    }
});


function clickhandler(element){
    if(element.style.display === 'flex'){
        element.style.display = 'none';
        main.style = "";
        if(element == rightBar){
            profil.style = "";
            burger.style = "";
            close.style ="";
        }
    }else{
        element.style.display = "flex";
        main.style.display = "none";
        if(element == rightBar){
            profil.style.display = "none";
            burger.style.display = "none";
            close.style.display = "flex";
        }
    }
    
}

burger.addEventListener("click", event=> clickhandler(nav));
profil.addEventListener("click", event=> clickhandler(rightBar));
close.addEventListener("click", event => clickhandler(rightBar));