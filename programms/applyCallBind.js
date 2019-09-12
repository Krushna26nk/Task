let car = {
    hornMessage: "Beep! Beep!",
    soundHorn : function(){
                  return this.honkMessage;
                }
  };
  let truckHorn = {
    hornMessage: "HOOONNNNKKKKK!"
  };
//   console.log(car.soundHorn()); // "Beep! Beep!"
  console.log(car.soundHorn.call(truckHorn)); // "HOOONNNNKKKKK!"