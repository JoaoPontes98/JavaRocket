var timer1 = null;
var timer2 = null;
var counter1 = 10;
var counter2 = null;

var changeState = function(state){
  document.body.className = 'body-state' + state;
  clearInterval(timer1);
  clearInterval(timer2);
  counter1 = 10;
    document.getElementById('countDown').innerHTML = counter1;

  if (state == 2){
      timer1 = setInterval( function() {
          counter1 = counter1 - 1;
          document.getElementById('countDown').innerHTML = counter1;

          if (counter1 < 0){
            changeState(3);
          }
      }, 200);
    }else if (state == 3){
      timer2 = setTimeout( function() {

        rNumber = Math.round(Math.random()*10);
        console.log('Random Number:' + rNumber);

        if (rNumber > 5){   //Success
          changeState(4);
        }else{              //Failure
          changeState(5);
        }
    }, 2000);
  }
}
