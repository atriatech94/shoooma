var getdata = 0;
angular.module('shoooma')
.controller('IndexController', function($scope,$rootScope,Rent,Sale,Special) {
            if(getdata == 0)
            {
                $rootScope.rent = Rent.query();
				$rootScope.sale = Sale.query();
                $rootScope.special = Special.query();
		
				
                getdata++ ;
            }
        	
        
});

