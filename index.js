let home = 0;
let guest = 0;
function inc(score,team){
    if(team === 'home'){
        home += score;
        document.getElementById('home').textContent=home;
    
    }
    else{
        guest+=score;
        document.getElementById('guest').textContent = guest;

    }
}
function cleart(team){
    if(team === 'home'){
        home = 0;
        document.getElementById('home').textContent = home;
    }
    else{
        guest = 0;
        document.getElementById('guest').textContent = guest;
    }
}