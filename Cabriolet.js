let cabriolet = function(maxSpeed){
    
    let cabrioletCar = auto(maxSpeed);

    publicAPI();

	function publicAPI() {
        cabrioletCar.getMaxSpeed = function() {
            return `Cabriolet maximum speed: ${maxSpeed}`;
        };

        cabrioletCar.raiseRoof = function(){
            return ("Roof is raising...");
        };

        cabrioletCar.collapseRoof = function(){
            return ("Roof is collapsing...");
        };
	}

    return cabrioletCar;
}