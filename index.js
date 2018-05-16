
<script type="text/javascript">
   
    function countdown(){

    var compte_a_rebours = document.getElementById("compte_a_rebours");
   
    var now = new Date();
    var eventDate = new Date(2018, 06, 11);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

     var remTime = eventTime = currentTime;
     
     var s = Math.floor(remTime / 1000);
     var m = Math.floor(s / 60);
     var h = Math.floor(m / 60);
     var d = Math.floor(d / 24);

     h %= 24;
     m %= 60;
     s %= 60;


     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : h;
     s = (s < 10) ? "0" + s : h;


     document.getElementById("days"). textContent = j;
     document.getElementById("days") innertext = j;



     document.getElementById("hours"). textContent = h;
     document.getElementById("minutes"). textContent = m;
     document.getElementById("seconds"). textContent = s;

    
    
     setTimeout(countdown, 1000);
     

     }
     compte_a_rebours();
     </script>






























</script>