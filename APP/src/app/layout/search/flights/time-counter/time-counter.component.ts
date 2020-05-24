import { Component, Input ,OnInit} from '@angular/core';

@Component({
  selector: 'count-down',
  template: '<p id=time></p>',
})
export class TimerComponent implements OnInit {
  // @Input() val: string;
 @Input () val: any;

ngOnInit(){
  console.log((typeof this.val))
  this.getHourCountDown(this.val * 60)
}
   getHourCountDown(val){
    if(!document.getElementById('time')){
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
          document.getElementById('time').innerHTML =  hours + ":"
          + minutes + ":" + seconds ;
            
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById('time').innerHTML = "EXPIRED";
          }
        }, 1000);
        
          }
         
}