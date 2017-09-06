let auto = function(maxSpeed){

    let car = {}, 
    _speed = 0,
    _isEngineOn = true;

    publicAPI();

    let licenseCategory = 'B';
    let insuranceYear = '2015';

    function getRequiredLicenseCategory(){
        return `Required license category: ${licenseCategory}`;
    };

    car.getRequiredInsuranceInfo = function(){
        return `Insurance year must not be older than: ${insuranceYear}`;
    };

    function publicAPI(){


        Object.assign(car, {
			getSpeed: function(){
                return `Speed of the auto: ${_speed}`;
            },

            setSpeed: function(speed){
                _speed = speed;

                return this;
            },

            getMaxSpeed: function(){
                return `Maximum speed of the auto: ${maxSpeed}`;
            },

            isEngineOn: function(){
                if(_speed > 100){
                    return true;
                }
                
                return false;
            },

            displayLicenseCategory: function(){
                return getRequiredLicenseCategory();
            }
		});
    }

    return car;
}