var coolStuff = function (){
  var currentClassName = document.getElementById('cool').className;

  if (currentClassName == 'cool'){
    currentClassName = document.getElementById('cool').className = 'cool red';
  }else{
    currentClassName = document.getElementById('cool').className = 'cool';
  }

}
var car = {
  make: 'VW',
  type: 'Polo',
  color: 'blue',
  isTurnedOn: false,
  numberOfWheel: 4,
  seats: ['seat1','seat2','seat3','seat4'],
  turnOn: function(){
    this.isTurnedOn = true;
  },
  fly: function(){
    alert('fly');
  },
  switchCar: function(isOn) {
    console.log('turn car is '+isOn)
    if (isOn == true) {
      this.isTurnedOn = true;
    }else{
      this.isTurnedOn = false;
    }
  }
};
