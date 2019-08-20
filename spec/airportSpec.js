describe("Airport", function() {
    
    var airport = new Airport();
    
        beforeEach(function() {
    
            landedPlane = {
                takeOff: function() {},
                isFlying: function() {
                    return false;
                }
            };
        });
    
    
        describe("#orderTakeOff", function() {
    
            it("makes a plane take off", function() {
    
                spyOn(landedPlane, 'takeOff');
                airport.orderTakeOff(landedPlane);
                expect(landedPlane.takeOff).toHaveBeenCalled();
    
            });
            
        });
    
    });