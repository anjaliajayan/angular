
import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'minute-count',
  template: '<p id=minute></p>',
})
export class MinuteCountComponent implements OnInit {
  // @Input() val: string;
 @Input () val: string;
 ngOnInit(){
  console.log((typeof this.val))
  this.getHourCountDown(this.val)
}
   getHourCountDown(val){
     if(!document.getElementById('minute')){
        return
     }
        var d1 = new Date ();
        var d2 = new Date ( d1 );
  
            var countDownDate:any = d2.setMinutes (d1.getMinutes() + +val)
        
        
    
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

          // console.log(hour )
            
          // Output the result in an element with id="demo"
          document.getElementById('minute').innerHTML =  hours + ":"
          + minutes + ":" + seconds ;
            
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById('minute').innerHTML = "EXPIRED";
          }
        }, 1000);
        
          }
         
}