describe("Airport class", function() {



        describe("#orderTakeOff", function() {

          let airport = new Airport();

          var landedPlane = {
              takeOff: function() {},
              isFlying: function() {
                  return false;
              }
          };

            it("makes a plane take off", function() {

                spyOn(landedPlane, 'takeOff');
                airport.orderTakeOff(landedPlane);
                expect(landedPlane.takeOff).toHaveBeenCalled();

            });

        });

        describe("#orderLanding", function() {

            let airport = new Airport();

            var flyingPlane = {

              takeOff: function() {},
              isFlying: function() {
                return true;
              },
              land: function(){}

            };

            it("makes a plane land", function() {

                spyOn(flyingPlane, 'land');
                airport.orderLanding(flyingPlane);
                expect(flyingPlane.land).toHaveBeenCalled();

            });

        });




    });
