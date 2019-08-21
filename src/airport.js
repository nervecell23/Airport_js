function Airport(capacity=5) {
  this.planeList = [];
  this.capacity = capacity;
};

Airport.prototype.orderTakeOff = function(plane, weather) {
  if(weather == 'stormy'){
    return false
  };

  var index = this.planeList.indexOf(plane);
  this.planeList.splice(index, 1);

  plane.takeOff();
};

Airport.prototype.hasPlane = function(plane) {
  return this.planeList.includes(plane);
};


Airport.prototype.orderLanding = function(plane, weather) {
  if(weather == 'stormy'){
    return false;
  };

  if(this.planeList.length == this.capacity){
    return false;
  };

  this.planeList.push(plane);

  plane.land();
};
