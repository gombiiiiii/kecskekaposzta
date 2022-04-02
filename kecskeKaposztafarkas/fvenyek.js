window.addEventListener("load",init);

var tomb =[];
var tomb2 =[1,2,3];

function init() {
    var szoveg = ujfgv();
    console.log(szoveg);

    var szoveg2= function () {
        return "haliho";
    }
    console.log(szoveg2);// ez egy fuggveny
    console.log(szoveg2());//igy a függvényt meghíjuk és az eredményét iratjuk ki

    var kepTomb = document.querySelectorAll("#bal>p>img");
    //ez itt egy callback fgv 
    kepTomb[0].addEventListener("click",function(){ //egyetlen egyszer fut le, amikor meghívjuk , nem foglal felslegesen memóriát
        console.log(event.target.src);
        tomb.push(event.target.src)


    }); 


    //ez itt egy nyílfügvény
    var fgv3 =(nev) =>{
        return "halihó" + nev;

    };
    console.log(fgv3("Jakab"));



    //írjuk ki a tömb elemeit 
    for (let i = 0; i < array.length; i++) {
        console.log(tomb2[i]);        
    }

    //ez itt a forciklust helyettesíti, ezt írhatjuk nyílfüggvénnyel is
    tomb2.forEach(function(elem,index){
        console.log(elem+" "+index);
    });

}



function ujfgv(){
    return "hello";

}