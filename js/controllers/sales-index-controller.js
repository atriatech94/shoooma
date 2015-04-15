angular.module('shoooma')
.controller('SalesIndexController', function($scope,$rootScope,$filter) {
    var times = [] ;
    
	for(i=0;i<28;i++)
	{
            if(i==0)
            {
                times.push( {
                    "l" : "امروز",
                    "d" : moment().subtract(i, 'days' ).format('YYYY-MM-DD'),
                    });
                }else if(i==1){
                    times.push( {
                         "l" : "دیروز",
                        "d" :  moment().subtract(i, 'days' ).format('YYYY-MM-DD'),
                    });

                }else{

                   times.push( {
                         "l" :  moment().subtract(i, 'days' ).format(' jD  jMMMM'),
                        "d" :  moment().subtract(i, 'days' ).format('YYYY-MM-DD'),
                    });
                }
}
    
    $scope.times = times;

    var days3 = moment().subtract(3, 'days').valueOf() ;    
    $scope.rent = $rootScope.sale;
    $scope.rent.forEach(function(rent) {
                    
                    var d = new Date(rent.date);
                    
                    if( days3 < (d.valueOf()) )
                    {
                       
                        rent.dates =    moment(d.valueOf()).startOf('day').fromNow();
                    }
                    else{
                        
                         rent.dates =    moment(d.valueOf()).format(' jD  jMMMM ');
                    }
                      
                  
                });
            
    $scope.rent1 =  $scope.rent;

       $scope.prformSearch = function(searchText) {
          if(searchText == 1)
          {
              $scope.rent1 =  $scope.rent;
              $scope.tab =1;
               return   $scope.rent1;
              
              
          }
          
          $scope.rent1 = $filter('filter')($scope.rent, {date:searchText});
           $scope.tab = searchText;
                    return   $scope.rent1;
               
        }  

      

})
.directive('swSwipe', function (){
		return {
			link: function($scope) {
                    swiper2 = new Swiper('.swiper1',{
					 pagination: '.swiper-pagination',
       				 slidesPerView: 'auto',
                      followFinger : false,
				});
			},//end link
			templateUrl : "pages/sales/sw-swipe.html"
		}
});

