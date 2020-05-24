import {Injectable} from '@angular/core'
@Injectable({providedIn:'root'})

export class TimeOutService {
    getHourCountDown(){
        var d1 = new Date ();
        var d2 = new Date ( d1 );
  
            var countDownDate:any = d2.setMinutes (d1.getMinutes() + 480)
            var id = "hour"
    
        // Update the count down every 1 second
        var x = setInterval(function() {
        
          // Get today's date and time
          var now = new Date().getTime();
            
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
            
          // Time calculations for days, hours, minutes and seconds
         
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
          // Output the result in an element with id="demo"
          document.getElementById("hour").innerHTML =  hours + ":"
          + minutes + ":" + seconds ;
            
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("hour").innerHTML = "EXPIRED";
          }
        }, 1000);
        
          }

          getMinuteCountDown(){
            var d1 = new Date ();
            var d2 = new Date ( d1 );
      
                var countDownDate:any = d2.setMinutes (d1.getMinutes() + 20)
                var id = "minute"
        
            // Update the count down every 1 second
            var x = setInterval(function() {
            
              // Get today's date and time
              var now = new Date().getTime();
                
              // Find the distance between now and the count down date
              var distance = countDownDate - now;
                
              // Time calculations for days, hours, minutes and seconds
             
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
              // Output the result in an element with id="demo"
              document.getElementById("minute").innerHTML =  hours + ":"
              + minutes + ":" + seconds ;
                
              // If the count down is over, write some text 
              if (distance < 0) {
                clearInterval(x);
                document.getElementById("minute").innerHTML = "EXPIRED";
              }
            }, 1000);
            
              }
              
}