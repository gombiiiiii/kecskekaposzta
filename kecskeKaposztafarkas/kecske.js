window.addEventListener("load",init);

function init(){
    //console.log("Hahó")
    var pElem = document.querySelectorAll("footer p")[0]; // rövidítés , 
    var h1Elem = document.querySelectorAll("header h1")[0]; // rövidítés , 
    pElem.innerHTML="Gombos Adrián"; // elem tartalmámnak megv.
    pElem.style.textAlign="center";
    h1Elem.style.textAlign="center";
    pElem.style.fontSize="20px";
    pElem.style.backgroundColor="lightBlue";

    var kepTomb =document.querySelectorAll("#bal>p>img");
    //console.log(kepTomb);

    for (let i = 0; i < kepTomb.length; i++) {
        
        kepTomb[i].addEventListener("click",kattintas)
        kepTomb[i].addEventListener("mouseover",folevisz)
        kepTomb[i].addEventListener("mouseout",levisz)
    }
    
}
var tomb=[];


function kattintas(){
    
    tomb.push(event.target.src);
    if ((tomb.length) < 2) { //csak egy lehet a csónakban
        
    
    console.log(tomb);
    event.target.removeEventListener("click",kattintas);
    event.target.style.display="none";
    
    var aktkep="<img src='"+event.target.src+"' alt=''>";
    document.querySelectorAll("#csonak")[0].innerHTML+=aktkep;

    var uccso= document.querySelectorAll("#csonak img").length;

}

    
    for (let i = 0; i < uccso; i++) {
        
        document.querySelectorAll("#csonak img")[i].addEventListener("mouseover",folevisz);
        document.querySelectorAll("#csonak img")[i].addEventListener("mouseout",levisz);
        
    }

    

    
}

function folevisz(){
    //event.target.className="kiemel";
    event.target.classList.add("kiemel");
}

function levisz(){
    event.target.classList.remove("kiemel");

}