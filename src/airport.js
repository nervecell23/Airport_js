function Airport() {};
//
//   this.orderLanding:  function(plane){
//     plane.land();
//   },
//
//   this.orderTakeoff:  function(plane){
//     plane.takeoff();
//   }
//
//
// };


Airport.prototype.orderLanding = function(plane){plane.land();};
Airport.prototype.orderTakeOff = function(plane){plane.takeOff();};
