describe("Airport class", () => {

  var airport;
  var weather;
  var result;

  var landedPlane = {
    takeOff: () => {},
    isFlying: () => {return false},
    land: () => {}
  }

  var flyingPlane = {
    isFlying: () => { return true; },
    land: () => {}
  };

  beforeEach(() => {
    airport = new Airport();
  });

  describe("#orderTakeOff", () => {

    it("rejects to order take off in stormy weather", () => {
      weather = 'stormy';
      result = airport.orderTakeOff(landedPlane, weather);
      expect(result).toBe(false);
    });

    it("order plane to take off in good weather", () => {
      weather = 'good';
      spyOn(landedPlane, "takeOff");
      airport.orderTakeOff(landedPlane, weather);
      expect(landedPlane.takeOff).toHaveBeenCalled();
    });

    it("check if a specified plane is in airport or not", () => {
      weather = 'good';
      airport.orderLanding(landedPlane, weather);
      result = airport.hasPlane(landedPlane);
      expect(result).toBe(true);
      airport.orderTakeOff(landedPlane, weather);
      result = airport.hasPlane(landedPlane);
      expect(result).toBe(false);
    });

  })

  describe("#orderLanding", () => {

    it("makes a plane land", () => {
      weather = 'good';
      spyOn(flyingPlane, 'land');
      airport.orderLanding(flyingPlane, weather);
      expect(flyingPlane.land).toHaveBeenCalled();
    });

    it("add plane to airport's planelist", () => {
      weather = 'good';
      airport.orderLanding(flyingPlane, weather);
      expect(airport.planeList.length).toEqual(1);
    });

    it("reject to order landing in stormy weather", () => {
      weather = 'stormy';
      result = airport.orderLanding(flyingPlane, weather);
      expect(result).toBe(false);
    });

    it("reject to order landing when airport is full", () => {
      weather = 'good';
      var i;
      for(i = 0; i < 5; i++){
        airport.orderLanding(flyingPlane, weather);
      }

      result = airport.orderLanding(flyingPlane, weather);
      expect(result).toBe(false);
    });

  });




});
