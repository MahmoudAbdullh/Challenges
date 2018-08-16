
function timer(userIn) {
    if(userIn){
      $('h1').text('Timer Start');
      $('p').text('');
      $('#btn1').hide();
      $('#btn2').show();
      let counter = 0;
      let minIn = Math.floor(userIn * 60);
  
        //nf[number Format]
        function nf(time){
          if(time < 10){
            return `0${time}`;
          }else{
            return time;
          }
        }
  
  
        function convTime(min){
          if(min < 0){
            //clear
            $('h1').text('time Out');
            clearInterval(x);
            $('#btn1').show();
            $('#btn2').hide();
          }else{
            let hour = Math.floor(min / 60);
            let minutes  = min % 60;
            $('h2').text( nf(hour) + " : " + nf(minutes));
          }
          
        }
  
  
      function timeIt() {
        convTime(minIn - counter);
        counter++;
      }
      var x= setInterval(timeIt,1000);
      //Stop and start new timer
      function stop() { 
        counter = 0;
        minIn = 0;
          $('h1').text('timer');
          clearInterval(x);
          $('#btn1').show();
          $('#btn2').hide();
       }
       $('#btn2').click(function (e) {
        stop();
      });
    }else{
      $('p').text('please enter number of minutes');
    }
  }
  
  
  $('#btn1').click(function (e) {
    timer($('input').val());
    
});
  
// Another Higher Order functions 
function Timer(min) {
  this.counter = 0;
  this.minIn = Math.floor(min * 60);
}

//number format[nf] display time as [00:00];
Timer.prototype.nf = function (time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}

//check end of counter and return counter stamp
Timer.prototype.convertTime = function (min) {

  if (min < 0) {
    //clearInterval if timer is end 
    clearInterval(this.startTimer);
  } else {
    let hour = Math.floor(min / 60);
    let minutes = min % 60;
    return this.nf(hour) + " : " + this.nf(minutes);
  }
}
// this function will count down 
Timer.prototype.timeIt = function () {
  if (this.minIn) {
    this.counter++;
    return this.convertTime(this.minIn - this.counter);
  } else {
    this.stopTimer;
    return "please Enter valid minutes";
  }
}
//Start timeit function
/*
Timer.prototype.startTimer = function () {
  setInterval(function () {
    //user youre output Methode include follwing line => ex.[$(selector).text(instance.timeIt());]
    instance.timeIt();
  }, 1000);
}
//stop timer at any time
Timer.prototype.stopTimer = function () {
  clearInterval(this.startTimer());
}
//start work with html
// to be global variable
let instance = new Timer(5);
//begine
instance.startTimer();

*/