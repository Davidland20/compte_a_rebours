
function countDown () { 

var date_de_fin = new Date ("Jul 11, 2018 23:25:30").getTime();


    var date_actuelle = new Date().getTime();
    
    var bigevent = (date_de_fin - date_actuelle);
   
    
    var days = Math.floor(bigevent / (1000 * 60 * 60 * 24));
    var hours = Math.floor((bigevent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((bigevent % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((bigevent % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(countDown, 1000)


    






























